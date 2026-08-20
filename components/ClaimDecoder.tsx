"use client";

import { ChangeEvent, DragEvent, FormEvent, useRef, useState } from "react";
import { parseClaimText } from "@/lib/claim-parser";
import { buildReport } from "@/lib/claim-report";

const LEAD_API = "https://roof-quote-decoder.steve-722.workers.dev/api/lead";

type Step = "upload" | "contact" | "report";

type FileMeta = {
  name: string;
  size: number;
};

export function ClaimDecoder() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [step, setStep] = useState<Step>("upload");
  const [file, setFile] = useState<File | null>(null);
  const [fileMeta, setFileMeta] = useState<FileMeta | null>(null);
  const [parsed, setParsed] = useState<any>(null);
  const [status, setStatus] = useState("");
  const [busy, setBusy] = useState(false);
  const [dragging, setDragging] = useState(false);

  function chooseFile(nextFile?: File) {
    if (!nextFile) return;
    if (nextFile.type !== "application/pdf" && !nextFile.name.toLowerCase().endsWith(".pdf")) {
      setStatus("Please choose a PDF file.");
      return;
    }
    if (nextFile.size > 25 * 1024 * 1024) {
      setStatus("That file is too large. Please use the estimate PDF only, under 25 MB.");
      return;
    }
    setFile(nextFile);
    setStatus(`Ready: ${nextFile.name}`);
  }

  function onFileChange(event: ChangeEvent<HTMLInputElement>) {
    chooseFile(event.target.files?.[0]);
  }

  function onDrop(event: DragEvent<HTMLDivElement>) {
    event.preventDefault();
    setDragging(false);
    chooseFile(event.dataTransfer.files?.[0]);
  }

  async function decodeFile() {
    if (!file) return;
    setBusy(true);
    setStatus("Reading your PDF privately in your browser…");
    setFileMeta({ name: file.name, size: file.size });

    try {
      const pdfjsLib = await import("pdfjs-dist");
      pdfjsLib.GlobalWorkerOptions.workerSrc =
        "https://cdn.jsdelivr.net/npm/pdfjs-dist@4.0.379/build/pdf.worker.min.mjs";

      const buffer = await file.arrayBuffer();
      const document = await pdfjsLib.getDocument({ data: new Uint8Array(buffer) }).promise;
      const pageCount = Math.min(document.numPages, 15);
      let fullText = "";

      for (let pageNumber = 1; pageNumber <= pageCount; pageNumber += 1) {
        const page = await document.getPage(pageNumber);
        const content = await page.getTextContent();
        fullText += content.items.map((item: any) => item.str || "").join(" ") + "\n";
      }

      const result: any =
        fullText.trim().length < 100
          ? {
              fields: {},
              lineItemsFound: [],
              missingKeyItems: [],
              mathChecks: [],
              confidence: 0,
              needsReview: true,
              scanned: true,
            }
          : parseClaimText(fullText);

      setParsed(result);
      setStatus(
        result.scanned
          ? "This appears to be a scanned PDF. We’ll flag it for a human review instead of guessing."
          : "Your estimate has been read. Add your contact information to see the explanation."
      );
      setStep("contact");
    } catch (error) {
      console.error(error);
      setParsed({
        fields: {},
        lineItemsFound: [],
        missingKeyItems: [],
        mathChecks: [],
        confidence: 0,
        needsReview: true,
        error: true,
      });
      setStatus("We could not read that PDF automatically. We’ll route it for a human review instead.");
      setStep("contact");
    } finally {
      setBusy(false);
    }
  }

  async function submitLead(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!parsed || !fileMeta) return;
    setBusy(true);
    const form = new FormData(event.currentTarget);
    const lead = Object.fromEntries(form.entries());

    try {
      await fetch(LEAD_API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          lead,
          fileMeta,
          fields: parsed.fields,
          confidence: parsed.confidence,
          needsReview: parsed.needsReview,
          scanned: Boolean(parsed.scanned),
        }),
      });
    } catch (error) {
      console.warn("Lead notification failed; showing the report locally.", error);
    }

    setStep("report");
    setBusy(false);
  }

  function startOver() {
    setStep("upload");
    setFile(null);
    setFileMeta(null);
    setParsed(null);
    setStatus("");
    if (inputRef.current) inputRef.current.value = "";
  }

  const report = parsed ? buildReport(parsed) : [];

  return (
    <section className="live-decoder" aria-labelledby="live-decoder-title">
      <div className="live-decoder-intro">
        <p className="eyebrow">Free insurance estimate decoder</p>
        <h2 id="live-decoder-title">Upload the Adjuster’s Estimate. Get the Important Numbers in Plain English.</h2>
        <p>
          The decoder reads text-based PDFs in your browser, identifies RCV, ACV, depreciation,
          deductible, net claim, and common roofing line items, then gives you a clear explanation.
        </p>
        <ul className="decoder-privacy-list">
          <li>No account required</li>
          <li>No AI charges or generated guesses</li>
          <li>Text-based PDFs stay on your device</li>
          <li>Built for Colorado roofing estimates</li>
        </ul>
      </div>

      <div className="claim-decoder-card">
        {step === "upload" && (
          <div>
            <p className="decoder-step">Step 1 of 2</p>
            <h3>Upload your insurance estimate</h3>
            <p className="decoder-subtext">PDF only · Maximum 25 MB · First 15 pages analyzed</p>
            <div
              className={dragging ? "decoder-dropzone is-dragging" : "decoder-dropzone"}
              onClick={() => inputRef.current?.click()}
              onDragOver={(event) => {
                event.preventDefault();
                setDragging(true);
              }}
              onDragLeave={() => setDragging(false)}
              onDrop={onDrop}
              role="button"
              tabIndex={0}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") inputRef.current?.click();
              }}
            >
              <strong>{file ? file.name : "Drop your estimate here"}</strong>
              <span>{file ? "Click to choose a different PDF" : "or click to choose a PDF"}</span>
              <input ref={inputRef} type="file" accept="application/pdf,.pdf" onChange={onFileChange} hidden />
            </div>
            <p className="decoder-status" aria-live="polite">{status}</p>
            <button className="button button-primary decoder-action" type="button" disabled={!file || busy} onClick={decodeFile}>
              {busy ? "Reading your PDF…" : "Decode My Insurance Estimate"}
            </button>
            <p className="decoder-private-note">
              <strong>Private by design:</strong> the original text-based PDF is not uploaded or stored.
            </p>
          </div>
        )}

        {step === "contact" && (
          <form className="decoder-lead-form" onSubmit={submitLead}>
            <p className="decoder-step">Step 2 of 2</p>
            <h3>Where should we send the qualified follow-up?</h3>
            <p className="decoder-subtext">Your explanation appears immediately after this step.</p>
            <div className="decoder-file-chip">
              <span>{fileMeta?.name}</span>
              <button type="button" onClick={startOver}>Change</button>
            </div>
            <p className="decoder-status">{status}</p>
            <div className="decoder-field-grid">
              <label>First name<input name="firstName" required /></label>
              <label>Last name<input name="lastName" required /></label>
              <label>Phone<input name="phone" type="tel" required /></label>
              <label>Email<input name="email" type="email" required /></label>
            </div>
            <label>Property address<input name="address" required placeholder="Street, City, State, ZIP" /></label>
            <button className="button button-primary decoder-action" disabled={busy}>
              {busy ? "Preparing explanation…" : "Show My Claim Explanation"}
            </button>
          </form>
        )}

        {step === "report" && parsed && (
          <div className="decoder-report">
            <div className={parsed.needsReview ? "decoder-confidence needs-review" : "decoder-confidence"}>
              {parsed.needsReview
                ? "Needs a human review"
                : `Automated read confidence: ${Math.round(parsed.confidence * 100)}%`}
            </div>
            {report.map((section: any) => (
              <section key={section.title}>
                <h3>{section.title}</h3>
                {section.items?.map((item: any) => (
                  <div className="decoder-field-row" key={item.label}>
                    <div><strong>{item.label}</strong><span>{item.explain}</span></div>
                    <b>{item.value}</b>
                  </div>
                ))}
                {section.checks?.map((check: any) => (
                  <div className={check.pass ? "decoder-check passes" : "decoder-check warning"} key={check.label}>
                    <strong>{check.pass ? "✓" : "⚠"} {check.label}</strong>
                    <span>{check.detail}</span>
                  </div>
                ))}
                {section.flagged?.length > 0 && (
                  <div className="decoder-report-list"><strong>Found in the estimate:</strong><ul>{section.flagged.map((item: any) => <li key={item.label}><b>{item.label}</b> — {item.note}</li>)}</ul></div>
                )}
                {section.missing?.length > 0 && (
                  <div className="decoder-report-list"><strong>Not clearly found—worth asking about:</strong><ul>{section.missing.map((item: any) => <li key={item.label}><b>{item.label}</b></li>)}</ul></div>
                )}
                {section.text && <p>{section.text}</p>}
              </section>
            ))}
            <div className="decoder-report-actions">
              <a className="button button-primary" href="tel:+19705018125">Talk to a Specialist</a>
              <button className="button button-secondary" type="button" onClick={startOver}>Decode Another Estimate</button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
