import type { Metadata } from "next";
import Link from "next/link";
import { InlineLead, LeadCta } from "@/components/LeadCta";
import { JsonLd } from "@/components/JsonLd";
import { PageShell } from "@/components/SiteShell";

export const metadata: Metadata = {
  title: "Roof Quote Decoder | Free Northern Colorado Quote Review",
  description: "Upload an existing roofing quote for a clear review of missing scope, potential concerns, and local building-code requirements before you sign.",
};

const quoteUploadUrl = "https://www.myfamilyroofer.com/quote-uploader";

const sections = [
  { number: "01", title: "Property and measured scope", ask: "Does the quote identify the address, approximate roof size, pitch or complexity, number of layers, and areas included?", watch: "Vague descriptions such as ‘replace roof’ without quantities or defined roof sections." },
  { number: "02", title: "Tear-off and disposal", ask: "How many layers are included, where will debris go, and how will landscaping, siding, driveways, and magnetic nail cleanup be handled?", watch: "Extra-layer charges or disposal costs that are not priced in advance." },
  { number: "03", title: "The complete material system", ask: "Is the exact shingle line listed with starter, ridge, underlayment, ice barrier, edge metal, fasteners, pipe boots, and flashing?", watch: "A premium shingle name paired with generic or unspecified accessories." },
  { number: "04", title: "Ventilation", ask: "Has intake and exhaust ventilation been calculated, and does the proposed system avoid mixing incompatible vent types?", watch: "Replacing only existing vents without checking whether the attic is balanced." },
  { number: "05", title: "Decking and hidden conditions", ask: "How much decking is included, what is the unit price after that, and how will photos and approval be handled?", watch: "Open-ended charges for wood, flashing, or code work discovered after tear-off." },
  { number: "06", title: "Warranty coverage", ask: "Which manufacturer coverage and workmanship coverage apply, who registers them, and what are the exclusions and transfer rules?", watch: "A ‘lifetime’ claim without the actual warranty document or installer responsibility." },
  { number: "07", title: "Price and contract terms", ask: "What is due at signing, delivery, completion, and final inspection? What can change the price, and how are change orders approved?", watch: "Large upfront payments, unclear cancellation language, or pressure to sign immediately." },
];

const questions = [
  "What exact roofing system am I buying?",
  "Which items are included, excluded, or allowances?",
  "What could change the contract price after tear-off?",
  "Will flashing be replaced or reused?",
  "How was ventilation calculated?",
  "What documentation will I receive at completion?",
  "Who handles warranty service if there is a problem?",
  "Does this proposal match the actual inspection findings?",
];

