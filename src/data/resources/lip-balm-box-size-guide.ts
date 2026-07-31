import type { Resource } from '../content-types';

export const resource: Resource = {
  slug: 'lip-balm-box-size-guide',
  title: 'Lip Balm Box Size Guide',
  h1: 'Lip Balm Box Size Guide',
  primaryKeyword: 'lip balm box size',
  secondaryKeywords: [
    'lip balm box dimensions',
    'standard lip balm tube size',
    'lip balm carton measurements',
    'how to measure a lip balm tube',
  ],
  searchIntent:
    'What size box do I need for the lip balm tube I am already filling?',
  group: 'Sizing',
  seoTitle: 'Lip Balm Box Size Guide | Dimensions and Clearance',
  metaDescription:
    'Measure your lip balm tube and work out the carton size, including clearance, board allowance and multipack maths.',
  ogTitle: 'How to Size a Lip Balm Box',
  ogDescription:
    'Tube measurements, clearance allowances, multipack maths and the reference tables you need before requesting a die line.',
  deck: 'How to get from the tube in your hand to a carton dimension a supplier can quote.',
  cardDescription:
    'Measure your tube, add the right clearance, and read off carton sizes for single sticks, tins and multipacks.',
  highlights: [
    'Reference tables for common tube and tin formats',
    'The clearance and board allowances that get added',
    'Multipack maths, including partition thickness',
  ],
  updated: '2026-07-30',
  readingMinutes: 9,
  hero: {
    slug: 'custom-lip-balm-boxes',
    file: 'custom-lip-balm-box-slim-tuck-end.png',
    alt: 'Slim white lip balm carton standing beside a matching white twist-up lip balm tube',
  },
  sections: [
    {
      type: 'prose',
      id: 'why-there-is-no-standard',
      heading: 'Why there is no standard lip balm box size',
      navLabel: 'No standard size',
      body: [
        'Lip balm tubes look interchangeable and are not. A 0.15 oz oval stick and a 0.15 oz round stick hold the same product and have different footprints. Two suppliers selling the same nominal capacity often differ by a millimetre or more across the cap, which is enough to turn a snug carton into one that has to be forced.',
        'So the useful question is not "what size is a lip balm box" but "what does my tube measure, and what gets added to that". This guide answers the second question. Everything below assumes you have a filled, capped tube in front of you.',
        'If your product is a paperboard push-up tube rather than a plastic twist-up, the same method applies but the clearance is slightly different, because paperboard has more surface friction than moulded plastic.',
      ],
    },
    {
      type: 'steps',
      id: 'how-to-measure',
      heading: 'How to measure your tube',
      navLabel: 'Measuring',
      intro:
        'Four measurements, taken with a digital caliper if you have one and a steel rule if you do not.',
      steps: [
        {
          title: 'Widest diameter, capped',
          text: 'Measure across the widest point of the assembled tube with the cap fitted. On most sticks that is the cap itself; on a tapered barrel it can be lower down.',
        },
        {
          title: 'Second axis, if not round',
          text: 'Oval tubes need both axes. Measure the narrow one too, because the carton footprint is a rectangle around both.',
        },
        {
          title: 'Total height, capped',
          text: 'From the base to the very top of the seated cap. Not the barrel height, and not the height printed on a supplier drawing.',
        },
        {
          title: 'Filled weight',
          text: 'Weigh one filled, capped unit. This decides board weight and, on a hanging pack, tab geometry — not the carton size, but you will be asked for it.',
        },
      ],
    },
    {
      type: 'compare',
      id: 'reference-tables',
      heading: 'Common lip balm formats and where their cartons land',
      navLabel: 'Reference table',
      intro:
        'Orientation figures, not specifications. Use them to sanity-check a quote, then measure your own container.',
      columns: ['Format', 'Typical container size', 'Carton footprint lands near', 'Carton height lands near'],
      rows: [
        ['0.15 oz oval twist-up', '~0.72 x 0.55 in barrel', '0.85 x 0.7 in', '2.9–3.1 in'],
        ['0.15 oz round twist-up', '~0.65 in diameter', '0.8 x 0.8 in', '2.9–3.1 in'],
        ['0.15 oz paperboard push-up', '~0.65 in diameter', '0.82 x 0.82 in', '2.9–3.2 in'],
        ['0.3 oz paperboard push-up', '~0.75 in diameter', '0.95 x 0.95 in', '3.3–3.6 in'],
        ['0.5 oz jumbo stick', '~0.9 in diameter', '1.1 x 1.1 in', '3.4–3.7 in'],
        ['0.5 oz screw-top tin', '~2.05 in diameter, 0.6 in deep', '2.25 x 2.25 in', '0.8 in'],
        ['1 oz screw-top tin', '~2.6 in diameter, 0.8 in deep', '2.8 x 2.8 in', '1 in'],
        ['15 ml salve jar', '~1.6 in diameter, 1.2 in tall', '1.8 x 1.8 in', '1.5 in'],
      ],
      outro:
        'Every figure above already includes typical clearance. If you are comparing against a supplier quote and their number is smaller, ask what clearance they have allowed.',
    },
    {
      type: 'prose',
      id: 'clearance',
      heading: 'What gets added to your measurement',
      navLabel: 'Clearance',
      body: [
        'Three things sit between your tube measurement and the finished carton dimension, and a quote that ignores any of them produces a box that binds.',
        'The first is running clearance: the gap that lets the tube drop in and lift out without friction. On a plastic twist-up this is usually around 0.5 to 1 mm on each axis. On a paperboard push-up tube it is nearer 1 to 1.5 mm, because kraft against kraft grips in a way plastic against board does not.',
        'The second is board thickness at the closing flaps. Tuck flaps fold into the carton, so the internal height available is slightly less than the external height. On 18pt board that is a fraction of a millimetre, but on 24pt with a double-thickness tuck it becomes noticeable on a short carton.',
        'The third is the label, if there is one. A wrap label adds its own thickness to the tube diameter, and a carton drawn around a bare tube will be tight once the labelled tube goes in. Always measure the tube as it will actually be packed. Our page on <a href="/custom-lip-balm-boxes/">cartons cut to a filled balm tube</a> covers how that die line is drawn.',
      ],
    },
    {
      type: 'prose',
      id: 'multipacks',
      heading: 'Multipack maths',
      navLabel: 'Multipacks',
      body: [
        'A four-tube pack is not four times a single carton. The internal width is the sum of the tube widths, plus the clearance on the outer two only, plus the thickness of any partitions between them.',
        'Worked example. Four round 0.15 oz sticks at 0.65 in diameter, in a single row, with a 0.5 mm paperboard partition between each: 4 x 0.65 in = 2.6 in of tube, plus three partitions at roughly 0.02 in each = 0.06 in, plus 0.04 in total clearance. Internal width lands near 2.7 in.',
        'A two-by-two block is usually a better shape than a row of four: it is more stable on a shelf, uses less board per unit, and posts more cheaply because it is closer to a cube. A stepped arrangement looks more considered in a gift set but wastes internal volume.',
        'Tell your supplier the tube count and the layout you want rather than an outer dimension, unless the pack has to fit inside an existing shipper. In that case give the shipper internal dimensions and let the carton be worked backwards from it.',
      ],
    },
    {
      type: 'list',
      id: 'hanging-packs',
      heading: 'What changes on a hanging pack',
      navLabel: 'Hanging packs',
      intro:
        'A peg-ready carton is the same box with material removed from the top panel, which changes the sizing conversation.',
      items: [
        'Add the tab height above the carton body, typically 0.6 to 1 in depending on the tab style',
        'Allow clear space between the top of the tube and the bottom of the hanging slot, so the hook does not press on the product',
        'Check the retailer specification: many chains publish exact tab dimensions and tolerances',
        'Confirm the packed weight, since it decides whether the tab needs reinforcing',
        'Leave a flat barcode area of at least 1.5 in wide that does not cross a crease',
        'Account for pack depth, because the pack must clear the one hanging in front of it on the same hook',
      ],
      outro:
        'Where the pack holds more than one tube, the tab usually needs a heavier board or a folded double thickness. The engineering behind that is set out on our <a href="/hang-tab-lip-balm-boxes/">peg hook carton page</a>.',
    },
    {
      type: 'features',
      id: 'common-mistakes',
      heading: 'The sizing mistakes that cost a reprint',
      navLabel: 'Common mistakes',
      icon: 'ruler',
      intro:
        'Every one of these has produced a rejected run at some point.',
      items: [
        {
          title: 'Measuring the barrel, not the cap',
          text: 'The cap is almost always the widest and tallest part. A carton sized to the barrel will not close.',
        },
        {
          title: 'Working from a supplier drawing',
          text: 'Drawings show nominal dimensions and often omit moulding tolerances, cap seat variation and lacquer thickness.',
        },
        {
          title: 'Forgetting the label',
          text: 'A wrap label adds real thickness. Measure a labelled tube, or say explicitly that the measurement is of a bare one.',
        },
        {
          title: 'Confusing internal and external',
          text: 'Ask which one a quoted dimension refers to. A 0.8 in external carton does not hold a 0.8 in tube.',
        },
        {
          title: 'Ignoring the filling method',
          text: 'A hand-packed carton wants more clearance than one filled on a machine that positions the tube precisely.',
        },
        {
          title: 'Sizing the multipack by multiplication',
          text: 'Partitions and shared clearance mean a four-pack is narrower than four single cartons side by side.',
        },
      ],
    },
    {
      type: 'prose',
      id: 'what-to-send',
      heading: 'What to send when you request a die line',
      navLabel: 'Requesting a die line',
      body: [
        'The shortest route to a correct die line is a physical sample. Post one filled, capped and labelled unit exactly as it will be packed, and the structural drawing is measured from the real thing rather than from a description.',
        'If you cannot send one, send all four measurements from the top of this guide, say whether they are of a bare or labelled tube, and say whether the pack is hand filled or machine filled. Add the tube count and layout if it is a multipack.',
        'You will get back a die line to check before anything prints. Ask for a plain cut-and-creased sample as well, and test it with your actual product before approving. That step costs a few days and prevents the one failure that cannot be recovered: a run of cartons that does not fit.',
      ],
    },
  ],
  faqs: [
    {
      q: 'What is the most common lip balm box size?',
      a: 'For a single 0.15 oz twist-up stick, cartons cluster around 0.8 by 0.8 inches square and 3 inches tall. That is where most orders land rather than a standard anyone works to, and oval tubes sit slightly wider on one axis and narrower on the other.',
    },
    {
      q: 'Should I give internal or external dimensions?',
      a: 'Internal, if you know them, because that is the space your tube has to occupy. If you are quoting an external size, say so explicitly. A carton quoted at 0.8 inches externally will not hold a 0.8 inch tube once clearance and board thickness are accounted for.',
    },
    {
      q: 'How much clearance does a lip balm tube need?',
      a: 'Around 0.5 to 1 mm per axis for a plastic twist-up, and nearer 1 to 1.5 mm for a paperboard push-up tube, which has more surface friction. Hand-filled packs benefit from the upper end of that range; machine-filled lines can run tighter.',
    },
    {
      q: 'Does a wrap label change the carton size?',
      a: 'Yes, and it is a common oversight. The label adds its own thickness to the tube diameter, so a carton drawn around a bare tube will be tight once the labelled tube goes in. Measure the tube as it will actually be packed.',
    },
    {
      q: 'How do I size a box for a lip balm tin?',
      a: 'Tins are wide and shallow rather than tall, so the carton is a flat rectangle. Measure the tin diameter and depth, add clearance, and plan for a platform insert — a tin slides freely in a plain carton and rattles noticeably.',
    },
    {
      q: 'How wide should a four-tube multipack be?',
      a: 'Add the four tube widths, then add clearance on the outer two only, then add the thickness of the three partitions between them. Four round sticks at 0.65 inches lands near 2.7 inches internally, not the 2.8 or more you get by multiplying a single carton width.',
    },
    {
      q: 'Can I use one carton size across several tube suppliers?',
      a: 'Only if you have measured all of them. Nominal capacities match far more often than actual dimensions do. If you expect to switch suppliers, size the carton to the largest tube and accept slightly more clearance on the others.',
    },
    {
      q: 'What extra height does a hanging tab add?',
      a: 'Typically 0.6 to 1 inch above the carton body, depending on the tab style, plus clear space between the top of the tube and the bottom of the slot so the hook does not press on the product. Retailer packaging guides often specify the exact figure.',
    },
    {
      q: 'Do I need a sample before ordering?',
      a: 'A plain cut-and-creased sample is worth the few days it adds. It is the only way to confirm the tube fits with the right clearance and that the carton closes cleanly on your packing line. A fit problem found after production cannot be recovered.',
    },
  ],
  related: ['custom-lip-balm-boxes', 'hang-tab-lip-balm-boxes', 'paper-lip-balm-tubes'],
  relatedResources: ['packaging-dieline-guide', 'choosing-packaging-inserts', 'lipstick-box-size-guide'],
  order: 2,
};
