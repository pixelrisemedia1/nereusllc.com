# Nereus LLC — Completion Checklist

Source: https://nereusllc.com
Repository: pixelrisemedia1/nereusllc.com
Status: IN PROGRESS — unchecked items are not verified complete.
Rule: Check an item only after comparing against the source or testing the public deployment and recording evidence in the commit/issue/notes.

## 1. Routes and source pages
- [ ] Home
- [ ] OAuth consent / authorization page (confirm source use)
- [ ] Extract all public company, material, product, contact, legal and document routes from source

## 2. Images, video, documents and other media
- [ ] assets/hero.webp — match source hero subject, crop, dimensions and overlay
- [ ] assets/plywood.webp — map to source material section and verify exact crop
- [ ] assets/aluminium.webp — verify correct material and page placement
- [ ] assets/bronze.webp — verify correct material and page placement
- [ ] assets/copper.webp — verify correct material and page placement
- [ ] assets/warehouse.webp — match source warehouse image and crop
- [ ] Inventory source logos, product variants, people, maps, icons, video/posters, certificates and brochures; compare against all six current local images

## 3. Site-specific content and functionality
- [ ] Extract the source sitemap and build each real route instead of assuming Home and OAuth are the only routes
- [ ] Match material pages/sections for plywood, aluminium, bronze and copper, including exact names, claims, specifications and inquiry links
- [ ] Recreate company profile, trading/sourcing details, contact information, phone/email/map/social links and legal pages
- [ ] Verify every source image against its local counterpart and identify missing asset variants
- [ ] Implement any quote, account, product inquiry or document-download flow only as present on source
- [ ] Confirm whether OAuth consent is actually used publicly; do not expose a dead login or placeholder

## Shared production acceptance checks
- [ ] Verify source route inventory against the live source and archived export; record date and evidence for each route.
- [ ] Compare each page at matching desktop, tablet and mobile viewports; record unresolved visual differences.
- [ ] Audit every image, logo, icon, video, poster, caption, document and embedded asset; verify local/independent URL, dimensions, crop, alt text and successful public loading.
- [ ] Confirm no Base44 media URLs, SDK/runtime, API, auth, storage, form or database dependency remains in the copied site or its public requests.
- [ ] Verify every navigation destination, CTA, form, menu, carousel, modal, filter and document link; no dead controls or fake success states.
- [ ] Verify accurate title/description/social metadata, favicon, headings, canonical URL plan, robots/sitemap when appropriate and not-found behavior.
- [ ] Check keyboard use, focus visibility, contrast, labels, alt text, reduced-motion, mobile touch targets and responsive reflow.
- [ ] Check spelling, dates, claims, addresses, phone numbers, email addresses, legal content and document versions against approved source material.
- [ ] Check browser console, failed network requests, broken links, 404s, image loading and performance on desktop/mobile.
- [ ] Verify GitHub Actions deployment succeeds; open the live deployed copy in a fresh session and directly load/refresh every route.
- [ ] Record final verification date, deployed commit, public URL, and any remaining limitation. Custom domain/DNS is intentionally deferred until requested.
