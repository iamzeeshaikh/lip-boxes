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
}

export const staticPages: StaticPage[] = [
  { path: '/', priority: 1.0, changefreq: 'weekly' },
  { path: '/products/', priority: 0.9, changefreq: 'weekly' },
  { path: '/lip-balm-packaging/', priority: 0.8, changefreq: 'monthly' },
  { path: '/custom-packaging/', priority: 0.7, changefreq: 'monthly' },
  { path: '/materials/', priority: 0.7, changefreq: 'monthly' },
  { path: '/printing-options/', priority: 0.7, changefreq: 'monthly' },
  { path: '/finishes/', priority: 0.7, changefreq: 'monthly' },
  { path: '/box-styles/', priority: 0.7, changefreq: 'monthly' },
  { path: '/artwork-guidelines/', priority: 0.7, changefreq: 'monthly' },
  { path: '/how-to-order/', priority: 0.6, changefreq: 'monthly' },
  { path: '/turnaround-time/', priority: 0.6, changefreq: 'monthly' },
  { path: '/shipping-information/', priority: 0.6, changefreq: 'monthly' },
  { path: '/sample-kit/', priority: 0.6, changefreq: 'monthly' },
  { path: '/faqs/', priority: 0.6, changefreq: 'monthly' },
  { path: '/request-a-quote/', priority: 0.9, changefreq: 'monthly' },
  { path: '/about/', priority: 0.5, changefreq: 'yearly' },
  { path: '/contact/', priority: 0.6, changefreq: 'yearly' },
  { path: '/blog/', priority: 0.6, changefreq: 'weekly' },
  { path: '/privacy-policy/', priority: 0.2, changefreq: 'yearly' },
  { path: '/terms-and-conditions/', priority: 0.2, changefreq: 'yearly' },
];

export const indexableStaticPages = staticPages.filter((p) => p.indexable !== false);
