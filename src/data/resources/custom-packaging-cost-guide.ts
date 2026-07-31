import type { Resource } from '../content-types';

export const resource: Resource = {
  slug: 'custom-packaging-cost-guide',
  title: 'Custom Packaging Cost Guide',
  h1: 'Custom Packaging Cost Guide',
  primaryKeyword: 'custom packaging cost',
  secondaryKeywords: [
    'packaging cost breakdown',
    'what affects packaging price',
    'packaging setup costs',
    'reading a packaging quote',
  ],
  searchIntent:
    'What am I actually paying for in a packaging quote, and which parts can I change?',
  group: 'Planning',
  seoTitle: 'Custom Packaging Cost Guide | What Drives Price',
  metaDescription:
    'What sits inside a packaging quote, which costs are one-time, and the specification changes that move unit price the most.',
  ogTitle: 'What Actually Drives Custom Packaging Cost',
  ogDescription:
    'One-time versus per-unit costs, where the volume breakpoints fall, and how to read a quote properly.',
  deck: 'A quote is one-time costs plus per-unit costs divided by quantity. Knowing which is which changes what you ask for.',
  cardDescription:
    'One-time versus per-unit costs, volume breakpoints, and the specification changes that move price most.',
  highlights: [
    'Which costs disappear with volume and which never do',
    'A worked cost curve you can apply to your own quote',
    'Six ways to reduce price without ordering more',
  ],
  updated: '2026-07-30',
  readingMinutes: 10,
  hero: {
    slug: 'lipstick-boxes',
    file: 'lipstick-boxes-matte-dark-range.png',
    alt: 'Dark plum lipstick cartons arranged on white display blocks with matching lipstick cases',
  },
  sections: [
    {
      type: 'prose',
      id: 'two-kinds-of-cost',
      heading: 'Every packaging quote is two kinds of cost',
      navLabel: 'Two cost types',
      body: [
        'A packaging price is made of costs that happen once per job and costs that happen once per unit. The unit price you are quoted is the second, plus the first divided by your quantity. That is the whole model, and almost everything confusing about packaging pricing follows from it.',
        'One-time costs are the cutting die, the printing plates, the press make-ready, any foil or emboss tooling, and the proofing cycle. None of them care whether you order 500 units or 50,000. Spread across 500 they dominate the price completely. Spread across 50,000 they nearly vanish.',
        'Per-unit costs are board, ink, laminate, the press time each sheet consumes, and any hand work. These fall much more gently with volume, mostly through better material purchasing rather than through arithmetic.',
      ],
    },
    {
      type: 'compare',
      id: 'cost-curve',
      heading: 'What the curve looks like',
      navLabel: 'The cost curve',
      intro:
        'Illustrative figures, using $600 of one-time setup and $0.22 of per-unit cost. The shape is what matters, not the numbers.',
      columns: ['Quantity', 'Setup per unit', 'Per-unit cost', 'Indicative unit price', 'Change from previous'],
      rows: [
        ['500', '$1.20', '$0.22', '$1.42', '—'],
        ['1,000', '$0.60', '$0.22', '$0.82', '−42%'],
        ['2,500', '$0.24', '$0.22', '$0.46', '−44%'],
        ['5,000', '$0.12', '$0.22', '$0.34', '−26%'],
        ['10,000', '$0.06', '$0.215', '$0.275', '−19%'],
        ['25,000', '$0.024', '$0.21', '$0.234', '−15%'],
        ['50,000', '$0.012', '$0.20', '$0.212', '−9%'],
        ['100,000', '$0.006', '$0.19', '$0.196', '−8%'],
      ],
      outro:
        'The steepest fall is at the start. Going from 500 to 1,000 is usually the single largest percentage saving available on any packaging order. Going from 50,000 to 100,000 changes very little, because setup has already been absorbed.',
    },
    {
      type: 'prose',
      id: 'reading-the-curve',
      heading: 'What that curve means for your order',
      navLabel: 'Reading the curve',
      body: [
        'If you are ordering small quantities, a modest increase is disproportionately worthwhile. Doubling from 500 to 1,000 units in the example above cuts the unit price by more than 40%, so the second 500 units cost roughly a quarter of the first 500.',
        'If you are already ordering in the tens of thousands, pushing volume further to chase a lower unit price mostly moves cash into inventory. An 8% saving on the last tranche rarely justifies holding a year of extra stock, particularly for packaging that might be redesigned.',
        'The practical instruction is the same either way: ask for pricing at your quantity and at the next volume break. That single request tells you where you sit on the curve, which is more useful than any headline rate.',
      ],
    },
    {
      type: 'list',
      id: 'what-moves-price',
      heading: 'Specification changes, ranked by how much they move price',
      navLabel: 'What moves price',
      intro:
        'Roughly ordered from largest to smallest effect on a typical lip packaging order.',
      items: [
        'Quantity — the largest single lever, because it divides every one-time cost',
        'Print process — digital versus offset, which is itself decided by quantity and design count',
        'Number of print colours, and whether an opaque white underprint is needed',
        'Foil or embossing, which add both tooling and a production pass',
        'Board weight and grade, including specialty stocks like black-through or metallised',
        'Laminate versus varnish, which is a material and a converting pass',
        'Inserts, which are a second die and often a second production run',
        'Window patching, which is an extra machine pass and a second material',
        'Hand assembly, which is why rigid construction sits in a different bracket entirely',
        'Case packing to a specific count or pallet pattern, usually minor but not free',
      ],
      outro:
        'Foil and emboss deserve singling out because they hit both categories. The tooling is one-time and the pass is per-unit, which makes them disproportionately expensive at low volumes and quite reasonable at high ones.',
    },
    {
      type: 'features',
      id: 'reduce-without-volume',
      heading: 'Six ways to reduce cost without ordering more',
      navLabel: 'Reducing cost',
      icon: 'layers',
      intro:
        'All of these are available at your current quantity.',
      items: [
        {
          title: 'Standardise across a range',
          text: 'Several products on one board, one ink set and one finish can share press sheets, splitting the make-ready. On a multi-SKU launch this is frequently the biggest saving available.',
        },
        {
          title: 'Reorder against held tooling',
          text: 'Once a die is cut and a proof approved, a repeat order carries no die or proofing charge. Say at the first quote that you expect to reorder, so the tooling is quoted with that in mind.',
        },
        {
          title: 'Drop one production pass',
          text: 'Moving from laminate to varnish, or removing a spot UV pass, often saves more than trimming board weight and is less visible to the customer.',
        },
        {
          title: 'Use a spot colour instead of foil',
          text: 'A metallic or pearlescent ink covers large areas at a fraction of foil cost. Reserve foil for small areas where it genuinely reads as metal.',
        },
        {
          title: 'Schedule a call-off',
          text: 'Produce the full quantity in one run to hold the volume price, then take delivery against a schedule so you are not warehousing everything at once.',
        },
        {
          title: 'Consolidate freight',
          text: 'Bulky items are charged on volume, not weight. Fewer, larger consignments frequently cost materially less than several small ones.',
        },
      ],
    },
    {
      type: 'prose',
      id: 'what-a-starting-price-means',
      heading: 'What a headline starting price actually tells you',
      navLabel: 'Starting prices',
      body: [
        'Every packaging supplier publishes an entry figure, and it is worth understanding what one is. Ours is stated on every product page: price starts from $0.30 per piece for large-volume orders, with final pricing depending on size, material, printing, and quantity.',
        'A figure like that describes the simplest possible specification at the highest volume: plain board, a straightforward print, no foil, no insert, no window. It is a floor for comparison between suppliers, not a quote.',
        'When comparing two suppliers, compare specifications rather than headline numbers. Ask which board weight, how many colours, whether tooling is included, whether an insert is in the price, and whether freight is separate. A quote that looks 20% cheaper very often has one of those answers different.',
      ],
    },
    {
      type: 'prose',
      id: 'hidden-costs',
      heading: 'The costs that appear late',
      navLabel: 'Late costs',
      body: [
        'Four items routinely arrive after a budget has been set, and together they often add more than the choice of finish did.',
        'Inserts, once someone notices the product moves in the carton. A folded leaflet, once the ingredient declaration will not fit legibly on the panel. A shipper, once the first e-commerce order arrives crushed. And a second die line, once a retailer asks for a peg-ready version.',
        'None of these are expensive individually and all are cheaper to include in the first quote than to add as a change. When you request pricing, ask explicitly whether each is included, rather than assuming.',
      ],
    },
    {
      type: 'prose',
      id: 'reading-a-quote',
      heading: 'How to read a packaging quote properly',
      navLabel: 'Reading a quote',
      body: [
        'Ask for one-time costs to be separated from unit cost. If a supplier lists them separately, you can immediately see what a reorder will cost and whether the specification or the volume is driving your price. If they will not separate them, that is worth noting.',
        'Ask what happens at the next volume break, and at half your quantity. Three points on the curve tell you far more than one, and occasionally reveal that a larger order costs less in total.',
        'Ask what is excluded. Freight, tooling, inserts, samples, proofs and any rush charge are the usual candidates. A complete quote names them even when the answer is zero. The stages a quote covers are set out on our <a href="/how-to-order/">what happens once a quote is accepted</a>.',
      ],
    },
  ],
  faqs: [
    {
      q: 'Why is my small order so expensive per unit?',
      a: 'Because one-time costs — the die, the plates, the make-ready and the proofing — are divided by your quantity. At 500 units those costs can be more than the board and ink combined. At 50,000 they are a rounding error.',
    },
    {
      q: 'What is the single biggest lever on packaging price?',
      a: 'Quantity, because it divides every one-time cost. After that it is the print process, then the number of colours, then whether the job carries foil or embossing, both of which add tooling and a production pass.',
    },
    {
      q: 'Is it worth increasing my order to hit a lower unit price?',
      a: 'At small volumes, usually yes — the curve is steepest at the start, and doubling from 500 to 1,000 can cut the unit price by over 40%. At high volumes it mostly moves cash into inventory for a single-digit percentage saving.',
    },
    {
      q: 'How much cheaper is a reorder?',
      a: 'Meaningfully, because the die and the proofs already exist and are held. A reorder is priced on print and material at whatever quantity you need next, with no tooling and no proofing charge. Say at the first quote that you expect to reorder.',
    },
    {
      q: 'Why do two suppliers quote such different prices for the same box?',
      a: 'Almost always because the specifications differ. Board weight, colour count, laminate versus varnish, whether tooling and inserts are included, and whether freight is separate all move the number. Compare specifications, not headline figures.',
    },
    {
      q: 'What does a starting price like $0.30 per piece actually mean?',
      a: 'It describes the simplest specification at the highest volume: plain board, a straightforward print, no foil, no insert, no window. It is a floor for comparison between suppliers rather than a quote for any particular job.',
    },
    {
      q: 'Can I reduce cost without changing quantity?',
      a: 'Yes, in several ways: standardise the specification across a range so items share press sheets, drop one production pass, use a metallic ink instead of foil on large areas, or consolidate freight on bulky items charged by volume.',
    },
    {
      q: 'Which costs get forgotten most often?',
      a: 'Inserts, a folded leaflet for the ingredient list, a shipper for e-commerce, and a second die line when a retailer asks for a peg-ready version. Ask explicitly whether each is included rather than assuming they are.',
    },
    {
      q: 'Why is rigid construction so much more expensive?',
      a: 'Because it adds a greyboard core, a separate wrap and substantial hand assembly, and it ships assembled rather than flat. Labour scales with volume rather than being spread across it, so the cost curve flattens far earlier than for folding cartons.',
    },
  ],
  related: ['custom-lip-care-packaging', 'custom-lip-balm-boxes', 'rigid-lipstick-boxes'],
  relatedResources: ['lip-product-packaging-guide', 'packaging-glossary', 'choosing-packaging-inserts'],
  order: 5,
};
