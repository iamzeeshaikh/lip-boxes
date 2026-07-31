import type { Resource } from '../content-types';

export const resource: Resource = {
  slug: 'prepress-checklist',
  title: 'Prepress Checklist',
  h1: 'Prepress Checklist',
  primaryKeyword: 'prepress checklist',
  secondaryKeywords: [
    'packaging print checklist',
    'preflight packaging artwork',
    'checking a print file',
    'before sending artwork to print',
  ],
  searchIntent:
    'Give me a step-by-step list I can work through before I send my file to print.',
  group: 'Production',
  seoTitle: 'Prepress Checklist | Check Artwork Before Print',
  metaDescription:
    'A step-by-step prepress checklist for packaging artwork: separations, overprint, resolution, type and finishing layers.',
  ogTitle: 'A Working Prepress Checklist for Packaging',
  ogDescription:
    'Twenty-two checks in the order to run them, with what each one catches and how to fix it.',
  deck: 'Twenty-two checks, in the order to run them, with what each one catches.',
  cardDescription:
    'A working checklist to run against a packaging file before you send it, grouped by the tool you check it in.',
  highlights: [
    'Ordered so each check catches what the next assumes',
    'What each failure looks like on a printed carton',
    'Separate passes for structure, colour and type',
  ],
  updated: '2026-07-30',
  readingMinutes: 9,
  hero: {
    slug: 'custom-lip-balm-labels',
    file: 'custom-lip-balm-label-minimal-two-colour.png',
    alt: 'Printed lip balm label showing a full ingredient panel beside two lip balm tubes',
  },
  sections: [
    {
      type: 'prose',
      id: 'how-to-use',
      heading: 'How to use this checklist',
      navLabel: 'How to use it',
      body: [
        'This is a working list to run against a finished file, not a description of file requirements. What we need in a submitted file — formats, bleed values, colour space — is set out separately in the <a href="/artwork-guidelines/">artwork requirements</a>. This page is the practical pass you make just before you send it.',
        'Run the four groups in order. Each one assumes the previous has passed, so checking type before checking separations wastes time when a colour problem later forces a type change anyway.',
        'Allow half an hour. Almost every proof cycle we have seen wasted was caused by something on this list, and a proof cycle costs days.',
      ],
    },
    {
      type: 'list',
      id: 'structure-checks',
      heading: 'Group one: structure',
      navLabel: 'Structure',
      intro:
        'Run these first, because a structural error invalidates everything built on top of it.',
      items: [
        'The dieline is present, on its own layer, and locked',
        'The dieline has not been moved, scaled or rotated since it was supplied',
        'Artwork is positioned relative to the dieline, not to the artboard',
        'Every panel is the right way up, verified by folding a paper mock-up',
        'Artwork extends fully into the bleed area on every trimmed edge',
        'Live copy, logos and barcodes sit inside the safe area',
        'Nothing important crosses a crease line, especially the barcode',
        'The glue flap carries no artwork that matters',
        'Window cut lines, if any, are on a separate named layer from the main cut',
      ],
      outro:
        'The paper fold is the one people skip and the one that catches upside-down panels. It takes ten minutes.',
    },
    {
      type: 'list',
      id: 'colour-checks',
      heading: 'Group two: colour and separations',
      navLabel: 'Colour',
      intro:
        'Open the separations preview and step through each plate one at a time. This is the highest-value five minutes in the whole process.',
      items: [
        'The plate list contains exactly the plates you intended and no strays',
        'No unintended spot colours, including duplicates like "PANTONE 186 C" and "Pantone 186C"',
        'Spot colours are named consistently and match the references on your quote',
        'Everything is CMYK or a named spot; no RGB or Lab objects remain',
        'Rich black is used for large solids and 100% K for small type and thin rules',
        'Overprint settings are deliberate, and no white object is set to overprint',
        'Any opaque white layer covers exactly the areas that need it, on kraft or metallised stock',
        'Total ink coverage is within the limit your supplier specified for the board',
      ],
      outro:
        'White set to overprint is the failure that produces a proof with type simply missing. It is invisible on screen and obvious on paper.',
    },
    {
      type: 'list',
      id: 'image-type-checks',
      heading: 'Group three: images and type',
      navLabel: 'Images and type',
      intro:
        'Now check the content itself, at final size rather than zoomed out.',
      items: [
        'All raster images are 300 dpi at their placed size, not at their original size',
        'No image has been scaled above 100% after placing',
        'All linked files are embedded, or supplied alongside the file',
        'Fonts are outlined, or the font files are supplied',
        'The smallest type is legible at 100% view — on uncoated stock, larger than you think',
        'Reverse-out type is heavy enough not to fill in, particularly at small sizes',
        'The ingredient declaration is complete and in descending order of predominance',
        'Net contents, responsible party and any required cautions are present',
        'Batch or lot coding is either printed or has a clear panel reserved for it',
      ],
      outro:
        'Scaling a placed image up is the quiet one. A 300 dpi image scaled to 150% is a 200 dpi image, and it will look soft on a printed carton.',
    },
    {
      type: 'list',
      id: 'finishing-checks',
      heading: 'Group four: finishing layers',
      navLabel: 'Finishing',
      intro:
        'Only relevant if the job carries foil, spot UV, embossing or an opaque white. Each is a separate tool made from a separate layer.',
      items: [
        'Each finishing element is on its own layer, named for what it is',
        'Each is drawn as vector paths in 100% black, not as a colour or an effect',
        'Foil areas sit clear of die-cut edges, where heavy coverage tends to flake',
        'Emboss detail sits clear of crease lines, where a raised area will crack',
        'Where two finishing effects overlap, the file or the covering note says which sits on top',
        'Layer names use plain words such as "foil gold" rather than abbreviations',
      ],
      outro:
        'An unnamed extra layer gets interpreted rather than followed, and that costs a proof cycle. What each finish does physically is covered on the <a href="/finishes/">coatings page</a>.',
    },
    {
      type: 'compare',
      id: 'symptom-table',
      heading: 'If a proof comes back wrong, start here',
      navLabel: 'Diagnosing a proof',
      intro:
        'Match the symptom to the likely cause before assuming a press problem.',
      columns: ['What you see on the proof', 'Usual cause', 'Where to check'],
      rows: [
        ['White type has disappeared', 'White object set to overprint', 'Overprint settings, group two'],
        ['A thin white line along one edge', 'Artwork built to the cut line with no bleed', 'Bleed, group one'],
        ['A photograph looks soft', 'Image scaled above 100% after placing', 'Effective resolution, group three'],
        ['Small type looks broken or filled in', 'Type below the legible minimum, or reversed too fine', 'Type sizes, group three'],
        ['A colour is not the Pantone you specified', 'Spot converted to process, or duplicate swatch names', 'Separations, group two'],
        ['Foil is in the wrong place', 'Foil layer not named, so it was interpreted', 'Finishing layers, group four'],
        ['A panel is upside down', 'Flat layout not folded before approval', 'Paper mock-up, group one'],
        ['Solid black looks washed out', '100% K used for a large area instead of rich black', 'Black builds, group two'],
      ],
    },
    {
      type: 'prose',
      id: 'before-you-send',
      heading: 'The last three things before you send',
      navLabel: 'Before sending',
      body: [
        'Name the file with the product, the dieline reference and a revision number. On a multi-SKU range, an outdated file being approved is a more common failure than any press error, and a filename is the cheapest defence against it.',
        'Write a short covering note listing the spot colours by name, the finishing layers and anything unusual about the job. Two sentences of context prevent a great deal of guessing.',
        'Say explicitly which proof you want. On plain coated white board a calibrated digital proof is enough. On kraft, metallised, holographic or black-through stock, ask for a printed proof on the actual board, because none of those substrates behaves the way white paper does.',
      ],
    },
  ],
  faqs: [
    {
      q: 'What is prepress?',
      a: 'Everything between a finished design file and the press: checking separations, resolution, overprint settings, type sizes and finishing layers, then producing the plates or the digital output. This checklist is the part you can run yourself before sending.',
    },
    {
      q: 'What is the single most valuable check?',
      a: 'Opening the separations preview and stepping through each plate individually. It catches stray spot colours, duplicate swatch names, white set to overprint and missing opaque white — four of the most common and most expensive errors.',
    },
    {
      q: 'Why does white type sometimes vanish on a proof?',
      a: 'Because the white object was set to overprint. Overprinting white means printing nothing, so the type simply disappears. It looks correct on screen and is only visible once the file is separated or printed.',
    },
    {
      q: 'How do I know if my image resolution is really 300 dpi?',
      a: 'Check the effective resolution at the placed size, not the original file resolution. A 300 dpi image scaled to 150% after placing is effectively 200 dpi. Most layout applications show effective resolution in a links or info panel.',
    },
    {
      q: 'Should small type be 100% K or rich black?',
      a: '100% K for small type and thin rules, so any slight registration shift does not show as coloured fringing. Rich black for large solid areas, because 100% K alone looks washed out over a large panel.',
    },
    {
      q: 'Do I really need to fold a paper mock-up?',
      a: 'Yes, particularly on a first project. Panels that look adjacent in a flat layout are often on opposite faces of the finished box, and some panels fold under so their artwork is inverted. Ten minutes with scissors catches both.',
    },
    {
      q: 'When do I need a printed proof rather than a digital one?',
      a: 'Whenever the substrate is kraft, metallised, holographic or black-through, or whenever a spot colour is central to the brand. None of those behave like white paper, and a screen or white-paper proof cannot predict the result.',
    },
    {
      q: 'What should I put in the covering note?',
      a: 'The spot colours by name, the finishing layers present, and anything unusual about the job. Two sentences of context prevents a great deal of guessing and is faster than answering the questions that follow its absence.',
    },
    {
      q: 'How should I name the file?',
      a: 'Product, dieline reference and revision number. On a range with several files in circulation, an outdated version being approved is the most common serious error, and a disciplined filename is the cheapest protection against it.',
    },
  ],
  related: ['custom-lipstick-boxes', 'holographic-lip-gloss-boxes', 'custom-lip-balm-labels'],
  relatedResources: ['packaging-dieline-guide', 'cosmetic-packaging-label-requirements', 'packaging-glossary'],
  order: 7,
};
