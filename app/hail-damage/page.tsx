import type { Metadata } from "next";
import Link from "next/link";
import { InlineLead, LeadCta } from "@/components/LeadCta";
import { JsonLd } from "@/components/JsonLd";
import { PageShell } from "@/components/SiteShell";
import { bookingUrl } from "@/lib/content";

export const metadata: Metadata = {
  title: "Northern Colorado Hail Damage Roof Guide | Berthoud, Loveland & Fort Collins",
  description: "What to check after hail, when to schedule a roof inspection, how to document damage, and which roofing and insurance red flags to avoid in Northern Colorado.",
};

const steps = [
  ["Protect people and property", "Stay off the roof. If water is entering, move belongings, catch active drips, document the condition, and call for qualified emergency protection."],
  ["Document what you can see", "Photograph hail size, gutters, vents, siding, screens, vehicles, outdoor equipment, and interior water marks without climbing onto the roof."],
  ["Request a complete inspection", "Ask for photographs of every slope plus soft metals, penetrations, flashing, gutters, downspouts, siding, windows, and collateral damage."],
  ["Review your policy", "Confirm deductible, roof settlement method, endorsements, cosmetic exclusions, reporting duties, and deadlines with your insurer or licensed agent."],
  ["Compare scopes before signing", "Separate the insurer's coverage decision from the contractor's construction scope, then resolve documented differences before work begins."],
];

export default function HailDamagePage() {
  const faq = [
    { question: "What does hail damage look like on a roof?", answer: "Signs may include disturbed granules, fractures, bruising, exposed mat, or damage to vents and flashing. Appearance varies by roof material, age, storm conditions, and impact angle, so diagnosis should come from a qualified inspection." },
    { question: "Can a roof be damaged without leaking?", answer: "Yes. A roof can sustain functional damage before water becomes visible indoors. That is why documentation and a safe inspection matter after a significant storm." },
    { question: "Should I call insurance or a roofer first?", answer: "There is no universal order. Review your policy duties and consider documenting conditions with a reputable local roofer. Coverage questions and claim-reporting decisions should be confirmed with your insurer or licensed agent." },
  ];
  return (
    <PageShell>
      <JsonLd data={{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faq.map((item) => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })) }} />
      <section className="image-page-hero">
        <img src="/blog/hail-damage-guide.webp" alt="Hail on an architectural shingle roof after a Northern Colorado storm" />
        <div className="image-page-overlay" />
        <div className="container image-page-content"><p className="eyebrow eyebrow-light">Northern Colorado hail resource</p><h1>Hail Hit. Don’t Let Urgency Make the Decision.</h1><p>A practical response plan for Berthoud, Loveland, and Fort Collins homeowners.</p><a className="button button-primary" href={bookingUrl}>Request a Free Hail Inspection</a></div>
      </section>

      <section className="section container content-with-aside">
        <div><p className="eyebrow">After the storm</p><h2 className="section-title">Five Calm, Useful Next Steps</h2><p className="article-intro">You do not need to diagnose a roof from the driveway or sign a contingency agreement at the front door. Start with safety, documentation, and reliable information.</p><div className="process-list">{steps.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div></div>
        <div className="sticky-aside"><InlineLead context="hail-damaged roof" /></div>
      </section>

      <section className="section section-muted"><div className="container two-column-cards"><article><p className="eyebrow">Ground-level clues</p><h2>What You Can Safely Document</h2><ul className="clean-list"><li>Dents on gutters, downspouts, vents, or outdoor equipment</li><li>Torn screens, chipped paint, damaged siding, or broken skylights</li><li>Shingle pieces or roofing debris on the ground</li><li>Water staining in the attic, ceilings, or walls</li><li>Storm date, approximate hail size, and neighborhood reports</li></ul></article><article className="warning-card"><p className="eyebrow">Storm-season red flags</p><h2>Slow Down When You Hear This</h2><ul className="clean-list"><li>“Your claim is guaranteed to be approved.”</li><li>“Sign now or you will lose your place.”</li><li>“We can make your deductible disappear.”</li><li>“Every roof on this street needs replacement.”</li><li>“You do not need to read the paperwork.”</li></ul></article></div></section>

      <section className="section container compare-block"><div><p className="eyebrow">Roofing scope versus insurance coverage</p><h2 className="section-title">Two Different Decisions</h2></div><div><p>A roofer evaluates damage and construction requirements. Your insurer evaluates coverage under your policy. A trustworthy contractor can document conditions and explain roofing scope without promising a coverage result.</p><p>When estimates differ, request a written, line-by-line comparison. Documentation makes legitimate differences easier for everyone to evaluate.</p><Link className="text-link" href="/blog/does-insurance-pay-for-roof-replacement-colorado">Read the Colorado insurance guide <span>→</span></Link></div></section>
      <section className="section section-muted"><div className="container faq-layout"><div><p className="eyebrow">Hail damage FAQ</p><h2 className="section-title">What Homeowners Ask First</h2></div><div className="faq-list">{faq.map((item) => <details key={item.question}><summary>{item.question}</summary><p>{item.answer}</p></details>)}</div></div></section>
      <div className="container cta-wrap"><LeadCta eyebrow="Local hail help" title="Get the Roof Checked Without the Sales Pressure" text="My Family Roofer provides documented inspections and clear next steps for Northern Colorado homeowners." /></div>
    </PageShell>
  );
}
