# Location directory

20 state pages and 20 city pages, plus three
directory pages: `/locations/`, `/locations/states/` and `/locations/cities/`.

## What these pages claim, and what they do not

Every location page states plainly that there is **no office, plant, warehouse,
held stock, local staff or collection point** in that place. Nothing on any of
them asserts a local address, a local phone number, a local employee, a local
customer count, a guaranteed delivery time, same-day service, free shipping, a
local certification or a partnership with a local business. The phrases
"located in", "based in" and "near you" are not used anywhere in the directory.

Because there is no physical premises in any of these locations, **no page
carries `LocalBusiness` schema**. Each one uses `Organization`, `WebSite`,
`WebPage`, `BreadcrumbList` and `FAQPage`, which describes what the page
actually is: an informational page about supplying a market. No `Product`
schema appears on a location page either — that belongs on the product pages,
and duplicating it here would compete with them.

## Differentiation

Each page is built around one market characteristic rather than a template with
the place name substituted. Every city page carries an FAQ that states in words
how it differs from its parent state page, and no two of those questions are
phrased the same way. Similarity between any two location pages is measured in
`09-content-similarity-report.md`.

## State pages

| URL | State | Primary keyword | Market angle | Words | FAQs | Cities beneath it |
| --- | --- | --- | --- | ---: | ---: | --- |
| `/locations/states/illinois/` | Illinois (IL) | custom lip boxes in Illinois | Mass retail resets and fixture constraints | 1077 | 8 | Chicago |
| `/locations/states/ohio/` | Ohio (OH) | custom lip boxes in Ohio | Test market runs that have to scale | 1129 | 8 | Columbus |
| `/locations/states/michigan/` | Michigan (MI) | custom lip boxes in Michigan | Seasonal demand and call-off ordering | 1110 | 8 | — |
| `/locations/states/indiana/` | Indiana (IN) | custom lip boxes in Indiana | Case pack efficiency and pallet configuration | 1070 | 8 | Indianapolis |
| `/locations/states/missouri/` | Missouri (MO) | custom lip boxes in Missouri | Long shelf tenure and reorder consistency | 1062 | 8 | — |
| `/locations/states/new-york/` | New York (NY) | custom lip boxes in New York | Prestige retail specifications set by the account | 1053 | 8 | New York City |
| `/locations/states/pennsylvania/` | Pennsylvania (PA) | custom lip boxes in Pennsylvania | Private label economics and the pharmacy channel | 1060 | 8 | Philadelphia |
| `/locations/states/new-jersey/` | New Jersey (NJ) | custom lip boxes in New Jersey | Documentation, version control and formal approvals | 1035 | 8 | — |
| `/locations/states/massachusetts/` | Massachusetts (MA) | custom lip boxes in Massachusetts | Treatment and clinical positioning | 1036 | 8 | Boston |
| `/locations/states/maryland/` | Maryland (MD) | custom lip boxes in Maryland | Corporate gifting and promotional programmes | 1102 | 8 | — |
| `/locations/states/virginia/` | Virginia (VA) | custom lip boxes in Virginia | Direct-to-consumer fulfilment and shipper specification | 1078 | 8 | — |
| `/locations/states/texas/` | Texas (TX) | custom lip boxes in Texas | Distribution across multiple metros and wholesale case planning | 1282 | 8 | Houston, San Antonio, Dallas, Austin, Fort Worth |
| `/locations/states/florida/` | Florida (FL) | custom lip boxes in Florida | Resort and tourism retail, and humidity in storage | 1239 | 8 | Jacksonville |
| `/locations/states/georgia/` | Georgia (GA) | custom lip boxes in Georgia | Independent gloss brands and short launch cycles | 1245 | 8 | — |
| `/locations/states/north-carolina/` | North Carolina (NC) | custom lip boxes in North Carolina | Contract manufacturing and automated line requirements | 1249 | 8 | Charlotte |
| `/locations/states/tennessee/` | Tennessee (TN) | custom lip boxes in Tennessee | Merchandise and date-driven production | 1244 | 8 | Nashville |
| `/locations/states/california/` | California (CA) | custom lip boxes in California | Indie brand density and the speed of shade-range launches | 1637 | 9 | Los Angeles, San Diego |
| `/locations/states/washington/` | Washington (WA) | custom lip boxes in Washington | Material scrutiny and defensible disposal claims | 1369 | 8 | Seattle |
| `/locations/states/arizona/` | Arizona (AZ) | custom lip boxes in Arizona | Heat, storage conditions and sun-care formats | 1356 | 8 | Phoenix |
| `/locations/states/colorado/` | Colorado (CO) | custom lip boxes in Colorado | Outdoor and apothecary positioning in specialty retail | 1265 | 8 | Denver |

