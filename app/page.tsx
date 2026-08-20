import Link from "next/link";
import { CityLinks, LeadCta } from "@/components/LeadCta";
import { JsonLd } from "@/components/JsonLd";
import { PageShell } from "@/components/SiteShell";
import { bookingUrl, cities, phoneDisplay, phoneHref, posts } from "@/lib/content";

const quoteChecks = [
  ["Materials", "Exact shingle, starter, ridge, underlayment and accessory system"],
  ["Scope", "Tear-off, disposal, flashing, ventilation, permits and property protection"],
  ["Variables", "Decking unit cost, change orders, exclusions and unforeseen conditions"],
  ["Coverage", "Manufacturer warranty, workmanship warranty and registration details"],
  ["Terms", "Deposit, payment schedule, cancellation terms and project timeline"],
];

const faq = [
  { q: "What is a roof quote decoder?", a: "It is a homeowner-first way to translate a roofing estimate into plain English. It helps you understand materials, labor, exclusions, warranties, payment terms, and questions to ask before signing." },
  { q: "Is a roof quote review the same as an inspection?", a: "No. A quote review evaluates the written proposal. A roof inspection evaluates the actual condition of the roof and exterior. For the clearest answer, you may need both." },
  { q: "Do you only help with My Family Roofer estimates?", a: "No. The educational guides are designed to help Northern Colorado homeowners understand and compare roofing scopes, regardless of which contractor prepared them." },
  { q: "What areas do you serve?", a: "This resource is focused on Berthoud, Loveland, Fort Collins, Greeley, and Boulder, Colorado, with local roofing help available throughout nearby Northern Colorado communities." },
];

