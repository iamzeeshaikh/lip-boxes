/**
 * Runs Lighthouse in mobile and desktop modes over a representative set of
 * pages, served from the production build, and writes reports/lighthouse.json.
 *
 *   node scripts/lighthouse.mjs
 */
import fs from 'node:fs';
import http from 'node:http';
import path from 'node:path';
import lighthouse from 'lighthouse';
import * as chromeLauncher from 'chrome-launcher';

const DIST = path.join(process.cwd(), 'dist/client');
const PORT = 4457;
const BASE = `http://localhost:${PORT}`;

const ROUTES = [
  '/',
  '/products/',
  '/custom-lip-balm-boxes/',
  '/holographic-lip-gloss-boxes/',
  '/lip-balm-packaging/',
  '/request-a-quote/',
  '/blog/how-packaging-quantity-affects-unit-pricing/',
  '/materials/',
  '/resources/',
  '/resources/lip-balm-box-size-guide/',
  '/locations/',
  '/locations/states/texas/',
  '/locations/cities/phoenix/',
];

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.webp': 'image/webp',
  '.avif': 'image/avif',
  '.woff2': 'font/woff2',
  '.xml': 'application/xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.ico': 'image/x-icon',
  '.webmanifest': 'application/manifest+json',
};

/** Serves the built output with the same headers the host will send. */
const server = http.createServer((req, res) => {
  const url = new URL(req.url, BASE);
  let filePath = path.join(DIST, decodeURIComponent(url.pathname));
  if (url.pathname.endsWith('/')) filePath = path.join(filePath, 'index.html');

  if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
    res.writeHead(404, { 'content-type': 'text/html; charset=utf-8' });
    res.end(fs.readFileSync(path.join(DIST, '404.html')));
    return;
  }

  const ext = path.extname(filePath);
  const headers = {
    'content-type': MIME[ext] ?? 'application/octet-stream',
    'x-content-type-options': 'nosniff',
    'referrer-policy': 'strict-origin-when-cross-origin',
    'x-frame-options': 'DENY',
    'content-security-policy':
      "default-src 'self'; base-uri 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self'; connect-src 'self'; form-action 'self'; frame-src 'none'; object-src 'none'; frame-ancestors 'none'",
  };
  if (filePath.includes('/_astro/') || filePath.includes('/fonts/')) {
    headers['cache-control'] = 'public, max-age=31536000, immutable';
  }
  res.writeHead(200, headers);
  res.end(fs.readFileSync(filePath));
});

await new Promise((resolve) => server.listen(PORT, resolve));

const chrome = await chromeLauncher.launch({
  chromeFlags: ['--headless=new', '--no-sandbox', '--disable-gpu'],
});

const CATEGORIES = ['performance', 'accessibility', 'best-practices', 'seo'];

async function run(url, formFactor) {
  const mobile = formFactor === 'mobile';
  const result = await lighthouse(url, {
    port: chrome.port,
    output: 'json',
    logLevel: 'error',
    onlyCategories: CATEGORIES,
    formFactor,
    screenEmulation: mobile
      ? { mobile: true, width: 412, height: 823, deviceScaleFactor: 2.625, disabled: false }
      : { mobile: false, width: 1440, height: 900, deviceScaleFactor: 1, disabled: false },
    throttling: mobile
      ? { rttMs: 150, throughputKbps: 1638.4, cpuSlowdownMultiplier: 4,
          requestLatencyMs: 562.5, downloadThroughputKbps: 1474.56, uploadThroughputKbps: 675 }
      : { rttMs: 40, throughputKbps: 10240, cpuSlowdownMultiplier: 1,
          requestLatencyMs: 0, downloadThroughputKbps: 0, uploadThroughputKbps: 0 },
  });
  const lhr = result.lhr;
  return {
    scores: Object.fromEntries(
      CATEGORIES.map((c) => [c, Math.round((lhr.categories[c]?.score ?? 0) * 100)]),
    ),
    metrics: {
      LCP: lhr.audits['largest-contentful-paint']?.displayValue ?? null,
      CLS: lhr.audits['cumulative-layout-shift']?.displayValue ?? null,
      TBT: lhr.audits['total-blocking-time']?.displayValue ?? null,
      FCP: lhr.audits['first-contentful-paint']?.displayValue ?? null,
      SI: lhr.audits['speed-index']?.displayValue ?? null,
    },
    failedAudits: Object.values(lhr.audits)
      .filter(
        (audit) =>
          audit.score !== null &&
          audit.score < 1 &&
          audit.scoreDisplayMode !== 'informative' &&
          audit.scoreDisplayMode !== 'notApplicable',
      )
      .map((audit) => ({ id: audit.id, title: audit.title, score: audit.score })),
  };
}

const report = {};
for (const route of ROUTES) {
  report[route] = {};
  for (const formFactor of ['mobile', 'desktop']) {
    process.stdout.write(`${route} (${formFactor}) … `);
    report[route][formFactor] = await run(`${BASE}${route}`, formFactor);
    const { scores, metrics } = report[route][formFactor];
    console.log(
      `P ${scores.performance}  A11y ${scores.accessibility}  BP ${scores['best-practices']}  SEO ${scores.seo}  | LCP ${metrics.LCP}  CLS ${metrics.CLS}`,
    );
  }
}

fs.mkdirSync(path.join(process.cwd(), 'reports'), { recursive: true });
fs.writeFileSync(
  path.join(process.cwd(), 'reports/lighthouse.json'),
  JSON.stringify(report, null, 2) + '\n',
);

console.log('\nFailed audits across all runs:');
const seen = new Map();
for (const [route, byFactor] of Object.entries(report)) {
  for (const [factor, data] of Object.entries(byFactor)) {
    for (const audit of data.failedAudits) {
      const key = audit.id;
      if (!seen.has(key)) seen.set(key, { title: audit.title, where: [] });
      seen.get(key).where.push(`${route} (${factor})`);
    }
  }
}
if (seen.size === 0) console.log('  none');
for (const [id, info] of seen) {
  console.log(`  · ${id}: ${info.title}`);
  console.log(`      ${info.where.slice(0, 4).join(', ')}${info.where.length > 4 ? ` +${info.where.length - 4} more` : ''}`);
}

chrome.kill();
server.close();
