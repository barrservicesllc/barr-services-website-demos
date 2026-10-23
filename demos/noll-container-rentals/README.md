# Noll Container Rentals — Website Demo

**Status:** Design/demo only. Not an official Noll Pallet & Lumber website and not connected to a booking system.

## Preview
Check out `demo/noll-container-rentals` and open `demos/noll-container-rentals/index.html` in a browser. No build, package installation, or server is required. Keep `editorial.css` and the `assets/` directory beside the HTML. The operations concept is linked in the footer.

This is a draft-branch preview. The existing GitHub Pages URL may show the default branch, so it should not be shared as this revision until the branch is actually deployed.

## Photographic design revision
- Deep green, warm cream, and amber palette, editorial typography, split photographic hero, container-yard panorama, and responsive delivery section.
- Two locally bundled, optimized WebP photographs derived from licensed Unsplash originals. Company names/logos and lettering are masked. Photo captions explicitly distinguish stock imagery from Noll inventory or facilities. See [ASSETS.md](ASSETS.md) for sources, license, and editing details.
- Working size buttons populate the quote form; mobile navigation, native expandable FAQs, keyboard focus styles, and a skip link are included.
- Phone, email, and business hours are visible editable placeholders. Pricing and availability remain subject to confirmation. The form only displays a local request preview.
- Existing operations concept and future workflow roadmap are retained.

## Browser verification for this revision
Verified in headless Chromium at widths 1440, 1024, 768, 390, and 320 pixels: all local photos load, no horizontal page overflow, and no JavaScript page errors. Desktop and mobile full-page screenshots were visually reviewed. Exercised all four size buttons, mobile menu open/close, FAQ expansion, required form fields, and quote preview. HTML-looking form input remains plain text. Form preview sends no request, and the page makes no external network requests. Existing operations concept loads successfully. These checks cover the static demo; there is no production booking backend.

## What this demo includes
- Responsive customer-facing landing page for portable steel storage container rentals.
- Customer types: residential, construction, farms, warehouses, manufacturers, retail, and other uses.
- Container size guide (10 ft, 20 ft, 40 ft, high-cube) without asserting actual on-hand inventory.
- Sourcing-to-order messaging for additional sizes/units, subject to confirmation.
- Regional delivery positioning based in Leesport with a planning target up to 250 miles; no guaranteed coverage or flat-rate promise.
- Quote request fields for customer/contact, type, size, quantity, term, ZIP, target date, use, and site-access details.
- Demo form preview. It intentionally does not send, persist, or transmit personal information.
- Responsive mobile navigation and accessible form labels/status messaging.

## Confirm before public launch
1. Approval for brand name and use of Noll company identity.
2. Approved phone, email, physical/mailing address, and business hours.
3. Actual rental terms, deposits, damage policy, taxes, cancellation rules, and price publication policy.
4. Actual size/condition inventory and sourcing lead times.
5. Delivery/pickup equipment, coverage, fees, access restrictions, and service promises.
6. Insurance, terms of service, privacy notice, accessibility, and photo/license review.
7. Approved lead destination and a tested quote handoff.
8. Permission before naming or showing any customer, including Walmart. This demo makes no customer endorsements.

## Suggested production architecture (phased)
### Phase 1 — Lead capture
- Keep this static website and connect the quote form to an approved endpoint (business email/CRM/form service).
- Add spam protection, server-side validation, consent/privacy copy, and confirmation/notification handling.
- Track UTM parameters and lead source; do not store sensitive customer details in public client-side code.

### Phase 2 — Lead CRM
- Lead states: New → Contacted → Qualified → Quote Requested → Quote Sent → Won/Lost → Scheduled → Delivered → Pickup Due → Closed.
- Capture container size, quantity, rental term, ZIP, customer type, expected delivery date, lead source, next action, and reason lost.
- Keep customer data behind authenticated access; implement audit trail and role-based access.

### Phase 3 — Inventory & sourcing
- Track owned, available, reserved, rented, maintenance/hold, and sold units by container ID, size, condition, yard location, and estimated ready date.
- Track sourced-to-order requests separately from confirmed stock. Never imply availability until confirmed.
- Model acquisition cost, prep/repair cost, lead time, and supplier quote.

### Phase 4 — Dispatch: owned fleet vs outside carrier
- For each delivery/pickup, compare total internal cost (round-trip mileage, driver time, fuel, maintenance, equipment, overhead, repositioning) against carrier quote + fees + coordination.
- Require equipment suitability, insurance/qualification checks, confirmed site access, delivery/pickup windows, and margin floor before booking.
- Store separate rental, delivery, pickup, surcharge, tax, deposit, and refund line items.
- Use distance as a planning signal, not as a substitute for route-specific carrier pricing.

### Phase 5 — Marketing & analytics
- Search landing pages by use case and verified service area.
- Track inquiry → qualified lead → quote → booked rental, cost per qualified lead, cost per booked rental, average rental duration, utilization, contribution margin, and source-level ROI.
- Start with local search and direct commercial outreach; scale paid search only after conversion and delivery economics are known.

## Commercial model (illustrative only)
Rental contribution should be calculated as:
`Rental revenue + delivery revenue - container acquisition/financing allocation - prep/maintenance - delivery/pickup - payment/administration - insurance/overhead`

For each lead, compare owned delivery cost and third-party carrier cost before committing to a delivered quote. All public pricing should be manager-approved and based on real operating data.

## Verification notes
This is a static HTML/CSS/JavaScript prototype. The quote form only renders a local preview in the page; it does not submit to a backend. No prices, contact details, fleet counts, customer endorsements, or guaranteed delivery claims are asserted as facts.
