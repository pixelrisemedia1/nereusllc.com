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

## Verified audit notes — 2026-11-27
- [x] Inspected source and copied homepages; both expose About, Products and Contact sections, commodity cards, company copy and inquiry email links.
- [x] Confirmed the source uses six Base44-hosted images (hero, warehouse, plywood, aluminum, bronze, copper) and the copy has six local image candidates.
- [ ] Compare each of the six source images pixel-visually with its local counterpart and confirm crop, dimensions, focus, loading, and alt text in the deployed copy.
- [ ] Finish full page-content, mobile-layout, link, legal-content, and independent asset/runtime checks.

### Nereus image verification detail
- [x] Source homepage audit captured six Base44-hosted image roles: port hero, warehouse, plywood, aluminum, bronze and copper. The repository contains six locally hosted candidate files for those roles.
- [ ] Visually compare every source/local pair at desktop and mobile sizes; verify exact crop/focal point, resolution, alt text and no Base44 requests in the deployed copy.

## Repository-level checks
- [x] Inspected the repository file tree and confirmed the root homepage file and deployment workflow path.
- [x] Compared local asset filenames against references in the root homepage HTML.
- [x] Scanned the root homepage HTML for Base44, Supabase, and Unsplash URL references: none found in `index.html`.
- [ ] Scan every repository file, document, metadata field and deployed network request for any remaining third-party/Base44 runtime or media dependency.
- [ ] Confirm all listed local assets are source-matched and used in the appropriate page; unused files are not removed until their role is understood.
- [ ] Verify the latest deployment for this checklist commit and smoke-test every route and asset after deployment.

## Nereus LLC source inventory (checked 2026-11-27)
- [x] Confirmed public source is a single-page layout with top/about/products/contact anchors; six images cover the port hero, warehouse, plywood, aluminum, bronze and copper.
- [x] Confirmed direct email links are the only visible contact actions; no video or document-download element appeared in the homepage media inventory.
- [ ] Compare all source copy, card details, images, spacing and mobile behavior; verify whether source has any additional public route beyond the one-page anchors.
