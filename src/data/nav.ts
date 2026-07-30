/** Sitewide navigation. Every href is lowercase, hyphenated and trailing-slashed. */

export interface NavLink {
  href: string;
  label: string;
  /** Optional short note shown in the products dropdown. */
  note?: string;
}

export const primaryNav: { label: string; href?: string; children?: NavLink[] }[] = [
  {
    label: 'Products',
    href: '/products/',
    children: [
      { href: '/custom-lip-balm-boxes/', label: 'Custom Lip Balm Boxes', note: 'Cartons for stick and tin formats' },
      { href: '/hang-tab-lip-balm-boxes/', label: 'Hang Tab Lip Balm Boxes', note: 'Peg hook retail packs' },
      { href: '/paper-lip-balm-tubes/', label: 'Paper Lip Balm Tubes', note: 'Plastic-free push-up tubes' },
      { href: '/custom-lip-balm-labels/', label: 'Custom Lip Balm Labels', note: 'Waterproof wrap labels' },
      { href: '/custom-lipstick-boxes/', label: 'Custom Lipstick Boxes', note: 'Printed bullet cartons' },
      { href: '/rigid-lipstick-boxes/', label: 'Rigid Lipstick Boxes', note: 'Magnetic and drawer gift boxes' },
      { href: '/hang-tab-lipstick-boxes/', label: 'Hang Tab Lipstick Boxes', note: 'Window peg display cartons' },
      { href: '/lip-gloss-boxes/', label: 'Lip Gloss Boxes', note: 'Tall cartons for wand tubes' },
      { href: '/holographic-lip-gloss-boxes/', label: 'Holographic Lip Gloss Boxes', note: 'Iridescent metallised board' },
      { href: '/custom-lip-mask-boxes/', label: 'Custom Lip Mask Boxes', note: 'Hydrogel patch packaging' },
      { href: '/custom-lip-care-packaging/', label: 'Custom Lip Care Packaging', note: 'Bulk and private label programmes' },
      { href: '/lip-balm-packaging/', label: 'Lip Balm Packaging Guide', note: 'Compare every balm format' },
    ],
  },
  {
    label: 'Specification',
    children: [
      { href: '/materials/', label: 'Materials' },
      { href: '/printing-options/', label: 'Printing Options' },
      { href: '/finishes/', label: 'Finishes' },
      { href: '/box-styles/', label: 'Box Styles' },
      { href: '/artwork-guidelines/', label: 'Artwork Guidelines' },
      { href: '/custom-packaging/', label: 'Custom Packaging' },
    ],
  },
  {
    label: 'Ordering',
    children: [
      { href: '/how-to-order/', label: 'How to Order' },
      { href: '/turnaround-time/', label: 'Turnaround Time' },
      { href: '/shipping-information/', label: 'Shipping Information' },
      { href: '/sample-kit/', label: 'Sample Kit' },
      { href: '/faqs/', label: 'FAQs' },
    ],
  },
  { label: 'Blog', href: '/blog/' },
  { label: 'About', href: '/about/' },
  { label: 'Contact', href: '/contact/' },
];

export const footerNav: { heading: string; links: NavLink[] }[] = [
  {
    heading: 'Lip Balm',
    links: [
      { href: '/custom-lip-balm-boxes/', label: 'Custom Lip Balm Boxes' },
      { href: '/hang-tab-lip-balm-boxes/', label: 'Hang Tab Lip Balm Boxes' },
      { href: '/paper-lip-balm-tubes/', label: 'Paper Lip Balm Tubes' },
      { href: '/custom-lip-balm-labels/', label: 'Custom Lip Balm Labels' },
      { href: '/lip-balm-packaging/', label: 'Lip Balm Packaging Guide' },
    ],
  },
  {
    heading: 'Lipstick & Gloss',
    links: [
      { href: '/custom-lipstick-boxes/', label: 'Custom Lipstick Boxes' },
      { href: '/rigid-lipstick-boxes/', label: 'Rigid Lipstick Boxes' },
      { href: '/hang-tab-lipstick-boxes/', label: 'Hang Tab Lipstick Boxes' },
      { href: '/lip-gloss-boxes/', label: 'Lip Gloss Boxes' },
      { href: '/holographic-lip-gloss-boxes/', label: 'Holographic Lip Gloss Boxes' },
    ],
  },
  {
    heading: 'Specification',
    links: [
      { href: '/materials/', label: 'Materials' },
      { href: '/printing-options/', label: 'Printing Options' },
      { href: '/finishes/', label: 'Finishes' },
      { href: '/box-styles/', label: 'Box Styles' },
      { href: '/artwork-guidelines/', label: 'Artwork Guidelines' },
    ],
  },
  {
    heading: 'Ordering',
    links: [
      { href: '/request-a-quote/', label: 'Request a Quote' },
      { href: '/how-to-order/', label: 'How to Order' },
      { href: '/turnaround-time/', label: 'Turnaround Time' },
      { href: '/shipping-information/', label: 'Shipping Information' },
      { href: '/sample-kit/', label: 'Sample Kit' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { href: '/about/', label: 'About Lip Boxes' },
      { href: '/custom-lip-care-packaging/', label: 'Bulk & Private Label' },
      { href: '/custom-lip-mask-boxes/', label: 'Custom Lip Mask Boxes' },
      { href: '/blog/', label: 'Blog' },
      { href: '/contact/', label: 'Contact' },
      { href: '/faqs/', label: 'FAQs' },
    ],
  },
];

export const legalNav: NavLink[] = [
  { href: '/privacy-policy/', label: 'Privacy Policy' },
  { href: '/terms-and-conditions/', label: 'Terms and Conditions' },
];
