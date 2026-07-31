# Outstanding items

Two lists: real business details the site is waiting on, and claims that were
deliberately left off because they could not be verified.

---

## A. Business details required from the owner

Every item below is currently `null` or absent in `src/data/site.ts`. Components
check for `null` and hide the related UI, so nothing displays as a placeholder,
an empty field or a fake value. Fill any of these in and it appears automatically
across the header, footer, contact page and `Organization` schema.

| Detail | Where it is set | What appears once supplied |
| --- | --- | --- |
| **Phone number** | `site.phone` and `site.phoneDisplay` | Header contact link, footer, contact page card, product page contact line, `Organization.contactPoint.telephone` |
| **WhatsApp number** | `site.whatsapp` | Footer link and contact page card |
| **Postal address** | `site.address` | Contact page and `Organization.address` |
| **Registered company details** | Contact and Terms pages (marked as pending in the copy) | Company name, number and registered office |
| **Social profile URLs** | `site.social` | Footer links and `Organization.sameAs` |
| **Confirmed support hours** | `site.supportHours` | Currently reads "Monday to Friday, 9:00 AM to 6:00 PM Eastern Time" — change if that is wrong |
| **`info@lipboxes.com` mailbox** | Live email, not code | Needed before the branded From address can be verified as a Gmail send-as alias |

### Also worth confirming before launch

- **Payment terms** — Terms section 7 says a deposit is normally required. Adjust
  if your actual terms differ.
- **Delivered quantity variance** — Terms section 6 says any variance is stated on
  the quote. If you work to a standard percentage, name it.
- **Sample pricing and lead time** — the sample kit page says both are confirmed in
  writing on request. If you have fixed figures, they can be published.
- **Recycled content percentages** — the materials page says these are confirmed
  per stock at quoting stage rather than claimed generally.

---

## B. Claims deliberately omitted

Each of these is standard on competitor packaging sites. None appears here,
because none could be substantiated from the material supplied. Each is trivial
to add once you have evidence.

| Omitted claim | Why | Where it would go |
| --- | --- | --- |
| **Years in business / "since 20XX"** | No founding date supplied | About page |
| **Customer count** ("2,000+ brands served") | Unverifiable | Homepage, About |
| **Client logo wall** | No permission or client list supplied | Homepage |
| **Star ratings and review counts** | No genuine review dataset exists. `AggregateRating` and `Review` schema are withheld entirely, and no star UI is rendered | Product pages |
| **Testimonials** | None supplied | Product pages, homepage |
| **Certifications** (FSC, ISO, SEDEX, G7) | None evidenced. No badge is displayed and no certification is asserted in schema | Footer, materials page |
| **Awards** | None supplied | Footer |
| **Named staff** | None supplied. Blog posts are attributed to the organisation rather than an invented author | About, blog bylines |
| **Production capacity** ("1M boxes per day") | Unverifiable | About |
| **Fixed minimum order quantity** | Genuinely depends on process and finishing; the FAQs explain this instead of naming a number | Product pages, FAQs |
| **Fixed turnaround days** ("8–10 business days") | Depends on specification and on customer approval speed. The turnaround page explains the variables and commits to a written window per quote | Turnaround page |
| **Free shipping / free samples / free design** | Not confirmed as offered | Multiple pages |
| **Guaranteed delivery dates** | Not offered, so not claimed | Shipping page |
| **Specific shipping rates or transit times** | Not confirmed. `OfferShippingDetails` names the destination country and links to the shipping page, but asserts no rate and no delivery window | Product schema, shipping page |
| **A return window in days** | Custom goods are not returnable for change of mind, so `MerchantReturnPolicy` truthfully states `MerchantReturnNotPermitted` rather than inventing a period | Product schema, terms |
| **SKUs, GTINs, MPNs** | Made-to-order goods have no catalogue identifiers. The audit fails the build if any appear | Product schema |
| **`priceValidUntil`** | No genuine expiry date exists | Offer schema |
| **A physical address or map** | Not confirmed | Contact page |
| **`LocalBusiness` schema** | Requires a genuine physical location represented on the page. `Organization` is used instead | Sitewide |
| **Local offices, plants, warehouses or staff** | None exist. The forty location pages state this explicitly rather than implying a local presence, and none uses "located in", "based in" or "near you" | Location pages |

### The one price that *is* stated

`$0.30 per piece` appears on every product page as a **starting** unit price for
qualifying large-volume orders, in the exact wording requested, alongside an
explanation that it is not a fixed price for every quantity. The same figure is
the `Offer.price`, and the audit fails if a product page carries the Offer without
the visible statement backing it.

---

## C. Location pages

Forty were published after this report was first written: twenty state pages and
twenty city pages under `/locations/`. They were built to the constraints below,
which are the ones that make the difference between a useful market page and a
name-swapped one.

**What each page does contain:** a single market characteristic it is written
around, three or four content blocks in an order that differs from its
neighbours, eight questions unique to it, a set of related products chosen for
that market, and a short quote form that posts to the existing endpoint.

**What none of them contains:** a local office, plant, warehouse, employee,
phone number, customer count, guaranteed delivery time, same-day service, free
shipping, local certification or partnership with a local business. Every page
states in plain words that packaging is made to order and shipped nationwide,
and that there is no local stock or collection point.

**Schema:** `Organization`, `WebSite`, `WebPage`, `BreadcrumbList` and
`FAQPage`. No `LocalBusiness`, because there is no physical location to
represent. No `Product`, because that belongs on the product pages.

**The honest expectation**, repeated from `07-duplicate-intent-report.md`:
location pages without a physical presence are weaker than pages backed by a
real address. Some of these forty may not be indexed. The plan if that happens
is to consolidate down to the markets that earn traffic, not to add more.

**Still outstanding for this family:** if a genuine fulfilment partner, regional
warehouse or physical location is established in any of these markets, that page
can then say so — and only then does `LocalBusiness` schema become appropriate
for it.
