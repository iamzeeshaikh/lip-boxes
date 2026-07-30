import type { BlogPost } from './types';

/**
 * Blog articles authored as structured data so headings, tables and contextual
 * links stay under template control and every post gets consistent schema.
 *
 * Articles are attributed to Lip Boxes rather than to a named individual,
 * because no named author has been supplied. Dates are real publication dates
 * for this build and slugs carry no date component.
 */

const posts: BlogPost[] = [
  {
    slug: 'how-to-choose-packaging-for-a-lip-gloss-line',
    title: 'How to Choose Packaging for a Lip Gloss Line',
    h1: 'How to Choose Packaging for a Lip Gloss Line',
    seoTitle: 'How to Choose Packaging for a Lip Gloss Line',
    metaDescription:
      'A practical sequence for specifying lip gloss packaging: tube first, then carton height, board, print process and finish.',
    published: '2026-02-11',
    deck:
      'The decisions that matter, in the order they actually have to be made.',
    readingMinutes: 8,
    heroFrom: {
      slug: 'lip-gloss-boxes',
      file: 'lip-gloss-box-tall-slim-carton.png',
      alt: 'Tall slim lip gloss carton standing beside a clear gloss tube with a black cap',
    },
    related: ['lip-gloss-boxes', 'holographic-lip-gloss-boxes', 'custom-lip-care-packaging'],
    sections: [
      {
        heading: 'Start with the tube, not the box',
        id: 'start-with-the-tube',
        body: [
          'Almost every packaging problem on a gloss launch traces back to the same mistake: the carton was designed before the tube was finalised. A gloss tube is mostly applicator, and swapping a 10 ml doe-foot for an 8 ml one changes the carton height even though the fill difference sounds trivial.',
          'Lock the primary container first. Order samples of the actual tube you intend to fill, in the actual cap, and measure it capped and upright from base to the top of the cap. That single measurement drives the carton, the shipper, the case count and the pallet quantity.',
          'If you are still choosing between two tubes, get cartons quoted against both. The cost difference is usually small and it tells you something useful about which tube is cheaper to package, which is a real factor that often gets ignored at sampling stage.',
        ],
      },
      {
        heading: 'Work out how many shades you are launching',
        id: 'shade-count',
        body: [
          'Shade count changes which print process makes sense more than total volume does. A launch of twelve shades at 1,500 each is a very different job from three shades at 6,000 each, even though both total 18,000 cartons.',
          'Digital printing carries no plate charge per design, so a wide shallow range is comfortable. Offset litho is cheaper per unit at volume but charges plate setup per design unless the shades are ganged onto shared sheets. The crossover point moves with the shade count, so give any supplier both numbers.',
          'Whichever process you use, keep the range on one die line. One carton size, one board, one finish, with only the printed panel changing per shade, is the single largest lever on cost across a range of <a href="/lip-gloss-boxes/">cartons for wand applicator tubes</a>.',
        ],
      },
      {
        heading: 'Decide whether the shade shows',
        id: 'shade-visibility',
        body: [
          'Gloss is bought on colour, so the shopper needs to see it. There are three ways to give them that, and they cost very different amounts.',
        ],
        list: [
          'A die-cut window with a clear film patch, showing the actual product through the tube wall. Most convincing, adds a production pass and a second material.',
          'A printed swatch specified as a spot Pantone, which reproduces identically on every run. Cheapest and the most consistent across reorders.',
          'A photographic swatch on a model or an applicator smear, which conveys finish as well as colour but drifts between print runs unless carefully managed.',
        ],
      },
      {
        heading: 'Choose the board before the finish',
        id: 'board-before-finish',
        body: [
          'Board and finish are often discussed together, but the board decision comes first because it constrains what the finish can do. Coated white board carries saturated colour and fine gradients. Kraft mutes everything and will flatten the differences between six shades. Black-through board is worth the premium on a dark carton because it keeps every cut edge dark.',
          'Weight follows the pack rather than the look: 16pt to 18pt for a single slim tube, 22pt or more for duos and for glass. A tall carton in light board bows visibly on a shelf.',
          'Only then choose the coating. Matte lamination with spot UV on the swatch is the most reliable premium combination at a mid-market price, and a comparison of the coatings sits on our <a href="/finishes/">finishing reference</a>.',
        ],
      },
      {
        heading: 'Budget for the things that get forgotten',
        id: 'forgotten-costs',
        body: [
          'Four costs regularly appear late in a gloss project and derail the budget. Inserts, if the tube is glass or the carton has generous clearance. Window film, if you decided on a window. A leaflet, if the ingredient declaration will not fit legibly on a narrow panel. And a shipper, because a folding carton posted loose will arrive crushed.',
          'None of these are expensive individually. Together they can add more to the unit cost than the choice of laminate did, and they are much cheaper to include in the first quote than to add after tooling.',
        ],
      },
      {
        heading: 'A sensible order of operations',
        id: 'order-of-operations',
        body: [
          'Running the decisions in this sequence avoids most of the rework we see on gloss projects.',
        ],
        table: {
          columns: ['Stage', 'Decision', 'Why it comes here'],
          rows: [
            ['1', 'Finalise the tube and cap', 'Everything downstream is measured from it'],
            ['2', 'Confirm shade count and per-shade quantity', 'Determines the print process quoted'],
            ['3', 'Choose how the shade is shown', 'Window, spot swatch or photography changes the die and the passes'],
            ['4', 'Select board grade and weight', 'Constrains what the finish can achieve'],
            ['5', 'Select coating and any foil or spot UV', 'Now a proof will actually be representative'],
            ['6', 'Add insert, leaflet and shipper', 'Costs that are cheap to include and expensive to retrofit'],
            ['7', 'Approve die line, then proof each shade', 'Structure before colour, always'],
          ],
        },
      },
    ],
  },

  {
    slug: 'lip-balm-box-materials-compared',
    title: 'Lip Balm Box Materials Compared',
    h1: 'Lip Balm Box Materials Compared',
    seoTitle: 'Lip Balm Box Materials Compared: Board Grades',
    metaDescription:
      'How SBS, kraft, recycled and rigid board differ on print quality, strength, cost and disposal for lip balm cartons.',
    published: '2026-02-25',
    deck:
      'What each board grade actually does to your print, your strength and your cost per unit.',
    readingMinutes: 9,
    heroFrom: {
      slug: 'custom-lip-balm-boxes',
      file: 'custom-lip-balm-box-counter-display.png',
      alt: 'Kraft brown lip balm counter display box with a printed mountain scene',
    },
    related: ['custom-lip-balm-boxes', 'paper-lip-balm-tubes', 'hang-tab-lip-balm-boxes'],
    sections: [
      {
        heading: 'The four grades that cover almost everything',
        id: 'four-grades',
        body: [
          'Lip balm cartons are made from one of four board families, and the choice between them is usually settled by two questions: does the print need to be bright, and does the pack need a recycled or unbleached story.',
          'SBS folding boxboard is bleached, coated on the print side and bright white underneath the ink. It is the default for full-colour cosmetic cartons because colours reproduce close to their intended values. Kraft board is unbleached, uncoated and brown, so it prints warm and dark and cannot produce a true white without an opaque underprint. Recycled greyback board has a white printing face over a grey reverse. Rigid greyboard with a printed wrap is a different construction entirely and belongs to gift packaging.',
        ],
      },
      {
        heading: 'How each grade behaves under ink',
        id: 'under-ink',
        body: [
          'This is where most surprises happen. The same artwork file produces genuinely different results on these four surfaces.',
        ],
        table: {
          columns: ['Board', 'Colour accuracy', 'Fine detail', 'True white'],
          rows: [
            ['SBS coated', 'Close to proof', 'Holds small type and fine halftones', 'Yes, unprinted board'],
            ['Kraft uncoated', 'Warmer and darker throughout', 'Softens below about 7 pt', 'Only with an opaque white underprint'],
            ['Recycled greyback', 'Good on the coated face', 'Slightly softer than SBS', 'Near white, marginally duller'],
            ['Printed wrap on greyboard', 'Same as the wrap stock used', 'Very good on smooth art paper', 'Yes on a coated wrap'],
          ],
        },
      },
      {
        heading: 'Board weight matters more than grade for strength',
        id: 'weight-and-strength',
        body: [
          'Brands often ask which grade is strongest. In practice, weight dominates. An 18pt SBS carton and an 18pt kraft carton behave similarly under load; a 14pt carton in either grade will feel flimsy on a shelf.',
          'For one 0.15 oz stick, 14pt to 18pt is enough. For a carton over three inches tall, or one holding more than one tube, move to 20pt or 24pt. For a counter display unit holding a dozen sticks, E-flute corrugated rather than any paperboard.',
          'The exception is a hanging pack, where load concentrates at a single die-cut slot and reinforcement matters as much as thickness. That is covered in more detail on our page for <a href="/hang-tab-lip-balm-boxes/">balm cartons with a peg hook tab</a>.',
        ],
      },
      {
        heading: 'What each grade costs you',
        id: 'cost',
        body: [
          'Material is a smaller share of a folding carton\'s cost than most people assume, particularly at low volumes where setup and tooling dominate. At high volumes it becomes significant.',
          'Broadly: recycled greyback is the least expensive per sheet, SBS sits in the middle, kraft is comparable to SBS or slightly above depending on the grade, and rigid construction is in a different bracket altogether because of the greyboard, the wrap and the hand assembly.',
          'The more useful cost question is which grade lets you avoid a production pass. A design that works on kraft with two spot colours and a varnish is cheaper than the same design on SBS with four-colour process and a laminate, and the difference is larger than the board itself.',
        ],
      },
      {
        heading: 'Disposal, and being accurate about it',
        id: 'disposal',
        body: [
          'All four paperboard grades are compatible with standard US kerbside paper recycling in their plain or varnished state. What complicates that is what goes on top: a plastic laminate film, a metallised layer or a film window patch all mean the consumer has to separate materials, and metallised board is not paper-recyclable at all.',
          'If end-of-life is central to your positioning, the specification that keeps things simplest is an uncoated or varnish-only board with a printed swatch instead of a window. That is a genuine constraint on how the pack can look, and it is worth deciding deliberately rather than finding it out after artwork.',
          'Recycled content is a separate question from recyclability, and the two get conflated frequently. Ask a supplier what percentage of post-consumer content a specific stock carries rather than accepting a general claim, and only state on pack what you can substantiate.',
        ],
      },
      {
        heading: 'Choosing quickly',
        id: 'choosing',
        body: [
          'If the range depends on shoppers distinguishing bright colours at arm\'s length, use coated SBS. If the product is positioned as natural, unbleached or low-waste, use kraft and accept muted colour. If you need a cost floor at volume and a white reverse does not matter, use recycled greyback. If the pack is a gift and the opening moment is part of what you are selling, look at rigid construction and expect a different price bracket.',
          'Whatever you choose, ask for a printed proof on the actual stock. Board is the one variable that a screen proof cannot represent.',
        ],
      },
    ],
  },

  {
    slug: 'lipstick-packaging-sizes-and-structural-options',
    title: 'Lipstick Packaging Sizes and Structural Options',
    h1: 'Lipstick Packaging Sizes and Structural Options',
    seoTitle: 'Lipstick Packaging Sizes and Structural Options',
    metaDescription:
      'Why there is no standard lipstick box size, how to measure a bullet case, and which carton structures suit each pack.',
    published: '2026-03-10',
    deck:
      'How to measure a bullet case properly, and which structure to specify once you have.',
    readingMinutes: 8,
    heroFrom: {
      slug: 'custom-lipstick-boxes',
      file: 'custom-lipstick-box-reverse-tuck-end.png',
      alt: 'Two printed lipstick boxes, one closed and one open showing the tuck flap',
    },
    related: ['custom-lipstick-boxes', 'rigid-lipstick-boxes', 'hang-tab-lipstick-boxes'],
    sections: [
      {
        heading: 'There is no standard lipstick box size',
        id: 'no-standard-size',
        body: [
          'Lipstick cases vary far more than lip balm tubes. A slim aluminium bullet, a weighted magnetic case and a square resin barrel can all hold 3.5 g of product and need three different cartons. Any supplier quoting from a standard size is guessing.',
          'For orientation rather than specification: a single-bullet carton commonly falls between 0.9 and 1.2 inches square and 3 to 3.5 inches tall. Treat that as the range you will land in, not the size to order.',
        ],
      },
      {
        heading: 'How to measure a bullet case',
        id: 'how-to-measure',
        body: [
          'Three measurements, taken in the right places, prevent nearly every fit problem.',
        ],
        list: [
          'Width at the widest point with the cap fitted. On many cases that widest point is the cap itself, but on tapered cases it is lower down.',
          'Depth at the same widest point, since square and oval cases differ on the two axes.',
          'Total height with the cap fully seated, not the height of the barrel alone.',
        ],
      },
      {
        heading: 'Why a physical sample beats a drawing',
        id: 'physical-sample',
        body: [
          'Supplier drawings frequently omit real-world tolerances. Magnetic cases are the worst offenders: the cap can sit a fraction proud at the join, and a carton built to the nominal drawing will bind on every unit. Lacquered cases can also be marginally larger than their bare-metal specification because of the coating.',
          'Posting a filled sample case to your packaging supplier costs almost nothing and removes the whole category of risk. If you cannot, send the drawing and say explicitly that it is a drawing rather than a measured sample, so extra clearance can be allowed.',
        ],
      },
      {
        heading: 'Choosing a structure',
        id: 'structures',
        body: [
          'Once dimensions are settled, structure is mostly a merchandising and packing decision rather than a visual one.',
        ],
        table: {
          columns: ['Structure', 'Suits', 'Notes'],
          rows: [
            ['Straight tuck end', 'Shelf display and boxed e-commerce', 'Front panel stays uninterrupted; both flaps tuck the same way'],
            ['Reverse tuck end', 'Hand packing lines', 'Same cost; flaps close from opposite ends'],
            ['Seal end', 'Automated co-packing', 'Glued shut on the line; needs a sealer'],
            ['Auto-bottom', 'Duos, trios and heavier packs', 'Base locks flat as the carton opens'],
            ['Sleeve and tray', 'Higher price points', 'Two pieces, more presence, more cost'],
            ['Hang tab carton', 'Peg and clip strip retail', 'Load concentrates at the slot; needs reinforcement above single-unit weight'],
            ['Rigid magnetic box', 'Gift sets and limited editions', 'Ships assembled, not flat; hand assembled'],
          ],
        },
      },
      {
        heading: 'When to add an insert',
        id: 'inserts',
        body: [
          'A lipstick case is dense for its size, particularly a metal-weighted one. In a loose carton it slides under its own inertia, and repeated movement in a shipping case marks both the case finish and the inside of the box.',
          'For anything above an entry price point, a folded paperboard collar at the base is worth the small cost. For duos and trios a partition is not optional: lacquered and foiled cases scratch each other, and a set that arrives marked defeats the point of the pack.',
          'Where the opening moment is part of the product, a fitted tray that presents the bullet at an angle belongs with a <a href="/rigid-lipstick-boxes/">rigid box built around a fitted tray</a> rather than with a folding carton.',
        ],
      },
      {
        heading: 'Plan the panels before you design',
        id: 'panels',
        body: [
          'A slim lipstick carton has less usable surface than most brands expect. Shade name, shade number, finish descriptor, net weight, ingredient declaration, responsible party details and a barcode all have to fit, and the barcode needs about 1.5 inches of clear width on a flat panel away from creases.',
          'Allocate the panels first, then design into them. Where the ingredient list will not fit legibly, a small folded leaflet inside the carton is a normal and inexpensive answer.',
        ],
      },
    ],
  },

  {
    slug: 'printing-methods-for-cosmetic-packaging',
    title: 'Printing Methods for Cosmetic Packaging',
    h1: 'Printing Methods for Cosmetic Packaging',
    seoTitle: 'Printing Methods for Cosmetic Packaging Explained',
    metaDescription:
      'Digital, offset litho, flexo and screen printing compared for cosmetic cartons, with the quantity where each makes sense.',
    published: '2026-03-24',
    deck:
      'Which press suits your quantity, your colour count and your substrate.',
    readingMinutes: 9,
    heroFrom: {
      slug: 'custom-lipstick-boxes',
      file: 'custom-lipstick-boxes-nude-collection.png',
      alt: 'A collection of nude and terracotta lipstick boxes with matching lipstick cases',
    },
    related: ['custom-lipstick-boxes', 'lip-gloss-boxes', 'custom-lip-care-packaging'],
    sections: [
      {
        heading: 'Quantity decides more than quality does',
        id: 'quantity-decides',
        body: [
          'The honest answer to which printing method suits your packaging is that all the mainstream processes produce commercially acceptable cosmetic cartons. What separates them is where their costs sit.',
          'Digital printing has no plate charge, so its setup cost is close to zero and its unit cost stays roughly flat as quantity rises. Offset litho charges plates once per design but its unit cost falls steeply with volume. Plot those two curves and they cross, usually somewhere between one and three thousand units depending on the colour count and the finishing.',
          'That crossover is the whole decision for most brands. Below it, digital. Above it, litho.',
        ],
      },
      {
        heading: 'The four processes side by side',
        id: 'processes',
        body: [
          'Each has a substrate and a colour profile it suits, quite apart from the economics.',
        ],
        table: {
          columns: ['Process', 'Economic at', 'Strongest on', 'Weakest on'],
          rows: [
            ['Digital', 'Under roughly 2,000 units', 'Multiple designs, variable data, fast turnaround', 'Unit cost at high volume; very large solid areas'],
            ['Offset litho', '2,000 units upward', 'Fine halftones, small type, widest stock range', 'Small runs, where plate cost dominates'],
            ['Flexo', 'Very high volume', 'Uncoated kraft, simple spot-colour work, labels', 'Fine gradients and small reverse-out type'],
            ['Screen', 'Any quantity, as an added pass', 'Heavy opaque ink, thick white on dark stock', 'Photographic detail; slow as a primary process'],
          ],
        },
      },
      {
        heading: 'Spot colour or process build',
        id: 'spot-vs-process',
        body: [
          'A four-colour process build recreates a colour from cyan, magenta, yellow and black. It drifts within normal tolerance between runs, which is invisible on a photograph and very visible on a flat brand colour or a shade swatch.',
          'A spot Pantone is a pre-mixed ink. It costs an extra ink station but reproduces identically every time. For cosmetic packaging, where a customer may compare a nude swatch against the one they bought six months ago, that consistency is worth paying for.',
          'Most cosmetic cartons end up as process plus one or two spots: process for imagery, spots for the brand colour and the swatch. The <a href="/printing-options/">press options page</a> sets out what each combination involves.',
        ],
      },
      {
        heading: 'Printing on difficult substrates',
        id: 'difficult-substrates',
        body: [
          'Three substrates behave in ways that catch designers out. Uncoated kraft absorbs ink into the fibre, so everything reads warmer and darker, and there is no true white without an opaque underprint. Metallised and holographic board reflects through translucent process inks, turning pale colours metallic. Black-through board avoids white cut edges but its surface is darker to print onto.',
          'In all three cases an opaque white layer, printed first in the areas that need to read normally, is the standard fix. It is an extra ink station and it has to be built into the artwork as its own named layer rather than requested at proof stage.',
        ],
      },
      {
        heading: 'Ganging: the saving most brands miss',
        id: 'ganging',
        body: [
          'When several different cartons share a board, an ink set and a finish, they can be printed together on one press sheet. They then share the plates, the make-ready and the press time.',
          'On a multi-SKU range this is frequently the largest single cost saving available, and it is only accessible if the specification is standardised. It is the practical reason to resist letting each product in a range pick its own board and laminate.',
        ],
      },
      {
        heading: 'What to ask for at proof stage',
        id: 'proofing',
        body: [
          'Ask for a printed proof on the actual stock, not a screen proof, whenever the substrate is kraft, metallised, holographic or black-through, or whenever a spot colour is central to the brand. On plain coated white board a calibrated digital proof is usually sufficient.',
          'Check three things on any proof: that the spot colours match their references under daylight rather than office lighting, that the smallest type is legible at final size, and that any shade swatch reads correctly next to the actual product. Approve in writing, and keep the approved proof — it is the reference the production run is measured against.',
        ],
      },
    ],
  },

  {
    slug: 'how-to-prepare-artwork-for-custom-lip-boxes',
    title: 'How to Prepare Artwork for Custom Lip Boxes',
    h1: 'How to Prepare Artwork for Custom Lip Boxes',
    seoTitle: 'How to Prepare Artwork for Custom Lip Boxes',
    metaDescription:
      'A file checklist for lip packaging artwork: die lines, bleed, safe areas, colour builds and named finishing layers.',
    published: '2026-04-07',
    deck:
      'A file checklist that gets artwork through to print without a proof cycle wasted.',
    readingMinutes: 8,
    heroFrom: {
      slug: 'custom-lip-balm-labels',
      file: 'custom-lip-balm-label-minimal-two-colour.png',
      alt: 'Printed lip balm label showing an ingredient panel beside two lip balm tubes',
    },
    related: ['custom-lip-balm-labels', 'custom-lip-balm-boxes', 'holographic-lip-gloss-boxes'],
    sections: [
      {
        heading: 'Always build to the supplied die line',
        id: 'die-line',
        body: [
          'A folding carton is cut and creased from a flat sheet, and the die line is the map of where those cuts and creases fall. Designing to your own rectangle and hoping it maps onto the die is the single most common cause of rework.',
          'Ask for the die line before you start. It arrives as a vector file with separate layers for cut, crease, and any window, and it tells you exactly where each panel begins and ends. Place the die line on its own locked layer and never move it.',
          'The same applies to labels and to rolled tubes. A tube template is a rectangle whose width is the circumference plus a seam overlap, not a folding die line, and elements crossing the seam will show a step.',
        ],
      },
      {
        heading: 'The file specification',
        id: 'file-spec',
        body: [
          'These are the requirements that cover almost every lip packaging job.',
        ],
        list: [
          'Format: print-ready PDF, or native AI or EPS with all links embedded. PSD is acceptable for image-led designs at full size.',
          'Resolution: 300 dpi at final size for all raster content. Upscaling a 72 dpi web image does not recover detail.',
          'Colour space: CMYK for process work, plus named spot colours from the Pantone solid coated or uncoated library as appropriate to the stock.',
          'Bleed: 3 mm beyond every trimmed edge, with artwork continuing into it rather than stopping at the trim.',
          'Safe area: keep live text and logos at least 4 mm inside the trim on cartons and 2 mm inside the cut on labels.',
          'Fonts: outlined, or supplied alongside the file. Missing fonts substitute silently and the substitution is not always obvious on a proof.',
          'Black: use a rich black build for large solid areas and 100% K for small type, so fine type stays sharp.',
        ],
      },
      {
        heading: 'Finishing needs its own layers',
        id: 'finishing-layers',
        body: [
          'Foil, spot UV, embossing and opaque white are not colours. Each is a separate plate or tool, and each needs its own vector layer drawn in 100% black, named for what it is.',
          'An unnamed extra layer gets interpreted rather than followed, and that costs a proof cycle. Name them explicitly: "foil gold", "spot UV gloss", "emboss", "opaque white". Where two overlap, say which sits on top.',
          'Opaque white deserves particular attention on kraft, metallised and holographic stock. Anything that must read as white, or as a true light colour, needs white printed underneath it. On holographic board an unprinted area is holographic, not white.',
        ],
      },
      {
        heading: 'Regulated copy is your responsibility',
        id: 'regulated-copy',
        body: [
          'A printer prints the file that was approved. Writing and checking the regulated content is the brand\'s job, and it is worth building time for that into the schedule rather than treating it as a formality.',
          'For a cosmetic sold in the United States, the pack needs an ingredient declaration in descending order of predominance, the net quantity of contents, and the name and place of business of the responsible party. If the product carries an SPF claim it is regulated as an over-the-counter drug and the drug facts panel has its own layout rules. Lip masks claiming a physiological effect rather than a cosmetic one fall into similar territory.',
          'Have that copy reviewed before you approve a proof, not after. Our <a href="/artwork-guidelines/">artwork requirements page</a> lists what we check for and what we do not.',
        ],
      },
      {
        heading: 'Small type on small packaging',
        id: 'small-type',
        body: [
          'Lip packaging is small and the legal copy is long, which puts constant pressure on type size. Legibility falls off sharply below about 5 pt, and sooner on uncoated kraft where ink spreads into the fibre.',
          'Rather than shrinking type further, the practical answers are a folded leaflet inside the carton, a peel-back multi-panel label on the container, or moving the declaration from the primary to the secondary pack. All three are cheaper than a pack that a customer cannot read.',
        ],
      },
      {
        heading: 'Before you send the file',
        id: 'final-checks',
        body: [
          'Five checks catch most problems. Confirm the die line layer is present and unmoved. Confirm bleed extends past every trim edge. Open the separations preview and confirm you have exactly the plates you intended, with no stray spot colours. Confirm the barcode sits on a flat panel with clear space and does not cross a crease. And view the file at 100% to check the smallest type.',
          'Name the file with the product, the die line reference and a revision number. On a multi-SKU range, an outdated file being approved is a more common failure than any production error.',
        ],
      },
    ],
  },

  {
    slug: 'paper-lip-balm-tubes-and-their-packaging-requirements',
    title: 'Paper Lip Balm Tubes and Their Packaging Requirements',
    h1: 'Paper Lip Balm Tubes and Their Packaging Requirements',
    seoTitle: 'Paper Lip Balm Tubes: Packaging Requirements',
    metaDescription:
      'What paper lip balm tubes need from your formula, your filling process and your outer packaging to work in practice.',
    published: '2026-04-21',
    deck:
      'The format works well, but only if your formula and your filling process suit it.',
    readingMinutes: 8,
    heroFrom: {
      slug: 'paper-lip-balm-tubes',
      file: 'paper-lip-balm-tube-natural-kraft-open.png',
      alt: 'Three natural kraft paper lip balm tubes, one open showing the white inner liner',
    },
    related: ['paper-lip-balm-tubes', 'custom-lip-balm-boxes', 'custom-lip-balm-labels'],
    sections: [
      {
        heading: 'What the format is actually made of',
        id: 'construction',
        body: [
          'A paper lip balm tube is a rolled multi-ply paperboard cylinder with a friction-fit cap and a disc in the base that pushes the product upward. There is no threaded plastic mechanism, which is the reason brands choose it.',
          'The layer that determines whether it works is the inner liner, which sits between the balm and the board. Its job is to stop oil migrating into the paper. Get the liner grade wrong and the tube darkens at the edges within weeks, which looks like a defect even though the tube is structurally fine.',
        ],
      },
      {
        heading: 'Your formula has to suit the tube',
        id: 'formula',
        body: [
          'This is the part most often skipped. Paperboard offers less thermal protection than a plastic barrel, and the liner has a finite barrier capability.',
        ],
        list: [
          'Higher wax ratio formulas hold up considerably better. A firm beeswax and butter balm is well suited.',
          'Formulas high in liquid oils need a heavier barrier liner, and should be tested in a sample tube before a production run.',
          'Pour temperature matters: too hot and the balm wicks past the liner edge, too cool and it sets before it levels.',
          'Products that stay soft at room temperature are a poor fit for this format regardless of liner grade.',
        ],
      },
      {
        heading: 'Filling and finishing the pack',
        id: 'filling',
        body: [
          'Tubes are filled from the top with the base disc already seated, then left upright and undisturbed to cool. Most fillers settle on a pour a few degrees above the set point.',
          'A tamper seal is worth adding. A printed paper band or a clear shrink band around the cap join gives visible evidence and stops the cap working loose in transit, and retail buyers frequently require one. If you apply the seal yourself, confirm the cap and body tolerances suit your applicator.',
          'Storage after filling is not a detail. Paper tubes are more heat-sensitive than plastic, and a pallet stored near a warehouse ceiling in summer will show it.',
        ],
      },
      {
        heading: 'Telling customers what to expect',
        id: 'customer-expectations',
        body: [
          'The balm cannot be wound back down. This single fact causes most of the negative feedback that paper tubes receive, and it is entirely preventable by saying so on the pack or in the product description.',
          'A short line such as "push up gently from the base — the balm does not retract" costs nothing and turns a perceived fault into an understood characteristic. Brands that omit it end up answering the same customer message repeatedly.',
        ],
      },
      {
        heading: 'What goes around the tube',
        id: 'outer-packaging',
        body: [
          'A paper tube can be sold bare, since it prints directly and needs no label. Many brands still add secondary packaging, for three reasons: retail theft prevention on small items, thermal and physical protection in transit, and space for legal copy that will not fit legibly around a small circumference.',
          'A slim carton is the usual answer, and it can carry the ingredient declaration that the tube itself struggles to hold. Where the pack goes onto a peg fixture, a tab is added to that carton. Both are covered on our page for <a href="/custom-lip-balm-boxes/">cartons sized to a filled balm tube</a>.',
        ],
      },
      {
        heading: 'Being accurate about the environmental claim',
        id: 'claims',
        body: [
          'Paper tubes are chosen for a plastic-free story, and that story has to be stated precisely. The body, base disc and a paper cap contain no plastic. The liner is a coating, and whether a specific liner grade is compatible with standard paper recycling varies by material and by municipality.',
          'Check two things with any supplier before writing a claim: whether the cap is genuinely paperboard rather than plastic, and exactly which liner grade is being quoted. Some suppliers pair a paper body with a plastic cap and still describe the result as plastic-free.',
        ],
      },
    ],
  },

  {
    slug: 'packaging-inserts-for-lipstick-and-lip-gloss-products',
    title: 'Packaging Inserts for Lipstick and Lip Gloss Products',
    h1: 'Packaging Inserts for Lipstick and Lip Gloss Products',
    seoTitle: 'Packaging Inserts for Lipstick and Lip Gloss',
    metaDescription:
      'When a lip product carton needs an insert, which insert type suits which pack, and what each one costs you in money and in disposal.',
    published: '2026-05-12',
    deck:
      'A small component that decides whether your product arrives looking new.',
    readingMinutes: 7,
    heroFrom: {
      slug: 'rigid-lipstick-boxes',
      file: 'rigid-lipstick-box-magnetic-closure.png',
      alt: 'Open rigid lipstick box with a lipstick seated in a satin-lined tray',
    },
    related: ['rigid-lipstick-boxes', 'custom-lipstick-boxes', 'lip-gloss-boxes'],
    sections: [
      {
        heading: 'What an insert is actually for',
        id: 'purpose',
        body: [
          'An insert does two jobs, and brands usually think about only the second. The first is restraint: it stops the product moving inside the carton. The second is presentation: it controls what the customer sees when the box opens.',
          'Restraint is the one that costs you money when it is missing. A lipstick case is dense for its size, and in a loose carton it slides under its own inertia every time the shipping case is handled. Repeated movement marks the case finish and scuffs the printed interior of the box, and the customer receives something that looks like returned stock.',
        ],
      },
      {
        heading: 'When you need one',
        id: 'when',
        body: [
          'Not every pack does. These are the situations where an insert stops being optional.',
        ],
        list: [
          'The carton holds more than one item, so the items can knock against each other.',
          'The product is glass, which chips at the neck when it slides in a tall carton.',
          'The case has a lacquered, foiled or soft-touch finish that marks easily.',
          'The carton was sized with generous clearance for a hand-packing line.',
          'The pack ships direct to consumers rather than inside a retail shipper.',
          'The opening moment is part of what you are selling.',
        ],
      },
      {
        heading: 'The insert types compared',
        id: 'types',
        body: [
          'Cost, protection and disposal pull in different directions here.',
        ],
        table: {
          columns: ['Insert', 'Protection', 'Cost', 'Disposal'],
          rows: [
            ['Folded paperboard collar', 'Holds the base, stops sliding', 'Lowest', 'Paper stream with the carton'],
            ['Die-cut card platform', 'Fixes position precisely', 'Low', 'Paper stream with the carton'],
            ['Paperboard partition', 'Separates multiple items', 'Low', 'Paper stream with the carton'],
            ['Moulded pulp tray', 'Good all-round cushioning', 'Moderate', 'Paper stream, though often not kerbside'],
            ['Wrapped foam pad', 'High, conforms to shape', 'Moderate', 'Foam must be separated'],
            ['EVA or flocked plastic tray', 'Highest, most premium feel', 'Highest', 'Not paper-recyclable'],
          ],
        },
      },
      {
        heading: 'Design the insert with the carton, not after it',
        id: 'design-together',
        body: [
          'An insert sourced separately from the carton is the classic false economy. It arrives a millimetre out, it is discovered during packing, and the choice is between forcing it and reordering.',
          'Quoting both together means the insert is drawn to the same die line and tested in the actual carton before production. It also means one supplier owns the fit, which matters when something needs adjusting.',
          'Ask for a structural sample with the insert in place and your actual product inside it. That is the only test that tells you whether the fit works, and it is much cheaper than finding out on a full run.',
        ],
      },
      {
        heading: 'Inserts in rigid boxes',
        id: 'rigid',
        body: [
          'In a rigid box the insert does proportionally more of the work, because the whole point of the format is the moment the lid lifts. A tray that presents the bullet at a slight angle, in a recess lined to contrast with the wrap, is doing brand communication as much as protection.',
          'The trade-off is materials. Satin, velvet and flocked trays give the deepest luxury read and add components that will not recycle with the board. A die-cut card platform in a contrasting printed paper achieves a considerable amount of the same effect while keeping the pack closer to a single stream, and that balance is discussed on our <a href="/rigid-lipstick-boxes/">page on wrapped rigid construction</a>.',
        ],
      },
    ],
  },

  {
    slug: 'how-packaging-quantity-affects-unit-pricing',
    title: 'How Packaging Quantity Affects Unit Pricing',
    h1: 'How Packaging Quantity Affects Unit Pricing',
    seoTitle: 'How Packaging Quantity Affects Unit Pricing',
    metaDescription:
      'Why packaging unit prices fall so steeply with volume, which costs are fixed, and where the real breakpoints sit.',
    published: '2026-06-02',
    deck:
      'Where the money actually goes in a packaging quote, and why 10,000 costs far less than ten times 1,000.',
    readingMinutes: 8,
    heroFrom: {
      slug: 'custom-lip-care-packaging',
      file: 'custom-lip-care-packaging-carton-range.png',
      alt: 'A range of pink and nude lip care cartons standing and lying together',
    },
    related: ['custom-lip-care-packaging', 'custom-lip-balm-boxes', 'custom-lipstick-boxes'],
    sections: [
      {
        heading: 'Fixed costs are the whole story',
        id: 'fixed-costs',
        body: [
          'A packaging quote is made of costs that happen once per job and costs that happen once per unit. The unit price you are quoted is the second plus the first divided by the quantity, which is why the same carton can be quoted at wildly different prices.',
          'The once-per-job costs are the die, the printing plates, the press make-ready, any foil or emboss tooling, and the proofing cycle. None of them care whether you order 500 cartons or 50,000. Spread across 500 units they dominate the price entirely. Spread across 50,000 they almost disappear.',
          'The per-unit costs are board, ink, laminate, the press time for each sheet, and any hand work. These fall much more gently with volume, mostly through better material purchasing.',
        ],
      },
      {
        heading: 'What that looks like in practice',
        id: 'in-practice',
        body: [
          'The shape of the curve matters more than any specific figure. Illustrating with a simple set of numbers, for a job with $600 of fixed setup and $0.22 of per-unit cost:',
        ],
        table: {
          columns: ['Quantity', 'Setup per unit', 'Per-unit cost', 'Indicative total per unit'],
          rows: [
            ['500', '$1.20', '$0.22', '$1.42'],
            ['1,000', '$0.60', '$0.22', '$0.82'],
            ['5,000', '$0.12', '$0.22', '$0.34'],
            ['20,000', '$0.03', '$0.21', '$0.24'],
            ['100,000', '$0.006', '$0.19', '$0.20'],
          ],
        },
      },
      {
        heading: 'Where the breakpoints actually sit',
        id: 'breakpoints',
        body: [
          'The steepest part of the curve is at the start. Going from 500 to 1,000 units roughly halves the setup contribution and is often the single largest percentage saving available. Going from 20,000 to 100,000 changes very little, because setup has already been absorbed.',
          'This has a practical consequence: if you are ordering small quantities, a modest increase is disproportionately worthwhile. If you are already ordering in the tens of thousands, pushing volume further to chase a lower unit price mostly just moves cash into inventory.',
          'The other breakpoint is the print process. Below roughly two thousand units, digital printing avoids plate charges entirely and the curve is much flatter. Above it, offset litho\'s lower per-unit cost takes over. A supplier quoting both at your quantity is telling you where you sit on that transition.',
        ],
      },
      {
        heading: 'The specification moves the curve as much as quantity',
        id: 'specification',
        body: [
          'Quantity is the largest single lever, but it is not the only one. Each of these shifts the whole curve upward: a heavier board, an extra spot colour, a laminate instead of a varnish, a foil pass, a spot UV pass, a window film patch, an insert, and any hand assembly.',
          'Foil and emboss are worth singling out because they add both a fixed cost, the tooling, and a per-unit cost, the extra pass. They are therefore disproportionately expensive at low volumes and much more reasonable at high ones.',
        ],
      },
      {
        heading: 'Three ways to get a better unit price without ordering more',
        id: 'without-more-volume',
        body: [
          'Standardise across a range. Several products sharing one board, one ink set and one finish can be ganged onto shared press sheets, so they split the make-ready. On a multi-SKU launch this is frequently the biggest saving on the table.',
          'Reorder against held tooling. Once a die is cut and a proof approved, a repeat order carries no die or proofing charge. Telling a supplier at quoting stage that you expect to reorder on a cycle changes how the tooling is quoted.',
          'Use a scheduled call-off. Produce the full quantity in one run to hold the volume price, then take delivery against a schedule so you are not warehousing a year of stock at once. This is how most <a href="/custom-lip-care-packaging/">bulk programmes across a whole lip range</a> are structured.',
        ],
      },
      {
        heading: 'Reading a quote properly',
        id: 'reading-a-quote',
        body: [
          'Ask for pricing at your quantity and at the next volume break. That one request tells you where you are on the curve and whether a small increase would pay for itself.',
          'Ask which costs are one-time. If a supplier separates setup from unit cost, you can see immediately what a reorder will cost and whether the specification or the volume is driving your price.',
          'And treat any headline starting price as what it is: the figure for the simplest specification at the highest volume. It is a useful floor for comparison, not a quote.',
        ],
      },
    ],
  },
];

export const blogPosts: BlogPost[] = [...posts].sort(
  (a, b) => new Date(b.published).getTime() - new Date(a.published).getTime(),
);

export function getPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export const latestPostDate = blogPosts[0]?.published;
