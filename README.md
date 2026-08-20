# Colorado Roof Quote Decoder

A professional, SEO-focused Northern Colorado roofing resource powered by My Family Roofer. The site focuses on Berthoud, Loveland, and Fort Collins and includes a roof quote decoder, hail resource, local landing pages, and four original roofing guides.

## Cloudflare Pages deployment

Connect this GitHub repository to Cloudflare Pages and use:

- Framework preset: `Next.js (Static HTML Export)`
- Production branch: `main`
- Build command: `npx next build`
- Build output directory: `out`
- Root directory: leave blank
- Node.js: `22` or newer

The production origin is `https://colorado-roofer.com`. If `NEXT_PUBLIC_SITE_URL` is set in Cloudflare Pages, keep it set to that exact origin so the sitemap, robots file, canonical links, and social metadata all use the primary domain.

## Local development

```bash
npm install
npx next dev
```

Create a production static export with:

```bash
npm run build
```

The deployable site will be written to `out/`.

## Included routes

- `/`
- `/roof-quote-decoder/`
- `/hail-damage/`
- `/locations/berthoud/`
- `/locations/loveland/`
- `/locations/fort-collins/`
- `/blog/` and four initial articles
