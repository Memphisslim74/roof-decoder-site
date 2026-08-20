import type { Metadata } from "next";
import Link from "next/link";
import { LeadCta } from "@/components/LeadCta";
import { PageShell } from "@/components/SiteShell";
import { posts } from "@/lib/content";

export const metadata: Metadata = {
  title: "Northern Colorado Roofing Blog | Quote, Hail & Insurance Guides",
  description: "Practical roofing guides for Berthoud, Loveland, Fort Collins, Greeley, and Boulder homeowners covering roof quotes, hail damage, Class 4 shingles, and insurance-related scope.",
};

export default function BlogPage() {
  return (
    <PageShell>
      <section className="page-hero page-hero-light"><div className="container narrow-hero"><p className="eyebrow">Northern Colorado roofing guides</p><h1>Better Questions Lead to Better Roofs.</h1><p>Clear, useful articles for homeowners comparing estimates, responding to hail, evaluating materials, and navigating the roofing side of an insurance claim.</p></div></section>
      <section className="section container"><div className="post-grid post-grid-four">{posts.map((post) => <article className="post-card" key={post.slug}><Link href={`/blog/${post.slug}`} className="post-image-link"><img src={post.image} alt={post.imageAlt} /></Link><div className="post-card-body"><div className="post-meta"><span>{post.category}</span><span>{post.readTime}</span></div><h2><Link href={`/blog/${post.slug}`}>{post.title}</Link></h2><p>{post.description}</p><Link className="text-link" href={`/blog/${post.slug}`}>Read the guide <span>→</span></Link></div></article>)}</div></section>
      <section className="section section-muted"><div className="container intro-grid"><div><p className="eyebrow">Our editorial standard</p><h2 className="section-title">Educational, Local, and Written for Homeowners</h2></div><div className="prose-lede"><p>These guides explain construction scope in plain English and identify questions worth asking. They do not promise insurance outcomes or replace policy, legal, engineering, or code advice.</p><p>The focus is intentionally local: roofing decisions shaped by Northern Colorado hail, wind, snow, sun, construction practices, and the Berthoud–Loveland–Fort Collins–Greeley–Boulder market.</p></div></div></section>
      <div className="container cta-wrap"><LeadCta title="Have a Roofing Question We Haven’t Answered?" text="Call or request a free roof review. Your question may also become the next guide we publish." /></div>
    </PageShell>
  );
}
