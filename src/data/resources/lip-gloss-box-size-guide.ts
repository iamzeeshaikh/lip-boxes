import type { Resource } from '../content-types';

export const resource: Resource = {
  slug: 'lip-gloss-box-size-guide',
  title: 'Lip Gloss Box Size Guide',
  h1: 'Lip Gloss Box Size Guide',
  primaryKeyword: 'lip gloss box size',
  secondaryKeywords: [
    'lip gloss box dimensions',
    'doe foot tube measurements',
    'gloss carton height',
    'lip gloss packaging size chart',
  ],
  searchIntent:
    'How tall does a lip gloss box need to be for a wand applicator tube?',
  group: 'Sizing',
  seoTitle: 'Lip Gloss Box Size Guide | Wand Tube Dimensions',
  metaDescription:
    'Why gloss cartons run taller than the fill suggests, how to measure a wand tube, and base stability on slim boxes.',
  ogTitle: 'Sizing a Lip Gloss Box for a Wand Applicator',
  ogDescription:
    'Applicator height, tapered shoulder measurement, base footprint for stability, and glass tube considerations.',
  deck: 'Gloss packaging is mostly applicator. Getting the height right is the whole job.',
  cardDescription:
    'Applicator height, tapered shoulders, base stability and glass tube handling for slim gloss cartons.',
  highlights: [
    'Why the carton is taller than the fill volume implies',
    'Base footprint maths for a carton that will not tip',
    'What changes when the tube is glass',
  ],
  updated: '2026-07-30',
  readingMinutes: 8,
  hero: {
    slug: 'lip-gloss-boxes',
    file: 'lip-gloss-box-tall-slim-carton.png',
    alt: 'Tall slim black and white lip gloss box standing beside a clear gloss tube with a black cap',
  },
  sections: [
    {
      type: 'prose',
      id: 'height-problem',
      heading: 'The height problem nobody expects',
      navLabel: 'The height problem',
      body: [
        'Gloss brands routinely size a carton to the tube they see and get back a box that will not close. The reason is simple: a doe-foot gloss tube is mostly applicator. The wand and its cap sit above the reservoir, and they can account for a third to a half of the total height.',
        'A 10 ml gloss with a 4 ml visible fill level can stand 4.5 inches tall assembled. Size the box to the reservoir and the cap fouls the tuck flap on every unit. Size it to the assembled height and it fits.',
        'Everything in this guide is about that measurement and its consequences: a tall, narrow carton with a small footprint, which introduces stability and packing questions that a lip balm box never raises.',
      ],
    },
    {
      type: 'steps',
      id: 'measuring',
      heading: 'Measuring a gloss tube',
      navLabel: 'Measuring',
      intro:
        'Take these with the wand seated and the cap fully closed, standing on a flat surface.',
      steps: [
        {
          title: 'Total assembled height',
          text: 'From the base to the top of the closed cap, with the wand fully inserted. This is the number that drives everything.',
        },
        {
          title: 'Widest diameter',
          text: 'On a tapered tube this is usually below the cap, at the shoulder or the base. Sweep the caliper down the whole body rather than measuring at one point.',
        },
        {
          title: 'Base diameter separately',
          text: 'Needed for the insert and for base stability, which on a slim tall carton is a real consideration.',
        },
        {
          title: 'Whether the tube is glass',
          text: 'Not a measurement, but it changes the insert decision and the board weight, so record it now.',
        },
      ],
    },
    {
      type: 'compare',
      id: 'reference',
      heading: 'Common gloss formats and where their cartons land',
      navLabel: 'Reference table',
      intro:
        'Orientation only. The assembled height column is the one that matters, and it is why these cartons look tall for their volume.',
      columns: ['Format', 'Fill', 'Assembled tube height', 'Carton lands near'],
      rows: [
        ['Slim doe-foot wand', '4–6 ml', '3.5–4.1 in', '0.85 sq x 4.2 in'],
        ['Standard doe-foot wand', '8–10 ml', '4.1–4.7 in', '1 sq x 4.8 in'],
        ['Wide-barrel wand', '10–15 ml', '4.3–5 in', '1.2 sq x 5.1 in'],
        ['Squeeze tube with nozzle', '10–15 ml', '4.3–5.1 in flat', '1.5 x 0.8 x 5.2 in'],
        ['Roller ball', '6–10 ml', '2.8–3.4 in', '1 sq x 3.5 in'],
        ['Click pen applicator', '2–4 ml', '5–5.6 in', '0.7 sq x 5.7 in'],
        ['Glass wand tube', '6–10 ml', '4–4.6 in', '1.05 sq x 4.7 in, heavier board'],
      ],
      outro:
        'Note how little the fill volume predicts the carton height. A 4 ml click pen needs a taller box than a 10 ml roller ball.',
    },
    {
      type: 'prose',
      id: 'base-stability',
      heading: 'Base footprint and why a slim carton tips',
      navLabel: 'Base stability',
      body: [
        'A carton five inches tall on a one inch square base has a high centre of mass and very little to resist a knock. On a shelf, in a shopper basket, or on a shipping conveyor, it tips.',
        'The temptation is to cut the base to the tube diameter exactly, which minimises board cost. That is the wrong optimisation on this format. A base 2 to 3 mm wider than the minimum costs almost nothing in material and makes the difference between a pack that stands and one that spends its shelf life lying down.',
        'If the product is merchandised standing rather than in a tray, say so when you request the die line. The structural drawing can be proportioned for it, and the base style can move from a simple tuck flap to a snap-lock so the carton cannot open downward when lifted. Those base options are compared on our <a href="/box-styles/">structural reference</a>.',
      ],
    },
    {
      type: 'prose',
      id: 'glass-tubes',
      heading: 'What changes when the tube is glass',
      navLabel: 'Glass tubes',
      body: [
        'Glass gloss tubes are increasingly common at higher price points, and they change three things about the carton.',
        'Weight roughly doubles, which pushes the board from 16 to 18pt up to 20 or 22pt and makes a snap-lock or auto-bottom base sensible rather than optional.',
        'Fragility becomes the governing concern. A glass tube sliding the full length of a five inch carton in transit will chip at the neck, which is where the wall is thinnest. A base collar that fixes the tube in position is not a presentation choice here; it is what stops breakage.',
        'And clearance tightens. A snug fit is safer than a loose one for glass, because movement is the failure mode. Aim for the lower end of the clearance range and specify a collar to take up the rest.',
      ],
    },
    {
      type: 'list',
      id: 'narrow-panel',
      heading: 'Designing for a narrow panel',
      navLabel: 'Panel constraints',
      intro:
        'A gloss carton gives you a tall thin canvas. That constrains layout in ways worth knowing before design starts.',
      items: [
        'Horizontal brand names rarely fit; most gloss cartons set the logo vertically by necessity',
        'The ingredient declaration for a gloss is often long and will not fit legibly across a narrow face',
        'A barcode needs 1.5 in of clear flat width, which on a 1 in wide panel means it goes on the back or the base',
        'Shade swatches read better as a vertical stripe than as a small block on this proportion',
        'Windows work well here because gloss tubes are usually transparent, but a tall slot weakens a slim panel',
        'The base panel is larger than it looks relative to the faces, and is often the only place a batch code fits',
      ],
      outro:
        'Where the declaration will not fit, a folded leaflet inside the carton or a peel-back label on the tube are both cheaper than moving to a wider box.',
    },
    {
      type: 'features',
      id: 'mistakes',
      heading: 'Where gloss carton sizing goes wrong',
      navLabel: 'Common mistakes',
      icon: 'ruler',
      items: [
        {
          title: 'Sizing to the visible product',
          text: 'The reservoir is not the tube. Measure the assembled unit with the wand seated and the cap closed.',
        },
        {
          title: 'Measuring diameter at the cap',
          text: 'Tapered tubes are widest at the shoulder or base. Sweep the whole body to find the true maximum.',
        },
        {
          title: 'Minimising the base',
          text: 'A base cut to the tube diameter makes a tall carton tip. Two or three extra millimetres cost almost nothing.',
        },
        {
          title: 'Treating glass like plastic',
          text: 'Glass needs tighter clearance, a collar and a heavier board. Movement is what breaks it.',
        },
        {
          title: 'Changing tube mid-project',
          text: 'Swapping a 10 ml doe-foot for an 8 ml one changes the carton height. Lock the tube before the die line.',
        },
        {
          title: 'Posting the carton unprotected',
          text: 'A tall slim folding carton is secondary packaging. Sent loose in the mail it arrives crushed.',
        },
      ],
    },
    {
      type: 'prose',
      id: 'what-to-send',
      heading: 'What to send with your enquiry',
      navLabel: 'Requesting a quote',
      body: [
        'Send one assembled tube if you can. Filled is better than empty, because a filled tube sits at its true weight and the collar can be sized to hold it.',
        'If you are sending numbers instead, send the assembled height, the widest diameter and where on the body that maximum sits, the base diameter, and whether the tube is glass or plastic. Say how the product is merchandised, because standing display changes the base proportion.',
        'For a shade range, confirm that every shade ships in the same tube mould. Gloss ranges sometimes mix a clear tube for shimmer shades with a frosted one for creams, and those can differ enough to need separate cartons. Details of the format itself are on our <a href="/lip-gloss-boxes/">gloss carton page</a>.',
      ],
    },
  ],
  faqs: [
    {
      q: 'Why is my gloss box so much taller than the tube looks?',
      a: 'Because the doe-foot wand and its cap sit above the reservoir and account for a third to a half of the assembled height. A 10 ml gloss with a 4 ml visible fill can stand 4.5 inches tall. The carton has to accommodate the whole component, not the product you can see.',
    },
    {
      q: 'Where do I measure the diameter on a tapered tube?',
      a: 'Sweep a caliper down the whole body rather than measuring at one point. On tapered gloss tubes the widest point is often the shoulder or the base rather than the cap, and measuring at the cap alone gives a carton that will not accept the tube.',
    },
    {
      q: 'How wide should the base be on a tall gloss carton?',
      a: 'Two to three millimetres wider than the minimum needed to hold the tube. Cutting the base to the tube diameter exactly saves a negligible amount of board and produces a carton that tips on a shelf or in a basket.',
    },
    {
      q: 'Does a glass gloss tube need a different carton?',
      a: 'Yes, in three ways. The board goes up to 20 or 22pt, the base becomes a snap-lock or auto-bottom, and a collar becomes necessary rather than optional. Glass chips at the neck when it slides, so restraint matters more than presentation.',
    },
    {
      q: 'Can I fit the ingredient list on a narrow gloss carton?',
      a: 'Often not legibly. Gloss ingredient declarations tend to be long and the panel is narrow. A folded leaflet inside the carton or a peel-back label on the tube are both cheaper and more readable than shrinking type below about 5 pt.',
    },
    {
      q: 'Where does the barcode go on a one inch wide panel?',
      a: 'Usually the back panel or the base, because a barcode needs about 1.5 inches of clear flat width and must not cross a crease. Plan this before design rather than after, since on this proportion there is rarely a second option.',
    },
    {
      q: 'Do all shades in a gloss range use the same carton?',
      a: 'Only if they ship in the same tube mould. Some ranges use a clear tube for shimmer shades and a frosted one for creams, and those can differ enough to need separate die lines. Confirm it before committing to one carton.',
    },
    {
      q: 'How much clearance does a gloss tube need?',
      a: 'Around 0.5 to 1 mm per axis for plastic. For glass, use the lower end and add a collar to take up the remainder, because a snug fit is safer than a loose one when the failure mode is movement rather than friction.',
    },
    {
      q: 'Can I post a gloss carton on its own?',
      a: 'No. A tall slim folding carton is secondary packaging, not a shipper, and will arrive crushed if posted loose. Put it inside a mailer with void fill, or specify a printed corrugated mailer designed for postal handling.',
    },
  ],
  related: ['lip-gloss-boxes', 'holographic-lip-gloss-boxes', 'custom-lip-care-packaging'],
  relatedResources: ['lipstick-box-size-guide', 'choosing-packaging-inserts', 'custom-packaging-cost-guide'],
  order: 4,
};
