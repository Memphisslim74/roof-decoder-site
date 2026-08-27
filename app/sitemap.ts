import type { MetadataRoute } from "next";
import { cities, posts } from "@/lib/content";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://colorado-roofer.com";
  const updated = new Date("2026-08-27");
  return [
    { url: base, lastModified: updated, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/roof-quote-decoder`, lastModified: updated, changeFrequency: "monthly", priority: 0.95 },
    { url: `${base}/hail-damage`, lastModified: updated, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/locations`, lastModified: updated, changeFrequency: "monthly", priority: 0.8 },
    ...cities.map((city) => ({ url: `${base}/locations/${city.slug}`, lastModified: updated, changeFrequency: "monthly" as const, priority: 0.9 })),
    { url: `${base}/blog`, lastModified: updated, changeFrequency: "weekly", priority: 0.8 },
    ...posts.map((post) => ({ url: `${base}/blog/${post.slug}`, lastModified: new Date(post.updated), changeFrequency: "monthly" as const, priority: 0.82 })),
  ];
}
