/**
 * Registry of every static page on the site.
 *
 * The sitemap, the footer audit and the internal-link report all read from
 * here, so a page cannot be published without appearing in the sitemap and a
 * sitemap entry cannot exist without a page.
 */

export interface StaticPage {
  path: string;
  /** Relative crawl priority. Kept coarse rather than pretending at precision. */
  priority: number;
  changefreq: 'daily' | 'weekly' | 'monthly' | 'yearly';
  indexable?: boolean;
  /** Date the page's content last changed, where it is known (YYYY-MM-DD). */
  lastmod?: string;
}

export const staticPages: StaticPage[] = [
  { path: '/', priority: 1.0, changefreq: 'weekly', lastmod: '2026-10-30' },
  { path: '/products/', priority: 0.9, changefreq: 'weekly', lastmod: '2026-10-30' },
  { path: '/resources/', priority: 0.8, changefreq: 'monthly' },
  { path: '/locations/', priority: 0.7, changefreq: 'monthly', lastmod: '2026-10-30' },
  { path: '/locations/states/', priority: 0.6, changefreq: 'monthly', lastmod: '2026-10-30' },
  { path: '/locations/cities/', priority: 0.6, changefreq: 'monthly', lastmod: '2026-10-30' },
  { path: '/custom-packaging/', priority: 0.7, changefreq: 'monthly' },
  { path: '/materials/', priority: 0.7, changefreq: 'monthly' },
  { path: '/printing-options/', priority: 0.7, changefreq: 'monthly' },
  { path: '/finishes/', priority: 0.7, changefreq: 'monthly' },
  { path: '/box-styles/', priority: 0.7, changefreq: 'monthly' },
  { path: '/artwork-guidelines/', priority: 0.7, changefreq: 'monthly' },
  { path: '/how-to-order/', priority: 0.6, changefreq: 'monthly' },
  { path: '/turnaround-time/', priority: 0.6, changefreq: 'monthly', lastmod: '2026-10-30' },
  { path: '/shipping-information/', priority: 0.6, changefreq: 'monthly', lastmod: '2026-10-30' },
  { path: '/sample-kit/', priority: 0.6, changefreq: 'monthly' },
  { path: '/faqs/', priority: 0.6, changefreq: 'monthly', lastmod: '2026-10-30' },
  { path: '/request-a-quote/', priority: 0.9, changefreq: 'monthly', lastmod: '2026-10-30' },
  { path: '/about/', priority: 0.5, changefreq: 'yearly', lastmod: '2026-10-30' },
  { path: '/contact/', priority: 0.6, changefreq: 'yearly', lastmod: '2026-10-30' },
  { path: '/blog/', priority: 0.6, changefreq: 'weekly' },
  { path: '/privacy-policy/', priority: 0.2, changefreq: 'yearly', lastmod: '2026-10-30' },
  { path: '/terms-and-conditions/', priority: 0.2, changefreq: 'yearly', lastmod: '2026-10-30' },
  { path: '/refund-and-return-policy/', priority: 0.3, changefreq: 'yearly', lastmod: '2026-10-30' },
];

export const indexableStaticPages = staticPages.filter((p) => p.indexable !== false);
