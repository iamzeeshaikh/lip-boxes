import type { Resource } from '../content-types';

export const resource: Resource = {
  slug: 'lipstick-box-size-guide',
  title: 'Lipstick Box Size Guide',
  h1: 'Lipstick Box Size Guide',
  primaryKeyword: 'lipstick box size',
  secondaryKeywords: [
    'lipstick box dimensions',
    'lipstick case measurements',
    'bullet case sizing',
    'lipstick carton size chart',
  ],
  searchIntent:
    'How do I measure a lipstick bullet case and work out the carton dimensions?',
  group: 'Sizing',
  seoTitle: 'Lipstick Box Size Guide | Bullet Case Dimensions',
  metaDescription:
    'Measure a lipstick bullet case correctly, including magnetic cap tolerance, and read off carton and duo pack sizes.',
  ogTitle: 'Sizing a Lipstick Box from the Bullet Case',
  ogDescription:
    'Case measurement method, magnetic cap tolerances, weight-driven board choice and multi-shade set maths.',
  deck: 'Bullet cases vary more than any other lip container. This is how to measure one so the carton actually closes.',
  cardDescription:
    'Case measurement method, the tolerances that catch people out, and carton sizes for singles, duos and collections.',
  highlights: [
    'Why magnetic cases measure larger than their drawings',
    'Weight table linking case type to board weight',
    'Duo, trio and collection tray maths',
  ],
  updated: '2026-07-30',
  readingMinutes: 8,
  hero: {
    slug: 'custom-lipstick-boxes',
    file: 'custom-lipstick-box-reverse-tuck-end.png',
    alt: 'Two printed lipstick boxes, one closed and one open showing the tuck flap inside',
  },
  sections: [
    {
      type: 'prose',
      id: 'why-cases-vary',
      heading: 'Why lipstick cases vary so much',
      navLabel: 'Why cases vary',
      body: [
        'A lip balm tube is a commodity with a handful of common formats. A lipstick case is a design object, and manufacturers treat it as one. Slim aluminium, weighted zamak, square resin, magnetic closure, twist closure, refillable shell — all of them can hold the same 3.5 g of product in completely different envelopes.',
        'The practical consequence is that the phrase "standard lipstick box" has no useful meaning. Cartons for a single bullet cluster loosely between 0.9 and 1.2 inches square and 3 to 3.5 inches tall, and within that range the specific number is entirely dictated by your case.',
        'This guide covers how to measure one properly, what gets added, and how the maths changes for duos, trios and collection trays. The construction choices that follow from those dimensions are set out on our <a href="/lipstick-boxes/">comparison of lipstick box constructions</a>.',
      ],
    },
    {
      type: 'steps',
      id: 'measuring',
      heading: 'Measuring a bullet case',
      navLabel: 'Measuring',
      intro:
        'Take these with the case assembled and the cap fully seated, never with the cap off.',
      steps: [
        {
          title: 'Width at the widest point',
          text: 'Usually the cap, but on a tapered or stepped case it can be the base or a decorative collar. Sweep the caliper down the whole case to find it.',
        },
        {
          title: 'Depth at that same point',
          text: 'Square and oval cases differ across the two axes. Round cases only need one figure, but confirm the case really is round rather than slightly oval.',
        },
        {
          title: 'Total seated height',
          text: 'Base to the top of the cap when fully closed. On a magnetic case, close it and let the magnets pull it home before measuring.',
        },
        {
          title: 'Weight of one filled unit',
          text: 'Weighted metal cases can be three times the mass of a slim aluminium one, and that decides board weight and whether an insert is needed.',
        },
      ],
    },
    {
      type: 'prose',
      id: 'magnetic-tolerance',
      heading: 'The magnetic cap problem',
      navLabel: 'Magnetic cases',
      body: [
        'This is the single most common cause of a lipstick carton that does not close, and it is worth its own section.',
        'On a magnetic case the cap does not thread down to a hard stop. It is pulled home by magnets and sits wherever the magnetic force and the mating surfaces settle. That position varies unit to unit, and it is almost always fractionally higher than the nominal drawing height. A drawing that says 82 mm can produce assembled units measuring 82.4 mm.',
        'A carton drawn to 82 mm plus standard clearance will then bind on a proportion of the run. Not all of it, which makes the problem worse: it passes a spot check and fails during packing.',
        'Two things fix it. Measure ten assembled cases rather than one, and use the tallest. And send a physical sample so the die line is drawn from reality rather than from a specification sheet.',
      ],
    },
    {
      type: 'compare',
      id: 'case-types',
      heading: 'Case type, weight and what it implies',
      navLabel: 'Case types',
      intro:
        'Weight drives board choice and insert decisions more than size does.',
      columns: ['Case type', 'Typical filled weight', 'Carton board', 'Insert'],
      rows: [
        ['Slim aluminium bullet', '12–18 g', '18pt sufficient', 'Optional above entry price point'],
        ['Standard plastic bullet', '15–22 g', '18pt sufficient', 'Collar recommended'],
        ['Weighted zamak or metal', '35–60 g', '22–24pt', 'Collar or platform, not optional'],
        ['Magnetic closure case', '30–55 g', '22–24pt', 'Platform, and measure ten units first'],
        ['Square resin barrel', '20–35 g', '20–22pt', 'Platform, since flat faces slide'],
        ['Refillable outer shell', '25–45 g', '22pt', 'Platform sized to the shell, not the refill'],
        ['Liquid lipstick with wand', '18–28 g', '18–20pt', 'Collar; carton is taller than it looks'],
      ],
      outro:
        'A case above roughly 30 g will mark both itself and the printed interior of a loose carton within a single shipping journey. That is the threshold at which an insert stops being a nicety.',
    },
    {
      type: 'prose',
      id: 'clearance',
      heading: 'Clearance and what else gets added',
      navLabel: 'Clearance',
      body: [
        'Lipstick cartons typically carry 0.5 to 1 mm of running clearance per axis, at the lower end for machine-fed lines and the upper end for hand packing.',
        'Two additions catch people out. A lacquered or soft-touch coated case measures larger than a bare one, sometimes by two or three tenths of a millimetre on each surface. And a case with a printed or foiled wrap adds that material thickness too.',
        'On height, remember that tuck flaps fold inward and consume a little of the internal space. On a 3 inch carton in 24pt board with a double tuck, that is small but real, and it is the difference between a cap seating cleanly and a flap that will not close flat.',
      ],
    },
    {
      type: 'prose',
      id: 'multi-shade',
      heading: 'Duos, trios and collection trays',
      navLabel: 'Multi-shade sets',
      body: [
        'For a duo or trio in a row, internal width is the sum of the case widths, plus clearance on the outer two, plus the partition thickness between each. A partition is not optional here: lacquered and foiled cases scratch one another, and a set that arrives marked is worse than no set at all.',
        'For a collection tray holding four or more, a die-cut platform with individual recesses works better than a row of partitions. It holds each case in a fixed position, presents them evenly when the lid lifts, and stops the whole row shifting as one when the box is tilted.',
        'Weight adds up quickly. Six weighted cases at 45 g each is 270 g before the packaging, which is beyond what a tuck-flap base will hold reliably. At that point the base becomes an auto-bottom or the construction becomes rigid, as covered on our <a href="/rigid-lipstick-boxes/">wrapped rigid box page</a>.',
      ],
    },
    {
      type: 'list',
      id: 'panel-space',
      heading: 'What has to fit on the panels',
      navLabel: 'Panel space',
      intro:
        'Size is not only about the case. A carton large enough to hold the lipstick can still be too small to carry the required copy.',
      items: [
        'Shade name and shade number, usually on the front and repeated on the base',
        'Finish descriptor, such as matte, satin or cream',
        'Net weight in both metric and US customary units',
        'Full ingredient declaration in descending order of predominance',
        'Name and place of business of the responsible party',
        'A barcode with at least 1.5 in of clear flat width, not crossing a crease',
        'Batch or lot code, either printed or left as a clear panel for coding at fill',
      ],
      outro:
        'On a slim carton this rarely all fits legibly. A small folded leaflet inside the carton is the normal answer, and it costs less than moving to a larger box.',
    },
    {
      type: 'features',
      id: 'mistakes',
      heading: 'Where lipstick carton sizing goes wrong',
      navLabel: 'Common mistakes',
      icon: 'ruler',
      items: [
        {
          title: 'Measuring one unit',
          text: 'Case tolerances are wider than tube tolerances. Measure ten and design to the largest.',
        },
        {
          title: 'Trusting the drawing',
          text: 'Supplier drawings show nominal values and rarely include lacquer thickness or magnetic seating variation.',
        },
        {
          title: 'Sizing to the refill',
          text: 'On refillable systems, the carton holds the outer shell. Measure the shell with a refill installed.',
        },
        {
          title: 'Ignoring case weight',
          text: 'A heavy case in a light carton with no insert will mark the print interior within one shipping journey.',
        },
        {
          title: 'Designing before allocating panels',
          text: 'Legal copy on a slim carton fills the available area fast. Allocate panels before any design work starts.',
        },
        {
          title: 'Assuming a range shares one size',
          text: 'If shades ship in different case moulds, they need different cartons. Confirm before committing to one die.',
        },
      ],
    },
  ],
  faqs: [
    {
      q: 'What size is a standard lipstick box?',
      a: 'There is no standard. Cartons for a single bullet cluster between 0.9 and 1.2 inches square and 3 to 3.5 inches tall, but the specific figure comes entirely from your case. Treat that range as a sanity check on a quote, not as a size to order.',
    },
    {
      q: 'Why do you want ten cases measured instead of one?',
      a: 'Because lipstick case tolerances are wider than most people expect, particularly on magnetic closures where the cap seats wherever the magnets settle. Designing to a single sample risks a carton that fits most of the run and binds on the rest.',
    },
    {
      q: 'Do magnetic cases really measure taller than their drawings?',
      a: 'Often, yes. The cap is pulled home by magnets rather than threading to a hard stop, so assembled height varies and tends to sit above the nominal figure. A carton drawn to the drawing plus standard clearance will bind on part of the run.',
    },
    {
      q: 'How much clearance does a lipstick carton need?',
      a: 'Around 0.5 to 1 mm per axis, at the lower end for machine-fed packing and the upper end for hand packing. Add a little more if the case is lacquered or carries a printed wrap, since both add measurable thickness.',
    },
    {
      q: 'At what weight does an insert become necessary?',
      a: 'Around 30 g of filled case. Above that the case moves under its own inertia in a shipping carton and marks both its own finish and the printed interior of the box. A folded paperboard collar is enough for most cases at that weight.',
    },
    {
      q: 'How wide should a three-shade set be?',
      a: 'Sum the three case widths, add clearance on the outer two only, then add two partition thicknesses. Do not multiply a single carton width by three, which overstates it by roughly the clearance you would have added twice.',
    },
    {
      q: 'Can one carton serve a twelve-shade range?',
      a: 'Only if every shade ships in the same case mould. That is usually true within one range and frequently false across a relaunch. Confirm it before committing to a single die line, because a mid-range case change means a second one.',
    },
    {
      q: 'What if my ingredient list will not fit on the carton?',
      a: 'A small folded leaflet inside the carton is the standard answer and costs less than moving up a box size. Setting the declaration below about 5 pt to make it fit produces copy nobody can read, which serves no one.',
    },
    {
      q: 'Should I send a case sample or dimensions?',
      a: 'A sample, whenever possible. It captures lacquer thickness, magnetic seating and mould variation that no drawing records. Send it assembled and filled, exactly as it will be packed.',
    },
  ],
  related: ['custom-lipstick-boxes', 'rigid-lipstick-boxes', 'hang-tab-lipstick-boxes'],
  relatedResources: ['choosing-packaging-inserts', 'lip-gloss-box-size-guide', 'packaging-dieline-guide'],
  order: 3,
};
