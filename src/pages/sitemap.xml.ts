/**
 * XML sitemap served at exactly /sitemap.xml.
 *
 * Contains only canonical, indexable, 200-status pages with trailing slashes.
 * Product entries carry image references. Nothing is included that redirects,
 * 404s, carries noindex, duplicates another URL or holds a query string.
 */
import type { APIRoute } from 'astro';
import { getImage } from 'astro:assets';
import { abs } from '../data/site';
import { indexableProducts } from '../data/products';
import { indexableStaticPages } from '../data/pages';
import { blogPosts } from '../data/blog';
import { productImage } from '../lib/images';

export const prerender = true;

interface Entry {
  loc: string;
  changefreq: string;
  priority: string;
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
    entries.push({
      loc: abs(page.path),
      changefreq: page.changefreq,
      priority: page.priority.toFixed(1),
    });
  }

  for (const product of indexableProducts) {
    const images = await Promise.all(
      product.images.map(async (image) => {
        const generated = await getImage({
          src: productImage(product.slug, image.file),
          width: 1080,
          height: 1080,
          format: 'png',
        });
        return { loc: abs(generated.src), caption: image.caption ?? image.alt };
      }),
    );
    entries.push({
      loc: abs(`/${product.slug}/`),
      changefreq: 'monthly',
      priority: '0.9',
      images,
    });
  }

  for (const post of blogPosts) {
    entries.push({
      loc: abs(`/blog/${post.slug}/`),
      changefreq: 'yearly',
      priority: '0.5',
      // Publication dates are known, so lastmod is accurate here.
      lastmod: post.updated ?? post.published,
    });
  }

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${entries
  .map(
    (entry) => `  <url>
    <loc>${escapeXml(entry.loc)}</loc>${entry.lastmod ? `\n    <lastmod>${entry.lastmod}</lastmod>` : ''}
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>${
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
