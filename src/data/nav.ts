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
      { href: '/lip-balm-packaging/', label: 'Lip Balm Packaging', note: 'Coordinated container, carton and label sets' },
      { href: '/hang-tab-lip-balm-boxes/', label: 'Hang Tab Lip Balm Boxes', note: 'Peg hook retail packs' },
      { href: '/paper-lip-balm-tubes/', label: 'Paper Lip Balm Tubes', note: 'Printed plastic-free push-up tubes' },
      { href: '/cardboard-lip-balm-tubes/', label: 'Cardboard Lip Balm Tubes', note: 'Unbleached kraft push-up tubes' },
      { href: '/custom-lip-balm-labels/', label: 'Custom Lip Balm Labels', note: 'Printed to your artwork' },
      { href: '/lip-balm-labels/', label: 'Lip Balm Labels', note: 'Formats, sizes and stocks' },
      { href: '/lipstick-boxes/', label: 'Lipstick Boxes', note: 'Compare every construction' },
      { href: '/custom-lipstick-boxes/', label: 'Custom Lipstick Boxes', note: 'Printed bullet cartons' },
      { href: '/rigid-lipstick-boxes/', label: 'Rigid Lipstick Boxes', note: 'Magnetic and drawer gift boxes' },
      { href: '/hang-tab-lipstick-boxes/', label: 'Hang Tab Lipstick Boxes', note: 'Window peg display cartons' },
      { href: '/lip-gloss-boxes/', label: 'Lip Gloss Boxes', note: 'Tall cartons for wand tubes' },
      { href: '/holographic-lip-gloss-boxes/', label: 'Holographic Lip Gloss Boxes', note: 'Iridescent metallised board' },
      { href: '/custom-lip-mask-boxes/', label: 'Custom Lip Mask Boxes', note: 'Hydrogel patch packaging' },
      { href: '/custom-lip-care-packaging/', label: 'Custom Lip Care Packaging', note: 'Bulk and private label programmes' },
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
  {
    label: 'Resources',
    href: '/resources/',
    children: [
      { href: '/resources/', label: 'All Guides', note: 'The full ten-guide library' },
      { href: '/resources/lip-product-packaging-guide/', label: 'Lip Packaging Guide', note: 'Start here if you are new to it' },
      { href: '/resources/lip-balm-box-size-guide/', label: 'Lip Balm Box Sizes', note: 'Measure a stick, get a carton size' },
      { href: '/resources/custom-packaging-cost-guide/', label: 'Packaging Cost Guide', note: 'What actually drives the unit price' },
      { href: '/resources/packaging-dieline-guide/', label: 'Dielines Explained', note: 'How a flat drawing becomes a box' },
      { href: '/resources/prepress-checklist/', label: 'Prepress Checklist', note: 'Check artwork before it goes to print' },
      { href: '/blog/', label: 'Blog', note: 'Shorter pieces and updates' },
    ],
  },
  {
    label: 'Locations',
    href: '/locations/',
    children: [
      { href: '/locations/', label: 'All Locations', note: 'Forty US market guides' },
      { href: '/locations/states/', label: 'By State', note: 'Twenty state guides' },
      { href: '/locations/cities/', label: 'By City', note: 'Twenty city guides' },
      { href: '/locations/states/california/', label: 'California', note: 'Indie density and shade ranges' },
      { href: '/locations/states/texas/', label: 'Texas', note: 'Multi-metro distribution' },
      { href: '/locations/states/new-york/', label: 'New York', note: 'Prestige retailer specifications' },
      { href: '/locations/states/florida/', label: 'Florida', note: 'Resort retail and humidity' },
    ],
  },
  { label: 'About', href: '/about/' },
  { label: 'Contact', href: '/contact/' },
];

export const footerNav: { heading: string; links: NavLink[] }[] = [
  {
    heading: 'Lip Balm',
    links: [
      { href: '/custom-lip-balm-boxes/', label: 'Custom Lip Balm Boxes' },
      { href: '/lip-balm-packaging/', label: 'Lip Balm Packaging' },
      { href: '/hang-tab-lip-balm-boxes/', label: 'Hang Tab Lip Balm Boxes' },
      { href: '/paper-lip-balm-tubes/', label: 'Paper Lip Balm Tubes' },
      { href: '/cardboard-lip-balm-tubes/', label: 'Cardboard Lip Balm Tubes' },
      { href: '/custom-lip-balm-labels/', label: 'Custom Lip Balm Labels' },
      { href: '/lip-balm-labels/', label: 'Lip Balm Labels' },
    ],
  },
  {
    heading: 'Lipstick, Gloss & Care',
    links: [
      { href: '/lipstick-boxes/', label: 'Lipstick Boxes' },
      { href: '/custom-lipstick-boxes/', label: 'Custom Lipstick Boxes' },
      { href: '/rigid-lipstick-boxes/', label: 'Rigid Lipstick Boxes' },
      { href: '/hang-tab-lipstick-boxes/', label: 'Hang Tab Lipstick Boxes' },
      { href: '/lip-gloss-boxes/', label: 'Lip Gloss Boxes' },
      { href: '/holographic-lip-gloss-boxes/', label: 'Holographic Lip Gloss Boxes' },
      { href: '/custom-lip-mask-boxes/', label: 'Custom Lip Mask Boxes' },
      { href: '/custom-lip-care-packaging/', label: 'Bulk & Private Label' },
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
    heading: 'Learn & Company',
    links: [
      { href: '/resources/', label: 'Packaging Guides' },
      { href: '/locations/', label: 'Locations' },
      { href: '/blog/', label: 'Blog' },
      { href: '/about/', label: 'About Lip Boxes' },
      { href: '/contact/', label: 'Contact' },
      { href: '/faqs/', label: 'FAQs' },
    ],
  },
];

export const legalNav: NavLink[] = [
  { href: '/privacy-policy/', label: 'Privacy Policy' },
  { href: '/terms-and-conditions/', label: 'Terms and Conditions' },
];
