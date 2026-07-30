import type { Product } from '../types';

export const product: Product = {
  slug: 'lip-gloss-boxes',
  name: 'Lip Gloss Boxes',
  h1: 'Lip Gloss Boxes',
  primaryKeyword: 'lip gloss boxes',
  secondaryKeywords: [
    'custom lip gloss packaging',
    'lip gloss carton',
    'doe foot applicator box',
    'lip gloss tube box',
  ],
  seoTitle: 'Lip Gloss Boxes | Custom Printed Gloss Cartons',
  metaDescription:
    'Custom lip gloss boxes sized to your tube and wand. Tall slim cartons, full-colour print, matte or gloss finish.',
  ogTitle: 'Lip Gloss Boxes Built for Wand Applicators',
  ogDescription:
    'Tall slim cartons cut to your gloss tube and doe-foot wand, printed in full colour with insert and window options.',
  valueProp:
    'Tall slim cartons cut to the height of your gloss tube with the wand fully seated, so the cap never fouls the closing flap.',
  cardDescription:
    'Slim printed cartons for squeeze tubes, wand applicators and roller balls, with the extra height a doe-foot cap needs.',
  highlights: [
    'Height allowance for the wand and cap, not just the tube body',
    'Slim footprint that suits shelf, drawer and e-commerce packing',
    'Full-colour print with matte, gloss or spot UV finishing',
  ],
  images: [
    {
      file: 'lip-gloss-box-straight-tuck-end.png',
      alt: 'Black and magenta lip gloss box shown open and closed, printed with product copy on the side panel',
      caption: 'Straight tuck end carton with a contrasting interior print.',
    },
    {
      file: 'lip-gloss-box-tall-slim-carton.png',
      alt: 'Tall slim black and white lip gloss box standing beside a clear gloss tube with a black cap',
      caption: 'Tall slim proportion sized to a wand applicator tube.',
    },
    {
      file: 'lip-gloss-box-soft-pink-set.png',
      alt: 'Two pale pink lip gloss boxes lying flat with two matching pink gloss tubes beside them',
      caption: 'A shade pair sharing one die line and one board.',
    },
  ],
  blocks: [
    {
      type: 'prose',
      id: 'overview',
      heading: 'Why gloss cartons are taller than they look',
      navLabel: 'Overview',
      body: [
        'A lip gloss tube is mostly applicator. The doe-foot wand and its cap add an inch or more above the fill level, and that is the dimension brands most often get wrong when specifying a carton. A box sized to the visible product ends up too short, the cap fouls the closing flap, and every unit has to be forced shut on the packing line.',
        'Measure the tube fully capped and upright, from the base to the very top of the cap. That is the internal height the carton needs, plus clearance. If the tube has a tapered shoulder, measure the widest point too, since that is usually below the cap rather than at it.',
        'The proportion this produces is a tall narrow box, and that shape has an advantage: it stands well on a shelf, packs efficiently in an e-commerce mailer and gives you a long front panel for artwork. It also makes the carton prone to tipping if the base is not sized generously, which is worth allowing for.',
      ],
    },
    {
      type: 'features',
      id: 'applications',
      heading: 'Gloss formats these cartons suit',
      navLabel: 'Formats',
      icon: 'layers',
      intro:
        'The carton geometry changes with the applicator, not with the volume of product inside.',
      items: [
        {
          title: 'Doe-foot wand tubes',
          text: 'The standard gloss format. Needs the tallest carton relative to its fill volume because the wand sits above the reservoir.',
        },
        {
          title: 'Squeeze tubes',
          text: 'Shorter and flatter. A wider, lower carton suits them, and they lie flat rather than standing.',
        },
        {
          title: 'Roller ball glosses',
          text: 'Compact, with the applicator built into the neck. The shortest carton of the group.',
        },
        {
          title: 'Click pen applicators',
          text: 'Long and thin. Often needs a partition or a collar so the pen does not shift end to end in the carton.',
        },
        {
          title: 'Gloss duos and trios',
          text: 'Two or three tubes side by side. Adds width without adding height, and needs a partition to stop them knocking.',
        },
        {
          title: 'Gloss and liner sets',
          text: 'Mixed-height components in one carton, which almost always means a die-cut platform to hold each at its own level.',
        },
      ],
    },
    {
      type: 'split',
      id: 'structure',
      heading: 'Structure, base stability and inserts',
      navLabel: 'Structure',
      image: {
        file: 'lip-gloss-box-straight-tuck-end.png',
        alt: 'Open lip gloss carton showing the tuck flap and printed inner panel',
      },
      imageSide: 'left',
      body: [
        'A straight tuck end carton covers most gloss products and keeps the long front panel uninterrupted. Reverse tuck end is the same cost and closes from opposite ends, which some hand-packing operations prefer. Seal end is used where a co-packer glues the carton closed on an automated line.',
        'The base deserves specific attention on a tall carton. A tuck flap base is fine for a single lightweight tube. Once the pack holds two tubes, or the tube is glass rather than plastic, a snap-lock or auto-bottom base is worth having so the carton cannot open downward when lifted.',
        'Inserts matter more here than the small size suggests. A gloss tube in a tall loose carton will slide the full length of the box in transit, and a glass tube doing that repeatedly can chip. A simple paperboard collar at the base stops it, and for multi-tube packs a partition keeps the tubes apart.',
      ],
    },
    {
      type: 'list',
      id: 'materials',
      heading: 'Board and stock',
      navLabel: 'Materials',
      intro:
        'Gloss is usually a colour-led product, and the board has to carry saturated print without going flat.',
      items: [
        'SBS coated white board, 16pt to 22pt, the standard for saturated full-colour gloss packaging',
        'Heavier 24pt board for duo and trio cartons or for glass tubes',
        'Metallised board where the artwork uses a mirror or iridescent base',
        'Black-through board for dark cartons so the cut edges stay black',
        'Kraft board for natural and clean-beauty gloss ranges, accepting muted colour reproduction',
        'Recycled greyback board where recycled content is the priority',
      ],
      outro:
        'For iridescent and rainbow effects across the whole carton rather than a printed area, look at <a href="/holographic-lip-gloss-boxes/">holographic gloss cartons on metallised board</a>, which use a different substrate entirely.',
    },
    {
      type: 'prose',
      id: 'printing-finishes',
      heading: 'Printing and finishing',
      navLabel: 'Print & finish',
      body: [
        'Gloss packaging usually needs to communicate a shade and a finish at once: how pigmented it is, and whether it is shimmer, cream or clear. Photographic swatches on the carton do that better than flat colour blocks, and photographic reproduction is where offset litho earns its keep at volume. Digital printing handles moderate quantities and multi-shade ranges without plate charges.',
        'On finishing, there is a reasonable argument for matching the coating to the product: a matte laminated carton for a matte liquid lipstick, a gloss laminate for a high-shine gloss. It is a small signal and customers read it without noticing they have.',
        'Spot UV over matte is the most cost-effective way to suggest shine on a carton, applied over the droplet or swatch artwork. Foil works well on the logo. Both are covered in more depth on the <a href="/printing-options/">printing and press options page</a>.',
      ],
    },
    {
      type: 'prose',
      id: 'windows',
      heading: 'Windows and showing the shade',
      navLabel: 'Windows',
      body: [
        'A window on a gloss carton is more useful than on most lip products, because gloss tubes are frequently transparent and the shade is visible through the tube wall. A narrow vertical window down the front panel shows the reservoir and lets the product itself do the selling.',
        'Cover the window with a clear film patch rather than leaving it open. A tall open slot on a slim carton takes a lot of stiffness out of the front panel, and a patch restores most of it while keeping dust off the tube.',
        'Where a window is not wanted, a printed swatch of the actual shade is the alternative, and specifying it as a spot Pantone rather than a process build keeps it consistent between production runs.',
      ],
    },
    {
      type: 'prose',
      id: 'artwork',
      heading: 'Artwork on a narrow panel',
      navLabel: 'Artwork',
      body: [
        'A tall narrow front panel is a good canvas for a vertical logo lockup and a poor one for horizontal type. Most gloss cartons end up setting the brand name vertically, and that is worth designing for deliberately rather than running into during layout.',
        'Panel width also constrains the ingredient declaration, which for a gloss can be long. If it does not fit legibly at 5 pt or above, the usual answers are a folded leaflet inside the carton or a peel-back label on the tube.',
        'Supply artwork as PDF, AI or EPS at 300 dpi with 3 mm bleed, fonts outlined, in CMYK plus any spot colours, built to the supplied die line. Spot UV and foil each need a separate 100% black vector layer. Full requirements are on the <a href="/artwork-guidelines/">file preparation page</a>.',
      ],
    },
    {
      type: 'prose',
      id: 'quantity-pricing',
      heading: 'Quantity, shade ranges and price',
      navLabel: 'Quantity & pricing',
      body: [
        'Gloss ranges tend to be wide: eight or twelve shades is common, with modest quantities of each. Digital printing suits that pattern well, since there is no plate charge per design and all the shades share one die line, one board and one finish.',
        'Price starts from $0.30 per piece for large-volume orders. Final pricing depends on size, material, printing, and quantity. A plain slim carton at high volume approaches that figure. Adding a window patch, an insert, spot UV or foil moves it upward, as does splitting the run across many shades at low quantities each.',
        'Send the shade count and per-shade quantity, not just the total, since that combination decides which print process is quoted.',
      ],
    },
    {
      type: 'steps',
      id: 'process',
      heading: 'How to order',
      navLabel: 'Ordering',
      steps: [
        {
          title: 'Measure the capped tube',
          text: 'Full height with the cap on and the wand seated, plus the widest diameter. Or post us a sample tube.',
        },
        {
          title: 'Confirm structure and insert',
          text: 'We propose a carton style, base type and whether a collar or partition is needed against the tube weight and count.',
        },
        {
          title: 'Die line and structural sample',
          text: 'A plain cut sample confirms the capped tube fits with clearance and the base holds it upright.',
        },
        {
          title: 'Proof each shade',
          text: 'Colour proofs for every variant on the specified board. Written approval releases the run.',
        },
        {
          title: 'Print, finish and dispatch',
          text: 'Printing, lamination, window patching if specified, die-cutting, gluing, case packing and delivery.',
        },
      ],
    },
    {
      type: 'prose',
      id: 'quality-turnaround',
      heading: 'Quality control, materials and lead time',
      navLabel: 'Quality',
      body: [
        'Because these cartons are tall and narrow, the checks that matter most are squareness and crease accuracy. A crease that is out by half a millimetre on a three-inch panel produces a carton that leans, and a leaning carton on a shelf reads as a manufacturing fault to a shopper. Sample cartons are stood up and checked visually as well as measured.',
        'Paperboard is widely recycled in United States municipal streams. A film window patch and a plastic lamination are separate materials that a consumer has to deal with, and metallised board is not paper-recyclable. Where end-of-life matters, an uncoated or varnish-finished board with a printed swatch instead of a window keeps the pack in one stream.',
        'Production time depends on whether the job includes window patching, foil or spot UV, each of which is an additional pass. We confirm the schedule in writing with the quote, and the bands we work to are set out on the <a href="/turnaround-time/">turnaround page</a>.',
      ],
    },
  ],
  specs: [
    { label: 'Product type', value: 'Custom printed folding carton for lip gloss' },
    { label: 'Sizing', value: 'Built to your capped tube height and widest diameter, or to a supplied sample' },
    { label: 'Applicator types', value: 'Doe-foot wand, squeeze tube, roller ball, click pen' },
    { label: 'Materials', value: 'Coated white SBS 16–24pt, metallised board, black-through board, kraft, recycled greyback' },
    { label: 'Structural styles', value: 'Straight tuck end, reverse tuck end, seal end, snap-lock and auto-bottom bases' },
    { label: 'Inserts', value: 'Base collar, partition for duo and trio packs, die-cut platform for mixed sets' },
    { label: 'Windows', value: 'Vertical slot or shaped cut with clear film patch recommended' },
    { label: 'Printing', value: 'Offset litho and digital; CMYK plus spot Pantone shade swatches' },
    { label: 'Finishes', value: 'Matte, gloss and soft-touch lamination, spot UV, foil stamp, emboss' },
    { label: 'Range support', value: 'One die line across all shades; per-shade artwork variants' },
    { label: 'Artwork format', value: 'PDF, AI, EPS at 300 dpi with 3 mm bleed and outlined fonts' },
    { label: 'Starting unit price', value: 'From $0.30 per piece on qualifying large-volume orders' },
    { label: 'Ordering', value: 'Quote based; per-shade quantities affect the print process selected' },
  ],
  faqs: [
    {
      q: 'How do I measure a gloss tube for a carton?',
      a: 'Measure the tube capped and upright, from the base to the very top of the cap, because the wand and cap sit above the reservoir. Also measure the widest diameter, which on a tapered tube is usually below the cap rather than at it. Send those two figures, or post a sample tube.',
    },
    {
      q: 'Why does my carton need to be so tall for such a small amount of product?',
      a: 'Because a doe-foot applicator adds an inch or more of wand and cap above the fill. The carton has to accommodate the whole component, not the visible reservoir. This is the single most common sizing error on gloss packaging and it shows up as caps fouling the tuck flap during packing.',
    },
    {
      q: 'Do I need an insert for a single gloss tube?',
      a: 'For a plastic tube in a snug carton, usually not. For a glass tube, or a carton with generous clearance, a base collar is worth adding. A tube sliding the full length of a tall box in transit will chip a glass neck and can scuff a printed tube label.',
    },
    {
      q: 'Will a tall narrow box tip over on a shelf?',
      a: 'It can if the base footprint is minimal. We size the base with that in mind rather than cutting it to the tube diameter exactly. If your product is merchandised standing rather than in a tray, say so at enquiry stage so the proportions account for it.',
    },
    {
      q: 'Can I show the gloss colour through a window?',
      a: 'Yes, and it works particularly well because most gloss tubes are transparent. A narrow vertical window down the front panel reveals the reservoir. Use a clear film patch rather than an open cut, since a tall open slot removes a lot of stiffness from a slim panel.',
    },
    {
      q: 'How many shades can share one carton design?',
      a: 'As many as you like. One die line, one board and one finish serve the whole range, with only the printed panel changing. On digital printing there is no per-design plate charge, which is why gloss ranges of eight or twelve shades are usually quoted digitally at launch quantities.',
    },
    {
      q: 'What finish suits a high-shine gloss?',
      a: 'Gloss lamination reads as consistent with the product and is durable in handling. A matte laminate with spot UV over the swatch or droplet artwork gives more contrast and looks more considered. Both are common; the choice is a brand decision rather than a technical one.',
    },
    {
      q: 'Can the inside of the carton be printed?',
      a: 'Yes. It is printed as part of the same sheet, on the reverse, and it is a low-cost detail that shows at the moment of opening. A contrasting colour or a short message on the inner panel costs an extra pass rather than an extra material.',
    },
    {
      q: 'Where does the ingredient list go if it will not fit?',
      a: 'Either a small folded leaflet tucked inside the carton, or a peel-back multi-panel label applied to the tube itself. Both are more readable than setting a long declaration below 5 pt on a narrow panel, and both are common on gloss products for exactly this reason.',
    },
    {
      q: 'Are these cartons suitable for e-commerce shipping?',
      a: 'They pack efficiently in a mailer because of their slim profile, but a folding carton is secondary packaging rather than a shipper. Sent loose in the post, a tall carton will crush. Pack it inside a mailer with void fill, or specify a mailer box designed for the purpose.',
    },
    {
      q: 'Can you print a carton to match my tube label?',
      a: 'We can get close, and specifying a spot Pantone on both narrows the gap considerably. An exact match is not achievable, because a printed film label and a coated paperboard carton reflect light differently. That difference is most visible with pale nudes and pinks.',
    },
    {
      q: 'How long does production take?',
      a: 'It depends on the finishing. A plain laminated carton is faster than one with a window patch, foil and spot UV, since each of those is an additional pass. We confirm a production window in writing with the quote and update it if the specification changes.',
    },
  ],
  related: ['holographic-lip-gloss-boxes', 'custom-lipstick-boxes', 'custom-lip-care-packaging', 'hang-tab-lipstick-boxes'],
  order: 12,
  group: 'Lip Gloss',
};
