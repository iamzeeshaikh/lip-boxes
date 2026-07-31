import type { Resource } from '../content-types';

export const resource: Resource = {
  slug: 'packaging-dieline-guide',
  title: 'Packaging Dieline Guide',
  h1: 'Packaging Dieline Guide',
  primaryKeyword: 'packaging dieline',
  secondaryKeywords: [
    'what is a dieline',
    'dieline layers explained',
    'how dielines work',
    'reading a packaging dieline',
  ],
  searchIntent:
    'What is a dieline, what do the lines on it mean, and how is one made?',
  group: 'Production',
  seoTitle: 'Packaging Dieline Guide | How Dielines Work',
  metaDescription:
    'What a dieline is, what each line type means, how the physical die is cut, and why glue flaps sit where they do.',
  ogTitle: 'Packaging Dielines Explained',
  ogDescription:
    'Cut, crease, perforation and bleed lines, how a steel rule die is made, and how a flat drawing becomes a box.',
  deck: 'What the lines mean, how the physical tool is made, and why a carton unfolds the way it does.',
  cardDescription:
    'Line types, glue flap placement, how a steel rule die is built, and how a flat drawing becomes a folded box.',
  highlights: [
    'Every line type and what the machine does with it',
    'How a steel rule die is physically made',
    'Why grain direction changes how a carton folds',
  ],
  updated: '2026-07-30',
  readingMinutes: 10,
  hero: {
    slug: 'custom-lipstick-boxes',
    file: 'custom-lipstick-box-reverse-tuck-end.png',
    alt: 'Two lipstick boxes, one shown open with the tuck flap and glue seam visible',
  },
  sections: [
    {
      type: 'prose',
      id: 'what-a-dieline-is',
      heading: 'What a dieline is',
      navLabel: 'What it is',
      body: [
        'A dieline is a flat engineering drawing of a folding carton before it becomes a box. It shows every panel laid out in one plane, with every place the board will be cut, creased or perforated marked as a separate line type.',
        'It serves two audiences at once. For your designer it is the map that says where each panel begins and ends, so artwork lands on the right face. For the converter it is the specification from which a physical cutting tool is made.',
        'That dual role is why a dieline is not decorative and cannot be approximated. The same file drives both the artwork and the steel that cuts the board, so a line moved by a millimetre in the design file is a millimetre of difference in the finished carton.',
        'This guide explains what the lines mean and how the tool is made. What we need in a file you send us is a separate question, answered in the <a href="/artwork-guidelines/">artwork requirements</a>.',
      ],
    },
    {
      type: 'compare',
      id: 'line-types',
      heading: 'The line types and what each one does',
      navLabel: 'Line types',
      intro:
        'Every dieline uses these conventions. Colours vary between suppliers; the meanings do not.',
      columns: ['Line', 'Usually drawn as', 'What the machine does', 'Common error'],
      rows: [
        ['Cut', 'Solid line', 'Steel rule cuts fully through the board', 'Artwork stopping exactly on it instead of bleeding past'],
        ['Crease', 'Dashed line', 'A blunt rule presses a fold channel without cutting', 'Placing a barcode or emboss across it'],
        ['Perforation', 'Dash-dot line', 'Intermittent cuts so the board tears cleanly by hand', 'Using it where a full cut was intended'],
        ['Bleed', 'Outer offset line', 'Nothing; it marks where artwork must extend to', 'Building artwork only to the cut line'],
        ['Safe area', 'Inner offset line', 'Nothing; it marks where live copy must stay inside', 'Placing legal type outside it'],
        ['Glue flap', 'Labelled panel', 'Receives adhesive and bonds to the opposite panel', 'Printing important artwork on it'],
        ['Window', 'Solid line, own layer', 'Cut out, then patched with film if specified', 'Merging it with the main cut layer'],
      ],
      outro:
        'Keep each of these on its own named layer. A merged cut and window layer produces a tool that cuts the window as an outer edge, which scraps the run.',
    },
    {
      type: 'prose',
      id: 'how-a-die-is-made',
      heading: 'How the physical die is made',
      navLabel: 'Making the die',
      body: [
        'The tool is called a steel rule die, and it is closer to a giant cookie cutter than to anything digital.',
        'A sheet of plywood is laser-cut with narrow slots following your dieline exactly. Strips of hardened steel rule are then bent to shape by hand or machine and pressed into those slots. Cutting rule has a sharp edge; creasing rule is blunt and slightly shorter, so it presses rather than severs. Rubber ejection foam is glued alongside the rules to push the board back off the tool after each strike.',
        'The finished die sits in a press, and sheets of printed board are fed under it. Each strike cuts and creases one or more cartons at once. That is why a die is a one-time cost that reorders do not repeat, and why a dimensional change means a new die rather than an adjustment.',
      ],
    },
    {
      type: 'prose',
      id: 'why-flaps-sit-where-they-do',
      heading: 'Why glue flaps and tucks sit where they do',
      navLabel: 'Flap placement',
      body: [
        'A folding carton is glued along exactly one seam. Where that seam sits is a manufacturing decision, not an arbitrary one, and it explains several things about how a dieline looks.',
        'The glue flap is placed so the seam falls on a back or side panel rather than the front, because a glued seam shows a faint line and slightly different surface texture. On a carton with a dark solid front panel, a seam there would be visible.',
        'Tuck flaps have a shape, not just a size. The curved shoulder on a tuck is what lets it slide past the panel edge without catching, and the small nick at its base is a friction lock that stops it working open in transit. Straightening either of those, which designers sometimes do to tidy a drawing, produces a carton that will not stay shut.',
        'Dust flaps, the smaller flaps either side of a tuck, close first and stop product escaping through the corners. They look redundant on a drawing and are not.',
      ],
    },
    {
      type: 'list',
      id: 'grain-direction',
      heading: 'Grain direction, and why it matters',
      navLabel: 'Grain direction',
      intro:
        'Paperboard fibres align during manufacture, which gives the sheet a grain. It affects the finished carton in ways that are invisible on a drawing.',
      items: [
        'Board folds cleanly along the grain and cracks across it, so creases are laid out to run with the grain wherever possible',
        'A carton creased against the grain shows a rough, feathered fold, most visible on dark or heavily inked panels',
        'Grain runs the long way on most sheets, which constrains how many cartons fit and therefore the material cost',
        'A tall narrow carton and a wide flat one from the same sheet may have different grain relationships to their creases',
        'Coated boards crack more readily across the grain than uncoated, because the coating has no fibre to flex with',
        'On heavier boards the effect is more pronounced, which is why a 24pt carton is more sensitive to layout than an 18pt one',
      ],
      outro:
        'This is handled by the converter rather than by you, but it explains why a supplier occasionally proposes a slightly different carton proportion: it may be a grain and yield decision rather than a visual one.',
    },
    {
      type: 'features',
      id: 'working-with-a-dieline',
      heading: 'Working with a dieline in your design file',
      navLabel: 'In your file',
      icon: 'file-text',
      intro:
        'Six rules that prevent almost every dieline problem we see.',
      items: [
        {
          title: 'Place it on a locked layer',
          text: 'Import the dieline, lock the layer, and never move or scale it. A dieline scaled to fit a canvas produces a carton that is the wrong size.',
        },
        {
          title: 'Design under it, not over it',
          text: 'Keep the dieline as the top visible layer while working so you can always see where panels break, then hide it for output.',
        },
        {
          title: 'Extend artwork into the bleed',
          text: 'Any colour or image reaching an edge must continue past the cut line into the bleed area, or a white sliver appears on some units.',
        },
        {
          title: 'Respect the safe area',
          text: 'Live copy, logos and barcodes stay inside it. Cutting and creasing both have real tolerance, and edges drift.',
        },
        {
          title: 'Check panel orientation',
          text: 'Some panels are upside down relative to others in the flat layout. Fold a printed mock-up before approving.',
        },
        {
          title: 'Never redraw it',
          text: 'If the dieline seems wrong, ask rather than redrawing. A redrawn dieline no longer matches the tool that will cut it.',
        },
      ],
    },
    {
      type: 'prose',
      id: 'reading-a-flat',
      heading: 'Reading a flat and predicting the folded result',
      navLabel: 'Reading a flat',
      body: [
        'The most reliable way to check a dieline is to print it at 100% on paper, cut it out and fold it. It takes ten minutes and catches errors that no amount of on-screen checking will.',
        'Two things routinely surprise people at that point. Panels that looked adjacent in the flat turn out to be on opposite faces of the finished box. And artwork that appeared correctly oriented is upside down on one panel, because that panel folds under.',
        'A supplier will normally provide a folded 3D preview alongside the flat, which helps. But a physical paper mock-up is still worth doing, particularly on a first project or an unusual construction, because it also tells you whether the proportions feel right in the hand.',
      ],
    },
    {
      type: 'prose',
      id: 'when-you-need-a-new-one',
      heading: 'When a change needs a new die',
      navLabel: 'When to re-cut',
      body: [
        'Any change to a cut or crease position needs a new die. That includes changing a dimension, adding or moving a window, changing the tab shape on a hanging carton, and switching from a tuck base to a snap-lock.',
        'What does not need a new die: changing the artwork, changing the board weight within a small range, changing the coating, adding or removing foil, and changing the print process. All of those run on the existing tool.',
        'This is why the die line approval is treated as a separate written sign-off from the colour proof. It is the point at which the structure becomes fixed, and the structure is the expensive thing to change. The sequence around it is set out on our <a href="/how-to-order/">the approval stages of an order</a>.',
      ],
    },
  ],
  faqs: [
    {
      q: 'What is a dieline in packaging?',
      a: 'A flat engineering drawing of a carton with every panel laid out in one plane, and every cut, crease and perforation marked as its own line type. It serves as the map for your artwork and as the specification for the physical cutting tool.',
    },
    {
      q: 'What do the different line types mean?',
      a: 'Solid lines are cuts, dashed lines are creases where the board folds, dash-dot lines are perforations that tear by hand. An outer offset line marks bleed, where artwork must extend to, and an inner offset marks the safe area for live copy.',
    },
    {
      q: 'Can I resize a dieline to fit my artboard?',
      a: 'No. Scaling a dieline changes the carton dimensions, and the physical tool will still be cut to the original size. Import it, lock the layer, and build artwork around it at the size it arrives.',
    },
    {
      q: 'What is a steel rule die?',
      a: 'The physical tool. A plywood sheet is laser-cut with slots following your dieline, then strips of sharpened steel are pressed into them for cuts and blunt strips for creases. It sits in a press and cuts sheets of printed board one strike at a time.',
    },
    {
      q: 'Why is my glue seam on the back panel?',
      a: 'Because a glued seam shows a faint line and a slightly different surface texture. Placing it on a back or side panel keeps it away from the face the customer looks at, which matters most on dark or heavily inked designs.',
    },
    {
      q: 'What is grain direction and does it affect my carton?',
      a: 'Paperboard fibres align during manufacture. Board folds cleanly along the grain and cracks across it, so creases are laid out to run with the grain. It occasionally explains why a supplier proposes a slightly different proportion.',
    },
    {
      q: 'Do I need a new die if I change the board weight?',
      a: 'Usually not, within a small range. New dies are needed for changes to cut or crease positions: a dimensional change, a moved window, a different tab shape, or a change of base construction. Artwork, coating and print process changes all run on the existing tool.',
    },
    {
      q: 'How should I check a dieline before approving it?',
      a: 'Print it at 100% on paper, cut it out and fold it. Ten minutes of that catches panel orientation errors and proportion problems that no amount of on-screen review will, particularly on a first project or an unusual construction.',
    },
    {
      q: 'Why are there small extra flaps beside the main tuck?',
      a: 'Those are dust flaps. They close before the main tuck and stop product escaping through the corners of the carton. They look redundant on a flat drawing and are doing real work in the assembled box.',
    },
  ],
  related: ['custom-lip-balm-boxes', 'custom-lipstick-boxes', 'hang-tab-lipstick-boxes'],
  relatedResources: ['prepress-checklist', 'lip-balm-box-size-guide', 'packaging-glossary'],
  order: 6,
};
