import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://colorado-roof-decoder.pages.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Colorado Roof Quote Decoder | Northern Colorado Roofing Help", template: "%s | Roof Quote Decoder" },
  description: "Understand and compare roofing estimates, hail damage scopes, Class 4 shingles, and roof-related insurance documents in Berthoud, Loveland, and Fort Collins.",
  keywords: ["roof quote decoder", "compare roofing estimates", "Northern Colorado roofer", "Berthoud roofing", "Loveland roofing", "Fort Collins roofing", "Colorado hail damage", "Class 4 shingles Colorado", "roof insurance estimate"],
  alternates: { canonical: "./" },
  openGraph: { type: "website", locale: "en_US", url: "./", siteName: "Colorado Roof Quote Decoder", title: "Colorado Roof Quote Decoder", description: "Understand the quote before you sign. Local roof guidance for Berthoud, Loveland, and Fort Collins.", images: [{ url: "/og.png", width: 1200, height: 675, alt: "Colorado Roof Quote Decoder" }] },
  twitter: { card: "summary_large_image", title: "Colorado Roof Quote Decoder", description: "Understand the quote before you sign.", images: ["/og.png"] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
