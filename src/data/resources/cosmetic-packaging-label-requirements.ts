import type { Resource } from '../content-types';

export const resource: Resource = {
  slug: 'cosmetic-packaging-label-requirements',
  title: 'Cosmetic Packaging Label Requirements',
  h1: 'Cosmetic Packaging Label Requirements',
  primaryKeyword: 'cosmetic packaging label requirements',
  secondaryKeywords: [
    'cosmetic labeling rules',
    'lip product label information',
    'ingredient declaration order',
    'principal display panel',
  ],
  searchIntent:
    'What information has to appear on a cosmetic package, and where does each part go?',
  group: 'Compliance',
  seoTitle: 'Cosmetic Packaging Label Requirements Explained',
  metaDescription:
    'What information cosmetic packaging carries, which panel it belongs on, and where lip products commonly run short of space.',
  ogTitle: 'What Goes on a Cosmetic Package Label',
  ogDescription:
    'Principal display panel, information panel, ingredient order and the space problems specific to lip packaging.',
  deck: 'What each panel carries, and how to fit it on a container the size of a lip balm tube.',
  cardDescription:
    'Panel-by-panel breakdown of cosmetic label content, with the space solutions lip products actually use.',
  highlights: [
    'Which panel each piece of information belongs on',
    'How the ingredient order is determined',
    'Four ways to solve a panel that is too small',
  ],
  updated: '2026-07-30',
  readingMinutes: 10,
  hero: {
    slug: 'lip-balm-labels',
    file: 'lip-balm-label-die-cut-wraps.png',
    alt: 'Three die-cut lip balm wrap labels with printed ingredient panels beside a blank lip balm tube',
  },
  sections: [
    {
      type: 'prose',
      id: 'scope-and-limits',
      heading: 'What this guide is, and what it is not',
      navLabel: 'Scope',
      body: [
        'This is a practical orientation to the kinds of information cosmetic packaging carries and where each part conventionally sits. It exists because packaging decisions and labelling decisions constrain each other: a carton panel that is too small for the required copy is a packaging problem discovered too late.',
        'It is not legal or regulatory advice, and it should not be relied on as a compliance checklist. Requirements differ by product type, by ingredient, by claim and by the market you sell into, and they change. A product that is a cosmetic in one market may be regulated differently in another, and a single claim can move a product from one category to another.',
        'Verify your specific requirements with a qualified regulatory or compliance professional before approving artwork. We print the file you approve and do not review its regulatory content, as stated in our <a href="/terms-and-conditions/">terms</a>.',
      ],
    },
    {
      type: 'compare',
      id: 'panel-map',
      heading: 'Which panel carries what',
      navLabel: 'Panel map',
      intro:
        'Cosmetic labelling conventionally divides a package into two areas. Knowing which is which is the first step in planning artwork.',
      columns: ['Panel', 'What it is', 'Typically carries', 'Design consequence'],
      rows: [
        [
          'Principal display panel',
          'The face most likely to be shown at point of sale',
          'Product identity, brand, net quantity of contents',
          'This is the face your shade swatch and brand mark compete for',
        ],
        [
          'Information panel',
          'The panel immediately to the right of the principal display panel',
          'Ingredient declaration, responsible party, directions, warnings',
          'On a slim carton this is a very narrow strip',
        ],
        [
          'Other panels',
          'Remaining faces and the base',
          'Barcode, batch coding, secondary messaging',
          'The base is usually larger than it looks relative to the faces',
        ],
        [
          'Inner leaflet',
          'A folded insert placed inside the carton',
          'Overflow ingredient declaration and directions',
          'The standard answer when a panel cannot carry the copy legibly',
        ],
      ],
      outro:
        'On a lip balm tube there is effectively one panel, which is why so many lip products carry the full declaration on an outer carton or a peel-back label instead.',
    },
    {
      type: 'list',
      id: 'information-types',
      heading: 'The kinds of information a cosmetic package carries',
      navLabel: 'What appears',
      intro:
        'Not every item applies to every product. Which do is a question for your compliance reviewer.',
      items: [
        'Product identity — what the product is, in terms a buyer would recognise',
        'Net quantity of contents, commonly expressed in both metric and US customary units',
        'Ingredient declaration, listed in descending order of predominance',
        'Name and place of business of the manufacturer, packer or distributor',
        'Directions for safe use, where the product needs them',
        'Warning or caution statements, where applicable to the formula or claim',
        'Country of origin, where required by the market',
        'Batch or lot identification, allowing a specific production run to be traced',
      ],
      outro:
        'Products making certain claims can fall under additional regimes with their own panel formats. An SPF claim is the common example in lip care, and it changes the labelling requirements substantially.',
    },
    {
      type: 'prose',
      id: 'ingredient-order',
      heading: 'How the ingredient order is determined',
      navLabel: 'Ingredient order',
      body: [
        'Ingredients are conventionally listed in descending order of predominance by weight, so the ingredient present in the greatest quantity appears first.',
        'Below a threshold concentration, ingredients may be listed in any order after those above it. Colour additives are conventionally listed separately at the end rather than in weight order, which is why a lipstick declaration often has a distinct colour block after the main list.',
        'For a shade range this has a practical packaging consequence. If the only difference between shades is the colour additive, the main declaration may be identical across the range with only the colour block changing. That allows one artwork template with a small variable zone, which is far cheaper to proof across twelve shades than twelve independent layouts.',
        'Confirm the specific treatment with your reviewer. The point here is the packaging one: find out early whether your shades share a declaration, because it determines how the artwork is structured.',
      ],
    },
    {
      type: 'prose',
      id: 'space-problem',
      heading: 'The space problem, and why it is a packaging decision',
      navLabel: 'The space problem',
      body: [
        'Lip products have the worst ratio of required copy to available surface in cosmetics. A lip balm tube offers a band roughly an inch and a half tall around a curved surface. A slim lipstick carton offers panels about an inch wide.',
        'Legibility falls away sharply below about 5 pt, and sooner on uncoated kraft where ink spreads into the fibre and on a curved surface where type disappears around the circumference. Setting a full declaration at 4 pt to make it fit produces copy nobody can read, which serves neither the customer nor the purpose of the requirement.',
        'This is why the space question belongs in the packaging plan rather than in the artwork stage. Deciding that the tube carries brand and the carton carries the declaration is a structural decision, and it changes whether you need a carton at all.',
      ],
    },
    {
      type: 'features',
      id: 'space-solutions',
      heading: 'Four ways to solve a panel that is too small',
      navLabel: 'Space solutions',
      icon: 'file-text',
      intro:
        'In rough order of how often they are used on lip products.',
      items: [
        {
          title: 'Move the declaration to the carton',
          text: 'The tube carries brand and shade; the outer carton carries the full information panel. The most common solution, and a reason many lip products have a carton at all.',
        },
        {
          title: 'Peel-back multi-panel label',
          text: 'A hinged second layer on the container that opens to reveal additional copy. Keeps the product self-contained where there is no carton.',
        },
        {
          title: 'Folded leaflet inside the carton',
          text: 'A small printed insert carrying overflow copy. Cheap, effective, and considerably less expensive than moving up a carton size.',
        },
        {
          title: 'Extended or wrap-around panel',
          text: 'Using the base and a second side panel as continuation of the information panel, which works better on a carton than on a curved tube.',
        },
        {
          title: 'Reduce the ingredient count',
          text: 'A formulation decision rather than a packaging one, but a genuine option early in development.',
        },
        {
          title: 'Larger carton footprint',
          text: 'The obvious answer and usually the worst value, since it raises board cost, freight volume and shelf footprint at once.',
        },
      ],
    },
    {
      type: 'list',
      id: 'packaging-checks',
      heading: 'Packaging checks before you approve artwork',
      navLabel: 'Before approval',
      intro:
        'These are the packaging-side items. Regulatory review is separate and should run alongside.',
      items: [
        'Every required element has been allocated to a specific panel, in writing, before design begins',
        'The smallest type on the layout has been checked at 100% on the actual substrate',
        'The barcode has at least 1.5 in of clear flat width and does not cross a crease',
        'A clear panel exists for batch coding, if it is applied at filling rather than printed',
        'Any leaflet has been included in the quote and its folded size fits inside the carton',
        'For a shade range, the variable zone is identified and everything else is locked in position',
        'Your compliance reviewer has seen the layout, not just the copy in a document',
      ],
      outro:
        'The last one matters more than it sounds. Copy reviewed in a spreadsheet frequently passes, then fails once laid out, because the reviewer has not seen how small it ended up.',
    },
    {
      type: 'prose',
      id: 'timing',
      heading: 'When to do the compliance review',
      navLabel: 'Timing',
      body: [
        'In parallel with structural sampling, and always before proof approval.',
        'The reason is mechanical rather than legal. Once a colour proof is approved, the production run is manufactured against it. A copy change after that point means new plates and a new run, and on a litho job with foil that is a substantial cost for what may be a two-word amendment.',
        'Running the review while structural samples are being made costs nothing in schedule, because those stages have no dependency on each other. This is one of several stages that can run in parallel, as set out in our <a href="/resources/lip-product-packaging-guide/">launch planning guide</a>.',
      ],
    },
  ],
  faqs: [
    {
      q: 'Is this page regulatory advice?',
      a: 'No. It is a practical orientation to the kinds of information cosmetic packaging carries and where each part sits, written so packaging decisions account for it. Requirements vary by product, ingredient, claim and market, and change over time. Verify yours with a qualified compliance professional.',
    },
    {
      q: 'What is the principal display panel?',
      a: 'The face of the package most likely to be shown or examined at point of sale. It conventionally carries the product identity, the brand and the net quantity of contents, which is why it is also the panel your shade swatch and brand mark compete for.',
    },
    {
      q: 'In what order are ingredients listed?',
      a: 'Conventionally in descending order of predominance by weight. Below a threshold concentration the order becomes flexible, and colour additives are usually listed separately at the end, which is why lipstick declarations often carry a distinct colour block.',
    },
    {
      q: 'Do all shades in a range need different label copy?',
      a: 'Often only the colour block differs, with the main declaration identical across shades. Confirm this with your reviewer early, because it determines whether you can use one artwork template with a small variable zone rather than twelve independent layouts.',
    },
    {
      q: 'How small can the ingredient list be?',
      a: 'Technically very small; practically, legibility falls away below about 5 pt, and sooner on uncoated kraft or a curved surface. Setting a declaration at 4 pt to make it fit produces copy nobody can read, which defeats the purpose.',
    },
    {
      q: 'Where do lip products usually put the ingredient declaration?',
      a: 'On the outer carton, most commonly. A lip balm tube offers a band about an inch and a half tall around a curve, which is rarely enough. This is one of the main reasons a lip product has a carton at all.',
    },
    {
      q: 'What is a peel-back label?',
      a: 'A label with a hinged second layer that opens to reveal additional printed copy underneath. It roughly doubles the available area on the container itself, which keeps a product self-contained where there is no outer carton.',
    },
    {
      q: 'Does an SPF claim change the labelling?',
      a: 'In the United States it can move the product into a different regulatory category with its own panel requirements. It is the most common example in lip care of a claim changing the labelling regime, and it needs specific professional review rather than a general assumption.',
    },
    {
      q: 'When should the compliance review happen?',
      a: 'In parallel with structural sampling, and always before proof approval. Once a proof is signed off the run is manufactured against it, so a copy change afterwards means new plates and a new run for what may be a two-word amendment.',
    },
    {
      q: 'Do you check my label for compliance?',
      a: 'No. We print the file you approve. Writing and verifying the regulated content is the brand\'s responsibility, and we recommend your reviewer sees the laid-out artwork rather than only the copy in a document, since size and legibility only become apparent once it is set.',
    },
  ],
  related: ['custom-lip-balm-labels', 'lip-balm-labels', 'custom-lip-mask-boxes'],
  relatedResources: ['prepress-checklist', 'lip-product-packaging-guide', 'packaging-glossary'],
  order: 8,
};
