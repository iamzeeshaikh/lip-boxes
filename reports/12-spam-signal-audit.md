# Spam-signal audit

Generated from `dist/client`. 96 indexable pages checked against the patterns search engines penalise: keyword stuffing, thin content, doorway duplication, hidden text, link stuffing and auto-generation tells.

## Thresholds

| Signal | Warn | Fail |
| --- | --- | --- |
| Primary keyword density | 2% | 3% |
| Body word count | under 500 | under 300 |
| Sentences shared with another page | 25% | 40% |
| Internal links per 100 words | 8 | — |
| Exact-match commercial anchor repeats | 8 | any |

## Result

No hard failures.

**7 warning(s)** — worth reading, not blocking:

- /blog/ — 359 body words
- Prose anchor "request a sample" -> /sample-kit/ repeated on 15 pages
- Prose anchor "" -> /custom-lip-balm-boxes/ repeated on 12 pages
- Guide pages — heading pattern "· this page" appears on 10 of 10 pages
- Product pages — heading pattern "· this page" appears on 15 of 15 pages
- Product pages — heading pattern "· · · · specification" appears on 8 of 15 pages
- Product pages — heading pattern "· · · ·: common questions" appears on 8 of 15 pages

## By page family

| Family | Pages | Avg body words | Avg keyword density | Avg shared sentences | Avg links/100 words |
| --- | ---: | ---: | ---: | ---: | ---: |
| Blog | 8 | 784 | 0.00% | 4.7% | 1.2 |
| City | 20 | 989 | 1.08% | 3.9% | 1.2 |
| Guide | 10 | 1875 | 0.95% | 4.6% | 0.6 |
| Location hub | 3 | 797 | 0.00% | 0.0% | 5.0 |
| Product | 15 | 2603 | 0.90% | 7.4% | 0.5 |
| State | 20 | 1086 | 0.97% | 3.4% | 1.3 |
| Static | 20 | 912 | 0.00% | 2.5% | 1.3 |

## Every page

