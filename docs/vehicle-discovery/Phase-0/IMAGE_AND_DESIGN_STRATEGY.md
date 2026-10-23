# Vehicle Images, Licensing, Brand Direction and Responsive UX

**Status:** Phase 0C documentation, 23 October 2026. Five historical file-page audits and full-cohort screening are preserved in [PHASE_0B_VALIDATION_REPORT.md](PHASE_0B_VALIDATION_REPORT.md). No image files or implemented design system added.

## 1. Principle: accuracy before visual coverage

A photograph must not imply a 2024 model/trim when it actually depicts a 2018 car or a different regional generation. Model-accurate free imagery may be scarce, especially for exact trims. To avoid misleading the user, publish an approved image only at the narrowest verified match level and otherwise render a tasteful vehicle-neutral placeholder.

### Photo match taxonomy

1. **Exact configuration** — year, make, model, recognizable model generation and supported variant; mark `exact_variant` only with evidence.
2. **Model-year representative** — year/generation/make/model correct, but precise trim/engine not verified; visible label `Representative model image`.
3. **Model representative** — make/model visually correct but year uncertain; use sparingly, clearly label `Representative model image` and do not show on exact-detail hero if materially different.
4. **No safe match** — use generic placeholder with text `Vehicle image unavailable` and no misleading brand/model render.

Always preserve and display match level and photo licensing details. Do not use AI generation to imitate a real vehicle's official configuration, and do not manually collect unrelated stock photos.

## 2. Free-first sourcing workflow

**First source:** Wikimedia Commons, accessed through documented MediaWiki API/content mechanisms. Search by `make model year` with generation/visual validation. Retrieve media URL, file page, title, author, creator, attribution, license identifier, license URL, dimensions, upload and last-checked dates. MediaWiki's `imageinfo` exposes thumbnails and optional `extmetadata` (expensive; request only for selected candidates).

**License validation:** Open actual Commons file description, not just search snippets. Record author/photographer, license version/link, attribution text, source link and changes. Permit public-domain and appropriate CC BY/CC BY-SA as long as conditions are fulfilled. Do not treat CC-NC as commercially reusable or assume that a random Google/Unsplash image is an exact model match. ShareAlike requires a deliberate derivatives policy; avoid modifications if team does not wish to manage derivative licensing obligations. Not legal advice; verify each license before launch.

**Technical:** Batch selected candidates; identify API traffic with a descriptive User-Agent; honor limits, errors and 429 retry instructions; avoid a 'hot spider' that performs a live Commons search every time a user opens Explorer. Use vetted and permitted images in our own approved manifest. For copying/storing media or hotlinking, honor original license, Commons guidance and host delivery restrictions.

**Review workflow:** Candidate → verify make/model → verify generation/year → confirm rights and author → verify dimensions/usable composition → record provenance → approve publication → periodic availability/rights audit. All images failing checks are withheld, not silently replaced with similar-looking cars.

## 3. Provider alternatives

| Source | Role | Restriction and action |
|---|---|---|
| Wikimedia Commons | Initial, free vehicle photography | File-by-file licenses; author/license credit; rate policy; exact model match verification |
| CarsXE Images | Candidate paid coverage improvement | Its `license` filter only reports third-party rights labels; confirm `contextLink` before reuse. Verify permitted storage/caching |
| IMAGIN.studio | Commercial studio render upgrade | Micro-use licenses and CDN terms; no assumption of unlimited local copies or that every US configuration exists |
| Auto.dev Photos | VIN/listing image option (v2) | May represent specific sale inventory, not correct universal model gallery |
| Existing DanAuto / Unsplash images | Visual reference only | Do not transfer images as authoritative vehicle facts; reassess licenses separately |

## 4. Required image metadata

For every published asset: `id`, `source_provider`, `file_page_url`, `image_url_or_internal_asset`, `source_author`, `license_code`, `license_url`, `attribution_statement`, `verified_at`, `display_permission_status`, `match_level`, `matched_vehicle_entity_id`, `last_access_result`, `sort_order`, `is_hero`, `alt_text`.

A license change, inaccessible source, model-generation mismatch, or uncertain attribution flags asset for review and triggers fallback until reconciled.

## 5. Image UX requirements

- On result cards use consistent 4:3 or 3:2 crop and an actual responsive image component; do not stretch to fit.
- On details use an editorial hero with clean gallery, source credit accessible from every image group and descriptive alt text.
- Differentiate 'Representative image' from 'Exact configuration image' unobtrusively but legibly.
- Keep above-the-fold/LCP photo loading prioritized; defer secondary gallery photos and prevent layout shift.
- Handle 404/slow images with fallback surface; never leave broken image icon.
- Images should be decorative-supportive: users can make informed comparisons with specifications even where pictures are missing.

## 6. Brand/look and feel

**Direction:** premium automotive editorial + engineering-grade data clarity. Retain and modernize DanAuto's existing identity within one application. Preserve verified business content and useful layout ideas; review sales/service/fleet claims rather than silently deleting them. Research pages must not imply EPA records are dealer inventory. See [preservation plan](IN_PLACE_MODERNIZATION_PLAN.md).

| Token | Initial proposal | Purpose |
|---|---|---|
| `carbon` | `#0B0E13` | Dark primary background |
| `graphite` | `#19212C` | Panels, navigation, comparison header |
| `electric_blue` | `#4D92FF` | Intentional active controls / key metrics |
| `silver` | `#C6D0DA` | Supporting typography and dividers |
| `pearl` | `#F5F7FA` | Light scheme backgrounds |

