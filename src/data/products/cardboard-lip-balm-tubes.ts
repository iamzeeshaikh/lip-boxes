import type { Product } from '../types';

/*
 * Sibling of /paper-lip-balm-tubes/. This page covers the unbleached kraft
 * construction bought for low-waste and small-batch lines; the paper tube page
 * covers the same format decorated with full-colour print at higher volumes.
 * The two cross-link so a buyer lands on whichever matches their intent.
 */
export const product: Product = {
  slug: 'cardboard-lip-balm-tubes',
  name: 'Cardboard Lip Balm Tubes',
  h1: 'Cardboard Lip Balm Tubes',
  primaryKeyword: 'cardboard lip balm tubes',
  secondaryKeywords: [
    'kraft lip balm tubes',
    'eco lip balm tubes',
    'compostable lip balm tube',
    'unbleached push up tube',
  ],
  seoTitle: 'Cardboard Lip Balm Tubes | Kraft Push-Up Tubes',
  metaDescription:
    'Unbleached kraft cardboard lip balm tubes with a push-up base. Plastic-free construction for small-batch and low-waste lines.',
  ogTitle: 'Kraft Cardboard Lip Balm Tubes',
  ogDescription:
    'Natural unbleached paperboard tubes with a push-up base and a paper cap, supplied plain or with a simple applied label.',
  valueProp:
    'Unbleached kraft tubes with a push-up base and a paper cap, bought plain or wrap-labelled by small-batch and low-waste balm makers.',
  cardDescription:
    'Natural kraft push-up tubes with no bleaching and no plastic component, suited to handmade batches and refill programmes.',
  highlights: [
    'Unbleached kraft body, base disc and cap',
    'Supplied plain for your own labels, or wrap-labelled',
    'Practical at genuinely small batch quantities',
  ],
  images: [
    {
      file: 'cardboard-lip-balm-tube-push-up-base.png',
      alt: 'Open kraft cardboard lip balm tube lying beside its separate lid, showing the white push-up chamber',
      caption: 'The two-part build: kraft body with liner, and a friction-fit cap.',
    },
    {
      file: 'cardboard-lip-balm-tube-wrap-labels.png',
      alt: 'Three kraft cardboard lip balm tubes with pink, blue and cream wrap labels and printed safety seals',
      caption: 'Plain kraft tubes finished with applied wrap labels and a tamper seal.',
    },
    {
      file: 'cardboard-lip-balm-tube-kraft-range.png',
      alt: 'Three natural kraft lip balm tubes printed in one colour, standing in a row on a grey surface',
      caption: 'Single-colour print applied straight onto the unbleached board.',
    },
    {
      file: 'cardboard-lip-balm-tube-illustrated-kraft.png',
      alt: 'Kraft lip balm tubes with a printed illustration, one open showing the balm inside',
      caption: 'Illustration printed directly onto kraft, with the fibre still visible.',
    },
    {
      file: 'cardboard-lip-balm-tube-floral-print.png',
      alt: 'Two cardboard lip balm tubes with floral artwork lying at an angle on a grey background',
      caption: 'Fuller coverage artwork on the same kraft construction.',
    },
  ],
  blocks: [
    {
      type: 'prose',
      id: 'overview',
      heading: 'What a cardboard tube is, and who buys one',
      navLabel: 'Overview',
      body: [
        'A cardboard lip balm tube is a rolled paperboard cylinder with a disc in the base that pushes the balm up as it is turned. There is no threaded plastic elevator, no plastic barrel and, when the cap is paperboard too, no plastic anywhere in the pack.',
        'The buyers for this format are consistent. Handmade and farmers-market makers who fill in batches of a few hundred. Refill and zero-waste retailers who cannot stock a plastic barrel. Herbal and apothecary brands whose customers would read a glossy plastic tube as off-brand. In all three cases the unbleached kraft surface is the point rather than a compromise.',
        'That is the difference between this page and our <a href="/paper-lip-balm-tubes/">printed paperboard tube page</a>, which covers the same construction decorated with full-colour artwork for larger retail runs. Same tube, different finish and different order size.',
      ],
    },
    {
      type: 'list',
      id: 'construction',
      heading: 'How the tube is built',
      navLabel: 'Construction',
      intro:
        'Four components, and the one that decides whether the pack works is the liner rather than anything you can see.',
      items: [
        'Outer ply in unbleached kraft, showing natural fibre and colour variation between batches',
        'Structural middle ply that gives the tube its rigidity',
        'Inner liner that keeps oil out of the board',
        'Base disc that travels up the tube as it is pushed',
        'Friction-fit cap, paperboard as standard',
        'Optional printed paper seal band across the cap join',
      ],
      outro:
        'Kraft is unbleached, so shade varies slightly between mill batches. On a natural product most brands treat that as part of the look; if you need every unit identical, a white-lined board is the more predictable choice.',
    },
    {
      type: 'split',
      id: 'decoration',
      heading: 'Plain, labelled or printed',
      navLabel: 'Decoration',
      image: {
        file: 'cardboard-lip-balm-tube-wrap-labels.png',
        alt: 'Kraft cardboard lip balm tubes finished with applied wrap labels and printed safety seals',
      },
      imageSide: 'right',
      body: [
        'Plain tubes are the cheapest way in and the most common first order. You buy the tube bare and apply your own label, which means you can change scent names, batch numbers and even branding without reordering tubes.',
        'Applied wrap labels are the same idea done to a higher standard: printed labels supplied with the tubes, ready to apply. This is the route most small brands settle on, because one tube stock plus several printed labels runs a whole range from a single tooling cost.',
        'Direct print onto kraft is available in one or two spot colours. It looks the most considered and removes the label as a separate component, but it fixes the design into the tube order. Where you want that on a larger scale, our label options are set out on the <a href="/lip-balm-labels/">lip balm label formats page</a>.',
      ],
    },
    {
      type: 'prose',
      id: 'formula',
      heading: 'Whether your formula suits a kraft tube',
      navLabel: 'Your formula',
      body: [
        'This is the question to settle before anything else, because a cardboard tube is less forgiving than a plastic barrel. Paperboard gives less thermal protection, and the liner has a finite barrier capability.',
        'Firm formulas with a high wax ratio hold up well. Beeswax and butter balms are what the format was designed around. Balms carrying a high proportion of liquid oils, or that stay soft at room temperature, need a heavier barrier liner and should be tested in a sample tube before a production run.',
        'Pour temperature matters as much as the recipe. Too hot and the balm wicks past the liner edge and darkens the board; too cool and it sets before it levels. Most fillers settle a few degrees above set point and let the tubes cool upright and undisturbed.',
      ],
    },
    {
      type: 'list',
      id: 'sizes',
      heading: 'Capacities',
      navLabel: 'Sizes',
      intro:
        'Tubes are tooled by diameter, so the sizes below are the common ones. Others are made to order.',
      items: [
        '0.15 oz / 4.25 g — the standard lip balm stick, around 0.65 in diameter',
        '0.3 oz / 8.5 g — a taller stick with more shelf presence',
        '0.5 oz / 14 g — wider, often used for lip and cheek multi-use balms',
        '1 oz / 28 g and above — body balm and sunstick formats on the same build',
        'Cap fit set tighter or looser to suit hand or machine capping',
        'Wall thickness matched to the fill weight and how firm the balm sets',
      ],
      outro:
        'Send the fill in grams rather than only in fluid measure. Balm density varies enough to change which tube actually holds your batch.',
    },
    {
      type: 'prose',
      id: 'small-batch',
      heading: 'Ordering at small batch quantities',
      navLabel: 'Small batches',
      body: [
        'Plain kraft tubes are the one product on this site that works comfortably at genuinely small quantities, because an unprinted tube carries no plate cost, no artwork approval and no proofing cycle. The only setup is the diameter tooling, and that is a one-time cost you carry across every future order in that size.',
        'The practical consequence is that a maker filling 300 tubes a month can order sensibly, then move to printed tubes later without changing the diameter or re-tooling. Keeping a single diameter across a growing range is the single most useful decision at this scale.',
        'Price starts from $0.30 per piece for large-volume orders. Final pricing depends on size, material, printing, and quantity. Plain kraft tubes at volume sit closest to that figure of anything we make; small first batches sit above it while the tooling is absorbed.',
      ],
    },
    {
      type: 'prose',
      id: 'sustainability',
      heading: 'Describing the pack accurately',
      navLabel: 'Claims',
      body: [
        'Brands buy this format for an environmental story, which makes it the format where wording matters most. Two things are worth checking with any supplier before you print a claim.',
        'First, the cap. A paperboard body with a plastic cap is still mostly plastic-free by weight, but it is not a plastic-free pack, and some suppliers describe it as one. Ours are paperboard as standard; confirm it on your quote.',
        'Second, the liner. It is a coating rather than a separate sleeve, and whether a given grade is accepted in kerbside paper recycling varies by material and by municipality. We will tell you exactly which liner is quoted so you can describe it precisely rather than reaching for a general claim. Compostability in particular should not be claimed without evidence for the specific liner.',
      ],
    },
    {
      type: 'steps',
      id: 'process',
      heading: 'Ordering',
      navLabel: 'Ordering',
      steps: [
        {
          title: 'Describe the balm',
          text: 'Fill weight in grams, oil content, pour temperature and how firm it sets. This decides diameter and liner grade.',
        },
        {
          title: 'Request a sample tube',
          text: 'An unprinted tube in the proposed diameter lets you test fill behaviour and base travel before committing.',
        },
        {
          title: 'Choose the finish',
          text: 'Plain for your own labels, supplied wrap labels, or one to two colours printed directly onto the kraft.',
        },
        {
          title: 'Approve, if printing',
          text: 'A proof on the actual kraft board, since ink reads warmer and darker on unbleached fibre than on screen.',
        },
        {
          title: 'Production and dispatch',
          text: 'Tubes are rolled, cut, assembled with base discs and caps, then nested and cased for delivery.',
        },
      ],
    },
    {
      type: 'prose',
      id: 'quality-shipping',
      heading: 'Quality checks, storage and delivery',
      navLabel: 'Quality & delivery',
      body: [
        'Assembled tubes are checked for concentricity, cap retention and base disc travel. A tube out of round will not take a cap consistently, and a disc that binds ruins the customer\'s first use, so both are sampled through the run rather than only at the start.',
        'Store tubes and filled stock cool and dry. Kraft absorbs moisture, and paperboard is more heat-sensitive than plastic, so a pallet left against a warm wall will show it before a plastic one would.',
        'Tubes arrive assembled and capped, nested in counted cases. They are light but bulky, so freight is charged on volume rather than weight and consolidating into fewer larger shipments costs materially less, as set out on the <a href="/shipping-information/">delivery page</a>.',
      ],
    },
  ],
  specs: [
    { label: 'Product type', value: 'Unbleached kraft paperboard push-up tube for lip balm' },
    { label: 'Construction', value: 'Multi-ply kraft body, inner liner, base disc, friction-fit paperboard cap' },
    { label: 'Surface', value: 'Natural unbleached kraft; shade varies slightly between mill batches' },
    { label: 'Common capacities', value: '0.15 oz, 0.3 oz, 0.5 oz, 1 oz; other sizes tooled to order' },
    { label: 'Typical diameter', value: 'From approximately 0.65 in for a standard stick' },
    { label: 'Liner options', value: 'Grease-resistant standard and heavy-barrier grades' },
    { label: 'Decoration', value: 'Plain, applied wrap label, or one to two spot colours printed direct' },
    { label: 'Tamper evidence', value: 'Printed paper seal band or shrink band across the cap join' },
    { label: 'Small batches', value: 'Plain tubes carry no plate, artwork or proofing cost' },
    { label: 'Tooling', value: 'Charged once per diameter and reused on every reorder in that size' },
    { label: 'Claims', value: 'Cap material and liner grade confirmed in writing on the quote' },
    { label: 'Starting unit price', value: 'From $0.30 per piece on qualifying large-volume orders' },
    { label: 'Ordering', value: 'Quote based; sample tube recommended before a first run' },
  ],
  faqs: [
    {
      q: 'Is a cardboard tube the same thing as a paper tube?',
      a: 'The construction is the same rolled paperboard push-up format, and buyers use both names. We separate the two pages by finish: this one covers unbleached kraft bought plain or lightly decorated, and the paper tube page covers the same build with full-colour print for larger retail runs.',
    },
    {
      q: 'Can I buy plain tubes and put my own labels on?',
      a: 'Yes, and it is the most common first order. A bare tube carries no plate cost, no artwork approval and no proofing cycle, so you can start small and change scent names or branding whenever you like without reordering tubes.',
    },
    {
      q: 'Will the kraft colour be identical every time?',
      a: 'No. Kraft is unbleached, so shade varies slightly between mill batches. On a natural product most brands treat that as part of the character. If you need every unit to match exactly, a white-lined board is the more predictable substrate.',
    },
    {
      q: 'Does my balm need to be reformulated for a cardboard tube?',
      a: 'Not usually, but it does need to suit the format. Firm beeswax and butter balms perform well. Formulas high in liquid oils, or that stay soft at room temperature, need a heavier barrier liner and should be tested in a sample tube before a production run.',
    },
    {
      q: 'Is the cap plastic?',
      a: 'Ours are paperboard as standard, which is what keeps the pack genuinely free of plastic. It is worth asking any supplier directly, because a paper body with a plastic cap is sometimes still described as a plastic-free tube.',
    },
    {
      q: 'Can I say the tube is compostable?',
      a: 'Not without evidence for the specific liner grade on your order. The board itself is paper, but compostability depends on the coating and on the standard you are claiming against. We will tell you exactly which liner is quoted so you can describe it precisely.',
    },
    {
      q: 'What is the smallest quantity that makes sense?',
      a: 'Smaller than for anything else we make. Plain kraft tubes have no per-design setup, so the only fixed cost is the diameter tooling, carried once and reused on every reorder in that size. Tell us the batch size you actually want and we will quote it.',
    },
    {
      q: 'Can I print directly onto the kraft instead of using a label?',
      a: 'Yes, in one or two spot colours. Ink sits into the unbleached fibre, so everything reads warmer and darker than on screen and there is no true white without an opaque underprint. Ask for a proof on the actual board before you sign off.',
    },
    {
      q: 'Will the balm push back down after it is raised?',
      a: 'No. The base disc travels upward only, so the user pushes up a small amount at a time. Saying so on the pack prevents most of the negative feedback this format receives, because customers who expect a retracting mechanism assume the tube is faulty.',
    },
    {
      q: 'How should I store empty tubes before filling?',
      a: 'Cool, dry and off a concrete floor. Kraft absorbs moisture, which softens the board and can loosen the cap fit. Keep them in their cases until you fill, and avoid storing near a warm wall or under a warehouse roof in summer.',
    },
    {
      q: 'Can I move from plain tubes to printed ones later?',
      a: 'Yes, and it is a normal progression. Keep the same diameter and the tooling carries over, so the step up costs you the print setup rather than a new tube. That is the main argument for settling on one diameter early.',
    },
    {
      q: 'Do you supply a tamper seal?',
      a: 'A printed paper seal band or a clear shrink band can run across the cap join. Retail buyers frequently ask for one, and on a friction-fit cap it also stops the lid working loose in transit. Tell us if you plan to apply it yourself so the tolerances suit your applicator.',
    },
  ],
  related: ['paper-lip-balm-tubes', 'lip-balm-labels', 'custom-lip-balm-boxes', 'lip-balm-packaging'],
  order: 5,
  group: 'Lip Balm',
};
