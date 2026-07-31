import type { Location } from '../content-types';

/*
 * Western states. Each page is built around one characteristic of that market
 * rather than a shared template, and the section types differ between them so
 * the pages do not read as one layout with the place name changed.
 */

export const california: Location = {
  slug: 'california',
  type: 'state',
  name: 'California',
  state: 'California',
  stateCode: 'CA',
  cities: ['los-angeles', 'san-diego'],
  primaryKeyword: 'custom lip boxes in California',
  secondaryKeywords: [
    'California cosmetic packaging supplier',
    'lip balm boxes California',
    'private label lip packaging California',
  ],
  seoTitle: 'Custom Lip Boxes in California | Packaging Supply',
  metaDescription:
    'Custom lip packaging for California beauty brands, indie labels and contract fillers, made to order and shipped statewide.',
  ogTitle: 'Custom Lip Packaging for California Brands',
  ogDescription:
    'Cartons, tubes and labels for the densest indie beauty market in the country, quoted to your dimensions.',
  h1: 'Custom Lip Boxes in California',
  deck: 'California has more independent beauty brands per capita than any other state, and packaging decisions there are made under unusual competitive pressure.',
  cardDescription:
    'The densest indie beauty market in the country, with retail, contract filling and DTC all concentrated in one state.',
  marketAngle:
    'Indie brand density and the speed of shade-range launches',
  related: ['custom-lipstick-boxes', 'holographic-lip-gloss-boxes', 'custom-lip-care-packaging'],
  sections: [
    {
      type: 'prose',
      id: 'market',
      heading: 'What the California beauty market asks of packaging',
      navLabel: 'The market',
      body: [
        'California concentrates more of the beauty supply chain than anywhere else in the United States. Contract fillers cluster around Los Angeles and Orange County, ingredient suppliers sit alongside them, and a very large number of independent colour cosmetic brands operate within driving distance of both.',
        'That density changes how packaging gets specified. Brands here iterate faster, launch shade ranges more often, and are more likely to have a second product in development before the first has shipped. Packaging that cannot accommodate a twelve-shade range on one die line becomes a constraint quickly.',
        'It also means buyers are comparing more suppliers than in most markets. The questions we get from California tend to be more specific than average: not "what does a box cost" but "what does a spot Pantone add per unit at 4,000 across nine shades".',
      ],
    },
    {
      type: 'features',
      id: 'who-buys',
      heading: 'Who orders lip packaging in California',
      navLabel: 'Who buys',
      icon: 'layers',
      intro:
        'Four buyer types make up most California enquiries, and each wants something different from the same product.',
      items: [
        {
          title: 'Independent colour cosmetic brands',
          text: 'Usually launching a shade range rather than a single product. The priority is one die line across all shades and a swatch that reproduces consistently between reorders.',
        },
        {
          title: 'Contract fillers and co-packers',
          text: 'Buying on behalf of several clients. Constraints come from the line — case counts, carton feed orientation, whether a sealer is used — more than from the brand brief.',
        },
        {
          title: 'Clean and natural lip care',
          text: 'Concentrated in the Bay Area and coastal markets. Material choices drive the specification, and claims wording gets scrutinised more closely than elsewhere.',
        },
        {
          title: 'Creator and celebrity lines',
          text: 'Short, high-attention launches where the unboxing is part of the product and the schedule is fixed by a campaign date rather than by production.',
        },
        {
          title: 'Salon and spa retail lines',
          text: 'Small quantities, frequent reorders, and a preference for packaging that reads as professional rather than mass market.',
        },
        {
          title: 'Subscription and sampling programmes',
          text: 'High volumes of a simple carton, where unit cost and consistent case counts matter more than finishing.',
        },
      ],
    },
    {
      type: 'prose',
      id: 'shade-ranges',
      heading: 'Packaging a shade range without paying twelve times',
      navLabel: 'Shade ranges',
      body: [
        'The most common California brief is a colour range: eight, twelve, sometimes twenty shades launching together. Handled badly it is twelve separate packaging projects. Handled properly it is one.',
        'The mechanism is a single die line, a single board and a single finish across every shade, with only the printed panel changing. On digital printing there is no plate charge per design at all, which makes a wide shallow range affordable at launch quantities. At higher per-shade volumes the shades gang onto shared litho sheets and share the make-ready.',
        'The one thing worth spending on is the swatch. Specify it as a spot Pantone rather than a process build, because process colour drifts between runs and a customer comparing a nude against one bought six months ago will see it. Our page on <a href="/custom-lipstick-boxes/">printed cartons built around a bullet case</a> covers how that works across a range.',
      ],
    },
    {
      type: 'list',
      id: 'formats',
      heading: 'Formats that come up most often here',
      navLabel: 'Formats',
      intro:
        'Not an exhaustive list, but these account for the majority of California enquiries.',
      items: [
        'Slim lipstick cartons for multi-shade colour ranges, usually on one die line',
        'Tall gloss cartons for wand applicators, where assembled height catches people out',
        'Holographic and metallised board for limited editions and creator collaborations',
        'Rigid boxes for press kits and influencer seeding, at genuinely small quantities',
        'Kraft and uncoated stocks for clean beauty positioning in coastal markets',
        'Printed mailers for direct-to-consumer, since a folding carton posted loose arrives crushed',
      ],
    },
    {
      type: 'prose',
      id: 'ordering',
      heading: 'Ordering from California',
      navLabel: 'Ordering',
      body: [
        'Lip Boxes manufactures to order and ships to addresses across California through a nationwide custom-order service. There is no California office, warehouse or local pickup point, and no claim to a same-day or local service.',
        'What that means in practice is that a California order runs on the same process as anywhere else: dimensions or a physical sample, a written quote, a die line and structural sample to approve, a colour proof, then production and freight to your address or your filler.',
        'If you are shipping to a contract filler rather than to yourself, send their receiving hours, appointment requirements and case labelling rules with the order. Refused deliveries at Southern California co-packers are avoidable and expensive.',
      ],
    },
    {
      type: 'prose',
      id: 'shipping',
      heading: 'Freight to California addresses',
      navLabel: 'Freight',
      body: [
        'Freight is quoted per consignment rather than published, because it depends on volume, destination and how the goods have to be received. We do not quote transit times as guarantees.',
        'Two things affect California shipments specifically. Flat-packed cartons and labels are charged on weight and travel economically. Assembled rigid boxes and paperboard tubes are bulky and charged on volume, so consolidating a launch into one consignment usually costs materially less than several smaller ones.',
        'If the delivery point is a residential address, a shared studio or a building without a dock, say so at quoting stage. Those conditions change the service level and the cost, and it is cheaper to quote correctly than to re-deliver. Details are on the <a href="/shipping-information/">what changes a delivery quote</a>.',
      ],
    },
  ],
  faqs: [
    {
      q: 'Do you have a California office or warehouse?',
      a: 'No. Lip Boxes manufactures to order and ships to California addresses through a nationwide custom-order service. There is no local office, warehouse or pickup point, and we do not offer a same-day or local courier service anywhere.',
    },
    {
      q: 'Can you ship directly to my contract filler in Southern California?',
      a: 'Yes, and it is common given how many fillers operate there. Send their receiving hours, whether deliveries need a booked appointment, their reference number and any case labelling requirements. A refused delivery at a co-packer is expensive and almost always avoidable.',
    },
    {
      q: 'How do I package a twelve-shade range affordably?',
      a: 'One die line, one board and one finish across every shade, with only the printed panel changing. Digital printing carries no plate charge per design, so a wide range is affordable at launch quantities. Send the per-shade quantity as well as the total.',
    },
    {
      q: 'Why does my nude shade swatch look different between orders?',
      a: 'Because it was almost certainly specified as a four-colour process build, which drifts within normal tolerance between runs. Specifying the swatch as a spot Pantone fixes it, at the cost of an extra ink station.',
    },
    {
      q: 'Can you produce small quantities for influencer seeding?',
      a: 'Rigid boxes are practical at genuinely small quantities because their setup cost is low relative to unit cost, so a run of a few hundred press kits is a normal order. Foiled litho cartons are the opposite and need volume to make sense.',
    },
    {
      q: 'We are a clean beauty brand. What packaging suits that positioning?',
      a: 'Uncoated or kraft board with a varnish rather than a plastic laminate keeps the carton in a single material stream, and paperboard push-up tubes remove plastic from the container entirely. We will confirm exactly what a given specification contains so any claim you make is accurate.',
    },
    {
      q: 'How is freight to California quoted?',
      a: 'Per consignment, based on volume, destination and receiving conditions. Flat cartons are charged on weight; assembled rigid boxes and paperboard tubes are charged on volume. Consolidating a launch into one shipment usually costs materially less than several.',
    },
    {
      q: 'Can you match packaging to a launch campaign date?',
      a: 'We confirm a production window in writing with the quote and will tell you plainly whether a date is achievable. Where it is tight, the usual route is recommending a print process and finishing that suit the timeline rather than expediting an elaborate specification.',
    },
    {
      q: 'Do you work with brands that already have a packaging designer?',
      a: 'Yes, and most California projects arrive that way. We supply the die line and templates, your designer builds onto them, and we preflight the file before quoting for production. That sequence catches problems while they are still cheap to fix.',
    },
  ],
};

