import Link from "next/link";
import { bookingUrl, phoneDisplay, phoneHref } from "@/lib/content";

const navItems = [
  { href: "/roof-quote-decoder", label: "Quote Decoder" },
  { href: "/hail-damage", label: "Hail Help" },
  { href: "/locations", label: "Service Areas" },
  { href: "/blog", label: "Roofing Guides" },
];

export function SiteHeader() {
  return (
    <>
      <div className="utility-bar">
        <div className="container utility-inner">
          <span>Northern Colorado roofing education for homeowners</span>
          <a href={`tel:${phoneHref}`}>Talk with a local roofer: {phoneDisplay}</a>
        </div>
      </div>
      <header className="site-header">
        <div className="container header-inner">
          <Link className="brand-lockup" href="/" aria-label="Roof Quote Decoder home">
            <img src="/brand/my-family-roofer-logo.png" alt="My Family Roofer" width="92" height="58" />
            <span className="brand-divider" aria-hidden="true" />
            <span className="brand-copy">
              <strong>ROOF QUOTE</strong>
              <span>DECODER</span>
            </span>
          </Link>
          <nav className="desktop-nav" aria-label="Primary navigation">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
          <a className="button button-primary header-cta" href={bookingUrl}>
            Free Roof Review
          </a>
        </div>
        <nav className="mobile-nav container" aria-label="Mobile navigation">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
      </header>
    </>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <div className="footer-brand">Roof Quote Decoder</div>
          <p>
            A Northern Colorado homeowner resource from My Family Roofer. Understand the scope, compare the system, and make a roofing decision with confidence.
          </p>
          <a className="footer-phone" href={`tel:${phoneHref}`}>
            {phoneDisplay}
          </a>
          <address>2530 Abarr Dr. Suite 120A, Loveland, CO 80538</address>
        </div>
        <div>
          <h2>Start Here</h2>
          <Link href="/roof-quote-decoder">Decode a roof quote</Link>
          <Link href="/hail-damage">Hail damage help</Link>
          <a href={bookingUrl}>Request a free inspection</a>
          <a href={`sms:${phoneHref}?&body=${encodeURIComponent("Hi, I have a question about a Northern Colorado roof quote.")}`}>Text a roofing question</a>
        </div>
        <div>
          <h2>Local Guides</h2>
          <Link href="/locations/berthoud">Berthoud roof quotes</Link>
          <Link href="/locations/loveland">Loveland roof quotes</Link>
          <Link href="/locations/fort-collins">Fort Collins roof quotes</Link>
          <Link href="/locations/greeley">Greeley roof quotes</Link>
          <Link href="/locations/boulder">Boulder roof quotes</Link>
          <Link href="/blog">Roofing articles</Link>
        </div>
        <div className="footer-trust">
          <h2>Trusted Locally</h2>
          <div className="footer-badges">
            <img src="/brand/bbb-torch-award.png" alt="BBB Torch Awards for Ethics winner" />
            <img src="/brand/owens-corning-platinum.png" alt="Owens Corning Platinum Preferred Contractor" />
          </div>
        </div>
      </div>
      <div className="footer-bottom container">
        <span>© 2026 My Family Roofer. Educational content is general information, not legal or insurance advice.</span>
        <a href="https://www.myfamilyroofer.com/privacy-policy">Privacy</a>
      </div>
      <div className="mobile-action-bar">
        <a href={`tel:${phoneHref}`}>Call {phoneDisplay}</a>
        <a href={bookingUrl}>Request Review</a>
      </div>
    </footer>
  );
}

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </>
  );
}
