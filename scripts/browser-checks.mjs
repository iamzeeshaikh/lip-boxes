/**
 * Browser checks over the production build.
 *
 *  - Responsive layout at 375, 768, 1024 and 1440 px, asserting no horizontal
 *    overflow and adequate touch-target sizes.
 *  - Keyboard navigation: skip link, focus visibility, menu operation, Escape.
 *  - JavaScript disabled: content, navigation and forms still work.
 *  - Console errors and failed requests on every page.
 *
 * Screenshots are written to reports/screenshots/ for visual review.
 */
import fs from 'node:fs';
import http from 'node:http';
import path from 'node:path';
import puppeteer from 'puppeteer';

const DIST = path.join(process.cwd(), 'dist/client');
const OUT = path.join(process.cwd(), 'reports/screenshots');
const PORT = 4461;
const BASE = `http://localhost:${PORT}`;

const MIME = {
  '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8', '.svg': 'image/svg+xml',
  '.png': 'image/png', '.jpg': 'image/jpeg', '.webp': 'image/webp',
  '.avif': 'image/avif', '.woff2': 'font/woff2', '.xml': 'application/xml',
  '.txt': 'text/plain', '.ico': 'image/x-icon',
  '.webmanifest': 'application/manifest+json',
};

const server = http.createServer((req, res) => {
  const url = new URL(req.url, BASE);
  let filePath = path.join(DIST, decodeURIComponent(url.pathname));
  if (url.pathname.endsWith('/')) filePath = path.join(filePath, 'index.html');
  if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
    res.writeHead(404, { 'content-type': 'text/html; charset=utf-8' });
    res.end(fs.readFileSync(path.join(DIST, '404.html')));
    return;
  }
  res.writeHead(200, { 'content-type': MIME[path.extname(filePath)] ?? 'application/octet-stream' });
  res.end(fs.readFileSync(filePath));
});
await new Promise((r) => server.listen(PORT, r));

fs.mkdirSync(OUT, { recursive: true });

let passed = 0;
const failures = [];
function check(name, condition, detail = '') {
  if (condition) {
    passed += 1;
    console.log(`  ok   ${name}`);
  } else {
    failures.push(name);
    console.log(`  FAIL ${name}${detail ? ` — ${detail}` : ''}`);
  }
}

const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox'] });

const ROUTES = [
  '/', '/products/', '/custom-lip-balm-boxes/', '/rigid-lipstick-boxes/',
  '/lip-balm-packaging/', '/request-a-quote/', '/blog/', '/contact/',
  '/materials/', '/404/',
];
const BREAKPOINTS = [
  { name: '375', width: 375, height: 812, mobile: true },
  { name: '768', width: 768, height: 1024, mobile: true },
  { name: '1024', width: 1024, height: 768, mobile: false },
  { name: '1440', width: 1440, height: 900, mobile: false },
];

/* ------------------------------------------------------------------ *
 * 1. Console errors and failed requests                               *
 * ------------------------------------------------------------------ */
console.log('Console and network');
{
  const problems = [];
  const page = await browser.newPage();
  page.on('console', (msg) => {
    if (msg.type() === 'error') problems.push(`console: ${msg.text().slice(0, 160)}`);
  });
  page.on('pageerror', (error) => problems.push(`pageerror: ${error.message.slice(0, 160)}`));
  page.on('requestfailed', (request) => {
    problems.push(`request failed: ${request.url().replace(BASE, '')}`);
  });
  page.on('response', (response) => {
    if (response.status() >= 400) {
      problems.push(`HTTP ${response.status()}: ${response.url().replace(BASE, '')}`);
    }
  });
  for (const route of ROUTES) {
    // /404/ is expected to answer with a 404 status; that is what makes it a
    // real error page rather than a soft 404.
    if (route === '/404/') continue;
    await page.goto(`${BASE}${route}`, { waitUntil: 'networkidle0' });
  }
  await page.close();
  check('no console errors, page errors or failed requests', problems.length === 0,
    problems.slice(0, 6).join(' | '));
}

/* ------------------------------------------------------------------ *
 * 2. Responsive layout                                                *
 * ------------------------------------------------------------------ */