| URL | Family | Body words | Primary keyword | Times used | Density | Shared prose | Shared incl. cards | Links/100 words |
| --- | --- | ---: | --- | ---: | ---: | ---: | ---: | ---: |
| / | Static | 772 | — | 0 | 0.00% | 4% | 30% | 3.9 |
| /about/ | Static | 731 | — | 0 | 0.00% | 0% | 8% | 0.5 |
| /artwork-guidelines/ | Static | 1589 | — | 0 | 0.00% | 5% | 9% | 0.3 |
| /blog/ | Static | 359 | — | 0 | 0.00% | 0% | 25% | 5.3 |
| /blog/how-packaging-quantity-affects-unit-pricing/ | Blog | 801 | — | 0 | 0.00% | 0% | 11% | 1.1 |
| /blog/how-to-choose-packaging-for-a-lip-gloss-line/ | Blog | 883 | — | 0 | 0.00% | 0% | 10% | 1.1 |
| /blog/how-to-prepare-artwork-for-custom-lip-boxes/ | Blog | 867 | — | 0 | 0.00% | 11% | 18% | 1.0 |
| /blog/lip-balm-box-materials-compared/ | Blog | 863 | — | 0 | 0.00% | 0% | 11% | 1.0 |
| /blog/lipstick-packaging-sizes-and-structural-options/ | Blog | 719 | — | 0 | 0.00% | 19% | 29% | 1.3 |
| /blog/packaging-inserts-for-lipstick-and-lip-gloss-products/ | Blog | 647 | — | 0 | 0.00% | 0% | 13% | 1.4 |
| /blog/paper-lip-balm-tubes-and-their-packaging-requirements/ | Blog | 739 | — | 0 | 0.00% | 0% | 11% | 1.2 |
| /blog/printing-methods-for-cosmetic-packaging/ | Blog | 755 | — | 0 | 0.00% | 7% | 18% | 1.2 |
| /box-styles/ | Static | 1100 | — | 0 | 0.00% | 2% | 9% | 0.4 |
| /cardboard-lip-balm-tubes/ | Product | 2315 | cardboard lip balm tubes | 6 | 1.04% | 7% | 10% | 0.6 |
| /contact/ | Static | 548 | — | 0 | 0.00% | 4% | 13% | 1.3 |
| /custom-lip-balm-boxes/ | Product | 3232 | custom lip balm boxes | 6 | 0.74% | 6% | 8% | 0.5 |
| /custom-lip-balm-labels/ | Product | 2684 | custom lip balm labels | 6 | 0.89% | 9% | 12% | 0.4 |
| /custom-lip-care-packaging/ | Product | 2600 | custom lip care packaging | 6 | 0.92% | 7% | 10% | 0.5 |
| /custom-lip-mask-boxes/ | Product | 2633 | custom lip mask boxes | 6 | 0.91% | 6% | 9% | 0.5 |
| /custom-lipstick-boxes/ | Product | 2593 | custom lipstick boxes | 6 | 0.69% | 8% | 10% | 0.5 |
| /custom-packaging/ | Static | 902 | — | 0 | 0.00% | 2% | 9% | 0.6 |
| /faqs/ | Static | 1399 | — | 0 | 0.00% | 7% | 8% | 0.2 |
| /finishes/ | Static | 1080 | — | 0 | 0.00% | 9% | 14% | 0.5 |
| /hang-tab-lip-balm-boxes/ | Product | 2618 | hang tab lip balm boxes | 6 | 1.15% | 6% | 9% | 0.5 |
| /hang-tab-lipstick-boxes/ | Product | 2670 | hang tab lipstick boxes | 6 | 0.90% | 6% | 9% | 0.5 |
| /holographic-lip-gloss-boxes/ | Product | 2568 | holographic lip gloss boxes | 6 | 0.93% | 7% | 10% | 0.5 |
| /how-to-order/ | Static | 798 | — | 0 | 0.00% | 0% | 7% | 0.5 |
| /lip-balm-labels/ | Product | 2391 | lip balm labels | 7 | 0.88% | 10% | 13% | 0.5 |
| /lip-balm-packaging/ | Product | 2348 | lip balm packaging | 9 | 1.15% | 8% | 12% | 0.6 |
| /lip-gloss-boxes/ | Product | 2611 | lip gloss boxes | 7 | 0.80% | 6% | 9% | 0.5 |
| /lipstick-boxes/ | Product | 2339 | lipstick boxes | 11 | 0.94% | 14% | 16% | 0.6 |
| /locations/ | Location hub | 960 | — | 0 | 0.00% | 0% | 9% | 5.2 |
| /locations/cities/ | Location hub | 698 | — | 0 | 0.00% | 0% | 9% | 3.7 |
| /locations/cities/austin/ | City | 1020 | custom lip boxes in Austin | 2 | 0.98% | 4% | 4% | 1.5 |
| /locations/cities/boston/ | City | 980 | custom lip boxes in Boston | 2 | 1.02% | 5% | 2% | 1.1 |
| /locations/cities/charlotte/ | City | 959 | custom lip boxes in Charlotte | 2 | 1.04% | 5% | 5% | 1.1 |
| /locations/cities/chicago/ | City | 979 | custom lip boxes in Chicago | 2 | 1.02% | 2% | 2% | 1.1 |
| /locations/cities/columbus/ | City | 942 | custom lip boxes in Columbus | 2 | 1.06% | 5% | 5% | 1.2 |
| /locations/cities/dallas/ | City | 1016 | custom lip boxes in Dallas | 2 | 0.98% | 7% | 5% | 1.5 |
| /locations/cities/denver/ | City | 1016 | custom lip boxes in Denver | 2 | 0.98% | 3% | 2% | 1.1 |
| /locations/cities/fort-worth/ | City | 1014 | custom lip boxes in Fort Worth | 2 | 1.18% | 2% | 2% | 1.5 |
| /locations/cities/houston/ | City | 1029 | custom lip boxes in Houston | 2 | 0.97% | 5% | 4% | 1.5 |
| /locations/cities/indianapolis/ | City | 941 | custom lip boxes in Indianapolis | 2 | 1.06% | 2% | 2% | 1.2 |
| /locations/cities/jacksonville/ | City | 933 | custom lip boxes in Jacksonville | 2 | 1.07% | 5% | 2% | 1.1 |
| /locations/cities/los-angeles/ | City | 998 | custom lip boxes in Los Angeles | 2 | 1.20% | 2% | 2% | 1.2 |
| /locations/cities/nashville/ | City | 970 | custom lip boxes in Nashville | 2 | 1.03% | 3% | 2% | 1.1 |
| /locations/cities/new-york-city/ | City | 1025 | custom lip boxes in New York City | 2 | 1.37% | 2% | 2% | 1.1 |
| /locations/cities/philadelphia/ | City | 1008 | custom lip boxes in Philadelphia | 2 | 0.99% | 5% | 2% | 1.1 |
| /locations/cities/phoenix/ | City | 1045 | custom lip boxes in Phoenix | 2 | 0.96% | 4% | 4% | 1.1 |
| /locations/cities/san-antonio/ | City | 1043 | custom lip boxes in San Antonio | 2 | 1.15% | 4% | 4% | 1.4 |
| /locations/cities/san-diego/ | City | 1020 | custom lip boxes in San Diego | 2 | 1.18% | 5% | 5% | 1.2 |
| /locations/cities/seattle/ | City | 948 | custom lip boxes in Seattle | 2 | 1.05% | 5% | 5% | 1.2 |
| /locations/cities/washington-dc/ | City | 891 | custom lip boxes in Washington, D.C. | 2 | 1.35% | 3% | 3% | 1.0 |
| /locations/states/ | Location hub | 733 | — | 0 | 0.00% | 0% | 10% | 6.0 |
| /locations/states/arizona/ | State | 1254 | custom lip boxes in Arizona | 2 | 0.80% | 2% | 2% | 1.0 |
| /locations/states/california/ | State | 1535 | custom lip boxes in California | 2 | 0.65% | 3% | 3% | 1.0 |
| /locations/states/colorado/ | State | 1165 | custom lip boxes in Colorado | 2 | 0.86% | 4% | 4% | 1.1 |
| /locations/states/florida/ | State | 1137 | custom lip boxes in Florida | 2 | 0.88% | 3% | 2% | 1.3 |
| /locations/states/georgia/ | State | 1146 | custom lip boxes in Georgia | 2 | 0.87% | 2% | 2% | 1.3 |
| /locations/states/illinois/ | State | 978 | custom lip boxes in Illinois | 2 | 1.02% | 5% | 4% | 1.4 |
| /locations/states/indiana/ | State | 972 | custom lip boxes in Indiana | 2 | 1.03% | 5% | 5% | 1.4 |
| /locations/states/maryland/ | State | 1003 | custom lip boxes in Maryland | 2 | 1.00% | 5% | 5% | 1.5 |
| /locations/states/massachusetts/ | State | 937 | custom lip boxes in Massachusetts | 2 | 1.07% | 6% | 5% | 1.4 |
| /locations/states/michigan/ | State | 1012 | custom lip boxes in Michigan | 2 | 0.99% | 3% | 2% | 1.3 |
| /locations/states/missouri/ | State | 973 | custom lip boxes in Missouri | 2 | 1.03% | 3% | 3% | 1.3 |
| /locations/states/new-jersey/ | State | 936 | custom lip boxes in New Jersey | 2 | 1.28% | 3% | 3% | 1.3 |
| /locations/states/new-york/ | State | 952 | custom lip boxes in New York | 2 | 1.26% | 3% | 3% | 1.4 |
| /locations/states/north-carolina/ | State | 1149 | custom lip boxes in North Carolina | 2 | 1.04% | 2% | 2% | 1.4 |
| /locations/states/ohio/ | State | 1038 | custom lip boxes in Ohio | 2 | 0.96% | 3% | 2% | 1.3 |
| /locations/states/pennsylvania/ | State | 960 | custom lip boxes in Pennsylvania | 2 | 1.04% | 3% | 2% | 1.4 |
| /locations/states/tennessee/ | State | 1146 | custom lip boxes in Tennessee | 2 | 0.87% | 2% | 2% | 1.4 |
| /locations/states/texas/ | State | 1181 | custom lip boxes in Texas | 2 | 0.85% | 6% | 6% | 1.7 |
| /locations/states/virginia/ | State | 979 | custom lip boxes in Virginia | 2 | 1.02% | 5% | 5% | 1.5 |
| /locations/states/washington/ | State | 1269 | custom lip boxes in Washington | 2 | 0.79% | 2% | 2% | 0.9 |
| /materials/ | Static | 1131 | — | 0 | 0.00% | 0% | 8% | 0.4 |
| /paper-lip-balm-tubes/ | Product | 2769 | paper lip balm tubes | 6 | 0.87% | 6% | 9% | 0.5 |
| /printing-options/ | Static | 1046 | — | 0 | 0.00% | 5% | 12% | 0.7 |
| /privacy-policy/ | Static | 1184 | — | 0 | 0.00% | 1% | 6% | 0.2 |
| /products/ | Static | 683 | — | 0 | 0.00% | 0% | 26% | 5.6 |
| /request-a-quote/ | Static | 232 | — | 0 | 0.00% | 8% | 8% | 0.4 |
| /resources/ | Static | 657 | — | 0 | 0.00% | 0% | 9% | 3.3 |
| /resources/choosing-packaging-inserts/ | Guide | 1796 | packaging inserts | 6 | 0.67% | 5% | 5% | 0.6 |
| /resources/cosmetic-packaging-label-requirements/ | Guide | 1980 | cosmetic packaging label requirements | 6 | 1.21% | 4% | 4% | 0.6 |
| /resources/custom-packaging-cost-guide/ | Guide | 1832 | custom packaging cost | 6 | 0.98% | 4% | 3% | 0.5 |
| /resources/lip-balm-box-size-guide/ | Guide | 2055 | lip balm box size | 8 | 1.56% | 3% | 2% | 0.5 |
| /resources/lip-gloss-box-size-guide/ | Guide | 1886 | lip gloss box size | 6 | 1.27% | 5% | 3% | 0.6 |
| /resources/lip-product-packaging-guide/ | Guide | 2086 | lip product packaging | 6 | 0.86% | 3% | 3% | 0.5 |
| /resources/lipstick-box-size-guide/ | Guide | 1851 | lipstick box size | 6 | 0.97% | 4% | 2% | 0.6 |
| /resources/packaging-dieline-guide/ | Guide | 2032 | packaging dieline | 6 | 0.59% | 3% | 3% | 0.5 |
| /resources/packaging-glossary/ | Guide | 1580 | packaging glossary | 5 | 0.63% | 8% | 7% | 0.9 |
| /resources/prepress-checklist/ | Guide | 1647 | prepress checklist | 6 | 0.73% | 7% | 7% | 0.7 |
| /rigid-lipstick-boxes/ | Product | 2667 | rigid lipstick boxes | 6 | 0.67% | 6% | 9% | 0.5 |
| /sample-kit/ | Static | 931 | — | 0 | 0.00% | 0% | 4% | 0.6 |
| /shipping-information/ | Static | 901 | — | 0 | 0.00% | 0% | 6% | 0.6 |
| /terms-and-conditions/ | Static | 1338 | — | 0 | 0.00% | 1% | 5% | 0.4 |
| /turnaround-time/ | Static | 866 | — | 0 | 0.00% | 0% | 7% | 0.5 |

