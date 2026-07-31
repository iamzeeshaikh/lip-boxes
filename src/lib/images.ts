/**
 * Resolves product photography from `src/assets/products/<slug>/<file>` so
 * Astro's image pipeline can generate responsive WebP and AVIF derivatives.
 *
 * Product data references images by filename only, which keeps the data layer
 * free of build-tool concerns and makes a missing image a build error rather
 * than a broken page.
 */
import type { ImageMetadata } from 'astro';

const registry = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/products/**/*.png',
  { eager: true },
);

export function productImage(slug: string, file: string): ImageMetadata {
  const key = `/src/assets/products/${slug}/${file}`;
  const found = registry[key];
  if (!found) {
    throw new Error(
      `Product image not found: ${key}. Run "node scripts/prepare-images.mjs" and check the filename in the product data file.`,
    );
  }
  return found.default;
}

export function hasProductImage(slug: string, file: string): boolean {
  return `/src/assets/products/${slug}/${file}` in registry;
}

/** Every registered image path, used by the asset audit script. */
export const allProductImagePaths = Object.keys(registry);

/**
 * Stable public URL for a product photograph.
 *
 * These files are emitted by `npm run images` into `public/images/products/`
 * with no content hash, so the URL survives a redeploy. Astro's own /_astro/
 * output is hashed and is rewritten by the host with a ?dpl= deployment
 * parameter, which makes it unusable in a sitemap or in structured data.
 */
export function publicImageUrl(slug: string, file: string): string {
  return `/images/products/${slug}/${file.replace(/\.png$/, '.webp')}`;
}

/** Stable JPEG social card for the same photograph. */
export function publicSocialUrl(slug: string, file: string): string {
  return `/images/products/${slug}/${file.replace(/\.png$/, '-social.jpg')}`;
}
