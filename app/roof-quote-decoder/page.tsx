import type { Metadata } from "next";
import Link from "next/link";
import { ClaimDecoder } from "@/components/ClaimDecoder";
import { InlineLead, LeadCta } from "@/components/LeadCta";
import { JsonLd } from "@/components/JsonLd";
import { PageShell } from "@/components/SiteShell";
import { bookingUrl, phoneDisplay } from "@/lib/content";

export const metadata: Metadata = {
  title: "Roof Estimate Decoder | Insurance & Contractor Quotes",
  description: "Upload a Colorado roof insurance estimate to decode RCV, ACV, depreciation, deductible, and claim line items, or review a contractor quote before signing.",
};

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
    { question: "What should never be missing from a roof quote?", answer: "The contractor and property, defined work, exact materials, price and payment terms, warranty language, exclusions, change-order process, and required signatures should be clear." },
    { question: "Is the cheapest roof estimate a red flag?", answer: "Not by itself. It may reflect efficiency or a smaller scope. The concern is a low price paired with missing materials, vague work, weak protections, or open-ended extras." },
  ];
  return (
    <PageShell>
      <JsonLd data={{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faq.map((item) => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })) }} />
      <section className="page-hero page-hero-blue">
        <div className="container page-hero-grid">
          <div>
            <p className="eyebrow eyebrow-light">Free homeowner tool and guide</p>
            <h1>Roof Quote Decoder</h1>
            <p>Upload an insurance adjuster estimate for an instant plain-English explanation, or use the contractor proposal guide to understand scope, materials, warranties, exclusions, and price before signing.</p>
            <div className="button-row"><a className="button button-white" href="#insurance-estimate-decoder">Upload Insurance Estimate</a><a className="text-link text-link-light" href="#contractor-quote-guide">Review Contractor Quote →</a></div>
          </div>
          <div className="decoder-summary">
            <span>QUICK TEST</span>
            <strong>Can you answer these three questions?</strong>
            <ol><li>Exactly what system is being installed?</li><li>Exactly what can change the price?</li><li>Exactly who is responsible after installation?</li></ol>
            <p>If any answer is unclear, the quote needs more detail.</p>
          </div>
        </div>
      </section>

      <div id="insurance-estimate-decoder" className="section section-muted">
        <div className="container"><ClaimDecoder /></div>
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