export const washington: Location = {
  slug: 'washington',
  type: 'state',
  name: 'Washington',
  state: 'Washington',
  stateCode: 'WA',
  cities: ['seattle'],
  primaryKeyword: 'custom lip boxes in Washington',
  secondaryKeywords: [
    'Washington cosmetic packaging',
    'Seattle area lip packaging',
    'sustainable lip packaging Washington',
  ],
  seoTitle: 'Custom Lip Boxes in Washington | Packaging Supply',
  metaDescription:
    'Lip packaging for Washington brands, with material choices suited to a market where disposal claims are scrutinised.',
  ogTitle: 'Custom Lip Packaging for Washington Brands',
  ogDescription:
    'Cartons, paperboard tubes and labels for a market where material choices and claim wording get read closely.',
  h1: 'Custom Lip Boxes in Washington',
  deck: 'Washington buyers ask harder questions about materials than most, and the answers have to hold up.',
  cardDescription:
    'A market where recyclability and claim wording are scrutinised, and specifications are chosen accordingly.',
  marketAngle: 'Material scrutiny and defensible disposal claims',
  related: ['paper-lip-balm-tubes', 'cardboard-lip-balm-tubes', 'custom-lip-balm-boxes'],
  sections: [
    {
      type: 'prose',
      id: 'market',
      heading: 'Why Washington enquiries look different',
      navLabel: 'The market',
      body: [
        'A packaging enquiry from Washington more often opens with a question about material than about price. Buyers here regularly ask what the liner in a paperboard tube is made of, whether a laminate can be recycled, and what a supplier means by compostable.',
        'That is a useful pressure to work under. It rewards suppliers who can answer precisely and exposes ones who cannot, and it pushes specifications toward choices that hold up to inspection rather than choices that sound good on a website.',
        'The practical effect on packaging is a preference for uncoated and varnished stocks over laminates, paperboard containers over plastic, and printed swatches over film windows, all of which keep a pack closer to a single material stream.',
      ],
    },
    {
      type: 'compare',
      id: 'material-choices',
      heading: 'What each material choice actually commits you to',
      navLabel: 'Material trade-offs',
      intro:
        'The honest version, which is what a Washington buyer usually wants before specifying.',
      columns: ['Choice', 'What it gives you', 'What it costs you', 'How to describe it'],
      rows: [
        [
          'Varnish instead of laminate',
          'Carton stays in the paper stream',
          'Less scuff resistance on a handled pack',
          'Paperboard, widely accepted in kerbside paper recycling',
        ],
        [
          'Printed swatch instead of a window',
          'One material rather than two',
          'The shopper cannot see the actual product',
          'No plastic film component',
        ],
        [
          'Paperboard tube instead of plastic',
          'No plastic container component',
          'Balm cannot retract; more heat sensitive',
          'Confirm the liner grade before claiming recyclability',
        ],
        [
          'Paperboard cap',
          'Removes the last plastic part of a tube',
          'Slightly less positive closure than moulded plastic',
          'Genuinely plastic-free, if the liner supports it',
        ],
        [
          'Uncoated kraft board',
          'No coating, natural surface',
          'Muted colour, no true white without underprint',
          'Unbleached; state recycled content only if evidenced',
        ],
        [
          'Metallised or holographic board',
          'A striking shelf effect',
          'Not compatible with paper recycling',
          'Say so plainly rather than implying otherwise',
        ],
      ],
      outro:
        'The last row is the one worth being direct about. Metallised board is not recyclable in a paper stream, and describing it otherwise is the kind of claim that gets a brand challenged.',
    },
    {
      type: 'prose',
      id: 'claims',
      heading: 'Writing a claim you can defend',
      navLabel: 'Claim wording',
      body: [
        'We will tell you exactly what a specification contains — which liner grade, which coating, whether the cap is paperboard — so that whatever you print is accurate. What we will not do is supply a general environmental claim for you to apply.',
        'Two distinctions cause most of the trouble. Recycled content and recyclability are separate things, and a board can have one without the other. And compostability depends on the specific coating and the standard being claimed against, not on the material being paper.',
        'If a claim matters to your positioning, decide it before the specification is fixed rather than after. It genuinely constrains the finish, and finding that out at proof stage means starting again.',
      ],
    },
    {
      type: 'list',
      id: 'formats',
      heading: 'What Washington brands order',
      navLabel: 'Formats',
      intro:
        'Weighted toward lip care and balm rather than colour cosmetics, which is the reverse of the California pattern.',
      items: [
        'Paperboard push-up tubes, both printed and plain kraft for small batches',
        'Uncoated or varnish-finished cartons rather than laminated ones',
        'Wrap labels on paper stocks where the product is protected by an outer carton',
        'Refill-friendly formats for retailers running refill programmes',
        'Counter display units for independent grocery and apothecary retail',
        'Simple mailers for direct-to-consumer, printed rather than laminated',
      ],
    },
    {
      type: 'prose',
      id: 'ordering',
      heading: 'Ordering and delivery in Washington',
      navLabel: 'Ordering',
      body: [
        'We make to order and ship to Washington addresses as part of a nationwide service. There is no Washington facility, no local stock and no local pickup, and we do not claim a regional presence we do not have.',
        'Freight is quoted per consignment. Paperboard tubes are bulky relative to their weight and are charged on volume, which matters more here than in most markets because tubes make up a larger share of what Washington brands order.',
        'Where a product is going to a small studio or a residential address rather than a commercial dock, say so when requesting a quote. It changes the service level and the cost.',
      ],
    },
  ],
  faqs: [
    {
      q: 'Are your paperboard tubes recyclable?',
      a: 'The board is paper. The liner is a coating, and whether a specific grade is accepted in kerbside paper recycling varies by material and by municipality. We will tell you which liner is quoted on your job so you can describe it precisely rather than generally.',
    },
    {
      q: 'Can I call a paperboard tube compostable?',
      a: 'Not without evidence for the specific liner grade and the standard you are claiming against. The board being paper is not sufficient. Ask any supplier for the liner specification before printing that word on a pack.',
    },
    {
      q: 'What is the difference between recycled content and recyclable?',
      a: 'Recycled content is what the board is made from; recyclability is what can happen to it afterwards. A board can have high recycled content and still be hard to recycle if it carries a plastic laminate. They are separate claims and need separate evidence.',
    },
    {
      q: 'Is the cap on your paper tubes plastic?',
      a: 'Paperboard as standard, which is what keeps the pack genuinely free of plastic. It is worth asking every supplier this directly, because a paper body with a plastic cap is sometimes still marketed as a plastic-free tube.',
    },
    {
      q: 'What is the lowest-impact carton specification you offer?',
      a: 'Uncoated or kraft board with a varnish rather than a laminate, a printed swatch instead of a film window, and a die-cut card insert rather than foam. That combination keeps the whole carton in one material stream.',
    },
    {
      q: 'Do you offer refill-friendly packaging?',
      a: 'We supply lighter secondary cartons for refill units sold without an outer case, where the pack has to protect but not present. Tell us how the refill programme works and the specification is built around that rather than around a standard retail carton.',
    },
    {
      q: 'Do you have a Washington warehouse?',
      a: 'No. Everything is manufactured to order and shipped to Washington addresses as part of a nationwide service. There is no local facility, no held stock and no local pickup option.',
    },
    {
      q: 'Why are paperboard tubes more expensive to ship than cartons?',
      a: 'Because they arrive assembled rather than flat, so they are bulky relative to their weight and freight is charged on volume. Consolidating into fewer, larger consignments makes a material difference to delivered cost on this format.',
    },
  ],
};

