import type { Product } from '../types';

/*
 * Sibling of /custom-lipstick-boxes/. This page is the category entry point:
 * which lipstick box construction suits which product and price point. The
 * custom page covers the bespoke printed folding carton in full detail.
 */
export const product: Product = {
  slug: 'lipstick-boxes',
  name: 'Lipstick Boxes',
  h1: 'Lipstick Boxes',
  primaryKeyword: 'lipstick boxes',
  secondaryKeywords: [
    'lipstick packaging',
    'lipstick box types',
    'lipstick carton styles',
    'lipstick gift box',
  ],
  seoTitle: 'Lipstick Boxes | Types, Sizes and Constructions',
  metaDescription:
    'Every lipstick box construction compared: folding cartons, rigid gift boxes, hang tab packs and shade-range sets.',
  ogTitle: 'Lipstick Boxes: Which Construction Do You Need',
  ogDescription:
    'Folding cartons, rigid boxes, peg-ready packs and multi-shade sets compared on cost, protection and shelf presence.',
  valueProp:
    'Four constructions cover the whole category. This is how to tell which one your product, price point and retail channel actually need.',
  cardDescription:
    'The category overview: folding, rigid, hang tab and multi-shade lipstick boxes compared before you specify one.',
  highlights: [
    'Four constructions compared on cost, protection and presence',
    'Sizing method that works from your bullet case',
    'Routes to the right specification page once you have chosen',
  ],
  images: [
    {
      file: 'lipstick-box-slim-printed-carton.png',
      alt: 'White lipstick carton with a green and red printed border, beside a black lipstick and its cap',
      caption: 'A slim folding carton, the most common construction in the category.',
    },
    {
      file: 'lipstick-box-single-shade-carton.png',
      alt: 'White lipstick box with a printed sleeve standing beside an uncapped pink lipstick',
      caption: 'Single-shade carton with the shade named on the front panel.',
    },
    {
      file: 'lipstick-boxes-matte-dark-range.png',
      alt: 'Dark plum lipstick cartons arranged on white display blocks with matching lipstick cases',
      caption: 'A dark range where board choice keeps the cut edges from showing white.',
    },
    {
      file: 'lipstick-boxes-nude-collection.png',
      alt: 'A collection of nude and terracotta lipstick boxes and matching lipstick cases on a pink background',
      caption: 'A shade family running on one die line with per-shade artwork.',
    },
  ],
  blocks: [
    {
      type: 'prose',
      id: 'overview',
      heading: 'Four constructions, and how to choose between them',
      navLabel: 'Overview',
      body: [
        'Almost every lipstick box on the market is one of four things: a printed folding carton, a rigid set-up box, a carton with a peg hook tab, or a multi-shade set. They differ enormously in cost and only somewhat in appearance, which is why brands so often specify the wrong one.',
        'The decision is driven by three things in this order: where the product is merchandised, what it retails for, and whether the moment of opening is part of what you are selling. Board, finish and artwork all come afterwards.',
        'This page compares the four. Once you know which you need, each has its own specification page with dimensions, materials and production detail — starting with <a href="/custom-lipstick-boxes/">printed folding cartons built to your bullet case</a>, which is where most projects land.',
      ],
    },
    {
      type: 'compare',
      id: 'constructions',
      heading: 'The four constructions compared',
      navLabel: 'Compare',
      intro:
        'Read across the row that matches how your product is sold.',
      columns: ['Construction', 'Suits', 'Protection', 'Relative cost'],
      rows: [
        [
          'Printed folding carton',
          'Shelf display, boxed e-commerce, everyday and mid-market lipstick',
          'Good with a collar or platform insert',
          'Lowest; ships flat',
        ],
        [
          'Rigid set-up box',
          'Gift sets, limited editions, press kits, luxury price points',
          'Highest, with a fitted tray',
          'Highest; ships assembled, partly hand built',
        ],
        [
          'Hang tab carton',
          'Pegboard, slatwall, clip strips, pharmacy and beauty supply',
          'Good, though the tab area needs engineering',
          'Slightly above a plain carton',
        ],
        [
          'Multi-shade set',
          'Duos, trios, launch collections, seasonal gifting',
          'Needs a partition so cases cannot touch',
          'Varies with count and insert',
        ],
      ],
      outro:
        'A well-finished folding carton reaches most of the perceived quality of a rigid box at a fraction of the unit cost. Reserve rigid construction for products where the unboxing is genuinely part of the purchase.',
    },
    {
      type: 'split',
      id: 'sizing',
      heading: 'There is no standard lipstick box size',
      navLabel: 'Sizing',
      image: {
        file: 'lipstick-box-single-shade-carton.png',
        alt: 'Printed lipstick carton standing beside an uncapped pink lipstick',
      },
      imageSide: 'right',
      body: [
        'Lipstick cases vary far more than lip balm tubes. A slim aluminium bullet, a weighted magnetic case and a square resin barrel can all hold 3.5 g and need three different cartons. Any supplier quoting from a standard size is guessing.',
        'Take three measurements: width at the widest point with the cap fitted, depth at that same point, and total height with the cap seated. On tapered cases the widest point is often below the cap rather than at it.',
        'For orientation only, a single-bullet carton commonly falls between 0.9 and 1.2 inches square and 3 to 3.5 inches tall. Treat that as the range you will land in, not the size to order. A physical sample removes the guesswork entirely, because supplier drawings frequently omit the tolerances that matter.',
      ],
    },
    {
      type: 'features',
      id: 'shade-ranges',
      heading: 'Packaging a shade range',
      navLabel: 'Shade ranges',
      icon: 'palette',
      intro:
        'Lipstick is rarely one product. The decisions that make a twelve-shade launch affordable are all made before the first carton is quoted.',
      items: [
        {
          title: 'One die line for the whole range',
          text: 'Same carton size, board and finish across every shade, with only the printed panel changing. This is the single largest cost lever available.',
        },
        {
          title: 'Spot colour for the swatch',
          text: 'A process build drifts between print runs. A spot Pantone reproduces identically, which matters when a customer compares a nude against the one they bought last season.',
        },
        {
          title: 'Digital at launch quantities',
          text: 'Twelve shades at modest quantities each carries no plate charge on digital. Litho takes over once per-shade volumes justify the plates.',
        },
        {
          title: 'Ganged printing at volume',
          text: 'Several shades printed together on one press sheet share the make-ready. Only possible if the specification is standardised.',
        },
        {
          title: 'Locked artwork positions',
          text: 'Every fixed element in the same place across all shades, with a defined variable zone. Twelve SKUs then review as one standard plus twelve checks.',
        },
        {
          title: 'Board that suits dark shades',
          text: 'A dark carton on standard board shows a white line at every cut edge. Black-through board avoids it and is worth the premium on a deep range.',
        },
      ],
    },
    {
      type: 'prose',
      id: 'inserts',
      heading: 'Why the insert matters more than it looks',
      navLabel: 'Inserts',
      body: [
        'A lipstick case is dense for its size, particularly a metal-weighted one. In a loose carton it moves under its own inertia every time the shipping case is handled, and repeated movement marks the case finish and scuffs the printed interior of the box.',
        'For anything above an entry price point, a folded paperboard collar at the base costs very little and stops it. For duos and trios a partition is not optional: lacquered and foiled cases scratch each other, and a set arriving marked defeats the point of the pack.',
        'Quote the insert with the carton rather than separately. An insert sourced on its own arrives a millimetre out, is discovered during packing, and leaves you choosing between forcing it and reordering. The full range of options sits on the <a href="/box-styles/">structural reference</a>.',
      ],
    },
    {
      type: 'prose',
      id: 'materials-finishes',
      heading: 'Board and finish for a colour cosmetic',
      navLabel: 'Board & finish',
      body: [
        'Lipstick sits at a higher price point than most lip care, and the board is a meaningful part of how the pack is judged before it is opened. SBS folding boxboard from 18pt to 24pt is the standard. Heavier 24pt to 28pt is chosen where the pack needs to feel substantial in the hand.',
        'Two specialty boards earn their premium in this category. Black-through board, coloured throughout the pulp, keeps cut edges dark on a deep range. Metallised board puts a mirror base under the ink, though it is not compatible with paper recycling.',
        'On finishing, soft-touch lamination is the treatment most associated with premium colour cosmetics, and matte lamination with a hot foil logo is the combination that appears most often on shelf. Both are covered on the <a href="/finishes/">coatings page</a>.',
      ],
    },
    {
      type: 'prose',
      id: 'panel-planning',
      heading: 'Plan the panels before you design',
      navLabel: 'Panels',
      body: [
        'A slim lipstick carton has less usable surface than most brands expect. Shade name, shade number, finish descriptor, net weight, ingredient declaration, responsible party details and a barcode all have to fit.',
        'The barcode alone needs about 1.5 inches of clear flat width and must not cross a crease, because scanners fail on a code over a fold. On a narrow carton the back panel is usually the only place it sits properly.',
        'Allocate the panels first, then design into them. Where the ingredient list will not fit legibly, a small folded leaflet inside the carton is a normal and inexpensive answer.',
      ],
    },
    {
      type: 'prose',
      id: 'quantity-pricing',
      heading: 'Quantity and what it does to your price',
      navLabel: 'Quantity & pricing',
      body: [
        'Lipstick ranges create an awkward quantity problem: you may want 20,000 cartons in total but only 1,600 of each shade. Which process suits that depends entirely on the split, which is why the shade count matters as much as the total.',
        'Price starts from $0.30 per piece for large-volume orders. Final pricing depends on size, material, printing, and quantity. A plain single-colour carton at high volume approaches that figure; a soft-touch carton with foil, an insert and twelve shade variants sits well above it.',
        'Send both numbers with any enquiry: the total, and the quantity per shade. It changes which press we quote and can move the price materially.',
      ],
    },
    {
      type: 'steps',
      id: 'process',
      heading: 'Getting from here to a quote',
      navLabel: 'Next steps',
      steps: [
        {
          title: 'Pick the construction',
          text: 'Use the comparison above. Where the product is merchandised usually settles it before anything else.',
        },
        {
          title: 'Measure the case',
          text: 'Width and depth at the widest point with the cap fitted, plus total capped height. Or post a sample.',
        },
        {
          title: 'Count the shades',
          text: 'Total quantity and quantity per shade, since the split decides which print process is quoted.',
        },
        {
          title: 'Send it over',
          text: 'You get a written price at your quantity and at the next volume break, with setup costs listed separately.',
        },
        {
          title: 'Approve die line, then proof',
          text: 'Structure first, colour second. Nothing prints without both signed off in writing.',
        },
      ],
    },
  ],
  specs: [
    { label: 'Product type', value: 'Lipstick packaging across folding, rigid, hang tab and multi-shade constructions' },
    { label: 'Sizing', value: 'Built to your bullet case; no standard catalogue size exists' },
    { label: 'Typical single-bullet footprint', value: 'Approximately 0.9–1.2 in square, 3–3.5 in tall' },
    { label: 'Measurements needed', value: 'Width and depth at the widest capped point, plus total capped height' },
    { label: 'Folding carton board', value: 'SBS 18–28pt; black-through for dark ranges; metallised for limited editions' },
    { label: 'Rigid construction', value: 'Greyboard 1.5–3 mm wrapped in printed or specialty paper' },
    { label: 'Printing', value: 'Offset litho and digital; spot Pantone recommended for shade swatches' },
    { label: 'Finishes', value: 'Soft-touch, matte and gloss lamination, hot foil, spot UV, emboss' },
    { label: 'Inserts', value: 'Base collar, die-cut platform, partition for duos and trios, fitted tray for rigid' },
    { label: 'Range support', value: 'One die line across all shades; ganged printing where the specification is standardised' },
    { label: 'Barcode area', value: 'Minimum 1.5 in clear flat width, not crossing a crease' },
    { label: 'Starting unit price', value: 'From $0.30 per piece on qualifying large-volume orders' },
    { label: 'Ordering', value: 'Quote based; send total quantity and quantity per shade' },
  ],
  faqs: [
    {
      q: 'Which lipstick box construction should I choose?',
      a: 'Start with where it is merchandised. Shelf and e-commerce point at a folding carton; peg fixtures need a hang tab; gift and limited editions justify rigid. Then check the price point — a well-finished folding carton reaches most of the perceived quality of rigid at a fraction of the cost.',
    },
    {
      q: 'Is there a standard size for a lipstick box?',
      a: 'No, and this is the most common misunderstanding in the category. Cases differ enough that a standard size would fit almost nothing properly. A single-bullet carton commonly lands between 0.9 and 1.2 inches square and 3 to 3.5 inches tall, but that is a range rather than a specification.',
    },
    {
      q: 'What is the difference between this page and your custom lipstick boxes page?',
      a: 'This page compares the four constructions so you can pick one. The custom lipstick boxes page covers the printed folding carton in full detail — sizing method, board grades, insert options, artwork requirements and its own set of questions.',
    },
    {
      q: 'How do I package a twelve-shade launch affordably?',
      a: 'Keep one die line, one board and one finish across every shade, and change only the printed panel. On digital there is no plate charge per design; at higher volumes the shades can be ganged onto shared litho sheets. Send the per-shade quantity, not just the total.',
    },
    {
      q: 'Why does my dark carton show white lines at the edges?',
      a: 'Because standard board is white in the middle. Printing it dark on the outside leaves every die-cut edge and crease showing a thin white line. Black-through board is coloured throughout the pulp and avoids it. On a deep range it is usually worth the premium.',
    },
    {
      q: 'Do I need an insert for a single lipstick?',
      a: 'Above an entry price point, yes. A lipstick case is dense and slides in a loose carton, marking both the case finish and the box interior in transit. A folded paperboard collar at the base costs very little and prevents it.',
    },
    {
      q: 'How much copy will actually fit on a lipstick carton?',
      a: 'Less than most brands expect. Between shade name, net weight, ingredient declaration, responsible party details and a barcode, the panels fill quickly. Allocate them before designing, and use a folded leaflet inside the carton if the ingredient list will not fit legibly.',
    },
    {
      q: 'Can I mix constructions across one range?',
      a: 'Yes, and it is common: folding cartons for the core shades and a rigid box for the gift set. Keep the board family and the brand colours shared so the range still reads as one line when the items sit next to each other.',
    },
    {
      q: 'What does a rigid box actually add?',
      a: 'Weight, a permanent shape and an opening action. It also adds hand assembly, a greyboard core, a separate wrap and volume-based freight, because it does not ship flat. Justified for gifting and limited editions, hard to justify for everyday retail.',
    },
    {
      q: 'How do I keep the shade swatch matching the lipstick?',
      a: 'Specify the swatch as a spot Pantone rather than a four-colour build. Process colour drifts within normal tolerance between runs, which is enough to make a nude look different from the one a customer bought six months ago.',
    },
    {
      q: 'Can I get a sample before committing?',
      a: 'Yes, and the useful one at this stage is a plain structural sample: cut and creased in the specified board so you can check your case actually fits with the right clearance. Colour proofs come later, once the structure is approved.',
    },
    {
      q: 'What should I send to get an accurate quote?',
      a: 'The case dimensions or a physical sample, the total quantity and the quantity per shade, where the product is merchandised, and any launch date. That is enough for a written price rather than a list of follow-up questions.',
    },
  ],
  related: ['custom-lipstick-boxes', 'rigid-lipstick-boxes', 'hang-tab-lipstick-boxes', 'lip-gloss-boxes'],
  order: 8,
  group: 'Lipstick',
};
