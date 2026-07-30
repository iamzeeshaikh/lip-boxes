import type { Product } from '../types';

/*
 * The coordinated-set page: container, carton and label specified together as
 * one programme. Distinct from the individual format pages, which each cover a
 * single component in depth.
 */
export const product: Product = {
  slug: 'lip-balm-packaging',
  name: 'Lip Balm Packaging',
  h1: 'Lip Balm Packaging',
  primaryKeyword: 'lip balm packaging',
  secondaryKeywords: [
    'lip balm packaging supplier',
    'complete lip balm packaging',
    'lip balm packaging set',
    'lip balm brand packaging',
  ],
  seoTitle: 'Lip Balm Packaging | Complete Coordinated Sets',
  metaDescription:
    'Container, carton and label specified together as one lip balm packaging set, on one board family and one schedule.',
  ogTitle: 'Complete Lip Balm Packaging Sets',
  ogDescription:
    'Buy the container, the carton and the label as one coordinated programme rather than sourcing each component separately.',
  valueProp:
    'The container, the carton and the label specified together as one set, so the finished product looks designed rather than assembled from three suppliers.',
  cardDescription:
    'Coordinated packaging sets for a lip balm line: container, outer carton and label quoted and produced together.',
  highlights: [
    'One board family and one ink set across every component',
    'Colour matched between carton and label at the same press',
    'One schedule, one delivery, one point of contact',
  ],
  images: [
    {
      file: 'lip-balm-packaging-foil-stamped-carton.png',
      alt: 'Foil-stamped cream lip balm carton standing beside a matching pink lip balm tube on marble',
      caption: 'Carton and container finished to match as one set.',
    },
    {
      file: 'lip-balm-packaging-blush-pink-cartons.png',
      alt: 'Two blush pink lip balm cartons with gold foil botanical artwork on a pale marble surface',
      caption: 'A shade pair sharing one board, one foil and one die line.',
    },
    {
      file: 'lip-balm-packaging-floral-print-carton.png',
      alt: 'Cream lip balm carton with floral line artwork standing beside a lilac lip balm tube on wood',
      caption: 'The container colour picked to sit with the printed carton.',
    },
  ],
  blocks: [
    {
      type: 'prose',
      id: 'overview',
      heading: 'Buying the set rather than the parts',
      navLabel: 'Overview',
      body: [
        'Most lip balm brands buy their packaging in pieces. Tubes from one supplier, labels from a second, cartons from a third. It works, and it is usually how a first product gets made. What it produces is a pack where the carton white is slightly warmer than the label white, the foil on the box does not quite match the foil on the seal, and nobody can say whose fault that is.',
        'This page is the alternative: the container, the outer carton and the label specified together, produced on one schedule, and colour-matched because they were made against the same standard rather than three separate ones.',
        'It suits a brand launching a line rather than a single item, or one relaunching packaging that has drifted apart over several reorders. If you only need one component, each has its own page — starting with the <a href="/custom-lip-balm-boxes/">carton built around your filled tube</a>.',
      ],
    },
    {
      type: 'features',
      id: 'components',
      heading: 'What a set usually contains',
      navLabel: 'Components',
      icon: 'layers',
      intro:
        'Pick the combination your product needs. Most sets are three or four of these.',
      items: [
        {
          title: 'The container',
          text: 'A paperboard push-up tube, printed or plain, or a plastic twist-up you already source. Either can anchor the set.',
        },
        {
          title: 'The wrap label',
          text: 'Applied to the container, printed to the same colour standard as the carton rather than approximately near it.',
        },
        {
          title: 'The outer carton',
          text: 'A folding box sized to the filled container, carrying the artwork and the legal panels the label cannot hold.',
        },
        {
          title: 'A tamper seal',
          text: 'A printed band across the cap join, matched to the label stock and often required by retail buyers.',
        },
        {
          title: 'A retail display unit',
          text: 'A printed counter tray holding a dozen or more units, produced with the cartons so the colours agree.',
        },
        {
          title: 'A shipper or mailer',
          text: 'Printed corrugated for direct-to-consumer orders, since a folding carton posted loose will arrive crushed.',
        },
      ],
    },
    {
      type: 'split',
      id: 'coordination',
      heading: 'What coordinating actually buys you',
      navLabel: 'Why coordinate',
      image: {
        file: 'lip-balm-packaging-blush-pink-cartons.png',
        alt: 'Two blush pink lip balm cartons with gold foil artwork, matched as a pair',
      },
      imageSide: 'left',
      body: [
        'Colour agreement is the obvious gain. A printed film label and a coated paperboard carton reflect light differently and will never match perfectly, but specifying both as the same spot Pantone against one approved standard closes the gap to something a customer would not notice. Sourced separately against two different references, they usually will.',
        'The second gain is fit. When the carton and the container are quoted together, the die line is drawn around the container that is actually going into it, including the label thickness. That sounds trivial until a labelled tube proves half a millimetre too wide for a carton designed around a bare one.',
        'The third is schedule. One production window, one delivery, one packing list. Sourcing three components separately means three lead times, and your launch date is set by the slowest.',
      ],
    },
    {
      type: 'compare',
      id: 'choosing',
      heading: 'Which combination suits your product',
      navLabel: 'Combinations',
      intro:
        'The four sets that cover most lip balm lines.',
      columns: ['Set', 'Components', 'Suits', 'Notes'],
      rows: [
        [
          'Minimal',
          'Printed paper tube only',
          'Low-waste and refill positioning, market stalls',
          'No secondary packaging; legal copy must fit the tube',
        ],
        [
          'Standard retail',
          'Container, wrap label, folding carton',
          'Most shelf and e-commerce products',
          'The carton carries the ingredient declaration comfortably',
        ],
        [
          'Peg retail',
          'Container, label, hang tab carton',
          'Pharmacy, convenience, beauty supply',
          'Tab geometry specified against packed weight',
        ],
        [
          'Gift and multipack',
          'Containers, labels, tray or rigid box, sleeve',
          'Holiday sets, starter kits, subscription boxes',
          'Needs a partition so tubes cannot knock together',
        ],
      ],
      outro:
        'Most brands start with the standard retail set and add a peg version once a chain asks for one. Quoting both together is cheaper than adding the second later.',
    },
    {
      type: 'prose',
      id: 'specification',
      heading: 'Standardising across the set',
      navLabel: 'Specification',
      body: [
        'The decision that makes a coordinated set work is reducing variables. One board grade in one or two weights. One laminate or varnish. One ink set with a fixed number of spot colours. Everything else is die lines and artwork.',
        'That lets the material be bought once rather than three times, lets components share press sheets where the substrate allows, and collapses proofing into one standard plus a set of variants rather than three separate review cycles.',
        'Where a component genuinely needs different treatment, keep the exception deliberate. A foil-stamped gift sleeve alongside varnish-finished everyday cartons is reasonable. Three different laminates across three components is not, and it is usually how a range starts to look mismatched.',
      ],
    },
    {
      type: 'prose',
      id: 'artwork',
      heading: 'Artwork across three surfaces',
      navLabel: 'Artwork',
      body: [
        'Each component has its own template and its own constraints. A carton is a folding die line with creases. A label is a flat cut with a tight safe area. A rolled tube is a rectangle whose width is the circumference plus a seam overlap, and anything crossing that seam shows a step.',
        'The practical method is one master brand sheet with the fixed elements — logo lockup, brand colours as named spot references, the legal panel copy — and then three layouts built onto the supplied templates from that single source. Fix the spot colour references once and reuse them, rather than letting each component pick its own build.',
        'We supply all three templates together with the variable zones marked. File requirements are the same across them and are set out on the <a href="/artwork-guidelines/">artwork page</a>.',
      ],
    },
    {
      type: 'prose',
      id: 'quantity-pricing',
      heading: 'Quantity and price across a set',
      navLabel: 'Quantity & pricing',
      body: [
        'A set is quoted on total programme volume rather than per component, which is the point of buying it this way. Three components at 5,000 each is priced as a 15,000-unit programme, not as three small orders, because the material buying, the make-ready and the proofing effort are shared.',
        'Price starts from $0.30 per piece for large-volume orders. Final pricing depends on size, material, printing, and quantity. That entry figure applies per component at qualifying volumes on a simple specification; a set is naturally quoted as a total with a per-component breakdown so you can see what each part contributes.',
        'Scheduled call-offs are available on larger programmes: the full quantity runs in one window to hold the volume price, then releases against an agreed delivery schedule so you are not warehousing a year of stock at once.',
      ],
    },
    {
      type: 'steps',
      id: 'process',
      heading: 'How a set is put together',
      navLabel: 'Ordering',
      steps: [
        {
          title: 'List the components',
          text: 'Which of container, label, carton, seal, display and shipper you need, and the quantity of each.',
        },
        {
          title: 'Send the container',
          text: 'A filled sample if you already source one. If we are supplying it too, the fill weight and formula behaviour instead.',
        },
        {
          title: 'Fix the standard',
          text: 'One board family, one finish, one ink set with named spot colours. This is where the saving and the consistency come from.',
        },
        {
          title: 'Approve templates and samples',
          text: 'Die lines for each component, then a structural sample with the labelled container inside the actual carton.',
        },
        {
          title: 'Proof, produce and deliver',
          text: 'Components proofed against one colour standard, produced in one window, delivered together on one packing list.',
        },
      ],
    },
    {
      type: 'prose',
      id: 'quality-delivery',
      heading: 'Quality control across components',
      navLabel: 'Quality & delivery',
      body: [
        'The check that matters on a set is cross-component consistency rather than each item passing on its own. A carton and a label can both sit within tolerance against their individual proofs and still look wrong beside each other. So finished components are compared side by side under daylight, not only against their own references.',
        'Each item also gets its standard checks: colour against proof, dimensions on the first sheets, glue and fold on cartons, cut registration and liner release on labels, concentricity and cap retention on tubes.',
        'Components ship together where the formats allow it. Cartons and labels travel flat and are charged on weight; assembled tubes are bulky and charged on volume, so a mixed consignment is usually cheaper as one shipment than as three, as set out on the <a href="/shipping-information/">delivery page</a>.',
      ],
    },
  ],
  specs: [
    { label: 'Product type', value: 'Coordinated lip balm packaging set: container, label, carton and extras' },
    { label: 'Typical components', value: 'Container, wrap label, folding carton, tamper seal, display unit, shipper' },
    { label: 'Pricing basis', value: 'Quoted on total programme volume with a per-component breakdown' },
    { label: 'Board family', value: 'One grade in one or two weights across every paperboard component' },
    { label: 'Colour control', value: 'Named spot Pantone references shared across carton, label and tube' },
    { label: 'Containers', value: 'Paperboard push-up tubes supplied, or your existing plastic twist-up matched to' },
    { label: 'Die line method', value: 'Carton drawn around the labelled container, not the bare one' },
    { label: 'Artwork', value: 'Three templates issued together with variable zones marked' },
    { label: 'Proofing', value: 'One colour standard across components rather than separate references' },
    { label: 'Call-off', value: 'Produce in one run, release against an agreed delivery schedule' },
    { label: 'Delivery', value: 'Components consolidated into one consignment where formats allow' },
    { label: 'Starting unit price', value: 'From $0.30 per piece on qualifying large-volume orders' },
    { label: 'Ordering', value: 'Quote based; send the component list with quantities' },
  ],
  faqs: [
    {
      q: 'What does a lip balm packaging set actually include?',
      a: 'Whichever components you need: the container, a wrap label, an outer carton, a tamper seal, a retail display unit and a shipper. Most brands take three or four. The point is that they are specified and produced together rather than sourced separately.',
    },
    {
      q: 'Why not just buy each component separately?',
      a: 'You can, and many brands do. What you give up is colour agreement between components, a die line drawn around the labelled container rather than the bare one, and a single schedule. Sourcing separately means three lead times and your launch date is set by the slowest.',
    },
    {
      q: 'Can you match a carton to a tube I already buy elsewhere?',
      a: 'Yes, and it is a common starting point. Send a filled, labelled sample of the tube you already source. The carton is then built around the real thing, including the label thickness, which is what catches people out when a carton is designed around a bare tube.',
    },
    {
      q: 'Will the carton and the label be exactly the same colour?',
      a: 'Close, not identical. A printed film label and a coated paperboard carton reflect light differently, so a perfect match is not physically achievable. Specifying both as the same spot Pantone against one approved standard closes the gap to something a customer would not notice.',
    },
    {
      q: 'How is a set priced compared with separate orders?',
      a: 'On total programme volume rather than per component. Three components at 5,000 each is priced as a 15,000-unit programme, because material buying, make-ready and proofing effort are shared. You get a total with a per-component breakdown.',
    },
    {
      q: 'What if I only need two of the components?',
      a: 'That is fine and still counts as a set. The most common pair is a container plus an outer carton, or a label plus a carton where you already source the tube. The coordination benefit applies to any two components made against one standard.',
    },
    {
      q: 'Can a set cover several scents or shades?',
      a: 'Yes, and it is where the approach pays off most. Keep one container size, one carton die line and one label footprint across the range, and change only the printed artwork per variant. The tooling is then carried once rather than per scent.',
    },
    {
      q: 'Do I have to buy the container from you?',
      a: 'No. We can supply paperboard push-up tubes, or work around a plastic twist-up you already source. If you are supplying it, send a filled sample so the carton and label are built to what actually exists rather than to a drawing.',
    },
    {
      q: 'Will everything arrive at once?',
      a: 'Where the formats allow it, yes, on one consignment and one packing list. Cartons and labels ship flat and are charged on weight; assembled tubes are bulky and charged on volume, so consolidating is usually cheaper than three separate deliveries.',
    },
    {
      q: 'Can I add a peg-ready version later?',
      a: 'Yes, but it is cheaper to quote it at the same time. A hang tab carton is a separate die line, and adding it after the main run loses the shared setup. If a chain is likely to ask for one, include it provisionally in the first quote.',
    },
    {
      q: 'What is the minimum for a coordinated set?',
      a: 'It depends on the components rather than being a fixed number. Plain tubes and digitally printed labels work at genuinely small quantities; a foiled litho carton needs more volume to make sense. Tell us the quantity you actually want and we will quote it.',
    },
    {
      q: 'How do I keep the set consistent across future reorders?',
      a: 'Fix the standard once: one board family, one finish, one named spot colour set. Approved die lines and colour standards are then held against the programme, so a reorder of any single component is produced against the same reference as the original.',
    },
  ],
  related: ['custom-lip-balm-boxes', 'paper-lip-balm-tubes', 'lip-balm-labels', 'hang-tab-lip-balm-boxes'],
  order: 2,
  group: 'Lip Balm',
};