export default function Home() {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": ["RoofingContractor", "LocalBusiness"],
    name: "My Family Roofer",
    url: "https://www.myfamilyroofer.com/",
    telephone: phoneDisplay,
    address: { "@type": "PostalAddress", streetAddress: "2530 Abarr Dr. Suite 120A", addressLocality: "Loveland", addressRegion: "CO", postalCode: "80538", addressCountry: "US" },
    areaServed: cities.map((city) => ({ "@type": "City", name: `${city.city}, Colorado` })),
    sameAs: ["https://www.myfamilyroofer.com/"],
  };

  return (
    <PageShell>
      <JsonLd data={localBusiness} />
      <section className="home-hero">
        <img className="hero-background" src="/roof-decoder-hero.webp" alt="Northern Colorado home with an architectural shingle roof" />
        <div className="hero-overlay" />
        <div className="container hero-content">
          <p className="eyebrow eyebrow-light">Northern Colorado Roof Quote Decoder</p>
          <h1>Understand Your Roof Quote <span>Before You Sign.</span></h1>
          <p className="hero-lede">Compare the scope, materials, warranties, and hidden variables in your roofing estimate—with clear local guidance for Berthoud, Loveland, Fort Collins, Greeley, and Boulder homeowners.</p>
          <div className="button-row">
            <Link className="button button-primary" href="/roof-quote-decoder">Decode My Roof Quote</Link>
            <a className="button button-outline-light" href={bookingUrl}>Request a Free Roof Review</a>
          </div>
          <a className="hero-phone" href={`tel:${phoneHref}`}>Prefer to talk? {phoneDisplay}</a>
          <CityLinks />
        </div>
      </section>

      <section className="trust-band" aria-label="My Family Roofer credentials">
        <div className="container trust-grid">
          <div className="trust-intro"><span>LOCAL GUIDANCE FROM</span><strong>MY FAMILY ROOFER</strong></div>
          <img src="/brand/bbb-torch-award.png" alt="BBB Torch Awards for Ethics winner" />
          <img className="wide-badge" src="/brand/owens-corning-platinum.png" alt="Owens Corning Platinum Preferred Contractor" />
          <img src="/brand/google-reviews.png" alt="Google customer reviews" />
        </div>
      </section>

      <section className="section container intro-grid">
        <div><p className="eyebrow">A better roofing decision starts with clarity</p><h2 className="section-title">The Price Is Only One Line in the Story</h2></div>
        <div className="prose-lede">
          <p>Two roofing proposals can look similar and still include very different systems, protections, and responsibilities. The lowest number may leave out important work. The highest number may include upgrades you do not understand or need.</p>
          <p>Roof Quote Decoder is built to help Northern Colorado homeowners compare what is actually being offered—not just the total at the bottom of the page.</p>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <div className="section-heading-row">
            <div><p className="eyebrow">What we help you evaluate</p><h2 className="section-title">Five Parts of a Roofing Quote That Matter</h2></div>
            <Link className="text-link" href="/roof-quote-decoder">See the complete checklist <span>→</span></Link>
          </div>
          <div className="quote-checks">
            {quoteChecks.map(([title, text], index) => (
              <article key={title}><span className="check-number">0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="section container split-feature">
        <div className="split-image"><img src="/blog/hail-damage-guide.webp" alt="Hailstones and impact marks on roofing shingles" /><div className="image-label">Northern Colorado Hail Resource</div></div>
        <div className="split-copy">
          <p className="eyebrow">After the storm</p><h2 className="section-title">Hail Damage Without the Pressure</h2>
          <p>Hail season brings legitimate concerns—and plenty of rushed decisions. Learn what to document, when to request an inspection, how roofing scope and insurance coverage differ, and which promises should make you pause.</p>
          <ul className="clean-list"><li>Ground-level signs worth documenting</li><li>What a complete hail inspection should cover</li><li>Contract and deductible red flags</li><li>Questions for your roofer and insurance professional</li></ul>
          <div className="button-row"><Link className="button button-primary" href="/hail-damage">Open the Hail Guide</Link><a className="text-link" href={bookingUrl}>Request an inspection <span>→</span></a></div>
        </div>
      </section>

      <section className="section location-section">
        <div className="container">
          <div className="section-heading-row">
            <div><p className="eyebrow">Focused local coverage</p><h2 className="section-title">Built for Northern Colorado Roofs</h2></div>
            <p className="heading-support">Five primary service areas. Distinct local guidance. One trusted roofing team.</p>
          </div>
          <div className="location-grid">
            {cities.map((city, index) => (
              <Link className="location-card" href={`/locations/${city.slug}`} key={city.slug}><span>0{index + 1}</span><h3>{city.city}, Colorado</h3><p>{city.description}</p><strong>View local roof guide →</strong></Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="section-heading-row">
          <div><p className="eyebrow">Roofing education</p><h2 className="section-title">Northern Colorado Roofing Guides</h2></div>
          <Link className="text-link" href="/blog">View all guides <span>→</span></Link>
        </div>
        <div className="post-grid">
          {posts.slice(0, 3).map((post) => (
            <article className="post-card" key={post.slug}>
              <Link href={`/blog/${post.slug}`} className="post-image-link"><img src={post.image} alt={post.imageAlt} /></Link>
              <div className="post-card-body"><div className="post-meta"><span>{post.category}</span><span>{post.readTime}</span></div><h3><Link href={`/blog/${post.slug}`}>{post.title}</Link></h3><p>{post.description}</p><Link className="text-link" href={`/blog/${post.slug}`}>Read guide <span>→</span></Link></div>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-muted">
        <div className="container faq-layout">
          <div><p className="eyebrow">Common questions</p><h2 className="section-title">Straight Answers About Roof Quotes</h2><p className="heading-support">If something in your estimate is unclear, it deserves an explanation before it becomes a contract.</p></div>
          <div className="faq-list">
            {faq.map((item) => <details key={item.q}><summary>{item.q}</summary><p>{item.a}</p></details>)}
          </div>
        </div>
      </section>

      <div className="container cta-wrap"><LeadCta /></div>
    </PageShell>
  );
}
