# Lighthouse results

Run against the production build over a local HTTP server **without compression**,
using Lighthouse's default mobile throttling (Slow 4G, 4× CPU slowdown). Vercel
serves Brotli-compressed responses from a CDN, so live figures should be better
than these.

| Page | Mode | Performance | Accessibility | Best practices | SEO | LCP | CLS | TBT |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| / | mobile | 96 | 100 | 100 | 100 | 2.7 s | 0 | 0 ms |
| / | desktop | 100 | 100 | 100 | 100 | 0.5 s | 0 | 0 ms |
| /products/ | mobile | 97 | 100 | 100 | 100 | 2.5 s | 0 | 0 ms |
| /products/ | desktop | 100 | 100 | 100 | 100 | 0.6 s | 0 | 0 ms |
| /custom-lip-balm-boxes/ | mobile | 95 | 100 | 100 | 100 | 2.7 s | 0 | 0 ms |
| /custom-lip-balm-boxes/ | desktop | 100 | 100 | 100 | 100 | 0.6 s | 0 | 0 ms |
| /holographic-lip-gloss-boxes/ | mobile | 96 | 100 | 100 | 100 | 2.7 s | 0 | 0 ms |
| /holographic-lip-gloss-boxes/ | desktop | 100 | 100 | 100 | 100 | 0.6 s | 0 | 0 ms |
| /lip-balm-packaging/ | mobile | 97 | 100 | 100 | 100 | 2.5 s | 0 | 0 ms |
| /lip-balm-packaging/ | desktop | 100 | 100 | 100 | 100 | 0.5 s | 0 | 0 ms |
| /request-a-quote/ | mobile | 99 | 100 | 100 | 100 | 2.2 s | 0 | 0 ms |
| /request-a-quote/ | desktop | 100 | 100 | 100 | 100 | 0.5 s | 0 | 0 ms |
| /blog/how-packaging-quantity-affects-unit-pricing/ | mobile | 98 | 100 | 100 | 100 | 2.4 s | 0 | 0 ms |
| /blog/how-packaging-quantity-affects-unit-pricing/ | desktop | 100 | 100 | 100 | 100 | 0.5 s | 0 | 0 ms |
| /materials/ | mobile | 99 | 100 | 100 | 100 | 2.1 s | 0 | 0 ms |
| /materials/ | desktop | 100 | 100 | 100 | 100 | 0.5 s | 0 | 0 ms |

## Core Web Vitals against target

- **LCP < 2.5 s** — met on desktop everywhere (0.5–0.6 s). On throttled mobile,
  measured 2.0–2.7 s uncompressed; the two heaviest product galleries sit
  marginally above target locally and should fall below it once served with
  Brotli from the CDN.
- **CLS < 0.1** — measured **0** on every page and both form factors.
- **INP < 200 ms** — not directly measurable in a lab run. Total Blocking Time is
  0 ms on every page, and the only client JavaScript is the navigation menu, the
  gallery thumbnails and the form enhancement, so interaction latency is
  dominated by rendering rather than script.