export const arizona: Location = {
  slug: 'arizona',
  type: 'state',
  name: 'Arizona',
  state: 'Arizona',
  stateCode: 'AZ',
  cities: ['phoenix'],
  primaryKeyword: 'custom lip boxes in Arizona',
  secondaryKeywords: [
    'Arizona cosmetic packaging',
    'heat stable lip packaging',
    'Phoenix lip balm boxes',
  ],
  seoTitle: 'Custom Lip Boxes in Arizona | Packaging Supply',
  metaDescription:
    'Lip packaging for Arizona brands, with the storage, transit and heat considerations that a desert climate makes unavoidable.',
  ogTitle: 'Custom Lip Packaging for Arizona Brands',
  ogDescription:
    'Cartons, tubes and labels specified with warehouse heat, sun exposure and SPF product formats in mind.',
  h1: 'Custom Lip Boxes in Arizona',
  deck: 'Heat is a genuine packaging variable in Arizona, and it changes which formats and adhesives hold up.',
  cardDescription:
    'A market where storage temperature and sun-care formats shape the packaging specification.',
  marketAngle: 'Heat, storage conditions and sun-care formats',
  related: ['custom-lip-balm-boxes', 'hang-tab-lip-balm-boxes', 'custom-lip-balm-labels'],
  sections: [
    {
      type: 'prose',
      id: 'market',
      heading: 'The one variable Arizona brands cannot ignore',
      navLabel: 'The market',
      body: [
        'Most packaging conversations treat temperature as an afterthought. In Arizona it belongs near the front, because it affects the container, the adhesive and the product itself in ways that show up as customer complaints rather than as production faults.',
        'A warehouse without climate control in Phoenix in July is a genuinely hostile environment for lip products. Adhesives soften and ooze at label edges. Paperboard tubes are more heat-sensitive than plastic barrels. Balm softens and can seep past a liner edge.',
        'None of this makes a format impossible. It makes some choices better than others, and it makes storage advice part of the specification rather than an afterthought.',
      ],
    },
    {
      type: 'features',
      id: 'heat-decisions',
      heading: 'What heat changes in a specification',
      navLabel: 'Heat and specification',
      icon: 'shield',
      intro:
        'Five decisions where Arizona conditions point one way rather than the other.',
      items: [
        {
          title: 'Container material',
          text: 'A plastic barrel gives more thermal protection than paperboard. Where a paper tube is wanted for positioning, a firmer wax ratio in the formula matters more than usual.',
        },
        {
          title: 'Liner grade',
          text: 'A softened balm can wick past a light liner edge. Specify a heavier barrier grade if the product will sit in uncontrolled storage.',
        },
        {
          title: 'Label adhesive',
          text: 'Adhesive performance changes with heat and age. A roll stored near a warehouse ceiling through summer will not run the way a fresh one does.',
        },
        {
          title: 'Board storage',
          text: 'Flat cartons stored against a warm exterior wall bow and lose crease definition. Keep pallets central and banded rather than loose.',
        },
        {
          title: 'Laminate over varnish',
          text: 'A laminate is more resistant to handling in a hot store, where fingerprints and scuffing show up faster on bare print.',
        },
        {
          title: 'Tamper seals',
          text: 'Worth having on friction-fit caps, which can loosen as materials expand and contract through a temperature cycle.',
        },
      ],
    },
    {
      type: 'prose',
      id: 'sun-care',
      heading: 'SPF lip products and what they change',
      navLabel: 'SPF products',
      body: [
        'Arizona has a higher share of sun-care lip products than most markets, and an SPF claim changes the packaging brief in one important way.',
        'In the United States, a lip product carrying an SPF claim is regulated differently from a plain cosmetic, and the labelling has its own panel requirements. That is a compliance question for your reviewer rather than a packaging one, but it has a direct packaging consequence: the panel copy is longer, and a tube band that held a cosmetic declaration may not hold a drug facts panel.',
        'Plan for that before choosing the container. The usual answers are an outer carton carrying the panel, or a peel-back label on the tube. Both are structural decisions, and both are cheaper to design in than to retrofit.',
      ],
    },
    {
      type: 'list',
      id: 'formats',
      heading: 'Formats that suit the market',
      navLabel: 'Formats',
      intro:
        'Weighted toward products sold in outdoor, pharmacy and convenience channels.',
      items: [
        'Hang tab cartons for pharmacy and convenience peg fixtures, which move a lot of lip balm here',
        'Plastic twist-up tubes with printed wrap labels, for heat resistance',
        'Outer cartons carrying the full panel where an SPF claim makes the tube band insufficient',
        'Laminated rather than varnish-only finishes on packs handled repeatedly in store',
        'Counter display units for resort, golf and outdoor retail',
        'Multipacks, which sell well in a market where lip balm is bought as a consumable',
      ],
    },
    {
      type: 'prose',
      id: 'ordering',
      heading: 'Ordering and delivery in Arizona',
      navLabel: 'Ordering',
      body: [
        'Packaging is manufactured to order and shipped to Arizona addresses through a nationwide service. There is no Arizona facility, no local stock and no local collection point.',
        'One practical note on delivery here. If your receiving area is not climate controlled, ask for the consignment to be scheduled rather than left, and move label stock indoors promptly. Label rolls are the component most affected by sitting in a hot receiving bay.',
        'Storage guidance for each format is set out on the <a href="/shipping-information/">storage and transit notes</a>, and it is worth passing to whoever receives the pallet rather than keeping it in the purchasing file.',
      ],
    },
  ],
  faqs: [
    {
      q: 'Will heat damage packaging in storage?',
      a: 'It can. Label adhesive softens and can ooze at the edges, flat cartons bow if stored against a warm wall, and paperboard tubes are more heat sensitive than plastic. Keep pallets central, banded and off exterior walls, and move label stock indoors on arrival.',
    },
    {
      q: 'Is a paperboard tube a bad idea in Arizona?',
      a: 'Not necessarily, but the formula matters more than usual. Firmer, higher-wax balms hold up well; formulas that stay soft at room temperature will struggle. Test your specific recipe in a sample tube before committing to a production run.',
    },
    {
      q: 'Does an SPF claim change my packaging?',
      a: 'It changes the labelling requirements, which usually changes the packaging. The panel copy is longer than a plain cosmetic declaration, so a tube band that was sufficient may not be. Plan for an outer carton or a peel-back label before choosing the container.',
    },
    {
      q: 'Should I choose laminate or varnish here?',
      a: 'Laminate, if the pack is handled repeatedly in a hot store. It resists scuffing and finger marks better than bare print with a varnish. If a single material stream matters more to you than durability, varnish is still the right answer.',
    },
    {
      q: 'How should I store label rolls?',
      a: 'Cool, flat and out of direct sun, and use them within a reasonable period. Heat is the main enemy: a roll that has sat in a hot receiving bay or near a warehouse ceiling can develop adhesive ooze and become difficult to run through an applicator.',
    },
    {
      q: 'Do hang tab packs work for pharmacy retail here?',
      a: 'Yes, and pharmacy and convenience peg fixtures move a lot of lip balm in this market. The tab is die-cut from the same board as the carton, and the geometry is specified against your packed weight rather than added as an afterthought.',
    },
    {
      q: 'Do you have an Arizona warehouse?',
      a: 'No. Everything is made to order and shipped to Arizona addresses as part of a nationwide service. There is no local facility, no held stock and no collection option.',
    },
    {
      q: 'Can you recommend a tamper seal for friction-fit caps?',
      a: 'A printed paper seal band or a clear shrink band across the cap join. It is worth having in a market with wide temperature swings, because materials expand and contract and a friction cap can work loose in transit or storage.',
    },
  ],
};