## City pages

| URL | City | Primary keyword | Market angle | Words | FAQs | Parent state page |
| --- | --- | --- | --- | ---: | ---: | --- |
| `/locations/cities/new-york-city/` | New York City, NY | custom lip boxes in New York City | Small-format retail and narrow fixture space | 1112 | 8 | `/locations/states/new-york/` |
| `/locations/cities/los-angeles/` | Los Angeles, CA | custom lip boxes in Los Angeles | Seeding kits and press packaging alongside retail | 1084 | 8 | `/locations/states/california/` |
| `/locations/cities/chicago/` | Chicago, IL | custom lip boxes in Chicago | Buyer meetings and physical sample requirements | 1060 | 8 | `/locations/states/illinois/` |
| `/locations/cities/houston/` | Houston, TX | custom lip boxes in Houston | Deep shade ranges and salon retail | 1115 | 8 | `/locations/states/texas/` |
| `/locations/cities/phoenix/` | Phoenix, AZ | custom lip boxes in Phoenix | Convenience and pharmacy peg retail | 1130 | 8 | `/locations/states/arizona/` |
| `/locations/cities/philadelphia/` | Philadelphia, PA | custom lip boxes in Philadelphia | The transition from maker market to wholesale | 1094 | 8 | `/locations/states/pennsylvania/` |
| `/locations/cities/san-antonio/` | San Antonio, TX | custom lip boxes in San Antonio | Bilingual panels and the space they require | 1129 | 8 | `/locations/states/texas/` |
| `/locations/cities/san-diego/` | San Diego, CA | custom lip boxes in San Diego | Sun care formats and SPF panel requirements | 1106 | 8 | `/locations/states/california/` |
| `/locations/cities/dallas/` | Dallas, TX | custom lip boxes in Dallas | Wholesale showroom selling and line sheet requirements | 1098 | 8 | `/locations/states/texas/` |
| `/locations/cities/austin/` | Austin, TX | custom lip boxes in Austin | Direct-to-consumer economics and repeat shipping | 1105 | 8 | `/locations/states/texas/` |
| `/locations/cities/jacksonville/` | Jacksonville, FL | custom lip boxes in Jacksonville | Freight consolidation and ordering frequency | 1020 | 8 | `/locations/states/florida/` |
| `/locations/cities/fort-worth/` | Fort Worth, TX | custom lip boxes in Fort Worth | Short fixed selling windows and stock planning | 1101 | 8 | `/locations/states/texas/` |
| `/locations/cities/columbus/` | Columbus, OH | custom lip boxes in Columbus | Retail pilots and keeping results readable | 1028 | 8 | `/locations/states/ohio/` |
| `/locations/cities/charlotte/` | Charlotte, NC | custom lip boxes in Charlotte | Corporate gifting and perceived value | 1044 | 8 | `/locations/states/north-carolina/` |
| `/locations/cities/indianapolis/` | Indianapolis, IN | custom lip boxes in Indianapolis | Third-party logistics intake requirements | 1024 | 8 | `/locations/states/indiana/` |
| `/locations/cities/seattle/` | Seattle, WA | custom lip boxes in Seattle | Refill and reuse programme packaging | 1033 | 8 | `/locations/states/washington/` |
| `/locations/cities/denver/` | Denver, CO | custom lip boxes in Denver | Outdoor specialty retail and durability assessment | 1103 | 8 | `/locations/states/colorado/` |
| `/locations/cities/washington-dc/` | Washington, D.C., DC | custom lip boxes in Washington, D.C. | Museum and institutional retail standards | 978 | 8 | — (no state page) |
| `/locations/cities/nashville/` | Nashville, TN | custom lip boxes in Nashville | Visitor purchases that travel home | 1057 | 8 | `/locations/states/tennessee/` |
| `/locations/cities/boston/` | Boston, MA | custom lip boxes in Boston | Student market price sensitivity and academic seasonality | 1062 | 8 | `/locations/states/massachusetts/` |