## Anchors in running prose

Card titles, breadcrumbs and contents lists are excluded here. A card whose title is the product name is how every catalogue works; an exact-match keyword anchor dropped into prose across many pages is the pattern that reads as a link scheme.

| Anchor text | Target | Pages | Exact keyword match |
| --- | --- | ---: | --- |
| request a sample | /sample-kit/ | 15 | no |
|  | /custom-lip-balm-boxes/ | 12 | no |
| texas tx distribution across multiple metros and wholesale case planning | /locations/states/texas/ | 6 | no |
| georgia ga independent gloss brands and short launch cycles | /locations/states/georgia/ | 6 | no |
| north carolina nc contract manufacturing and automated line requirements | /locations/states/north-carolina/ | 6 | no |
| tennessee tn merchandise and date-driven production | /locations/states/tennessee/ | 6 | no |
| virginia va direct-to-consumer fulfilment and shipper specification | /locations/states/virginia/ | 6 | no |
| maryland md corporate gifting and promotional programmes | /locations/states/maryland/ | 6 | no |
| florida fl resort and tourism retail, and humidity in storage | /locations/states/florida/ | 6 | no |
| artwork guidelines | /artwork-guidelines/ | 5 | no |
|  | /cardboard-lip-balm-tubes/ | 5 | no |
|  | /custom-lipstick-boxes/ | 5 | no |
| materials page | /materials/ | 4 | no |
|  | /hang-tab-lip-balm-boxes/ | 4 | no |
|  | /rigid-lipstick-boxes/ | 4 | no |
|  | /custom-lip-care-packaging/ | 4 | no |
| ohio oh test market runs that have to scale | /locations/states/ohio/ | 4 | no |
| michigan mi seasonal demand and call-off ordering | /locations/states/michigan/ | 4 | no |
| indiana in case pack efficiency and pallet configuration | /locations/states/indiana/ | 4 | no |
| missouri mo long shelf tenure and reorder consistency | /locations/states/missouri/ | 4 | no |
| illinois il mass retail resets and fixture constraints | /locations/states/illinois/ | 4 | no |
| custom packaging cost guide what am i actually paying for in a packaging quote, and which parts can i change? | /resources/custom-packaging-cost-guide/ | 4 | no |
| packaging glossary a supplier used a term i do not know. what does it mean? | /resources/packaging-glossary/ | 4 | no |
| choosing packaging inserts does my product need an insert, and which type should i specify? | /resources/choosing-packaging-inserts/ | 4 | no |
| packaging dieline guide what is a dieline, what do the lines on it mean, and how is one made? | /resources/packaging-dieline-guide/ | 4 | no |

