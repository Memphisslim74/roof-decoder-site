import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { InlineLead, LeadCta } from "@/components/LeadCta";
import { JsonLd } from "@/components/JsonLd";
import { PageShell } from "@/components/SiteShell";
import { postBySlug, posts } from "@/lib/content";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = postBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    openGraph: { title: post.title, description: post.description, type: "article", publishedTime: post.published, modifiedTime: post.updated, images: [{ url: post.image, alt: post.imageAlt }] },
    twitter: { card: "summary_large_image", title: post.title, description: post.description, images: [post.image] },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = postBySlug(slug);
  if (!post) notFound();
  const related = posts.filter((item) => item.slug !== post.slug).slice(0, 2);
  const articleSchema = {
    "@context": "https://schema.org", "@type": "Article", headline: post.title, description: post.description,
    image: post.image, datePublished: post.published, dateModified: post.updated,
    author: { "@type": "Organization", name: "My Family Roofer" }, publisher: { "@type": "Organization", name: "My Family Roofer", logo: { "@type": "ImageObject", url: "/brand/my-family-roofer-logo.png" } },
    mainEntityOfPage: { "@type": "WebPage", "@id": `/blog/${post.slug}` },
  };
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: post.faq.map((item) => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })) };
  return (
    <PageShell>
      <JsonLd data={[articleSchema, faqSchema]} />
      <article>
        <header className="article-header"><div className="container article-header-inner"><nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span>›</span><Link href="/blog">Guides</Link><span>›</span><span>{post.category}</span></nav><p className="eyebrow">{post.category}</p><h1>{post.title}</h1><p className="article-deck">{post.description}</p><div className="article-byline"><span>By My Family Roofer</span><span>Updated August 20, 2026</span><span>{post.readTime}</span></div></div></header>
        <div className="container article-image"><img src={post.image} alt={post.imageAlt} /></div>
        <div className="section container content-with-aside article-layout"><div className="article-body"><p className="article-intro">{post.intro}</p>{post.sections.map((section) => <section key={section.heading}><h2>{section.heading}</h2>{section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}{section.bullets && <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}</section>)}<div className="article-note"><strong>Local focus:</strong> This guide is written for homeowners in Berthoud, Loveland, Fort Collins, and nearby Northern Colorado communities. Property, code, product, contract, and policy details vary.</div></div><div className="sticky-aside"><InlineLead context={post.category === "Hail Damage" ? "hail concern" : "roofing question"} /><nav className="article-toc"><strong>In this guide</strong>{post.sections.map((section) => <span key={section.heading}>{section.heading}</span>)}</nav></div></div>
        <section className="section section-muted"><div className="container faq-layout"><div><p className="eyebrow">Quick answers</p><h2 className="section-title">Frequently Asked Questions</h2></div><div className="faq-list">{post.faq.map((item) => <details key={item.question}><summary>{item.question}</summary><p>{item.answer}</p></details>)}</div></div></section>
        <section className="section container"><div className="section-heading-row"><div><p className="eyebrow">Keep learning</p><h2 className="section-title">Related Roofing Guides</h2></div><Link className="text-link" href="/blog">All guides <span>→</span></Link></div><div className="post-grid two-posts">{related.map((item) => <article className="post-card compact-post" key={item.slug}><div className="post-card-body"><div className="post-meta"><span>{item.category}</span><span>{item.readTime}</span></div><h3><Link href={`/blog/${item.slug}`}>{item.title}</Link></h3><p>{item.description}</p><Link className="text-link" href={`/blog/${item.slug}`}>Read next <span>→</span></Link></div></article>)}</div></section>
      </article>
      <div className="container cta-wrap"><LeadCta title="Want a Local Answer for Your Roof?" text="Talk with My Family Roofer about your estimate, hail concerns, or next step anywhere in the Berthoud–Loveland–Fort Collins area." /></div>
    </PageShell>
  );
}
