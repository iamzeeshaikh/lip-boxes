/**
 * robots.txt served at /robots.txt.
 * Nothing required for rendering is blocked: CSS, JS, fonts and images are all
 * crawlable. Only the form endpoint, which is not a page, is disallowed.
 */
import type { APIRoute } from 'astro';
import { site } from '../data/site';

export const prerender = true;

export const GET: APIRoute = () =>
  new Response(
    `User-agent: *
Allow: /

# The quote endpoint accepts POST only and is not a page.
Disallow: /api/

Sitemap: ${site.url}/sitemap.xml
`,
    { headers: { 'content-type': 'text/plain; charset=utf-8' } },
  );
