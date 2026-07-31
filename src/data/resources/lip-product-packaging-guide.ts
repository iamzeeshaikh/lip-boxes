import type { Resource } from '../content-types';

export const resource: Resource = {
  slug: 'lip-product-packaging-guide',
  title: 'Lip Product Packaging Guide',
  h1: 'Lip Product Packaging Guide',
  primaryKeyword: 'lip product packaging',
  secondaryKeywords: [
    'lip packaging types',
    'cosmetic lip packaging planning',
    'lip product packaging decisions',
    'packaging for a lip brand',
  ],
  searchIntent:
    'I am launching a lip product. What packaging decisions do I need to make, and in what order?',
  group: 'Planning',
  seoTitle: 'Lip Product Packaging Guide | Plan a Launch',
  metaDescription:
    'The eight packaging decisions behind a lip product launch, in the order they have to be made, with the cost of each.',
  ogTitle: 'Planning Packaging for a Lip Product Launch',
  ogDescription:
    'Primary container, secondary carton, decoration, protection and shipping — the decision order that avoids rework.',
  deck: 'Eight decisions, in the order that avoids paying for the same thing twice.',
  cardDescription:
    'The full decision sequence for a lip launch, from primary container to shipper, with what each choice locks in.',
  highlights: [
    'A decision order that prevents rework',
    'What each choice locks in downstream',
    'Where budgets usually go wrong',
  ],
  updated: '2026-07-30',
  readingMinutes: 12,
  hero: {
    slug: 'custom-lip-care-packaging',
    file: 'custom-lip-care-packaging-carton-range.png',
    alt: 'A range of pink and nude lip care cartons standing and lying together with matching printed panels',
  },
  sections: [
    {
      type: 'prose',
      id: 'sequence-matters',
      heading: 'Why the order of decisions matters more than the decisions',
      navLabel: 'Why order matters',
      body: [
        'Most packaging overspend on a lip launch is not caused by choosing an expensive option. It is caused by choosing options in the wrong order, then paying to undo one of them.',
        'The classic sequence is: fall in love with a carton design, approve it, then change the tube supplier because the first one had a twelve-week lead time. The new tube is 0.4 mm wider. The die is scrap, the printed proof is scrap, and the launch slips six weeks.',
        'Every decision below constrains the ones after it and is cheap to change before them. Working through them in this order is the single most useful thing you can do with a packaging budget.',
      ],
    },
    {
      type: 'steps',
      id: 'decision-order',
      heading: 'The eight decisions in order',
      navLabel: 'Decision order',
      intro:
        'Each one locks something in. Work down the list and almost nothing has to be redone.',
      steps: [
        {
          title: 'Lock the primary container',
          text: 'Tube, bullet case, jar or sachet, from a named supplier at a confirmed lead time. Everything downstream is measured from this object.',
        },
        {
          title: 'Decide where it is sold',
          text: 'Shelf, peg hook, e-commerce, gift or wholesale. This settles the carton construction before any question of appearance is asked.',
        },
        {
          title: 'Fix the quantity and the variant split',
          text: 'Total units and units per shade or scent. This decides the print process, which decides what the artwork can afford to do.',
        },
        {
          title: 'Choose the board family',
          text: 'One grade in one or two weights across everything. Board constrains what the finish can achieve, so it comes before the finish.',
        },
        {
          title: 'Choose decoration and finish',
          text: 'Direct print, applied label, or both. Then coating, foil and any spot treatment. Now a proof will actually be representative.',
        },
        {
          title: 'Specify protection',
          text: 'Collar, platform, partition or tray, decided against packed weight and how the product ships.',
        },
        {
          title: 'Write and check the regulated copy',
          text: 'Ingredient declaration, net contents, responsible party. Do this in parallel with sampling, not after proof approval.',
        },
        {
          title: 'Specify the shipper',
          text: 'Mailer, case count or pallet pattern. A folding carton is not a shipper, and this is the step most often forgotten.',
        },
      ],
    },
    {
      type: 'compare',
      id: 'format-selection',
      heading: 'Which packaging format suits which product',
      navLabel: 'Format selection',
      intro:
        'Read down to your product type, then across. The right-hand column is the decision that usually gets made last and should be made early.',
      columns: ['Product', 'Primary container', 'Secondary packaging', 'The choice that trips people'],
      rows: [
        [
          'Lip balm stick',
          'Plastic twist-up or paperboard push-up',
          'Slim carton, or none if the tube is printed',
          'Whether the tube carries the legal copy or the carton does',
        ],
        [
          'Lip balm tin or pot',
          'Screw-top tin or jar',
          'Shallow wide carton with a platform',
          'A tin slides and rattles without an insert',
        ],
        [
          'Lipstick bullet',
          'Metal, plastic or resin case',
          'Slim carton, or rigid box at a gift price point',
          'Case weight, which drives board and insert',
        ],
        [
          'Liquid lipstick or gloss',
          'Doe-foot wand tube',
          'Tall narrow carton',
          'Assembled height, not fill volume',
        ],
        [
          'Lip mask or patch',
          'Sealed sachet',
          'Flat wide carton, often with a window',
          'Cavity fit, since a loose sachet creases and can crack its seal',
        ],
        [
          'Lip scrub',
          'Small jar or pot',
          'Cube-ish carton with a collar',
          'Jar shoulder diameter rather than the lid diameter',
        ],
      ],
      outro:
        'If you are packaging several of these at once, specifying them as one programme is materially cheaper than sourcing each separately. That is covered on our page for <a href="/custom-lip-care-packaging/">bulk and private label programmes</a>.',
    },
    {
      type: 'prose',
      id: 'container-first',
      heading: 'Decision one: the primary container',
      navLabel: 'Primary container',
      body: [
        'Lock this before anything else, and lock it properly: a named supplier, a confirmed lead time, and physical samples in your hand.',
        'The trap is treating the container as interchangeable because two options have the same nominal capacity. They rarely have the same dimensions, and a difference of half a millimetre is enough to invalidate a die line. Nominal capacity is a marketing figure; the envelope is what packaging is built around.',
        'Two secondary questions belong here as well. Does the container itself carry decoration, or is it a blank that gets a label? And does your formula suit the material — a soft, oil-heavy balm behaves very differently in a paperboard tube than in a plastic barrel.',
      ],
    },
    {
      type: 'prose',
      id: 'channel-drives-structure',
      heading: 'Decision two: where it is sold',
      navLabel: 'Sales channel',
      body: [
        'This determines the carton construction more completely than any design preference, and it is settled by facts rather than taste.',
        'Peg and clip-strip retail needs a hanging tab, and the tab has to be engineered against the packed weight rather than added as a die-cut afterthought. Shelf retail needs a base that keeps the pack upright and a front panel that reads at arm\'s length. E-commerce needs a pack that survives a mailer and looks considered when the mailer opens. Gifting needs an opening action, which is where rigid construction earns its cost.',
        'A product sold in two channels usually needs two cartons. That is a real cost, and quoting both at the same time is considerably cheaper than adding the second six months later, because the artwork and colour standard are already established.',
      ],
    },
    {
      type: 'prose',
      id: 'quantity-drives-process',
      heading: 'Decision three: quantity and variants',
      navLabel: 'Quantity',
      body: [
        'Two numbers, not one: the total, and the split across shades or scents. A launch of twelve shades at 1,500 each is a different manufacturing job from three shades at 6,000 each, even though both total 18,000.',
        'Below roughly two thousand units per design, digital printing avoids plate charges entirely and a wide shallow range becomes affordable. Above it, offset litho takes over and shades can be ganged onto shared sheets, which is where most of the saving on a multi-shade launch comes from.',
        'This matters at this point in the sequence because it constrains what the artwork can afford. A design with six spot colours is reasonable on a long litho run and disproportionately expensive on a short one. Deciding the quantity before the design is what keeps the two compatible.',
      ],
    },
    {
      type: 'list',
      id: 'budget-mistakes',
      heading: 'Where lip packaging budgets actually go wrong',
      navLabel: 'Budget mistakes',
      intro:
        'None of these are exotic. All of them are common, and all are avoidable at the planning stage.',
      items: [
        'No line for inserts, which are then added after the carton is quoted and priced as a change',
        'No line for a shipper, discovered when the first e-commerce order arrives crushed',
        'No allowance for a folded leaflet, needed because the ingredient list did not fit',
        'Tooling counted once when the range actually needs two die lines for two container sizes',
        'A shade range quoted as one total, then re-quoted when the per-shade split turns out to be small',
        'Freight estimated on weight for a product that is charged on volume',
        'A second carton for peg retail added after launch rather than quoted alongside the first',
      ],
      outro:
        'The pattern is consistent: the forgotten items are the small ones, and together they routinely add more than the choice of laminate did. Our <a href="/resources/custom-packaging-cost-guide/">the full cost breakdown</a> breaks down what each element contributes.',
    },
    {
      type: 'features',
      id: 'timeline',
      heading: 'What to do in parallel',
      navLabel: 'Timeline',
      icon: 'clock',
      intro:
        'Several stages have no dependency on each other and are frequently run in sequence for no reason, adding weeks to a launch.',
      items: [
        {
          title: 'Regulated copy, during sampling',
          text: 'Ingredient declaration and responsible party details can be written and reviewed while structural samples are being made.',
        },
        {
          title: 'Shipper specification, during proofing',
          text: 'Mailer or case configuration does not depend on the carton artwork, only on its dimensions.',
        },
        {
          title: 'Photography, after the white sample',
          text: 'An unprinted structural sample is enough to plan product photography around, well before printed stock exists.',
        },
        {
          title: 'Barcode allocation, at the start',
          text: 'GS1 registration takes time and blocks artwork completion. Start it the day the SKU list is fixed.',
        },
        {
          title: 'Label artwork, alongside carton artwork',
          text: 'Both build from the same brand sheet. Doing them together keeps the colour references identical.',
        },
        {
          title: 'Freight quotes, once dimensions exist',
          text: 'You do not need finished packaging to get accurate freight, only the carton size and case count.',
        },
      ],
    },
    {
      type: 'prose',
      id: 'what-not-to-decide-early',
      heading: 'What not to decide early',
      navLabel: 'Decide later',
      body: [
        'Two things are worth deliberately leaving open, because deciding them early narrows your options for no benefit.',
        'The exact finish. Lamination, foil and spot treatments should be chosen once the board is fixed, because the board changes how each of them reads. A soft-touch laminate on kraft is a different product from soft-touch on coated white, and choosing the finish first sometimes forces a board that does not suit the product.',
        'The precise quantity, within a band. Get quoted at two or three volumes rather than committing to one number early. Where the breakpoints fall is genuinely useful information, and it occasionally makes a larger order cheaper in total than a smaller one.',
      ],
    },
  ],
  faqs: [
    {
      q: 'What should I decide first when packaging a new lip product?',
      a: 'The primary container, from a named supplier with confirmed lead times and physical samples in hand. Every downstream decision is measured from that object, so changing it later invalidates the die line, the structural sample and any printed proof.',
    },
    {
      q: 'How early do I need to know my quantity?',
      a: 'Before artwork begins. Quantity decides the print process, and the print process decides what the artwork can affordably do. A six spot colour design is reasonable on a long run and disproportionately expensive on a short one.',
    },
    {
      q: 'Do I need a carton if my tube is already printed?',
      a: 'Not always. A directly printed tube can be sold bare. Brands add a carton for three reasons: retail theft prevention on a small item, protection in transit, and room for legal copy that will not fit legibly around a small circumference.',
    },
    {
      q: 'When should I write the ingredient declaration?',
      a: 'During structural sampling, in parallel rather than after. Once a proof is approved the run is measured against it, so a compliance change afterwards means new plates and a new run. Reviewing the copy early costs nothing and prevents that.',
    },
    {
      q: 'What is the most commonly forgotten cost?',
      a: 'The shipper. A folding carton is secondary packaging and arrives crushed if posted loose, so an e-commerce product needs a mailer as well. Inserts and a folded leaflet for the ingredient list are close behind.',
    },
    {
      q: 'Can I use the same packaging for shelf and peg retail?',
      a: 'Not from one die line, because a hanging tab changes the structure. You can use the same board, finish and artwork family, which keeps the two looking like one product. Quote both together rather than adding the second later.',
    },
    {
      q: 'How long does a lip packaging project take end to end?',
      a: 'It depends on the specification and on how quickly approvals come back, which is why we confirm a production window in writing per quote rather than publishing a figure. Running the parallel tasks above rather than sequencing them typically saves several weeks.',
    },
    {
      q: 'Should I choose the finish before the board?',
      a: 'No. Board constrains what a finish can achieve, so it comes first. Soft-touch on kraft and soft-touch on coated white are different products, and choosing the finish first occasionally forces a board that does not suit the item.',
    },
    {
      q: 'What if I am launching several lip products at once?',
      a: 'Treat it as one programme rather than several orders. Fixing one board family, one finish and one ink set across everything lets the material be bought once, lets die lines share press sheets, and produces a range that actually looks like a range.',
    },
  ],
  related: ['custom-lip-care-packaging', 'lip-balm-packaging', 'custom-lip-balm-boxes'],
  relatedResources: ['custom-packaging-cost-guide', 'lip-balm-box-size-guide', 'cosmetic-packaging-label-requirements'],
  order: 1,
};
