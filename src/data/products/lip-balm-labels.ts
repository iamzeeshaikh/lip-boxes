import type { Product } from '../types';

/*
 * Sibling of /custom-lip-balm-labels/. This page is the formats-and-stocks
 * reference: which label types exist and which material survives which
 * conditions. The custom page covers the printing service itself — artwork,
 * proofing, variable data and multi-variant runs.
 */
export const product: Product = {
  slug: 'lip-balm-labels',
  name: 'Lip Balm Labels',
  h1: 'Lip Balm Labels',
  primaryKeyword: 'lip balm labels',
  secondaryKeywords: [
    'lip balm label sizes',
    'lip balm sticker labels',
    'label stock for lip balm',
    'tube wrap label',
  ],
  seoTitle: 'Lip Balm Labels | Formats, Sizes and Stocks',
  metaDescription:
    'Every lip balm label format and stock compared: tube wraps, cap seals, tin tops and tamper bands, with sizing guidance.',
  ogTitle: 'Lip Balm Label Formats and Stocks',
  ogDescription:
    'Which label format fits which container, which stock survives oil and handling, and how to measure a tube properly.',
  valueProp:
    'Every label format a lip care line needs, with the stock guidance that decides whether it survives a month in a customer pocket.',
  cardDescription:
    'Tube wraps, cap seals, tin tops and tamper bands, with sizing and stock guidance for each container type.',
  highlights: [
    'Six label formats covering tubes, tins, jars and caps',
    'Stock guidance by where the product is actually carried',
    'Sizing method that works from the container you already have',
  ],
  images: [
    {
      file: 'lip-balm-label-die-cut-wraps.png',
      alt: 'Three die-cut lip balm wrap labels with a lip print, beside a blank white lip balm tube',
      caption: 'Die-cut wrap labels with a rounded finger tab at one edge.',
    },
    {
      file: 'lip-balm-label-kraft-uncoated.png',
      alt: 'Kraft paper lip balm label printed in black beside a matching kraft-wrapped tube on marble',
      caption: 'Uncoated kraft stock, printed in a single colour.',
    },
    {
      file: 'lip-balm-label-roll-and-jar-set.png',
      alt: 'Roll of printed lip balm labels unwinding beside a labelled blue tube and a lip scrub jar',
      caption: 'Roll format supplied alongside matching jar and tin labels.',
    },
  ],
  blocks: [
    {
      type: 'prose',
      id: 'overview',
      heading: 'The label does more work than its size suggests',
      navLabel: 'Overview',
      body: [
        'A lip balm label wraps a curved surface with almost no flat area, sits against a product that is oily by definition, lives in a pocket where it is rubbed constantly, and has to carry a legally required ingredient list in a space barely bigger than a postage stamp.',
        'That combination is why stock choice matters more here than on almost any other label. An ordinary paper sticker looks right on the desk and fails within weeks in a handbag. This page sets out which format fits which container and which material survives which conditions.',
        'If you already know the format and stock you want and are ready to talk artwork, proofs and shade variants, that is covered on the <a href="/custom-lip-balm-labels/">custom label printing page</a> instead.',
      ],
    },
    {
      type: 'features',
      id: 'formats',
      heading: 'The six label formats',
      navLabel: 'Formats',
      icon: 'layers',
      intro:
        'Most lip care lines end up using two or three of these together.',
      items: [
        {
          title: 'Full wrap tube label',
          text: 'A rectangle circling the tube body with a small overlap. The default for a 0.15 oz stick and the format with the most usable area.',
        },
        {
          title: 'Die-cut wrap with a finger tab',
          text: 'A shaped edge giving the user something to lift and the label a less generic outline. Noticeably faster to apply by hand.',
        },
        {
          title: 'Cap and base seal',
          text: 'Small circular labels for the top of a cap or the underside of a tube, usually carrying a batch code, a shade name or a logo.',
        },
        {
          title: 'Tin and jar labels',
          text: 'Round lid labels paired with a wrap around the body, sized for tins, salve pots and scrub jars.',
        },
        {
          title: 'Tamper seal band',
          text: 'A narrow printed strip crossing the cap join that tears on first opening. Frequently required by retail buyers.',
        },
        {
          title: 'Peel-back multi-panel',
          text: 'A hinged second layer opening to reveal extra copy, for when the ingredient declaration will not fit legibly on one face.',
        },
      ],
    },
    {
      type: 'split',
      id: 'sizing',
      heading: 'Measuring your container properly',
      navLabel: 'Sizing',
      image: {
        file: 'lip-balm-label-die-cut-wraps.png',
        alt: 'Die-cut lip balm wrap labels laid flat beside a blank white lip balm tube',
      },
      imageSide: 'right',
      body: [
        'The measurement you need is circumference, not diameter. Wrap a strip of paper around the tube, mark where it meets itself, then measure that strip flat. Oval and round tubes of the same nominal capacity have different circumferences, so measure rather than assume.',
        'Then measure the usable height: the band between where the cap seats and where the base flange starts. A label taller than that will crease every time the cap goes on.',
        'A standard 0.15 oz oval stick usually lands near 2 by 1.5 inches, but treat that as orientation rather than a specification. Send us a sample container and we measure the usable band ourselves and return a cutting template with the safe area marked.',
      ],
    },
    {
      type: 'compare',
      id: 'stocks',
      heading: 'Which stock survives which conditions',
      navLabel: 'Stocks',
      intro:
        'Choose by where the product is carried, not by how the stock looks on a sample sheet.',
      columns: ['Stock', 'Oil and water', 'Look', 'Carried where'],
      rows: [
        ['White BOPP synthetic', 'High', 'Clean, bright whites, slightly plastic', 'Pocket, handbag, gym bag, outdoors'],
        ['Clear BOPP', 'High', 'No-label look on a coloured container', 'Anywhere; needs a white underprint for pale colours'],
        ['Metallised polyester', 'High', 'Silver or gold base beneath the ink', 'Limited editions and holiday sets'],
        ['Uncoated kraft paper', 'Low unless varnished', 'Natural, matte, visible fibre', 'Inside an outer carton, or on a shelf product'],
        ['Coated white paper', 'Moderate with lamination', 'Sharp full colour, warmer than film', 'Boxed products where the tube is protected'],
        ['Textured felt paper', 'Low', 'Tactile and premium, absorbs ink softly', 'Gift sets and boxed presentation only'],
      ],
      outro:
        'Where a label will be handled daily, add a laminate or a varnish over the print rather than relying on the ink alone. A bare digital print scuffs at the seam within weeks.',
    },
    {
      type: 'prose',
      id: 'adhesive',
      heading: 'Adhesive and the container surface',
      navLabel: 'Adhesive',
      body: [
        'A permanent acrylic adhesive is the standard specification and holds well on plastic, paperboard and clean metal. It is the right answer for most lip balm work and rarely needs discussion.',
        'Three situations do need it. Tins stored cold, where the adhesive stiffens and can lift at the edges. Containers made from a very low surface energy plastic, which resists bonding. And any container with a release coating left over from manufacturing, which is common on metal tins.',
        'Tell us the container material and how the filled product is stored, and the adhesive is specified against that rather than assumed. It costs nothing to get right at quoting stage and is expensive to put right after a run.',
      ],
    },
    {
      type: 'prose',
      id: 'legal-copy',
      heading: 'Fitting the required copy',
      navLabel: 'Legal copy',
      body: [
        'A cosmetic sold in the United States needs an ingredient declaration in descending order of predominance, the net quantity of contents, and the name and place of business of the responsible party. On a lip balm tube that has to fit into a band about an inch and a half tall.',
        'Legibility falls off sharply below about 5 pt, and sooner on uncoated kraft where ink spreads into the fibre. Rather than shrinking the type further, the practical answers are a peel-back panel, moving the declaration to an outer carton, or a small folded leaflet inside the box.',
        'If your balm carries an SPF claim it is regulated as an over-the-counter drug in the United States and the drug facts panel has its own layout rules. We print what you approve and do not review compliance, so have that copy checked first.',
      ],
    },
    {
      type: 'prose',
      id: 'supply',
      heading: 'Sheets or rolls',
      navLabel: 'Supply format',
      body: [
        'Sheets suit hand application in small batches and are easier to store flat. Rolls are required for any semi-automatic or automatic applicator.',
        'If you are ordering rolls, send the applicator make and model. The roll has to be wound in the direction your machine expects, on the right core diameter, within the maximum outside diameter it accepts. Getting the unwind direction wrong makes a whole roll unusable on the line even though every label on it is correct.',
        'For hand application, a die-cut tab is noticeably quicker to lift than a plain rectangle, and a slightly wider matrix around each label makes them easier to peel from the liner.',
      ],
    },
    {
      type: 'prose',
      id: 'quantity-pricing',
      heading: 'Quantity and price',
      navLabel: 'Quantity & pricing',
      body: [
        'Labels are the one product on this site where running several designs costs little more than running one, provided they share a size and a stock. The cutting die and the material are shared, so six scents at 2,000 each is priced close to a single design at 12,000.',
        'Price starts from $0.30 per piece for large-volume orders. Final pricing depends on size, material, printing, and quantity. Plain paper stocks at volume sit at the lower end of that range; metallised material with foil and lamination sits well above it.',
        'One cutting die serves every reorder at that size, so keeping a whole range on a single label footprint pays back steadily. That is worth deciding before the first order rather than after the third.',
      ],
    },
    {
      type: 'prose',
      id: 'quality-storage',
      heading: 'Quality control and storage',
      navLabel: 'Quality',
      body: [
        'Printed labels are checked for colour against the approved proof, for cut registration against the artwork, and for clean release from the liner. Registration is the failure customers notice, because a die drifting by half a millimetre leaves a visible white sliver along one edge of every label on the roll.',
        'Store label stock flat, cool and out of sunlight, and use it within a reasonable period. Adhesive performance changes with age and heat, and a roll that has sat near a warehouse ceiling through a summer will not run the way a fresh one does.',
        'On disposal, paper-faced labels are compatible with paper recycling once separated from the container. Synthetic BOPP is not, and if the label stays on the tube it affects how the whole pack is handled. That trade-off between durability and end-of-life is worth weighing deliberately, and the material notes on the <a href="/materials/">stock reference</a> set out the same logic for board.',
      ],
    },
  ],
  specs: [
    { label: 'Product type', value: 'Pressure-sensitive labels for lip balm tubes, tins and jars' },
    { label: 'Formats', value: 'Full wrap, die-cut wrap with tab, cap seal, base seal, tin top, tamper band, peel-back panel' },
    { label: 'Typical wrap size', value: 'Approximately 2 x 1.5 in for a standard 0.15 oz stick; cut to your container' },
    { label: 'Sizing method', value: 'Circumference plus overlap, and the usable band between cap seat and base flange' },
    { label: 'Face stocks', value: 'White BOPP, clear BOPP, metallised polyester, uncoated kraft, coated paper, textured felt' },
    { label: 'Finishing', value: 'Matte or gloss lamination, varnish, spot UV, hot and cold foil' },
    { label: 'Adhesive', value: 'Permanent acrylic as standard; specified against container material and storage' },
    { label: 'Supply format', value: 'Sheets, or rolls wound to your applicator core size and unwind direction' },
    { label: 'Shapes', value: 'Rectangle, rounded corner, oval, circle and custom die-cut outlines' },
    { label: 'Minimum legible type', value: 'Around 5 pt on film; larger on uncoated kraft' },
    { label: 'Multiple designs', value: 'Share one die and one material at no proportional cost increase' },
    { label: 'Starting unit price', value: 'From $0.30 per piece on qualifying large-volume orders' },
    { label: 'Ordering', value: 'Quote based on size, stock, finish and quantity' },
  ],
  faqs: [
    {
      q: 'How do I work out what size label I need?',
      a: 'Measure circumference rather than diameter: wrap a paper strip around the tube, mark where it meets, measure it flat, then add about an eighth of an inch for the overlap. Also measure the band between the cap seat and the base flange, because a taller label will crease when the cap goes on.',
    },
    {
      q: 'Which stock should I choose?',
      a: 'Decide by where the product is carried, not by how the sample sheet looks. Anything going into a pocket or a gym bag needs a synthetic BOPP face. Uncoated kraft and textured papers are for products that stay in an outer carton or on a shelf.',
    },
    {
      q: 'Will a paper label survive the oil in the balm?',
      a: 'Not for long unless it is varnished or laminated. Paper absorbs oil at the cut edges, then darkens and lifts. If the natural look matters more than durability, add a matte varnish and accept that the label is not a long-life component.',
    },
    {
      q: 'What is the difference between this and your custom labels page?',
      a: 'This page is the formats-and-stocks reference: what exists, what fits which container and what survives what. The custom label page covers the printing service itself — building artwork to a cutting template, proofing, variable data and running several shade or scent variants together.',
    },
    {
      q: 'Do I need a separate label for the cap?',
      a: 'Not usually, but a small circular cap seal is a cheap way to add a shade name, a batch code or a logo where the wrap is already full. It is also the easiest place to put information that changes per batch without altering the main label.',
    },
    {
      q: 'Which stock gives a no-label look?',
      a: 'Yes, using a clear BOPP stock so the container colour shows through the unprinted areas. Remember that ink on clear film is translucent, so pale colours and whites need a white underprint layer or they will disappear against a dark container.',
    },
    {
      q: 'Should I order sheets or rolls?',
      a: 'Sheets for hand application, rolls for any applicator. If you are ordering rolls, send us the applicator make and model so the winding direction, core diameter and maximum roll size all match. A correctly printed roll wound the wrong way is unusable on the line.',
    },
    {
      q: 'My ingredient list will not fit legibly. What are my options?',
      a: 'A peel-back multi-panel label, moving the declaration to an outer carton, or a small folded leaflet inside the box. All three are better than setting a long declaration below 5 pt, which on a curved uncoated surface is genuinely unreadable.',
    },
    {
      q: 'Which adhesive works on metal tins?',
      a: 'A standard permanent acrylic bonds well to clean metal. Two things change that: cold storage, which stiffens the adhesive and can lift the edges, and any release coating left on the tin from manufacturing. Tell us the container material and storage conditions and it is specified accordingly.',
    },
    {
      q: 'What is the shelf life of unused label stock?',
      a: 'A long time if they are kept flat, cool and out of direct sun. Heat is the main enemy — a roll stored near a warehouse ceiling in summer can develop adhesive ooze at the edges and become difficult to run through an applicator.',
    },
    {
      q: 'Which stocks survive water and humidity?',
      a: 'Synthetic face stocks with a laminate or varnish over the print resist water and will not disintegrate. Paper stocks are not waterproof and should not be described as such on your packaging or listings.',
    },
    {
      q: 'Can labels carry a batch code or expiry date?',
      a: 'Yes, either printed as variable data during the run, or by leaving a clear panel for your own inkjet or thermal coder at filling. The second is more flexible when batch numbers are not known at print time, which is usually the case.',
    },
  ],
  related: ['custom-lip-balm-labels', 'cardboard-lip-balm-tubes', 'paper-lip-balm-tubes', 'lip-balm-packaging'],
  order: 7,
  group: 'Lip Balm',
};
