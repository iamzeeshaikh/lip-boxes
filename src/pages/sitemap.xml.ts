/**
 * XML sitemap served at exactly /sitemap.xml.
 *
 * Contains only canonical, indexable, 200-status pages with trailing slashes.
 * Product entries carry image references. Nothing is included that redirects,
 * 404s, carries noindex, duplicates another URL or holds a query string.
 */
import type { APIRoute } from 'astro';
import { abs } from '../data/site';
import { indexableProducts } from '../data/products';
import { indexableStaticPages } from '../data/pages';
import { blogPosts } from '../data/blog';
import { indexableResources } from '../data/resources';
import { indexableLocations, locationUrl } from '../data/locations';
import { publicImageUrl } from '../lib/images';

export const prerender = true;

interface Entry {
  loc: string;
  /** Only set where a real content modification date is known. */
  lastmod?: string;
  images?: { loc: string; caption: string }[];
}

function escapeXml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export const GET: APIRoute = async () => {
  const entries: Entry[] = [];

  for (const page of indexableStaticPages) {
    entries.push({ loc: abs(page.path) });
  }

  for (const product of indexableProducts) {
    entries.push({
      loc: abs(`/${product.slug}/`),
      images: product.images.map((image) => ({
        loc: abs(publicImageUrl(product.slug, image.file)),
        caption: image.caption ?? image.alt,
      })),
    });
  }

  for (const resource of indexableResources) {
    entries.push({
      // The review date recorded in the data file, not a build timestamp.
      loc: abs(`/resources/${resource.slug}/`),
      lastmod: resource.updated,
    });
  }

  // No lastmod on location pages: there is no per-page review date recorded,
  // and a build timestamp would be a fabricated one.
  for (const location of indexableLocations) {
    entries.push({ loc: abs(locationUrl(location)) });
  }

  for (const post of blogPosts) {
    entries.push({
      // Publication dates are real, so lastmod is accurate here.
      loc: abs(`/blog/${post.slug}/`),
      lastmod: post.updated ?? post.published,
    });
  }

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${entries
  .map(
    (entry) => `  <url>
    <loc>${escapeXml(entry.loc)}</loc>${entry.lastmod ? `\n    <lastmod>${entry.lastmod}</lastmod>` : ''}${
      entry.images
        ?.map(
          (image) => `\n    <image:image>
      <image:loc>${escapeXml(image.loc)}</image:loc>
      <image:caption>${escapeXml(image.caption)}</image:caption>
    </image:image>`,
        )
        .join('') ?? ''
    }
  </url>`,
  )
  .join('\n')}
</urlset>
`;

  return new Response(body, {
    headers: { 'content-type': 'application/xml; charset=utf-8' },
  });
};
