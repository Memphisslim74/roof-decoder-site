import type { Metadata } from "next";
import Link from "next/link";
import { LeadCta } from "@/components/LeadCta";
import { PageShell } from "@/components/SiteShell";
import { cities } from "@/lib/content";

export const metadata: Metadata = {
  title: "Northern Colorado Roof Quote Help | Berthoud, Loveland & Fort Collins",
  description: "Local roof quote, hail damage, Class 4 shingle, and roof replacement guidance for homeowners in Berthoud, Loveland, and Fort Collins, Colorado.",
};

export default function LocationsPage() {
  return (
    <PageShell>
      <section className="page-hero page-hero-light"><div className="container narrow-hero"><p className="eyebrow">Northern Colorado service areas</p><h1>Local Roof Guidance Where It Matters Most</h1><p>We narrowed this resource to three connected communities so every city guide can be useful, specific, and supported by a genuinely local roofing team.</p></div></section>
      <section className="section container"><div className="location-grid location-grid-large">{cities.map((city, index) => <Link className="location-card" href={`/locations/${city.slug}`} key={city.slug}><span>0{index + 1}</span><p className="eyebrow">{city.county}</p><h2>{city.city}, Colorado</h2><p>{city.intro}</p><strong>Open {city.city} roofing guide →</strong></Link>)}</div></section>
      <section className="section section-muted"><div className="container intro-grid"><div><p className="eyebrow">Why focus matters</p><h2 className="section-title">Useful Local Pages, Not a List of City Names</h2></div><div className="prose-lede"><p>Search engines and homeowners both deserve pages that answer real local questions. Each city guide covers quote comparison, hail exposure, material choices, common scope gaps, and next steps for that community.</p><p>My Family Roofer is based in Loveland and serves homeowners throughout this Berthoud–Loveland–Fort Collins corridor.</p></div></div></section>
      <div className="container cta-wrap"><LeadCta title="Not Sure Which Local Guide Fits?" text="Call the Loveland-based team and tell us where the property is. We’ll point you toward the right next step." /></div>
    </PageShell>
  );
}
