# Resources library

10 guides published under `/resources/`, plus the hub at
`https://lipboxes.com/resources/`. Each guide answers one question, targets one primary
keyword, and links only to the products and guides it genuinely relates to.

Groups are presentational: they organise the hub and create no additional URLs,
so there is no thin `/resources/sizing/` style page to compete with the guides.

| URL | Group | Primary keyword | Question it answers | Words | FAQs | Reviewed |
| --- | --- | --- | --- | ---: | ---: | --- |
| `/resources/choosing-packaging-inserts/` | Planning | packaging inserts | Does my product need an insert, and which type should I specify? | 1898 | 9 | 2026-07-30 |
| `/resources/cosmetic-packaging-label-requirements/` | Compliance | cosmetic packaging label requirements | What information has to appear on a cosmetic package, and where does each part go? | 2085 | 10 | 2026-07-30 |
| `/resources/custom-packaging-cost-guide/` | Planning | custom packaging cost | What am I actually paying for in a packaging quote, and which parts can I change? | 1943 | 9 | 2026-07-30 |
| `/resources/lip-balm-box-size-guide/` | Sizing | lip balm box size | What size box do I need for the lip balm tube I am already filling? | 2162 | 9 | 2026-07-30 |
| `/resources/lip-gloss-box-size-guide/` | Sizing | lip gloss box size | How tall does a lip gloss box need to be for a wand applicator tube? | 1994 | 9 | 2026-07-30 |
| `/resources/lip-product-packaging-guide/` | Planning | lip product packaging | I am launching a lip product. What packaging decisions do I need to make, and in what order? | 2193 | 9 | 2026-07-30 |
| `/resources/lipstick-box-size-guide/` | Sizing | lipstick box size | How do I measure a lipstick bullet case and work out the carton dimensions? | 1956 | 9 | 2026-07-30 |
| `/resources/packaging-dieline-guide/` | Production | packaging dieline | What is a dieline, what do the lines on it mean, and how is one made? | 2142 | 9 | 2026-07-30 |
| `/resources/packaging-glossary/` | Reference | packaging glossary | A supplier used a term I do not know. What does it mean? | 1677 | 0 | 2026-07-30 |
| `/resources/prepress-checklist/` | Production | prepress checklist | Give me a step-by-step list I can work through before I send my file to print. | 1750 | 9 | 2026-07-30 |

## Schema

Each guide carries `Organization`, `WebSite`, `WebPage`, `BreadcrumbList`,
`Article` and, where questions are published, `FAQPage`. `dateModified` on the
`Article` node is the review date recorded in the data file — never a build
timestamp, so it does not change when the site is redeployed.

## Products referenced

| Guide | Products linked at the foot |
| --- | --- |
| `choosing-packaging-inserts` | `/rigid-lipstick-boxes/`, `/lip-gloss-boxes/`, `/custom-lipstick-boxes/` |
| `cosmetic-packaging-label-requirements` | `/custom-lip-balm-labels/`, `/lip-balm-labels/`, `/custom-lip-mask-boxes/` |
| `custom-packaging-cost-guide` | `/custom-lip-care-packaging/`, `/custom-lip-balm-boxes/`, `/rigid-lipstick-boxes/` |
| `lip-balm-box-size-guide` | `/custom-lip-balm-boxes/`, `/hang-tab-lip-balm-boxes/`, `/paper-lip-balm-tubes/` |
| `lip-gloss-box-size-guide` | `/lip-gloss-boxes/`, `/holographic-lip-gloss-boxes/`, `/custom-lip-care-packaging/` |
| `lip-product-packaging-guide` | `/custom-lip-care-packaging/`, `/lip-balm-packaging/`, `/custom-lip-balm-boxes/` |
| `lipstick-box-size-guide` | `/custom-lipstick-boxes/`, `/rigid-lipstick-boxes/`, `/hang-tab-lipstick-boxes/` |
| `packaging-dieline-guide` | `/custom-lip-balm-boxes/`, `/custom-lipstick-boxes/`, `/hang-tab-lipstick-boxes/` |
| `packaging-glossary` | `/custom-lip-balm-boxes/`, `/paper-lip-balm-tubes/`, `/rigid-lipstick-boxes/` |
| `prepress-checklist` | `/custom-lipstick-boxes/`, `/holographic-lip-gloss-boxes/`, `/custom-lip-balm-labels/` |