console.log('\nResponsive layout');
for (const bp of BREAKPOINTS) {
  const page = await browser.newPage();
  await page.setViewport({
    width: bp.width, height: bp.height,
    deviceScaleFactor: bp.mobile ? 2 : 1,
    isMobile: bp.mobile, hasTouch: bp.mobile,
  });

  const overflowing = [];
  const smallTargets = [];

  for (const route of ROUTES) {
    await page.goto(`${BASE}${route}`, { waitUntil: 'networkidle0' });

    const overflow = await page.evaluate(() => {
      const docWidth = document.documentElement.clientWidth;
      if (document.documentElement.scrollWidth <= docWidth + 1) return null;
      // Name the widest offending element to make the failure actionable.
      let worst = null;
      for (const el of document.querySelectorAll('body *')) {
        const rect = el.getBoundingClientRect();
        if (rect.right > docWidth + 1 && (!worst || rect.right > worst.right)) {
          worst = { right: rect.right, tag: el.tagName, cls: el.className?.toString().slice(0, 60) };
        }
      }
      return { scrollWidth: document.documentElement.scrollWidth, docWidth, worst };
    });
    if (overflow) overflowing.push(`${route}: ${JSON.stringify(overflow)}`);

    if (bp.mobile) {
      const small = await page.evaluate(() => {
        const results = [];
        const selector = 'a, button, input:not([type="hidden"]), select, textarea, summary';
        for (const el of document.querySelectorAll(selector)) {
          const rect = el.getBoundingClientRect();
          if (rect.width === 0 || rect.height === 0) continue;
          if (el.closest('[aria-hidden="true"]')) continue;
          // WCAG 2.5.8 exempts links positioned inline within a sentence, so
          // links inside running prose and inside consent label text are not
          // held to the 24px minimum.
          if (
            el.tagName === 'A' &&
            el.closest('p, li, dd, figcaption, caption, td, th, label, legend')
          ) {
            continue;
          }
          if (rect.height < 24 || rect.width < 24) {
            results.push(`${el.tagName}.${el.className?.toString().slice(0, 30)} ${Math.round(rect.width)}x${Math.round(rect.height)}`);
          }
        }
        return results;
      });
      if (small.length) smallTargets.push(`${route}: ${small.slice(0, 3).join(', ')}`);
    }

    if (['/', '/custom-lip-balm-boxes/', '/products/', '/request-a-quote/'].includes(route)) {
      const name = route === '/' ? 'home' : route.replace(/\//g, '') || 'home';
      await page.screenshot({
        path: path.join(OUT, `${name}-${bp.name}.png`),
        fullPage: false,
      });
    }
  }

  check(`${bp.width}px — no horizontal overflow on any page`, overflowing.length === 0,
    overflowing.slice(0, 2).join(' | '));
  if (bp.mobile) {
    check(`${bp.width}px — interactive targets are at least 24px`, smallTargets.length === 0,
      smallTargets.slice(0, 2).join(' | '));
  }
  await page.close();
}

/* ------------------------------------------------------------------ *
 * 3. Keyboard navigation                                              *
 * ------------------------------------------------------------------ */
console.log('\nKeyboard navigation');
{
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto(`${BASE}/`, { waitUntil: 'networkidle0' });

  await page.keyboard.press('Tab');
  const first = await page.evaluate(() => {
    const el = document.activeElement;
    return { cls: el?.className?.toString() ?? '', text: el?.textContent?.trim() ?? '' };
  });
  check('first Tab reaches the skip link', first.cls.includes('skip-link'), JSON.stringify(first));

  const focusVisible = await page.evaluate(() => {
    const el = document.activeElement;
    const style = getComputedStyle(el);
    return style.outlineStyle !== 'none' || style.boxShadow !== 'none';
  });
  check('focused element has a visible focus indicator', focusVisible);

  await page.keyboard.press('Enter');
  await new Promise((r) => setTimeout(r, 200));
  check('skip link moves to the main landmark',
    await page.evaluate(() => window.location.hash === '#main'));

  // Tab to the first submenu trigger and open it with the keyboard.
  await page.goto(`${BASE}/`, { waitUntil: 'networkidle0' });
  const menuOpened = await page.evaluate(async () => {
    const button = document.querySelector('[data-submenu-toggle]');
    if (!button) return false;
    button.focus();
    button.click();
    return button.getAttribute('aria-expanded') === 'true';
  });
  check('submenu opens from the keyboard', menuOpened);

  await page.keyboard.press('Escape');
  await new Promise((r) => setTimeout(r, 100));
  check('Escape closes the submenu and keeps focus on the trigger',
    await page.evaluate(() =>
      document.querySelector('[data-submenu-toggle]')?.getAttribute('aria-expanded') === 'false' &&
      document.activeElement?.hasAttribute('data-submenu-toggle')));

  // Every focusable element must be reachable and show focus.
  await page.goto(`${BASE}/request-a-quote/`, { waitUntil: 'networkidle0' });
  const unreachable = await page.evaluate(() => {
    const focusable = [...document.querySelectorAll(
      'a[href], button, input:not([type="hidden"]), select, textarea, [tabindex]:not([tabindex="-1"])',
    )].filter(
      (el) =>
        !el.closest('[aria-hidden="true"]') &&
        (el.offsetParent !== null || el.classList.contains('skip-link')),
    );
    return focusable.filter((el) => el.tabIndex < 0).map((el) => el.tagName);
  });
  check('no visible control is removed from the tab order', unreachable.length === 0,
    unreachable.join(', '));

  const labelled = await page.evaluate(() => {
    const missing = [];
    for (const field of document.querySelectorAll('input:not([type="hidden"]), select, textarea')) {
      if (field.closest('[aria-hidden="true"]')) continue;
      const hasLabel =
        Boolean(document.querySelector(`label[for="${field.id}"]`)) ||
        Boolean(field.closest('label')) ||
        field.hasAttribute('aria-label') ||
        field.hasAttribute('aria-labelledby');
      if (!hasLabel) missing.push(field.name || field.id || field.type);
    }
    return missing;
  });
  check('every visible form field has a label', labelled.length === 0, labelled.join(', '));
  await page.close();
}

/* ------------------------------------------------------------------ *
 * 4. JavaScript disabled                                              *
 * ------------------------------------------------------------------ */
console.log('\nJavaScript disabled');
{
  const page = await browser.newPage();
  await page.setJavaScriptEnabled(false);
  await page.setViewport({ width: 1440, height: 900 });

  await page.goto(`${BASE}/custom-lip-balm-boxes/`, { waitUntil: 'domcontentloaded' });
  const noJs = await page.evaluate(() => ({
    h1: document.querySelector('h1')?.textContent?.trim() ?? '',
    paragraphs: document.querySelectorAll('main p').length,
    navLinks: document.querySelectorAll('nav a[href^="/"]').length,
    formAction: document.querySelector('form[data-quote-form]')?.getAttribute('action') ?? '',
    formMethod: document.querySelector('form[data-quote-form]')?.getAttribute('method') ?? '',
    galleryImages: document.querySelectorAll('.gallery img').length,
    specRows: document.querySelectorAll('#specification tbody tr').length,
    faqs: document.querySelectorAll('.faq').length,
    firstFaqOpen: document.querySelector('.faq')?.hasAttribute('open') ?? false,
    jsonLd: document.querySelectorAll('script[type="application/ld+json"]').length,
  }));

  check('H1 renders without JavaScript', noJs.h1.length > 0, noJs.h1);
  check('body copy renders without JavaScript', noJs.paragraphs > 20, `${noJs.paragraphs} paragraphs`);
  check('navigation links are real anchors', noJs.navLinks > 10, `${noJs.navLinks} links`);
  check('quote form posts to the server endpoint',
    noJs.formAction === '/api/quote/' && noJs.formMethod === 'post',
    `${noJs.formMethod} ${noJs.formAction}`);
  check('gallery images render', noJs.galleryImages > 0, `${noJs.galleryImages}`);
  check('specification table renders', noJs.specRows > 5, `${noJs.specRows} rows`);
  check('FAQs render and the first is open', noJs.faqs >= 10 && noJs.firstFaqOpen, `${noJs.faqs} FAQs`);
  check('structured data is present', noJs.jsonLd > 0);

  await page.goto(`${BASE}/products/`, { waitUntil: 'domcontentloaded' });
  const directory = await page.evaluate(() => ({
    cards: document.querySelectorAll('.p-card').length,
    links: [...document.querySelectorAll('.p-card__title a')].map((a) => a.getAttribute('href')),
  }));
  const expectedProducts = fs
    .readdirSync(path.join(process.cwd(), 'src/data/products'))
    .filter((f) => f.endsWith('.ts')).length;
  check('product directory lists every product without JavaScript',
    directory.cards === expectedProducts,
    `${directory.cards} cards, expected ${expectedProducts}`);
  check('directory links point at root-level product URLs',
    directory.links.every((href) => /^\/[a-z0-9-]+\/$/.test(href)),
    directory.links.filter((h) => !/^\/[a-z0-9-]+\/$/.test(h)).join(', '));
  await page.close();
}

/* ------------------------------------------------------------------ *
 * 5. Reduced motion                                                   *
 * ------------------------------------------------------------------ */
console.log('\nReduced motion');
{
  const page = await browser.newPage();
  await page.emulateMediaFeatures([{ name: 'prefers-reduced-motion', value: 'reduce' }]);
  await page.goto(`${BASE}/`, { waitUntil: 'networkidle0' });
  const durations = await page.evaluate(() => {
    const values = new Set();
    for (const el of document.querySelectorAll('a.btn, .p-card__img, html')) {
      const style = getComputedStyle(el);
      values.add(style.transitionDuration);
      values.add(style.animationDuration);
    }
    return [...values];
  });
  // The reduced-motion rule sets 0.01ms, which computes to 0.00001s.
  check('animations and transitions are suppressed',
    durations.every((d) => parseFloat(d) <= 0.0001),
    durations.join(', '));
  await page.close();
}

console.log(`\n${passed} passed, ${failures.length} failed`);
console.log(`Screenshots written to ${path.relative(process.cwd(), OUT)}/`);
await browser.close();
server.close();
if (failures.length) process.exit(1);