export const colorado: Location = {
  slug: 'colorado',
  type: 'state',
  name: 'Colorado',
  state: 'Colorado',
  stateCode: 'CO',
  cities: ['denver'],
  primaryKeyword: 'custom lip boxes in Colorado',
  secondaryKeywords: [
    'Colorado cosmetic packaging',
    'Denver lip balm packaging',
    'outdoor brand lip packaging',
  ],
  seoTitle: 'Custom Lip Boxes in Colorado | Packaging Supply',
  metaDescription:
    'Lip packaging for Colorado brands, including outdoor and apothecary lines sold through small independent specialty retail.',
  ogTitle: 'Custom Lip Packaging for Colorado Brands',
  ogDescription:
    'Cartons, kraft tubes and labels for outdoor, apothecary and specialty retail lip care.',
  h1: 'Custom Lip Boxes in Colorado',
  deck: 'Colorado lip care skews toward outdoor and apothecary positioning, sold through specialty retail rather than mass.',
  cardDescription:
    'Outdoor and apothecary lip care sold through independent specialty retail, with the packaging that channel expects.',
  marketAngle: 'Outdoor and apothecary positioning in specialty retail',
  related: ['cardboard-lip-balm-tubes', 'custom-lip-balm-boxes', 'lip-balm-labels'],
  sections: [
    {
      type: 'prose',
      id: 'market',
      heading: 'What Colorado lip care tends to be',
      navLabel: 'The market',
      body: [
        'The lip products that come out of Colorado skew away from colour cosmetics and toward balm, salve and treatment. Outdoor and sport brands extend into lip care because their customers already carry a balm. Apothecary and herbal makers sell through independent grocery, outdoor retail and farmers markets.',
        'Both routes share a retail context that is unlike mass market. Shelf space is in independent stores where the buyer knows the product, packaging is judged at close range rather than at three feet, and a pack that looks mass-produced can work against the brand.',
        'That pushes specifications toward unbleached and uncoated stocks, restrained printing, and formats that read as made rather than manufactured.',
      ],
    },
    {
      type: 'list',
      id: 'specialty-retail',
      heading: 'What specialty retail asks for',
      navLabel: 'Specialty retail',
      intro:
        'Independent stores have different packaging requirements from a chain, and they are easy to miss.',
      items: [
        'A barcode, which small brands frequently forget until a store asks for one',
        'Packaging that survives being handled repeatedly by customers browsing at close range',
        'A price point that supports a retail margin, which constrains packaging cost more tightly than DTC does',
        'Counter display units, since independents often have no dedicated shelf for a new brand',
        'Modest case counts, because a small store will not take a full outer carton of one SKU',
        'Consistency between reorders, because the buyer sees the same pack on the shelf for years',
      ],
      outro:
        'The case count question is worth raising early. Packing to a count a small store can actually order is a production decision, and it costs nothing if it is specified up front.',
    },
    {
      type: 'prose',
      id: 'small-batch',
      heading: 'Ordering at small-batch quantities',
      navLabel: 'Small batches',
      body: [
        'A lot of Colorado enquiries are for quantities that suppliers with high minimums will not quote. That is worth addressing directly rather than around.',
        'Plain kraft push-up tubes are the format that stays viable at genuinely small volumes, because an unprinted tube carries no plate cost, no artwork approval and no proofing cycle. The only setup is the diameter tooling, and that carries across every future order in that size. A maker filling a few hundred units a month can order sensibly.',
        'Printed cartons are harder at that scale, because the die and the plates have to be absorbed somewhere. Digital printing avoids the plate charge, which helps, but the die remains. Where budget is tight, applying a printed label to a plain tube usually reaches the shelf for less than a printed carton does, as set out on our <a href="/cardboard-lip-balm-tubes/">kraft tube page</a>.',
      ],
    },
    {
      type: 'prose',
      id: 'altitude',
      heading: 'Two practical notes for this market',
      navLabel: 'Practical notes',
      body: [
        'Dry air. Colorado humidity is low, and paperboard responds to it. Board stored in very dry conditions becomes slightly more brittle at the crease, which shows as a rougher fold on dark or heavily inked panels. Keeping stock in its cases until use, rather than open on a bench, is enough to avoid it.',
        'Winter shipping. Lip products stored in an unheated vehicle or a cold receiving area behave differently from warm stock: adhesives are stiffer and labels can lift at the edges if applied cold. Where labels are applied in your own facility in winter, let the rolls come up to room temperature before running them.',
        'Neither is a reason to change format. Both are the kind of thing worth knowing before it produces a batch you cannot explain.',
      ],
    },
  ],
  faqs: [
    {
      q: 'Can you quote genuinely small quantities?',
      a: 'Yes, and the format that stays viable at small scale is a plain kraft push-up tube, because an unprinted tube carries no plate, artwork or proofing cost. Printed cartons are harder at low volume because the die has to be absorbed somewhere.',
    },
    {
      q: 'What is cheapest way to get a professional-looking pack at low volume?',
      a: 'A plain tube with a printed wrap label usually reaches the shelf for less than a printed carton, because the label carries the design and the tube carries no per-design setup. It also lets you run several scents from one tube stock.',
    },
    {
      q: 'Do independent retailers need anything specific from packaging?',
      a: 'A barcode, which small brands often forget until a store asks. Beyond that, modest case counts so a small store can order sensibly, and packaging that holds up to being handled at close range by browsing customers.',
    },
    {
      q: 'Can you pack to a small case count?',
      a: 'Yes. Tell us the count that suits your retailers and we pack to it. Building a case count into the production plan costs nothing; repacking finished stock afterwards costs labour and risks damage.',
    },
    {
      q: 'Does dry air affect paperboard?',
      a: 'Slightly. Board stored in very dry conditions becomes marginally more brittle at the crease, which can show as a rougher fold on dark or heavily inked panels. Keeping stock in its cases until use rather than open on a bench is enough to avoid it.',
    },
    {
      q: 'Should I worry about applying labels in winter?',
      a: 'Let label rolls come up to room temperature before running them. Adhesive is stiffer when cold and labels applied cold are more likely to lift at the edges, particularly on a curved surface like a lip balm tube.',
    },
    {
      q: 'Do you offer counter display units?',
      a: 'Yes, in printed E-flute corrugated. They ship flat, fold into an angled display and are useful for independents that have no dedicated shelf for a new brand. Producing them alongside your cartons keeps the colours matching.',
    },
    {
      q: 'Do you have a Colorado location?',
      a: 'No. Packaging is made to order and shipped to Colorado addresses through a nationwide service. There is no local facility, no held stock and no collection point.',
    },
  ],
};
