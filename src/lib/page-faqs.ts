import data from '../data/page-faqs.json';

/**
 * Extra FAQs keyed by route (trailing slash) so every indexable page carries
 * at least ten. Answers are plain text (FaqList and faqSchema both use the
 * string as-is). withExtras() tops up an existing list; newExtras() returns
 * only the questions a page does not already show.
 */
type Faq = { q: string; a: string };
type Entry = { h2: string; faqs: Faq[] };
const DATA = data as Record<string, Entry>;
const norm = (p: string) => (p.endsWith('/') ? p : p + '/');

export const extraHeading = (route: string) => DATA[norm(route)]?.h2 ?? 'Frequently asked questions';
export function newExtras(route: string, faqs: Faq[] = []): Faq[] {
  const seen = new Set(faqs.map((f) => f.q.trim().toLowerCase()));
  return (DATA[norm(route)]?.faqs ?? []).filter((f) => !seen.has(f.q.trim().toLowerCase()));
}
export const withExtras = <T extends Faq>(route: string, faqs: T[] = []): Faq[] => [...faqs, ...newExtras(route, faqs)];