export default function RoofQuoteDecoderPage() {
  const faq = [
    { question: "Can you compare two roofing quotes?", answer: "Yes. The most useful comparison normalizes materials, quantities, accessories, labor scope, warranties, exclusions, payment terms, and variable costs before comparing totals." },
    { question: "Can I upload a roofing quote for review?", answer: "Yes. Use the My Family Roofer quote uploader to send your contact information, property address, and quote document for a professional review." },
    { question: "What will the quote review look for?", answer: "The review focuses on missing scope, unclear materials, variable costs, warranty language, possible concerns, and building-code requirements that may apply to the property." },
    { question: "What should never be missing from a roof quote?", answer: "The contractor and property, defined work, exact materials, price and payment terms, warranty language, exclusions, change-order process, and required signatures should be clear." },
    { question: "Is the cheapest roof estimate a red flag?", answer: "Not by itself. It may reflect efficiency or a smaller scope. The concern is a low price paired with missing materials, vague work, weak protections, or open-ended extras." },
  ];
  return (
    <PageShell>
      <JsonLd data={{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faq.map((item) => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })) }} />
      <section className="page-hero page-hero-blue">
        <div className="container page-hero-grid">
          <div>
            <p className="eyebrow eyebrow-light">Free professional quote review</p>
            <h1>Roof Quote Decoder</h1>
            <p>Already have a roofing quote? Send it to a Northern Colorado roofing professional to identify missing items, potential concerns, and building-code requirements before you sign.</p>
            <div className="button-row"><a className="button button-white" href="#upload-your-quote">Upload My Roof Quote</a><a className="text-link text-link-light" href="#contractor-quote-guide">Use the Quote Checklist →</a></div>
          </div>
          <div className="decoder-summary">
            <span>QUICK TEST</span>
            <strong>Can you answer these three questions?</strong>
            <ol><li>Exactly what system is being installed?</li><li>Exactly what can change the price?</li><li>Exactly who is responsible after installation?</li></ol>
            <p>If any answer is unclear, the quote needs more detail.</p>
          </div>
        </div>
      </section>

      <div id="upload-your-quote" className="section section-muted">
        <div className="container">
          <section className="live-decoder" aria-labelledby="quote-upload-title">
            <div className="live-decoder-intro">
              <p className="eyebrow">Already have an estimate?</p>
              <h2 id="quote-upload-title">Upload the Quote. Find Out What It Does—and Does Not—Include.</h2>
              <p>My Family Roofer’s quote-review process is designed for this exact situation. Submit the proposal and the roofing team will identify possible scope gaps, items that deserve a closer look, and local building requirements that may affect the project.</p>
              <ul className="decoder-privacy-list">
                <li>Contractor roofing quotes</li>
                <li>Insurance roofing estimates</li>
                <li>Local code considerations</li>
                <li>Clear professional follow-up</li>
              </ul>
            </div>

            <div className="claim-decoder-card quote-uploader-card">
              <p className="decoder-step">My Family Roofer quote review</p>
              <h3>Send Your Quote for Review</h3>
              <p className="decoder-subtext">The existing upload form collects the information the roofing team needs to evaluate the document and follow up with you.</p>
              <ol className="quote-upload-steps">
                <li><span>1</span><div><strong>Tell us who you are</strong><p>Add your name, email, and phone number.</p></div></li>
                <li><span>2</span><div><strong>Identify the property</strong><p>Include the address so local requirements can be considered.</p></div></li>
                <li><span>3</span><div><strong>Upload the quote</strong><p>Attach the document you want the roofing team to review.</p></div></li>
              </ol>
              <a className="button button-primary decoder-action" href={quoteUploadUrl}>Open the Quote Uploader</a>
              <p className="decoder-private-note">Your document is submitted directly through My Family Roofer’s existing quote-review form.</p>
            </div>
          </section>
        </div>
      </div>

      <section id="contractor-quote-guide" className="section container content-with-aside">
        <div>
          <p className="eyebrow">Read the scope—not just the total</p>
          <h2 className="section-title">Seven Parts of a Complete Roof Proposal</h2>
          <p className="article-intro">A roofing quote should function like a project plan. It should define what is being removed, what is being installed, how uncertainty will be handled, and what protection remains after the crew leaves.</p>
          <div className="decoder-sections">
            {sections.map((item) => (
              <article key={item.number}>
                <span>{item.number}</span>
                <div><h3>{item.title}</h3><p><strong>Ask:</strong> {item.ask}</p><p className="watch-line"><strong>Watch for:</strong> {item.watch}</p></div>
              </article>
            ))}
          </div>
        </div>
        <div className="sticky-aside"><InlineLead context="roofing quote" /></div>
      </section>

      <section className="section section-dark">
        <div className="container question-grid">
          <div><p className="eyebrow eyebrow-light">Take this into the sales meeting</p><h2 className="section-title">Eight Questions Worth Asking</h2><p>Clear contractors usually welcome clear questions. Write the answers into the proposal when they affect scope or price.</p></div>
          <ol>{questions.map((question, index) => <li key={question}><span>{index + 1}</span>{question}</li>)}</ol>
        </div>
      </section>

      <section className="section container compare-block">
        <div><p className="eyebrow">Compare apples to apples</p><h2 className="section-title">A $2,000 Difference May Not Be a Price Difference</h2></div>
        <div><p>One proposal may include upgraded ventilation, new flashing, permit costs, premium accessories, property protection, a stronger warranty level, and defined decking. Another may leave several of those items open.</p><p>Normalize the scope first. Then compare contractor qualifications, communication, installation controls, warranty service, and total value.</p><Link className="text-link" href="/blog/how-to-compare-roofing-quotes-northern-colorado">Read the full comparison guide <span>→</span></Link></div>
      </section>

      <section className="section section-muted"><div className="container faq-layout"><div><p className="eyebrow">Roof quote FAQ</p><h2 className="section-title">Before It Becomes a Contract</h2></div><div className="faq-list">{faq.map((item) => <details key={item.question}><summary>{item.question}</summary><p>{item.answer}</p></details>)}</div></div></section>
      <div className="container cta-wrap"><LeadCta eyebrow="Ready for a second opinion?" title="Let’s Make Your Roof Quote Make Sense" text="Get clear, local guidance before you commit to a Northern Colorado roofing project." /></div>
    </PageShell>
  );
}
