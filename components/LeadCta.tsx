import Link from "next/link";
import { bookingUrl, phoneDisplay, phoneHref } from "@/lib/content";

type LeadCtaProps = {
  eyebrow?: string;
  title?: string;
  text?: string;
  compact?: boolean;
};

export function LeadCta({
  eyebrow = "Need a second set of eyes?",
  title = "Get a Straight Answer About Your Roof",
  text = "Talk with a local Northern Colorado roofing professional. No pressure, no confusing language—just a clear next step.",
  compact = false,
}: LeadCtaProps) {
  return (
    <section className={compact ? "lead-cta lead-cta-compact" : "lead-cta"}>
      <div>
        <p className="eyebrow eyebrow-light">{eyebrow}</p>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      <div className="lead-actions">
        <a className="button button-white" href={bookingUrl}>
          Request a Free Review
        </a>
        <a className="text-link text-link-light" href={`tel:${phoneHref}`}>
          Call {phoneDisplay} <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  );
}

export function InlineLead({ context = "roof quote" }: { context?: string }) {
  return (
    <aside className="inline-lead">
      <p className="eyebrow">Local second opinion</p>
      <h2>Have a {context} you want explained?</h2>
      <p>We’ll help you understand the roofing scope and identify the questions worth asking before you commit.</p>
      <a className="button button-primary" href={bookingUrl}>Request My Review</a>
      <a className="inline-phone" href={`tel:${phoneHref}`}>Or call {phoneDisplay}</a>
    </aside>
  );
}

export function CityLinks() {
  return (
    <div className="city-link-row" aria-label="Service area links">
      <span>Serving:</span>
      <Link href="/locations/berthoud">Berthoud</Link>
      <Link href="/locations/loveland">Loveland</Link>
      <Link href="/locations/fort-collins">Fort Collins</Link>
      <Link href="/locations/greeley">Greeley</Link>
      <Link href="/locations/boulder">Boulder</Link>
    </div>
  );
}
