# Deployment guide

The site is a static Astro build plus one serverless function for the quote
forms. It targets Vercel, which the adapter is configured for.

---

## 1. Prerequisites

- **Node.js 24.** Vercel's serverless runtime is Node 24, and `.nvmrc` pins it.
  Building on Node 25 works locally but prints a warning.
- A Vercel account with the `lipboxes.com` domain available to attach.
- A mailbox that can send via SMTP (Gmail with an app password is what the
  configuration assumes).

```bash
nvm use          # reads .nvmrc
npm ci
npm run build
```

---

## 2. Environment variables

Set these in **Vercel → Project → Settings → Environment Variables**, for the
Production environment (and Preview, if you want the form working there too).

| Variable | Required | Example | Notes |
| --- | --- | --- | --- |
| `SMTP_HOST` | Yes | `smtp.gmail.com` | |
| `SMTP_PORT` | Yes | `587` | 587 uses STARTTLS; 465 uses implicit TLS |
| `SMTP_SECURE` | No | `false` | Defaults to `true` only when the port is 465 |
| `SMTP_USER` | Yes | `your-account@gmail.com` | The authenticating account |
| `SMTP_PASS` | Yes | *(16-character app password)* | See section 3 |
| `SMTP_TO` | Yes | `enquiries@your-domain.com` | Where enquiries are delivered |
| `SMTP_FROM_NAME` | No | `Lip Boxes` | Display name on the From header |
| `SMTP_FROM_EMAIL` | No | `info@lipboxes.com` | See the note in section 3 |

**None of these may be prefixed with `PUBLIC_`.** They are read through
`process.env` inside the server endpoint at request time, so nothing is ever
inlined into a client bundle. The build is verified against this: `npm run
audit:site` fails if any SMTP identifier appears in the generated JS, CSS or HTML.

Locally, copy `.env.example` to `.env` and fill it in. `.env` is gitignored.

---

## 3. Gmail specifics

1. Enable two-step verification on the account in `SMTP_USER`.
2. Create an **app password** (Google Account → Security → App passwords) and use
   the 16-character value as `SMTP_PASS`. A normal account password will not
   authenticate.
3. `SMTP_FROM_EMAIL` is set to `info@lipboxes.com`, which differs from
   `SMTP_USER`. Gmail rejects or rewrites a From address it has not verified, so
   the code handles this automatically: it keeps the display name, authenticates
   honestly with the account address in `From`, and puts the intended branded
   address in the `Sender` header.

   To send genuinely as `info@lipboxes.com`, add it as a verified **send-as
   alias** on the Gmail account first. Once verified, the code uses it directly
   in `From` with no change needed.

4. Verify the configuration without sending anything:

   ```bash
   npm run smtp:test           # connect and authenticate only
   npm run smtp:test -- --send # also send one test message to SMTP_TO
   ```

   The script never prints the password and redacts it from any error.

---

## 4. Deploying

```bash
npx vercel        # preview deployment
npx vercel --prod # production
```

Or connect the Git repository and let Vercel build on push. The build command is
`npm run build`; the adapter writes `.vercel/output`, so no output directory
needs configuring.

---

## 5. Domain and canonical host

`https://lipboxes.com` (no `www`) is the canonical origin, set in
`astro.config.mjs` as `site`.

In Vercel → Domains:

1. Add `lipboxes.com` as the **primary** domain.
2. Add `www.lipboxes.com` and set it to **redirect to `lipboxes.com`**.

Vercel serves HTTPS and redirects HTTP automatically. `vercel.json` also carries
a host-matched 301 from `www` as a second line of defence. All four variants
resolve in a single hop:

| Request | Result |
| --- | --- |
| `http://lipboxes.com/x/` | 301 → `https://lipboxes.com/x/` |
| `http://www.lipboxes.com/x/` | 301 → `https://lipboxes.com/x/` |
| `https://www.lipboxes.com/x/` | 301 → `https://lipboxes.com/x/` |
| `https://lipboxes.com/x` | 308 → `https://lipboxes.com/x/` |

Trailing slashes are handled by the Astro adapter (`trailingSlash: 'always'`).
Do **not** also set `trailingSlash` in `vercel.json` — the two together can
produce a redirect loop.

---

## 6. Security headers

`vercel.json` sets these on every response. They are already tested against the
live pages, images, fonts and forms.

| Header | Value |
| --- | --- |
| `Strict-Transport-Security` | `max-age=63072000; includeSubDomains; preload` |
| `Content-Security-Policy` | `default-src 'self'` with a strict `script-src 'self'` |
| `X-Content-Type-Options` | `nosniff` |
| `X-Frame-Options` | `DENY` |
| `Referrer-Policy` | `strict-origin-when-cross-origin` |
| `Permissions-Policy` | All sensitive features denied |
| `Cross-Origin-Opener-Policy` | `same-origin` |
| `Cross-Origin-Resource-Policy` | `same-site` |

Notes:

- `style-src` includes `'unsafe-inline'` because Astro emits scoped component
  styles inline. `script-src` does **not** — `vite.build.assetsInlineLimit: 0`
  forces every script to an external file so the strict policy holds. If you
  remove that setting, the navigation script will be inlined and blocked.
- Adding any third-party script (analytics, chat, pixels) requires extending
  `script-src` and `connect-src`. Do that deliberately rather than falling back
  to `'unsafe-inline'`.
- `Strict-Transport-Security` includes `preload`. Only submit the domain to the
  HSTS preload list once you are certain every subdomain will serve HTTPS
  permanently.

---

## 7. Rate limiting

The form endpoint has an in-memory limiter (5 submissions per IP per 10 minutes).
On serverless, each warm instance keeps its own counters, so this dampens bursts
rather than enforcing a global cap.

For a hard limit, add a **Vercel Firewall** rule: Project → Firewall → Custom
Rules → rate-limit `POST /api/quote` to a sensible threshold per IP.

---

## 8. Post-deployment checks

```bash
npm run build
npm run audit:site      # crawl, links, metadata, schema, sitemap, robots
npm run test:browser    # responsive, keyboard, no-JS, console
npm run lighthouse      # mobile and desktop scores
npm run test:form -- https://lipboxes.com   # endpoint behaviour against live
```

Then confirm by hand:

1. `https://lipboxes.com/sitemap.xml` returns XML listing all 40 pages.
2. `https://lipboxes.com/robots.txt` returns the expected policy.
3. A nonsense URL returns a real **404 status**, not a 200.
4. `https://www.lipboxes.com/` 301s to the apex domain.
5. Submit the short form on a product page and confirm the email arrives at
   `SMTP_TO` with the product name, page URL and a working Reply-To.
6. Submit with JavaScript disabled and confirm the server-rendered confirmation
   page appears.
7. Run the live URLs through Google's Rich Results Test.
8. Submit the sitemap in Google Search Console.

---

## 9. Adding a product later

1. Put curated images in the source folder and add them to the `MAP` in
   `scripts/prepare-images.mjs`, then run `npm run images`.
2. Create `src/data/products/<slug>.ts` following an existing file.
3. Import and add it to the array in `src/data/products.ts`.
4. Add it to `src/data/nav.ts` (primary and footer navigation).
5. Add it to the `related` array of at least two existing products, so the audit's
   two-inbound-links rule passes.

The route, sitemap entry, product directory card, schema and social image are all
generated from that data. Run `npm run build && npm run audit:site` to confirm.

## 10. Adding a blog post later

Add an entry to the array in `src/data/blog.ts`. The route, RSS item, sitemap
entry, `BlogPosting` schema and index card follow automatically.