These are provisional tokens to be accessibility-audited, especially blue-on-graphite and secondary text. Avoid relying on accent colors alone for filter selection or metric differences.

Typography: modern clean sans serif with strong numerals. Spatial system: consistent 4/8px scale, restrained card radii, clear sections and plenty of whitespace. Motion: brief nonblocking transitions; no mandatory intro/boot animation.

## 7. Page layout concepts (descriptions, not rendered comps)

### Home

Desktop: bold editorial hero, search input, discovery category strip, visually compelling (approved) vehicle cards, accessible data-source/US market cue. Mobile: search first; avoid huge hero leaving no content above fold.

### Explorer

Desktop: left sticky filter column, toolbar + query/active chips, sortable results grid (2–4 columns within readable container); persistent compare tray with selection count.

Mobile: top search, filter button opening accessible bottom sheet, count and sort toolbar, one-column cards at 320–479px (responsive multi-column only with sufficient width), sticky compact compare action.

### Vehicle detail

Editorial image gallery, year/make/model/option and U.S. scope, actions, quick spec summary, grouped tables with official EPA context, source details and image attribution.

### Comparison

Desktop: 2–4 columns, fixed metric header or sticky top row, grouped metric sections, highlight differences, easy replace. Mobile: horizontal column navigation or stacked compare cards with visible vehicle names and labels, no content clipping or page-level horizontal scroll.

### Favorites

Minimal saved shortlist with remove and compare actions, informative empty state explaining that saves remain on the device.

## 8. Responsive and accessibility matrix

| Width | Tests and behavior |
|---|---|
| 320–359 px | Full content visible, 1-column cards, compact labels, no viewport overflow |
| 360–599 px | Search usable one handed, filter sheet, compare selection compact |
| 600–767 px | Two columns when cards remain comfortably readable, expanded controls |
| 768–1023 px | Tablet grid, collapsible filters and robust comparison controls |
| 1024–1439 px | Persistent desktop facets, refined details layout |
| 1440–1919 px | More whitespace, three/four columns within max width |
| 1920+ px | Content constrained rather than excessively stretched, stable reading line length |

Mandatory checks: 200% zoom, device rotation, keyboard-only traversal, contrast, screen-reader announcements for sort/filter counts and comparison updates, reduced motion, long brand names, touch targets, loading-error/empty states, light and dark mode.

## 9. Imagery release gate and success metric

- 100% of **published** third-party images have recorded source/creator/license and valid reuse terms.
- Zero known incorrect car images in the audited 30-case cohort.
- All no-image cases display a good fallback, never a visually plausible incorrect car.
- Track image coverage as actual `verified_images / eligible_vehicle_pages` by year and brand; **do not mandate an invented 80–100% coverage target** for freely licensed data.
- If visual coverage is weak, communicate this limitation in product copy and keep prioritizing provenance and technical accuracy over polished but false imagery.

## 10. References

- https://commons.wikimedia.org/wiki/Commons:Reusing_content_outside_Wikimedia
- https://commons.wikimedia.org/wiki/Commons:Reusing_content_outside_Wikimedia/technical
- https://www.mediawiki.org/wiki/API:Imageinfo
- https://developer.wikimedia.org/use-content/bot-traffic/
- https://docs.carsxe.com/docs/products/vehicle-images
- https://docs.imagin.studio/api-integration/manuals/getting-started


## 11. Multi-source UI requirements (Phase 0C)

Vehicle pages may contain **Official U.S. Safety Ratings** and **Potentially Relevant Recalls** modules, but the titles, disclaimers, and state logic must accurately represent source scope:

- Safety module states: verified rating with test variant and NHTSA link; untested/not published; or no reliable mapping. Never show zero stars for missing data.
- Recall module states: potentially relevant campaigns for the year/make/model; none returned as of source lookup date; or unavailable due to source failure. A recall list is **not a VIN-specific status** and a failed request is **not** evidence of no recalls.
- Image captions distinguish exact variant, verified same model/year, or illustrative manufacturer/model photo. Require reusable license, photographer attribution, license URL, and source page.
- Avoid presenting a large list of external sources as badges with unsupported notions of trust; instead show unobtrusive per-field source text and a full Data Sources page.

## 12. Preserved image benchmark and admission gate

[Five actual file audits and original URLs](PHASE_0B_VALIDATION_REPORT.md): 2015 LEAF (MassDEP, CC BY 2.0), 2018 F150 (Mr.choppers, CC BY-SA 3.0), 2018 Outback (Bull-Doser, public-domain dedication), XV70 Camry (Alexander-93, CC BY-SA 4.0), 2024 Prius Prime XSE (Mr.choppers, CC BY-SA 3.0). File descriptions/rights were audited in Phase 0B; final rendered crop/visual admission is still required.

30 searches: 29 returned files, 17 potential representatives, five audited, **zero exact EPA-configuration photographs established**. These denominators are not interchangeable. A 2024 capture date does not establish MY2024; GT/N/sport/foreign-market, cab or generation differences can disqualify a result. No unknown image is approved by metadata alone.

License metadata includes file revision/hash where available, source capture date separately from vehicle model year, license-review date, allowed cache/derivative actions and derivative attribution. Local resize/crop must preserve required attribution and follow the applicable ShareAlike version; photo licensing does not automatically license application code. License revocation reports or rights disputes trigger review, not an unsupported blanket legal conclusion.

Existing DanAuto editorial photos can remain on business pages subject to rights review; do not repurpose them as exact configurations. Neutral owned fallback is mandatory. No download/copy occurs in Phase 0C. Optional new sources are [reviewed separately](OPEN_DATA_ENRICHMENT_REVIEW.md).
