import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { InlineLead, LeadCta } from "@/components/LeadCta";
import { JsonLd } from "@/components/JsonLd";
import { PageShell } from "@/components/SiteShell";
import { cityBySlug, cities, phoneDisplay, posts } from "@/lib/content";

export function generateStaticParams() {
  return cities.map((city) => ({ city: city.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
  const { city: slug } = await params;
  const city = cityBySlug(slug);
  if (!city) return {};
  return { title: city.title, description: city.description };
}

export default async function CityPage({ params }: { params: Promise<{ city: string }> }) {
  const { city: slug } = await params;
  const city = cityBySlug(slug);
  if (!city) notFound();
  const schema = [
    {
      "@context": "https://schema.org", "@type": "Service", name: `Roof quote review and roofing guidance in ${city.city}, Colorado`,
      provider: { "@type": "RoofingContractor", name: "My Family Roofer", telephone: phoneDisplay, address: { "@type": "PostalAddress", addressLocality: "Loveland", addressRegion: "CO", postalCode: "80538" } },
      areaServed: { "@type": "City", name: `${city.city}, Colorado` }, description: city.description,
    },
    { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: city.faq.map((item) => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })) },
  ];
  return (
    <PageShell>
      <JsonLd data={schema} />
      <section className="city-hero"><div className="container city-hero-grid"><div><p className="eyebrow eyebrow-light">{city.eyebrow}</p><h1>{city.title}</h1><p>{city.intro}</p><div className="button-row"><Link className="button button-primary" href="/roof-quote-decoder">Open Quote Decoder</Link><a className="button button-outline-light" href="https://www.myfamilyroofer.com/contact-info">Request Local Inspection</a></div></div><div className="city-fact"><span>LOCAL FOCUS</span><strong>{city.city}, CO</strong><p>{city.county}</p><hr /><p>{city.localNote}</p></div></div></section>

      <section className="section container"><div className="section-heading-row"><div><p className="eyebrow">Local roof considerations</p><h2 className="section-title">What {city.city} Homeowners Should Compare</h2></div><p className="heading-support">A complete proposal should account for the property, local weather, code requirements, and the whole roofing system.</p></div><div className="concern-grid">{city.concerns.map((item, index) => <article key={item.title}><span>0{index + 1}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div></section>

      <section className="section section-muted"><div className="container content-with-aside"><div><p className="eyebrow">A local quote should answer local questions</p><h2 className="section-title">From Inspection to a Clear Scope</h2><div className="rich-copy"><p>For a {city.city} property, begin with documented roof and exterior conditions. The proposal should connect those findings to the exact materials, quantities, accessories, labor, protection, warranty, and price.</p><p>When insurance is involved, keep construction scope and coverage questions separate. Your contractor can document damage and explain what the project requires. Your insurer determines what the policy covers.</p><h3>Useful details to confirm in writing</h3><ul className="clean-list"><li>Exact shingle line and impact rating</li><li>Removal, disposal, decking, and flashing terms</li><li>Intake and exhaust ventilation approach</li><li>Permit and code-related responsibilities</li><li>Manufacturer and workmanship warranty details</li><li>Payment schedule, exclusions, and change-order pricing</li></ul><h3>Nearby {city.city} areas we commonly discuss</h3><p>{city.neighborhoods.join(" • ")}</p></div></div><div className="sticky-aside"><InlineLead context={`${city.city} roofing estimate`} /></div></div></section>

      <section className="section container"><div className="section-heading-row"><div><p className="eyebrow">Helpful next reads</p><h2 className="section-title">Roofing Guides for {city.city} Homeowners</h2></div><Link className="text-link" href="/blog">View all guides <span>→</span></Link></div><div className="post-grid">{posts.slice(0, 3).map((post) => <article className="post-card compact-post" key={post.slug}><div className="post-card-body"><div className="post-meta"><span>{post.category}</span><span>{post.readTime}</span></div><h3><Link href={`/blog/${post.slug}`}>{post.title}</Link></h3><p>{post.description}</p><Link className="text-link" href={`/blog/${post.slug}`}>Read guide <span>→</span></Link></div></article>)}</div></section>

      <section className="section section-muted"><div className="container faq-layout"><div><p className="eyebrow">{city.city} roofing FAQ</p><h2 className="section-title">Local Questions, Clear Answers</h2></div><div className="faq-list">{city.faq.map((item) => <details key={item.question}><summary>{item.question}</summary><p>{item.answer}</p></details>)}</div></div></section>
      <div className="container cta-wrap"><LeadCta eyebrow={`${city.city} roof help`} title={`Talk With a Local Roofer Serving ${city.city}`} text="Get a clear explanation of your roof, quote, or storm-damage next step from My Family Roofer." /></div>
    </PageShell>
  );
}