## Quote form

Every location page renders the same `ShortQuoteForm` component posting to the
same `/api/quote/` endpoint used by the product pages. No second mail handler
was written. Alongside the existing fields it sends four hidden values: the page
URL, the page title, the location name and a submission timestamp. The location
name is validated server-side against this published list before it reaches the
subject line, so a crafted request cannot put arbitrary text in an email header.

## Products linked per market

| Location | Products surfaced |
| --- | --- |
| `/locations/cities/new-york-city/` | `/custom-lipstick-boxes/`, `/lip-gloss-boxes/`, `/rigid-lipstick-boxes/` |
| `/locations/cities/los-angeles/` | `/rigid-lipstick-boxes/`, `/holographic-lip-gloss-boxes/`, `/custom-lipstick-boxes/` |
| `/locations/cities/chicago/` | `/custom-lip-care-packaging/`, `/hang-tab-lip-balm-boxes/`, `/custom-lip-balm-boxes/` |
| `/locations/cities/houston/` | `/custom-lipstick-boxes/`, `/lipstick-boxes/`, `/lip-gloss-boxes/` |
| `/locations/cities/phoenix/` | `/hang-tab-lip-balm-boxes/`, `/hang-tab-lipstick-boxes/`, `/custom-lip-balm-boxes/` |
| `/locations/cities/philadelphia/` | `/cardboard-lip-balm-tubes/`, `/lip-balm-labels/`, `/custom-lip-balm-boxes/` |
| `/locations/cities/san-antonio/` | `/custom-lip-balm-boxes/`, `/custom-lip-balm-labels/`, `/lip-balm-packaging/` |
| `/locations/cities/san-diego/` | `/custom-lip-balm-boxes/`, `/hang-tab-lip-balm-boxes/`, `/paper-lip-balm-tubes/` |
| `/locations/cities/dallas/` | `/custom-lip-care-packaging/`, `/lipstick-boxes/`, `/custom-lip-balm-boxes/` |
| `/locations/cities/austin/` | `/lip-balm-packaging/`, `/custom-lip-mask-boxes/`, `/custom-lip-balm-boxes/` |
| `/locations/cities/jacksonville/` | `/custom-lip-balm-boxes/`, `/lip-balm-packaging/`, `/custom-lip-balm-labels/` |
| `/locations/cities/fort-worth/` | `/custom-lip-balm-labels/`, `/custom-lip-balm-boxes/`, `/lip-balm-labels/` |
| `/locations/cities/columbus/` | `/custom-lip-balm-boxes/`, `/hang-tab-lip-balm-boxes/`, `/custom-lipstick-boxes/` |
| `/locations/cities/charlotte/` | `/rigid-lipstick-boxes/`, `/lip-balm-packaging/`, `/custom-lipstick-boxes/` |
| `/locations/cities/indianapolis/` | `/custom-lip-care-packaging/`, `/lip-balm-packaging/`, `/custom-lip-balm-boxes/` |
| `/locations/cities/seattle/` | `/cardboard-lip-balm-tubes/`, `/paper-lip-balm-tubes/`, `/lip-balm-packaging/` |
| `/locations/cities/denver/` | `/cardboard-lip-balm-tubes/`, `/hang-tab-lip-balm-boxes/`, `/custom-lip-balm-labels/` |
| `/locations/cities/washington-dc/` | `/rigid-lipstick-boxes/`, `/custom-lip-balm-boxes/`, `/lip-balm-packaging/` |
| `/locations/cities/nashville/` | `/custom-lip-balm-boxes/`, `/custom-lip-balm-labels/`, `/lip-balm-packaging/` |
| `/locations/cities/boston/` | `/custom-lip-balm-boxes/`, `/lip-gloss-boxes/`, `/custom-lip-balm-labels/` |
| `/locations/states/illinois/` | `/hang-tab-lip-balm-boxes/`, `/hang-tab-lipstick-boxes/`, `/custom-lip-care-packaging/` |
| `/locations/states/ohio/` | `/custom-lip-balm-boxes/`, `/custom-lipstick-boxes/`, `/custom-lip-care-packaging/` |
| `/locations/states/michigan/` | `/custom-lip-balm-boxes/`, `/paper-lip-balm-tubes/`, `/hang-tab-lip-balm-boxes/` |
| `/locations/states/indiana/` | `/custom-lip-care-packaging/`, `/custom-lip-balm-boxes/`, `/lip-balm-packaging/` |
| `/locations/states/missouri/` | `/custom-lip-balm-boxes/`, `/hang-tab-lip-balm-boxes/`, `/custom-lip-balm-labels/` |
| `/locations/states/new-york/` | `/rigid-lipstick-boxes/`, `/custom-lipstick-boxes/`, `/custom-lip-care-packaging/` |
| `/locations/states/pennsylvania/` | `/hang-tab-lip-balm-boxes/`, `/custom-lip-care-packaging/`, `/custom-lip-balm-boxes/` |
| `/locations/states/new-jersey/` | `/custom-lip-care-packaging/`, `/custom-lip-mask-boxes/`, `/custom-lipstick-boxes/` |
| `/locations/states/massachusetts/` | `/custom-lip-mask-boxes/`, `/custom-lip-balm-boxes/`, `/lip-balm-packaging/` |
| `/locations/states/maryland/` | `/custom-lip-balm-labels/`, `/custom-lip-balm-boxes/`, `/lip-balm-packaging/` |
| `/locations/states/virginia/` | `/custom-lip-mask-boxes/`, `/lip-balm-packaging/`, `/custom-lip-balm-boxes/` |
| `/locations/states/texas/` | `/custom-lip-care-packaging/`, `/custom-lipstick-boxes/`, `/hang-tab-lip-balm-boxes/` |
| `/locations/states/florida/` | `/lip-gloss-boxes/`, `/holographic-lip-gloss-boxes/`, `/custom-lip-balm-labels/` |
| `/locations/states/georgia/` | `/lip-gloss-boxes/`, `/holographic-lip-gloss-boxes/`, `/custom-lipstick-boxes/` |
| `/locations/states/north-carolina/` | `/custom-lip-care-packaging/`, `/custom-lip-balm-boxes/`, `/custom-lip-mask-boxes/` |
| `/locations/states/tennessee/` | `/custom-lip-balm-boxes/`, `/custom-lip-balm-labels/`, `/lip-balm-packaging/` |
| `/locations/states/california/` | `/custom-lipstick-boxes/`, `/holographic-lip-gloss-boxes/`, `/custom-lip-care-packaging/` |
| `/locations/states/washington/` | `/paper-lip-balm-tubes/`, `/cardboard-lip-balm-tubes/`, `/custom-lip-balm-boxes/` |
| `/locations/states/arizona/` | `/custom-lip-balm-boxes/`, `/hang-tab-lip-balm-boxes/`, `/custom-lip-balm-labels/` |
| `/locations/states/colorado/` | `/cardboard-lip-balm-tubes/`, `/custom-lip-balm-boxes/`, `/lip-balm-labels/` |
