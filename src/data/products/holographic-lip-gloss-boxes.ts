import type { Product } from '../types';

export const product: Product = {
  slug: 'holographic-lip-gloss-boxes',
  name: 'Holographic Lip Gloss Boxes',
  h1: 'Holographic Lip Gloss Boxes',
  primaryKeyword: 'holographic lip gloss boxes',
  secondaryKeywords: [
    'iridescent lip gloss packaging',
    'holographic cosmetic boxes',
    'rainbow foil gloss carton',
    'metallised lip gloss box',
  ],
  seoTitle: 'Holographic Lip Gloss Boxes | Iridescent Cartons',
  metaDescription:
    'Holographic lip gloss boxes on rainbow metallised board or holo foil. Iridescent cartons that shift colour under light.',
  ogTitle: 'Holographic Lip Gloss Boxes That Shift in Light',
  ogDescription:
    'Iridescent cartons built on rainbow metallised board or holographic foil, with print laid over a reflective base.',
  valueProp:
    'Cartons built on rainbow metallised board or holographic foil, so the pack shifts colour as the shopper moves past it.',
  cardDescription:
    'Iridescent gloss cartons using holographic laminated board or holo foil stamping, printed with translucent inks over a reflective base.',
  highlights: [
    'Full-surface holographic board or targeted holo foil stamping',
    'Translucent ink builds that let the reflective base read through',
    'Suits shimmer, glitter and limited-edition gloss ranges',
  ],
  images: [
    {
      file: 'holographic-lip-gloss-box-rainbow-foil.png',
      alt: 'Holographic lip gloss box with a rainbow iridescent surface and printed lip artwork beside two gloss tubes',
      caption: 'Full-surface holographic board with translucent ink over it.',
    },
    {
      file: 'holographic-lip-gloss-box-iridescent-carton.png',
      alt: 'Pastel iridescent lip gloss carton printed with floral artwork standing beside a shimmering gloss tube',
      caption: 'A softer pearlescent effect using a lighter ink coverage.',
    },
    {
      file: 'holographic-lip-gloss-box-metallic-print.png',
      alt: 'Holographic lip gloss box printed with metallic lips artwork on a pink and blue background',
      caption: 'Heavier ink coverage with the holographic base showing through selectively.',
    },
    {
      file: 'holographic-lip-gloss-rigid-box-insert.png',
      alt: 'Open holographic rigid box with a black foam insert holding a single lip gloss tube',
      caption: 'A rigid holographic presentation box with a fitted foam insert.',
    },
    {
      file: 'holographic-lip-gloss-box-silver-mirror.png',
      alt: 'Silver mirror finish lip gloss box with reversed type beside a lilac gloss tube and its applicator',
      caption: 'Mirror metallised board with reverse-printed type.',
    },
  ],
  blocks: [
    {
      type: 'prose',
      id: 'overview',
      heading: 'How a holographic carton actually works',
      navLabel: 'Overview',
      body: [
        'Holographic packaging is not a printed effect. It is a physical structure: a microscopically embossed pattern on a metallised layer that splits light into its component colours, so the surface shifts as the viewing angle changes. No amount of CMYK printing reproduces it, which is why a printed rainbow gradient looks flat next to a genuine holographic pack.',
        'There are two routes to it on a carton. The first is holographic laminated board, where the whole sheet carries the effect and you print over it. The second is holographic foil stamping, where the effect is applied only to selected areas, usually a logo or a border.',
        'Which one suits you comes down to how much of the pack you want to shimmer and what your budget per unit is. Full-surface board is more dramatic and more expensive per sheet. Foil is targeted, cheaper on small areas, and sits well against a matte laminated background. For a gloss range without the iridescent treatment, our standard <a href="/lip-gloss-boxes/">printed gloss cartons</a> cover the same structural options.',
      ],
    },
    {
      type: 'compare',
      id: 'methods',
      heading: 'Holographic board compared with holographic foil',
      navLabel: 'Board vs foil',
      intro:
        'The two approaches produce genuinely different results, and mixing them on one carton is also possible.',
      columns: ['', 'Holographic laminated board', 'Holographic foil stamping'],
      rows: [
        ['Coverage', 'Entire carton surface', 'Selected areas only'],
        ['Effect strength', 'Strongest, shifts across the whole pack', 'Concentrated, high contrast against the background'],
        ['Printing over it', 'Translucent inks show the base through; opaque inks hide it', 'Print and foil are separate, so both stay clean'],
        ['White areas', 'Need an opaque white underprint or they will not read as white', 'Unaffected, print as normal'],
        ['Cost driver', 'Material cost across the whole sheet', 'Die and stamping pass, scaled to the foil area'],
        ['Suits', 'Limited editions, glitter and shimmer ranges, holiday sets', 'Logos, borders and accents on an otherwise matte pack'],
      ],
      outro:
        'A common and economical combination is a matte laminated carton with holographic foil on the logo only, which reads as premium at a fraction of the material cost.',
    },
    {
      type: 'split',
      id: 'printing',
      heading: 'Printing over a reflective surface',
      navLabel: 'Printing',
      image: {
        file: 'holographic-lip-gloss-box-silver-mirror.png',
        alt: 'Silver mirror finish lip gloss carton with type reversed out of the reflective surface',
      },
      imageSide: 'right',
      body: [
        'Standard process inks are translucent. On white board that does not matter, because the white beneath provides the brightness. On a holographic or mirror base, every colour picks up the reflection underneath, so a pale pink becomes a metallic pink and a light grey becomes silver. Sometimes that is exactly the intention.',
        'When it is not, the answer is an opaque white underprint laid down first, in the shape of whatever needs to read as a normal printed colour. That adds an ink station and a cost, and it has to be planned into the artwork as its own layer rather than added at proof stage.',
        'White itself is the sharpest case. There is no white in a CMYK build; white areas are simply unprinted board. On holographic stock, unprinted means holographic, so anything intended to be white needs an opaque white printed into it. Designers who have only worked on white board are frequently caught by this.',
      ],
    },
    {
      type: 'list',
      id: 'materials',
      heading: 'Holographic materials',
      navLabel: 'Materials',
      intro:
        'The pattern embossed into the metallised layer changes the character of the effect considerably.',
      items: [
        'Rainbow holographic board, the broad-spectrum shift most people picture',
        'Silver mirror metallised board, reflective without the colour separation',
        'Pearlescent and opalescent board, a softer shift with less rainbow',
        'Patterned holographic films including starburst, prism and fine linear diffraction',
        'Holographic hot foil in rainbow, silver and coloured variants for stamping',
        'Cold foil applied inline on press, which allows printing over the foil in the same pass',
      ],
      outro:
        'Cold foil is worth asking about on longer runs: it lays metallic areas down during printing rather than as a separate stamping pass, which changes the cost structure at volume.',
    },
    {
      type: 'prose',
      id: 'finishes',
      heading: 'Finishing over a holographic surface',
      navLabel: 'Finishes',
      body: [
        'Gloss lamination amplifies the effect and adds depth to the reflection. It is the natural pairing and the one most holographic packs use.',
        'Matte lamination does the opposite: it diffuses the reflection and turns a hard rainbow into a soft pearl shimmer. It is a deliberate, quieter look that suits a pastel range better than a high-impact one, and it is worth proofing before committing because the difference from the unlaminated sheet is large.',
        'Spot UV over a matte laminate creates a strong contrast, with the gloss areas letting the holographic base flare while the matte areas hold it back. Embossing works well on holographic board too, because the raised surface catches light at yet another angle.',
      ],
    },
    {
      type: 'prose',
      id: 'structure',
      heading: 'Structure, inserts and rigid options',
      navLabel: 'Structure',
      body: [
        'Structurally these are the same cartons as any other gloss box: straight or reverse tuck end for a single tube, snap-lock or auto-bottom bases where the pack is heavier, and a partition insert for duos and trios. The height still has to allow for the wand and cap above the reservoir.',
        'Holographic material does add one handling consideration. The laminated surface scratches more visibly than a plain coated board, and a scratch on a reflective surface catches the eye in a way a scuff on matte board does not. Cartons are interleaved in packing for this reason, and a base collar inside the carton stops the tube moving against the printed interior.',
        'For limited editions and gift sets, the same holographic paper can wrap a rigid box. That gives a much heavier presentation with a fitted tray inside, and the construction options are set out on our <a href="/rigid-lipstick-boxes/">rigid box page</a>.',
      ],
    },
    {
      type: 'prose',
      id: 'artwork',
      heading: 'Preparing artwork for holographic stock',
      navLabel: 'Artwork',
      body: [
        'Build the file to the supplied die line at 300 dpi in CMYK, with fonts outlined and 3 mm bleed. Then add the layers this substrate needs: an opaque white layer wherever a colour must read normally, and separate 100% black vector layers for any foil, spot UV or emboss areas.',
        'Name those layers explicitly. On a job with holographic board, opaque white, holo foil and spot UV, an unlabelled file leads to the wrong interpretation and a wasted proof cycle.',
        'Ask for a proof on the actual holographic stock rather than a digital simulation. No screen and no white-paper proof shows how ink behaves over a reflective base, and this is the one substrate where an approved on-screen proof genuinely does not predict the printed result. General file setup requirements are on the <a href="/artwork-guidelines/">artwork page</a>.',
      ],
    },
    {
      type: 'prose',
      id: 'quantity-pricing',
      heading: 'Quantity, material cost and price',
      navLabel: 'Quantity & pricing',
      body: [
        'Holographic board costs more per sheet than standard board and that cost does not fall away with volume the way a plate charge does. It is a material premium carried on every unit, which makes this the one product on the site where scaling up improves the unit price less than usual.',
        'Price starts from $0.30 per piece for large-volume orders. Final pricing depends on size, material, printing, and quantity. Holographic specifications sit above that entry figure because of the substrate, the opaque white pass and often a foil or spot UV pass on top.',
        'If the budget is tight, holographic foil on a logo over a matte laminated standard board delivers most of the shelf impact at a much lower unit cost than a full holographic sheet. It is the option worth pricing alongside the full treatment.',
      ],
    },
    {
      type: 'steps',
      id: 'process',
      heading: 'Order sequence',
      navLabel: 'Ordering',
      steps: [
        {
          title: 'Decide coverage',
          text: 'Full holographic surface, or holo foil on selected areas over a standard board. This decision drives everything else.',
        },
        {
          title: 'Material selection',
          text: 'Rainbow, mirror, pearlescent or patterned. We can send material swatches so you see the shift in real light.',
        },
        {
          title: 'Artwork with opaque white',
          text: 'Build the file with the white layer and any foil or spot UV layers named separately, on the supplied die line.',
        },
        {
          title: 'Proof on the actual stock',
          text: 'A printed proof on the specified holographic board. On this substrate a screen proof is not a reliable guide.',
        },
        {
          title: 'Production and protected packing',
          text: 'Printing, finishing, die-cutting, gluing, and packing with interleaving so the reflective surfaces are not marked.',
        },
      ],
    },
    {
      type: 'prose',
      id: 'quality-materials',
      heading: 'Quality control and material honesty',
      navLabel: 'Quality',
      body: [
        'Surface condition is the dominant check on this product. Every reflective imperfection shows, so cartons are inspected for scratching, for laminate bubbles and for opaque white registration, which is the failure most likely to spoil a run. If the white layer shifts, coloured areas develop a metallic fringe on one side.',
        'On end-of-life, holographic and metallised board contain a metallised polymer layer and are not compatible with standard paper recycling. That is a genuine trade-off for the effect, and it should not be presented otherwise on pack. If a recyclable pack matters to your brand, holographic foil on an otherwise plain board limits the affected area, or a printed pearlescent ink gives a shimmer while keeping the carton in the paper stream.',
        'We will state exactly what is in your specification so any on-pack wording you use is accurate.',
      ],
    },
  ],
  specs: [
    { label: 'Product type', value: 'Iridescent folding carton for lip gloss and lip colour' },
    { label: 'Effect methods', value: 'Holographic laminated board, hot holo foil stamping, cold foil applied inline' },
    { label: 'Material options', value: 'Rainbow holographic, silver mirror, pearlescent, patterned diffraction films' },
    { label: 'Printing', value: 'Offset litho with opaque white underprint where colours must read normally' },
    { label: 'Finishes', value: 'Gloss lamination to amplify, matte lamination to soften, spot UV, emboss' },
    { label: 'Structural styles', value: 'Straight and reverse tuck end, snap-lock and auto-bottom bases, sleeve and tray' },
    { label: 'Inserts', value: 'Base collar, partition for multipacks, fitted foam or card tray for rigid versions' },
    { label: 'Rigid option', value: 'Same holographic paper applied as a wrap over greyboard for gift sets' },
    { label: 'Artwork layers', value: 'Die line, CMYK artwork, opaque white, foil, spot UV and emboss as separate named layers' },
    { label: 'Proofing', value: 'Printed proof on the actual holographic stock; screen proofs are not representative' },
    { label: 'Recycling', value: 'Metallised layer is not compatible with standard paper recycling streams' },
    { label: 'Starting unit price', value: 'Sitewide entry price is $0.30 per piece on qualifying large-volume orders; holographic stock is quoted above it' },
    { label: 'Ordering', value: 'Quote based; material swatches available before commitment' },
  ],
  faqs: [
    {
      q: 'Can you print a holographic effect with normal inks?',
      a: 'No. A holographic effect comes from a microscopically embossed metallised layer that splits light physically. Printed rainbow gradients look flat beside it. If you want a genuine shift, you need holographic board or holographic foil; there is no ink route to the same result.',
    },
    {
      q: 'Why does my artwork look different on holographic board?',
      a: 'Because process inks are translucent and pick up the reflective base underneath. A pale pink becomes metallic pink, a light grey becomes silver. If you want colours to read as they would on white board, an opaque white layer has to be printed first in those areas.',
    },
    {
      q: 'What happens to white areas on a holographic carton?',
      a: 'They come out holographic, because white in a CMYK build is unprinted board, and here the board is reflective. Anything that has to look white needs an opaque white printed into it. This catches out most designers on their first holographic job.',
    },
    {
      q: 'Is foil stamping cheaper than holographic board?',
      a: 'For small areas, yes, substantially. Foil is a stamping pass scaled to the area covered, while holographic board is a material premium on every square inch of every carton. A matte carton with a holo-foiled logo often delivers most of the shelf impact at a fraction of the cost.',
    },
    {
      q: 'Does lamination change the holographic effect?',
      a: 'Considerably. Gloss lamination deepens and amplifies the reflection. Matte lamination diffuses it into a soft pearl shimmer that is much quieter than the raw sheet. The difference is large enough that you should see a proof of your chosen combination before signing off.',
    },
    {
      q: 'Are holographic boxes recyclable?',
      a: 'Not in standard paper streams. The metallised layer is a polymer bonded to the board and it contaminates paper recycling. That is a real trade-off. Limiting the effect to a foil-stamped area, or using a pearlescent ink instead, keeps most or all of the carton in the paper stream.',
    },
    {
      q: 'Will the surface scratch?',
      a: 'It shows scratches more readily than plain board, because any mark on a reflective surface catches light. We interleave cartons in packing for that reason. Inside the pack, a base collar stops the product moving against the printed interior during transit.',
    },
    {
      q: 'Can I see the material before ordering?',
      a: 'Yes, and you should. Holographic material behaves differently under store lighting, daylight and phone camera flash, and a swatch in your hand tells you more than any image. Ask for swatches of rainbow, mirror and pearlescent so you can compare them directly.',
    },
    {
      q: 'Do I need a printed proof or is a digital proof enough?',
      a: 'A printed proof on the actual stock. This is the one substrate where a screen or white-paper proof genuinely does not predict the outcome, because neither can show ink translucency over a reflective base. Approving a digital proof here is how runs get rejected.',
    },
    {
      q: 'Can holographic board be used for a rigid gift box?',
      a: 'Yes. The same holographic paper is applied as a wrap over greyboard, which gives a much heavier presentation with a fitted tray inside. It is a common choice for holiday sets and limited editions where the pack is part of the gift.',
    },
    {
      q: 'What is cold foil and when is it worth it?',
      a: 'Cold foil is applied during printing rather than as a separate stamping pass, and you can print over it in the same run. On long runs with substantial metallic areas it can cost less than hot stamping and allows coloured metallics that hot foil would need separate foils for.',
    },
    {
      q: 'Does the holographic effect fade over time?',
      a: 'The effect is structural rather than a dye, so it does not fade the way a pigment does. What degrades is the surface: abrasion dulls the embossed pattern and reduces the shift. Laminated cartons hold up considerably better than unlaminated ones in retail handling.',
    },
  ],
  related: ['lip-gloss-boxes', 'rigid-lipstick-boxes', 'custom-lipstick-boxes', 'custom-lip-mask-boxes'],
  order: 9,
  group: 'Lip Gloss',
};