## Card and listing anchors, for context

These are navigational. They are listed so the numbers above are not read in isolation.

| Anchor text | Target | Pages |
| --- | --- | ---: |
|  | /custom-lip-balm-boxes/ | 46 |
| custom lip balm boxes | /custom-lip-balm-boxes/ | 45 |
| see sample options | /sample-kit/ | 44 |
| request a quote | /request-a-quote/ | 30 |
|  | /custom-lipstick-boxes/ | 27 |
| custom lipstick boxes | /custom-lipstick-boxes/ | 27 |
|  | /custom-lip-care-packaging/ | 25 |
| custom lip care packaging | /custom-lip-care-packaging/ | 25 |
|  | /hang-tab-lip-balm-boxes/ | 21 |
|  | /lip-gloss-boxes/ | 20 |
| hang tab lip balm boxes | /hang-tab-lip-balm-boxes/ | 20 |
| directory all city pages twenty us markets, each written around one buying pattern | /locations/cities/ | 20 |
| lip gloss boxes | /lip-gloss-boxes/ | 19 |
|  | /rigid-lipstick-boxes/ | 19 |
|  | /custom-lip-balm-labels/ | 19 |
| custom lip balm labels | /custom-lip-balm-labels/ | 19 |
| rigid lipstick boxes | /rigid-lipstick-boxes/ | 18 |
|  | /lip-balm-packaging/ | 18 |
|  | /paper-lip-balm-tubes/ | 17 |
| lip balm packaging | /lip-balm-packaging/ | 17 |

