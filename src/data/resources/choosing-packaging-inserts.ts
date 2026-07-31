import type { Resource } from '../content-types';

export const resource: Resource = {
  slug: 'choosing-packaging-inserts',
  title: 'Choosing Packaging Inserts',
  h1: 'Choosing Packaging Inserts',
  primaryKeyword: 'packaging inserts',
  secondaryKeywords: [
    'box insert types',
    'carton platform insert',
    'partition insert',
    'protective packaging insert',
  ],
  searchIntent:
    'Does my product need an insert, and which type should I specify?',
  group: 'Planning',
  seoTitle: 'Choosing Packaging Inserts | Types and When to Use',
  metaDescription:
    'When a lip product needs an insert, which type suits which pack, and what each one costs in money and in disposal terms.',
  ogTitle: 'Which Packaging Insert Does Your Product Need',
  ogDescription:
    'A decision test based on weight, movement and finish, then the six insert types compared on cost and disposal.',
  deck: 'A decision test first, then the six insert types compared on protection, cost and disposal.',
  cardDescription:
    'Work out whether your pack needs an insert, then choose between collars, platforms, partitions, pulp, foam and trays.',
  highlights: [
    'A four-question test for whether you need one at all',
    'Six insert types compared on protection and disposal',
    'Why sourcing inserts separately usually fails',
  ],
  updated: '2026-07-30',
  readingMinutes: 9,
  hero: {
    slug: 'rigid-lipstick-boxes',
    file: 'rigid-lipstick-box-magnetic-closure.png',
    alt: 'Open rigid lipstick box with a lipstick seated in a satin-lined fitted tray',
  },
  sections: [
    {
      type: 'prose',
      id: 'two-jobs',
      heading: 'An insert does two jobs, and only one of them is obvious',
      navLabel: 'Two jobs',
      body: [
        'The visible job is presentation: an insert controls what the customer sees in the first second after a lid lifts, and holds the product at the angle you chose rather than wherever it slid to.',
        'The job that costs money when it is missing is restraint. A lip product in a loose carton moves under its own inertia every time the shipping case is handled. On a lacquered lipstick case or a foiled tube, repeated movement marks the product finish and scuffs the printed interior of the box. The customer receives something that looks like returned stock.',
        'Most brands think about the first job and budget for neither. This guide is mostly about the second, because that is where the decision actually sits.',
      ],
    },
    {
      type: 'list',
      id: 'do-you-need-one',
      heading: 'Do you need an insert at all',
      navLabel: 'Do you need one',
      intro:
        'Four questions. If you answer yes to any of them, specify an insert. If you answer no to all four, you probably do not need one.',
      items: [
        'Does the packed product weigh more than about 30 g? Above that it moves with enough force to mark surfaces.',
        'Does the carton hold more than one item? If so, the items will touch each other unless something separates them.',
        'Is the container glass, or does it have a lacquered, foiled or soft-touch finish that marks easily?',
        'Does the pack ship direct to consumers rather than inside a retail shipper full of identical cartons?',
      ],
      outro:
        'A single lightweight plastic lip balm tube in a snug carton, shipped to a retailer in a full case, genuinely does not need one. Almost everything else does.',
    },
    {
      type: 'compare',
      id: 'insert-types',
      heading: 'The six insert types compared',
      navLabel: 'Insert types',
      intro:
        'Cost, protection and disposal pull in different directions, so there is rarely one right answer.',
      columns: ['Insert', 'How it works', 'Protection', 'Relative cost', 'Disposal'],
      rows: [
        [
          'Folded paperboard collar',
          'A folded band at the base that grips the container',
          'Stops sliding; no cushioning',
          'Lowest',
          'Paper stream with the carton',
        ],
        [
          'Die-cut card platform',
          'A flat card with a shaped aperture holding the item in place',
          'Fixes position precisely; presents at an angle if shaped',
          'Low',
          'Paper stream with the carton',
        ],
        [
          'Paperboard partition',
          'Interlocking strips forming cells between items',
          'Separates items; no cushioning',
          'Low',
          'Paper stream with the carton',
        ],
        [
          'Moulded pulp tray',
          'A formed fibre tray with recesses for each item',
          'Good all-round cushioning and location',
          'Moderate; needs its own tooling',
          'Paper stream, though often not kerbside',
        ],
        [
          'Wrapped foam pad',
          'Foam cut to shape and covered in printed or coloured paper',
          'High; conforms and absorbs shock',
          'Moderate',
          'Foam must be separated by the consumer',
        ],
        [
          'EVA or flocked plastic tray',
          'A thermoformed tray, often flock-coated for a velvet finish',
          'Highest; the premium presentation option',
          'Highest',
          'Not paper-recyclable',
        ],
      ],
      outro:
        'The first three cover the large majority of lip packaging. The bottom three belong with gift sets and rigid boxes where the opening moment is part of the product.',
    },
    {
      type: 'prose',
      id: 'by-product',
      heading: 'Which insert suits which lip product',
      navLabel: 'By product',
      body: [
        'For a single lip balm stick or a lightweight gloss tube, a folded collar at the base is enough. It costs very little, adds no assembly time worth measuring, and stops the one failure that matters.',
        'For a lip balm tin or a salve jar, use a die-cut platform rather than a collar. A tin is wide and shallow, so it does not sit in a collar; it needs an aperture to drop into. Without one it slides across the carton floor and rattles audibly, which reads as cheap before the box is even opened.',
        'For a weighted lipstick case, a platform is the sensible default and a collar the minimum. Metal cases are dense enough that restraint matters more than presentation, and the specific weight thresholds are covered in our <a href="/resources/lipstick-box-size-guide/">lipstick sizing guide</a>.',
        'For a glass gloss tube, a collar is not optional. Glass chips at the neck where the wall is thinnest, and movement is the failure mode. Specify a snug fit and let the collar take up the remaining clearance.',
      ],
    },
    {
      type: 'prose',
      id: 'multipacks',
      heading: 'Multipacks and sets',
      navLabel: 'Multipacks',
      body: [
        'Once a carton holds more than one item, the question changes from restraint to separation. Two lipstick cases in a shared cavity will touch, and lacquered or foiled finishes scratch each other reliably.',
        'For two or three items in a row, interlocking paperboard partitions are the standard answer and the cheapest. For four or more, or for any arrangement that is not a simple row, a die-cut platform with individual recesses works better: it holds each item in a fixed position, presents them evenly, and stops the whole row shifting as one when the box tilts.',
        'Weight accumulates faster than people expect. Six weighted lipstick cases is well over 250 g before packaging, which is beyond what a plain tuck-flap base holds reliably. At that point the base becomes an auto-bottom or the whole construction becomes rigid.',
      ],
    },
    {
      type: 'features',
      id: 'specifying',
      heading: 'Specifying an insert properly',
      navLabel: 'Specifying',
      icon: 'shield',
      intro:
        'Six things that determine whether the insert works in practice rather than on a drawing.',
      items: [
        {
          title: 'Quote it with the carton',
          text: 'An insert sourced separately arrives a millimetre out, is found during packing, and leaves you choosing between forcing it and reordering.',
        },
        {
          title: 'Give the packed weight',
          text: 'Not the empty container weight. The filled, capped, labelled weight is what determines whether restraint or cushioning is needed.',
        },
        {
          title: 'Say how it is assembled',
          text: 'A collar that a machine drops in has different tolerances from one a person folds and places by hand.',
        },
        {
          title: 'Test with real product',
          text: 'Ask for a structural sample with the insert fitted and your actual container inside. A fit that works on paper sometimes does not with a labelled tube.',
        },
        {
          title: 'Shake it',
          text: 'The genuine test. Close the sample, shake it firmly, and listen. If you hear the product move, the insert is not doing its job.',
        },
        {
          title: 'Decide the disposal story first',
          text: 'If a single material stream matters to your brand, that rules out foam and flocked trays before you start comparing them.',
        },
      ],
    },
    {
      type: 'prose',
      id: 'cost-context',
      heading: 'What an insert actually costs',
      navLabel: 'Cost',
      body: [
        'A paperboard insert is a second die and a second run of a much simpler shape, so it carries a one-time tooling cost and a small per-unit cost. On a reasonable volume it is one of the cheapest line items in a packaging specification.',
        'Set that against what it prevents. A single shipment of marked product costs more in replacement, freight and customer goodwill than the insert across an entire run. That is the calculation, and it is rarely close.',
        'Where inserts genuinely get expensive is at the premium end: moulded pulp carries its own tooling, and flocked thermoformed trays are a different manufacturing process with a different cost base. Those are presentation decisions rather than protection ones, and they belong with <a href="/rigid-lipstick-boxes/">rigid gift construction</a> where the opening is part of what you are selling.',
      ],
    },
  ],
  faqs: [
    {
      q: 'Does a single lip balm tube need an insert?',
      a: 'Usually not, if it is a lightweight plastic tube in a snug carton shipped to a retailer inside a full case. Add one if the tube is glass, the carton has generous clearance, or the product ships direct to consumers in a mailer.',
    },
    {
      q: 'At what weight does an insert become necessary?',
      a: 'Around 30 g of packed product. Above that the item moves with enough force in transit to mark its own finish and scuff the printed interior of the carton. Weighted lipstick cases pass that threshold easily.',
    },
    {
      q: 'What is the difference between a collar and a platform?',
      a: 'A collar is a folded band that grips the base of a container, which suits tall items like tubes and bullets. A platform is a flat card with a shaped aperture the item drops into, which suits wide shallow items like tins and jars.',
    },
    {
      q: 'Do I need a partition for a two-pack?',
      a: 'Yes, if the containers have lacquered, foiled or soft-touch finishes. Two cases in a shared cavity will touch, and those finishes scratch each other reliably. A set that arrives marked undoes the point of packaging it as a set.',
    },
    {
      q: 'Which insert suits a glass gloss tube?',
      a: 'A base collar, and it is not optional. Glass chips at the neck where the wall is thinnest, and sliding is the failure mode. Specify a snug carton fit and let the collar take up the remaining clearance rather than allowing movement.',
    },
    {
      q: 'Can I source the insert separately to save money?',
      a: 'You can, and it usually costs more. An insert made to a description rather than to the actual die line arrives slightly out, and the problem is found during packing when the choice is between forcing it and reordering.',
    },
    {
      q: 'How do I test whether an insert works?',
      a: 'Put your real product in a structural sample, close it, shake it firmly and listen. If you can hear movement, it is not doing its job. That test is more informative than any drawing review.',
    },
    {
      q: 'Which inserts keep the pack in one material stream?',
      a: 'Folded collars, die-cut platforms and paperboard partitions all go into the paper stream with the carton. Moulded pulp is paper but often not accepted kerbside. Foam and flocked plastic trays have to be separated by the consumer.',
    },
    {
      q: 'Does an insert slow down packing?',
      a: 'A little, for the ones a person places by hand. A folded collar adds a couple of seconds per unit. Weigh that against the alternative, and tell your supplier whether packing is manual or automated so the insert is designed for it.',
    },
  ],
  related: ['rigid-lipstick-boxes', 'lip-gloss-boxes', 'custom-lipstick-boxes'],
  relatedResources: ['lipstick-box-size-guide', 'custom-packaging-cost-guide', 'lip-gloss-box-size-guide'],
  order: 9,
};
