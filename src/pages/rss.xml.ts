/** RSS 2.0 feed for the blog. */
import type { APIRoute } from 'astro';
import { abs, site } from '../data/site';
import { blogPosts } from '../data/blog';

export const prerender = true;

function esc(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export const GET: APIRoute = () => {
  const items = blogPosts
    .map(
      (post) => `    <item>
      <title>${esc(post.title)}</title>
      <link>${abs(`/blog/${post.slug}/`)}</link>
      <guid isPermaLink="true">${abs(`/blog/${post.slug}/`)}</guid>
      <description>${esc(post.metaDescription)}</description>
      <pubDate>${new Date(`${post.published}T09:00:00Z`).toUTCString()}</pubDate>
    </item>`,
    )
    .join('\n');

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${esc(site.name)} — Lip packaging notes</title>
    <link>${site.url}/blog/</link>
    <atom:link href="${site.url}/rss.xml" rel="self" type="application/rss+xml" />
    <description>Practical articles on packaging lip balm, lipstick, lip gloss and lip care products.</description>
    <language>en-us</language>
${items}
  </channel>
</rss>
`,
    { headers: { 'content-type': 'application/rss+xml; charset=utf-8' } },
  );
};
