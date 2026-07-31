import type { Resource } from '../content-types';

export const resource: Resource = {
  slug: 'packaging-glossary',
  title: 'Packaging Glossary',
  h1: 'Packaging Glossary',
  primaryKeyword: 'packaging glossary',
  secondaryKeywords: [
    'packaging terms explained',
    'printing terminology',
    'carton terms',
    'packaging definitions',
  ],
  searchIntent:
    'A supplier used a term I do not know. What does it mean?',
  group: 'Reference',
  seoTitle: 'Packaging Glossary | Printing and Carton Terms',
  metaDescription:
    'Plain definitions of the packaging, printing and finishing terms that turn up on quotes, proofs, dielines and delivery notes.',
  ogTitle: 'Packaging and Print Terms, Defined',
  ogDescription:
    'Structure, material, printing, finishing and ordering terms explained in plain language, grouped by where you meet them.',
  deck: 'The terms that appear on quotes, proofs and dielines, defined without jargon.',
  cardDescription:
    'Structure, material, print, finishing and ordering terms defined plainly, grouped by where you encounter them.',
  highlights: [
    'Grouped by where the term appears, not alphabetically',
    'Written for buyers rather than printers',
    'Cross-referenced to the pages that go deeper',
  ],
  updated: '2026-07-30',
  readingMinutes: 11,
  hero: {
    slug: 'paper-lip-balm-tubes',
    file: 'paper-lip-balm-tube-natural-kraft-open.png',
    alt: 'Three natural kraft paper lip balm tubes, one open showing the inner liner and push-up base',
  },
  sections: [
    {
      type: 'prose',
      id: 'how-arranged',
      heading: 'How this glossary is arranged',
      navLabel: 'How it works',
      body: [
        'Alphabetical glossaries are useful when you already know the word. This one is grouped by where you encounter the term, because most people arrive here holding a quote or a proof and wondering what one line on it means.',
        'Five groups: structure, materials, printing, finishing, and ordering. Terms that could sit in two places appear where a buyer is most likely to first meet them.',
        'Definitions are written for someone buying packaging rather than someone making it, so they favour practical consequence over technical precision.',
      ],
    },
    {
      type: 'compare',
      id: 'structure-terms',
      heading: 'Structure terms',
      navLabel: 'Structure',
      intro:
        'These appear on dielines, structural drawings and quotes for the physical shape of a carton.',
      columns: ['Term', 'What it means', 'Why it matters to you'],
      rows: [
        ['Dieline', 'The flat drawing of a carton showing every cut and crease', 'Your artwork must be built onto it and never rescaled'],
        ['Straight tuck end', 'A carton where both closing flaps tuck from the same side', 'Leaves the front panel uninterrupted for artwork'],
        ['Reverse tuck end', 'Flaps tuck from opposite ends', 'Same cost; some hand-packing lines prefer it'],
        ['Seal end', 'A carton glued shut after filling', 'Needs a sealing machine; used by automated co-packers'],
        ['Auto-bottom', 'A pre-glued base that forms as the carton is opened', 'Faster to assemble and holds more weight than a tuck base'],
        ['Snap-lock base', 'A base that locks flat as the carton is opened', 'Middle ground between tuck and auto-bottom'],
        ['Dust flap', 'The small flaps either side of a tuck', 'Stop product escaping through the corners'],
        ['Glue flap', 'The panel that bonds to form the carton seam', 'Placed on a back or side panel so the seam does not show'],
        ['Euro slot', 'The inverted keyhole cut for a peg hook', 'The most widely accepted hanging tab shape'],
        ['Rigid box', 'A set-up box of thick greyboard wrapped in paper', 'Ships assembled, not flat; different cost bracket'],
      ],
      outro:
        'How these are made and why flaps sit where they do is covered in our <a href="/resources/packaging-dieline-guide/">dieline guide</a>.',
    },
    {
      type: 'compare',
      id: 'material-terms',
      heading: 'Material terms',
      navLabel: 'Materials',
      intro:
        'These appear when a supplier proposes a board or explains why a colour will not reproduce as expected.',
      columns: ['Term', 'What it means', 'Why it matters to you'],
      rows: [
        ['SBS', 'Solid bleached sulphate: a white, coated folding boxboard', 'The default for full-colour cosmetic cartons'],
        ['Kraft', 'Unbleached brown board with visible fibre', 'Mutes every printed colour; no true white without underprint'],
        ['Greyback', 'Recycled board with a white face and grey reverse', 'Cheaper; the grey inside shows when the carton is open'],
        ['Black-through', 'Board coloured black throughout the pulp', 'Cut edges stay black instead of showing a white line'],
        ['Greyboard', 'Thick rigid board used as a rigid box core', 'Measured in millimetres rather than points'],
        ['E-flute', 'Fine corrugated board', 'Used for display units, shippers and mailers'],
        ['Point / pt', 'Board thickness in thousandths of an inch', '18pt is 0.018 in; the usual unit for folding cartons'],
        ['GSM', 'Grams per square metre, a weight rather than a thickness', 'Common outside the US; not directly convertible to points'],
        ['Grain direction', 'The alignment of fibres in the sheet', 'Board folds cleanly along it and cracks across it'],
        ['Liner', 'The barrier coating inside a paperboard tube', 'Decides whether oil migrates into the board'],
      ],
      outro:
        'Which grade suits which product, and what each does to your print, is on the <a href="/materials/">materials page</a>.',
    },
    {
      type: 'compare',
      id: 'printing-terms',
      heading: 'Printing terms',
      navLabel: 'Printing',
      intro:
        'These appear on quotes, proofs and in conversations about why a colour did not come out as expected.',
      columns: ['Term', 'What it means', 'Why it matters to you'],
      rows: [
        ['CMYK', 'Four-colour process: cyan, magenta, yellow, black', 'Recreates most colours but drifts slightly between runs'],
        ['Spot colour', 'A pre-mixed ink, usually a named Pantone', 'Reproduces identically every run; costs an extra ink station'],
        ['Pantone', 'A colour matching system with named references', 'Name the exact reference, since library and finish both matter'],
        ['Offset litho', 'Plate-based printing, economical at volume', 'Plate cost per design; sharpest fine detail'],
        ['Digital', 'Plateless printing', 'No setup per design; flat unit cost as volume rises'],
        ['Flexo', 'Flexible plate printing', 'Efficient on kraft and labels; weaker on fine gradients'],
        ['Make-ready', 'Setting up the press before a run', 'A one-time cost divided by your quantity'],
        ['Ganging', 'Printing several designs together on one sheet', 'Shares the make-ready; a large saving on multi-SKU ranges'],
        ['Opaque white', 'A white ink layer printed under other colours', 'Needed on kraft, metallised and holographic stock'],
        ['Overprint', 'Printing one ink on top of another rather than knocking out', 'White set to overprint disappears entirely'],
        ['Trapping', 'A slight overlap between adjoining colours', 'Hides tiny registration shifts; handled by the printer'],
        ['Registration', 'The alignment of one plate to another', 'Poor registration shows as coloured fringing on type'],
        ['Bleed', 'Artwork extending past the trim line', 'Without it, a white sliver appears on some units'],
      ],
      outro:
        'Which press suits which quantity and colour count is set out on the <a href="/printing-options/">printing options page</a>.',
    },
    {
      type: 'compare',
      id: 'finishing-terms',
      heading: 'Finishing terms',
      navLabel: 'Finishing',
      intro:
        'Applied after printing. Each is a separate pass with its own cost and, usually, its own artwork layer.',
      columns: ['Term', 'What it means', 'Why it matters to you'],
      rows: [
        ['Lamination', 'A thin plastic film bonded over the printed sheet', 'Durable; complicates paper recycling'],
        ['Varnish', 'A coating applied as ink rather than as a film', 'Keeps the carton in one material stream'],
        ['Soft-touch', 'A matte laminate with a velvety surface', 'The finish most associated with premium colour cosmetics'],
        ['Spot UV', 'Gloss varnish applied to selected artwork only', 'High contrast against matte, far cheaper than foil'],
        ['Hot foil stamping', 'Metal leaf pressed into the board with heat', 'Genuinely reflective; needs its own die and layer'],
        ['Cold foil', 'Foil applied inline during printing', 'Can be printed over; better value on large areas at volume'],
        ['Emboss / deboss', 'Raising or recessing a shape into the board', 'Needs no ink; holds more definition on thick board'],
        ['Metallised board', 'Board with a reflective layer under the print', 'Not compatible with paper recycling'],
        ['Holographic', 'A microscopically embossed metallised layer', 'A physical structure; no ink reproduces it'],
        ['Window patch', 'Clear film applied behind a die-cut aperture', 'Adds a second material and a production pass'],
      ],
      outro:
        'What each does on different boards, with the cost and disposal trade-offs, is on the <a href="/finishes/">finishes page</a>.',
    },
    {
      type: 'compare',
      id: 'ordering-terms',
      heading: 'Ordering and delivery terms',
      navLabel: 'Ordering',
      intro:
        'These appear on quotes, order confirmations and delivery paperwork.',
      columns: ['Term', 'What it means', 'Why it matters to you'],
      rows: [
        ['MOQ', 'Minimum order quantity', 'Often driven by process and finishing rather than a fixed rule'],
        ['Setup cost', 'One-time charges: die, plates, make-ready, proofing', 'Divided by your quantity; absent on a reorder'],
        ['Tooling', 'The physical die, and any foil or emboss dies', 'A one-time cost held for future reorders'],
        ['Proof', 'A sample of the printed result for approval', 'The reference the production run is measured against'],
        ['Structural sample', 'A plain cut-and-creased carton with no print', 'Confirms fit before any printing happens'],
        ['Call-off', 'Producing in one run and delivering in stages', 'Holds the volume price without warehousing everything'],
        ['Case count', 'Units packed per shipping case', 'Set it to suit your filling line or your retailer'],
        ['Dimensional weight', 'Freight charged on volume rather than mass', 'Why bulky light items cost more to ship than expected'],
        ['Lead time', 'Time from approval to goods leaving', 'Does not include transit, which is quoted separately'],
        ['Variance', 'Delivered quantity differing slightly from ordered', 'Print runs are not exact; the tolerance is stated on the quote'],
      ],
      outro:
        'How these fit together across an order is set out on the <a href="/how-to-order/">the order process end to end</a>.',
    },
    {
      type: 'list',
      id: 'confused-pairs',
      heading: 'Terms that get confused',
      navLabel: 'Confused pairs',
      intro:
        'Six pairs that cause real misunderstandings on quotes.',
      items: [
        'Points and GSM measure different things — thickness and weight — and do not convert directly between board grades',
        'Lamination is a plastic film; varnish is a coating. They look similar and behave completely differently at disposal',
        'Foil is real metal leaf; metallic ink contains metallic particles. Foil reflects, ink shimmers',
        'A proof confirms colour; a structural sample confirms fit. Approving one does not approve the other',
        'Lead time is production only. Transit is separate and quoted separately',
        'Recycled content and recyclability are different claims, and a board can have one without the other',
      ],
      outro:
        'The last one causes the most trouble in cosmetics, where both are frequently claimed on pack without either being verified.',
    },
  ],
  related: ['custom-lip-balm-boxes', 'paper-lip-balm-tubes', 'rigid-lipstick-boxes'],
  relatedResources: ['packaging-dieline-guide', 'custom-packaging-cost-guide', 'prepress-checklist'],
  order: 10,
};
