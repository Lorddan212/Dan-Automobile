# Phase 1B.3C — Tailwind CSS 4 Migration and Visual Regression Protection

Completed locally on **2026-10-29, Africa/Lagos**. **PASS for owner review within the documented browser/test coverage.** Tailwind 4.3.3 uses the official Vite integration. The measured design is preserved; the earlier browser-policy blocker is resolved by explicit owner authorization. CSS payload growth and residual raster differences are disclosed below. All changes remain unstaged and uncommitted.

## A. Starting repository state

- Branch: `modernization/phase-1b3c-tailwind`, already selected by the owner.
- HEAD: `92a3a6ad9d8ee26352b7000f9b25011e596db536` — `build: upgrade React and React DOM to 19.3.1`.
- React checkpoint and Phase 1B.3A/B reports were present. Installed React/DOM 19.3.1 and Vite 7.3.7 were confirmed before implementation.
- At resumption, only this previously generated BLOCKED report was untracked. The owner explicitly authorized preserving/updating it; there were no other conflicting changes. Index was empty.
- The original report was copied to `output/playwright/phase-1b3c/2026-10-29-original-blocked-report.md` before updating it. The dated decision history is also retained in section D.
- Branch, HEAD and index remain unchanged. No Git write operation or remote synchronization occurred.

## B. Tailwind target and toolchain

| Item | Before | Final |
| --- | --- | --- |
| tailwindcss | 3.4.19 | 4.3.3, manifest `~4.3.3` |
| @tailwindcss/vite | Not installed | 4.3.3, manifest `~4.3.3` |
| React / React DOM | 19.3.1 | Unchanged |
| Vite / React plugin | 7.3.7 / 4.7.0 | Unchanged |
| Router DOM / Framer Motion / Lucide | 7.18.4 / 12.38.0 / 1.7.0 | Unchanged |
| TypeScript / React types / DOM types | 5.9.3 / 19.3.0 / 19.3.0 | Unchanged |
| Node / npm | 24.22.1 / 11.19.1 | Unchanged |

Official registry metadata identified **4.3.3** as the stable target for both Tailwind packages. The Vite plugin accepts `vite: ^5.2.0 || ^6 || ^7 || ^8`; installed Vite 7.3.7 satisfies it. Oxide's Node requirement is `>=20`, satisfied by Node 24.22.1. React is verified through the existing application's tests; no React upgrade or framework migration was needed.

## C. Official references

- [Upgrade guide](https://tailwindcss.com/docs/upgrade-guide) and [compatibility](https://tailwindcss.com/docs/compatibility).
- [Official Vite integration](https://tailwindcss.com/docs/installation/using-vite).
- [Functions/directives](https://tailwindcss.com/docs/functions-and-directives), including theme/configuration and custom utilities.
- [Source detection](https://tailwindcss.com/docs/detecting-classes-in-source-files).
- [Vite 7 build options](https://v7.vite.dev/config/build-options).
- Registry records: [Tailwind 4.3.3](https://registry.npmjs.org/tailwindcss/4.3.3), [Vite plugin 4.3.3](https://registry.npmjs.org/@tailwindcss%2fvite/4.3.3).

Target versions/peers were checked using actual registry and installed lock metadata, rather than assuming every package with a matching major is compatible.

## D. Browser finding and approved policy — dated history

**2026-10-29, original assessment:** Vite explicitly preserved `es2020 / edge88 / firefox78 / chrome87 / safari14`. This was a deliberately retained transformation baseline, not proof of complete support on those browsers. Tailwind 4's documented modern CSS requirements created an unresolved policy decision, so migration stopped and a BLOCKED report was produced. [Tailwind compatibility](https://tailwindcss.com/docs/compatibility).

**2026-10-29, explicit owner decision:** The owner approved Chrome **111+**, Edge **111+**, Firefox **128+**, Safari **16.4+**, and equivalent compatible modern mobile browsers. Safari 14, Firefox 78 and Chrome 87 are no longer mandatory requirements. The owner authorized resuming this same phase and updating the existing report. This supersedes the earlier stop condition.

Both `build.target` and `build.cssTarget` now use:

```js
["chrome111", "edge111", "firefox128", "safari16.4"]
```

The purpose is retained explicitly in Vite configuration and README. These are approved requirements and transformation settings, **not a claim that every minimum-version browser/device was independently exercised**. Transpilation, minification and prefixes do not polyfill Tailwind's unsupported CSS features on older browsers.

Actual browser execution here used Chromium **156.0.8078.4**. Firefox/WebKit executables are not installed; Safari, Firefox, branded Edge, minimum-version engines and physical mobile devices were not newly tested. Browser-specific native date-control behavior was preserved through scoped WebKit pseudo-element resets and verified in Chromium; other engines remain a release-verification limit.

## E. Styling architecture

Before: one global stylesheet, imported by `src/main.jsx`, processed by Tailwind 3 and Autoprefixer through `postcss.config.js`.

After: `react()` plus the official `tailwindcss()` Vite plugin; the same global stylesheet imports Tailwind 4. There is no second Tailwind PostCSS processor. No Sass/Less, CSS-module pipeline or existing Tailwind plugin required retention.

The existing JavaScript theme remains loaded explicitly through `@config "../tailwind.config.js"`. CSS declares `source(none)` plus sources for `index.html` and `src/`; the redundant JavaScript content list is removed. Documentation, tests and diagnostic output are not added as application class sources. Existing complete accent strings in `src/utils/data.js` remain unchanged and are detected. No new class-generation registry or safelist was introduced. [Source detection](https://tailwindcss.com/docs/detecting-classes-in-source-files).

## F. Dependency changes

- Added direct development dependency `@tailwindcss/vite ~4.3.3`.
- Updated direct `tailwindcss` to `~4.3.3`.
- Removed direct `autoprefixer` and `postcss` after confirming the sole source stylesheet has no separate processor requirement.
- Deleted the obsolete two-plugin `postcss.config.js`. Vite's normal transitive PostCSS remains; this is not duplicate Tailwind processing.
- Required new tooling includes Tailwind Node/Oxide **4.3.3** and Lightning CSS **1.32.0**. Jiti changes **1.21.7 → 2.7.0** for the new loader.
- Semantic lock comparison: **32 added paths**, **61 removed paths**, and **two version updates** (Tailwind and Jiti). Additions include optional native platform bindings; the clean Windows install contains 100 packages. Full exact path/version ledger: `output/playwright/phase-1b3c/lock-changes.json`.
- All application runtime dependency versions remain unchanged. No force, legacy-peer-deps, override, broad codemod or automatic audit fix was used.

## G. Configuration and stylesheet migration

The old three Tailwind directives are replaced with the Tailwind import, explicit configuration and source directives. Existing colors, fonts and shadow configuration are retained rather than replaced by a new design system.

Four reusable custom rules become supported `@utility` definitions. The icon utility has an internal `icon-shell-base` name plus its original component-layer wrapper, allowing contextual 32px card icons to keep overriding the shared 40px default. A separate card-accent compatibility utility preserves the actual previous gradients.

Other adjustments restore measured v3 line-height, outline, native date-input, cursor, placeholder and hover behavior. The loader gradient explicitly retains sRGB interpolation. The two card components change only their background utility class; data, exports, handlers, JSX structure and application logic are untouched. [Custom utility/configuration APIs](https://tailwindcss.com/docs/functions-and-directives).

## H. Design tokens preserved

| Existing token | Preserved value |
| --- | --- |
| Obsidian / graphite / slate | `#05070c / #0d1118 / #171d28` |
| Mist / silver | `#d7ddea / #8e98ab` |
| Gold / blue | `#c9a45c / #7dd3fc` |
| Sans / display families | Roboto, sans-serif |
| Luxury shadow | `0 30px 80px rgba(0, 0, 0, 0.45)` |
| Validation/status colors | rose-300 `#fda4af`, emerald-200 `#a7f3d0`, emerald-400 `#34d399` |

The three status colors are explicitly pinned to their previous values using `@theme`. Eight fixed v3 line-height defaults are preserved, and affected responsive text-size rules specify the previously rendered line height. Font sizes, spacing, component dimensions and responsive breakpoints are retained. Existing root `color-scheme: dark` remains; no dark-mode toggle or palette was added.

## I. Breaking-change review and scope

The [upgrade guide](https://tailwindcss.com/docs/upgrade-guide) informed the review; fixes follow actual application evidence.

| Area | Decision |
| --- | --- |
| Configuration / directives / custom composition | Explicit import/config/sources and registered reusable utilities |
| Default palette / typography | Preserve used status colors and measured line-height behavior |
| Outlines / cursors / placeholders | Preserve existing transparent 2px outlines/offset, enabled-button cursor and placeholder defaults |
| Gradients / individual transforms | Preserve actual card painting and Framer Motion hover composition |
| Native date inputs | Restore previous native edit/wrapper sizing |
| Space selectors | Top/bottom margin serialization changes; final measured box geometry remains identical |
| Radius / shadows | Larger computed full-radius value and extra transparent shadow slots; no measured shape/layout change |
| Hidden precedence / dialogs / plugins / CSS modules | No affected application use requiring a change |
| Variant/source generation | Retain existing hover behavior, complete data strings and explicit source scope |

No blanket class replacement, theme redesign, new interaction, routing rewrite or broad TypeScript conversion occurred.

## J. Reproducible visual baseline

A fresh Tailwind 3 production build was captured **before styling/dependency changes**:

- Ten routes: Home, About, Services, Cars, Mercedes vehicle Details, Gallery, Contact, Privacy, Terms and Cookies.
- Widths **375 / 768 / 1440 / 1920px**, height 1000px, device scale factor 1.
- **40 route/viewport cases** and **134 screenshots per stage**: top, relevant content region and footer; plus skip-link focus, mobile menus, form focus and button hover.
- Cached copies of the existing Roboto weights 300/400/500/700/900 are served by the test route fixture; font readiness is awaited. External photos use a deterministic SVG, so this does not test real image delivery.
- Carousel timers of 3 seconds or longer are stabilized consistently. Boot timers, RAF animations and interactions still run. Real scrolling reveals content; screenshots wait for steady states and disable CSS animations during capture. No screenshot masking was used.
- Computed records include document dimensions, typography, colors, spacing and boxes for up to 650 classed HTML elements per route/width.
- One-worker local production preview; original and final screenshots are stored separately in ignored `output/playwright/phase-1b3c/visual-before/` and `visual-after/`.

All **174 original screenshot/measurement file hashes** remain unchanged. The original BLOCKED report and Tailwind 3 bundle were also archived. One-off runners/configurations remain ignored local evidence; tracked regression coverage is described below.

## K. Final visual comparison

Both 40-case capture runs passed without browser-health failures. Comparing all **134 pairs** found:

- **Zero geometry differences** across the recorded boxes/document dimensions; a separate maximum-delta check returned exactly 0.
- **Zero differences in recorded font family, size, weight, line height or letter spacing**.
- Screenshots are not byte-identical. The largest difference above a 10-channel-value diagnostic threshold is **310 of 375,000 pixels (0.0827%)**, on the mobile About capture. That threshold summarizes differences; it is not an automatically approved golden-image limit.
- Worst-case before/after and difference images were inspected. Remaining differences occur at text/curve/color-raster edges, without a material layout or content shift.
- Of **44 distinct changed color serializations**, **42** map to identical sRGBA values. Two white-at-70% text/outline serializations differ by **one alpha level** after conversion; no RGB channel changes in that probe.
- Reference white/gold contrast on solid obsidian is unchanged at approximately **20.15:1 / 8.59:1**. These reference pairs do not establish conformance for every composited background, placeholder or interaction.

Native color serialization, full-radius clamping, transparent shadow slots and space-margin allocation differ internally. These were investigated through computed geometry, pixels and color normalization. No old screenshot was overwritten or automatically accepted. Full reports/difference images remain in the ignored evidence folder.

## L. Material differences found and resolved

| Initial observation | Compatibility resolution |
| --- | --- |
| First four probes recorded 1,181 geometry changes; headings/cards grew | Preserve fixed type-scale line heights and explicitly reset affected responsive heading/description line heights |
| Catalog icons became 40px and wrapped labels | Keep direct icon styles in the component layer with contextual 32px overrides |
| V4 began generating previously unsupported non-scale accent stops, introducing backgrounds | `bg-danauto-accent` retains the old rendered results for the existing data strings; model data is unchanged |
| Ordinary transparent outlines became absent | Preserve explicit 2px transparent outlines and 2px offsets |
| Native date field became 2px shorter, shifting the form | Revert only the affected native edit/wrapper reset; field returns to 48px in tested Chromium |
| Individual hover translation composed differently with inline motion transforms | Retain the v3 transform-based hover rule, preserving Framer Motion's previous precedence |

The second probe reduced differences to 43 entries, all from the date-control shift. After the final correction, the contact probe and complete final comparison have zero geometry changes. Initial/intermediate screenshots and comparison JSON remain under `visual-trial-1/2/3` and `comparison-trial-*.json`. Their differences were resolved; no assertions, timeout or gallery-failure categories were weakened.

## M. Installation, build, TypeScript, unit and tooling

- Clean `npm ci --include=dev --no-audit` succeeds: **100 packages**, final lockfile hash unchanged. The existing temporary npm cache and portable Node 24.22.1 were used; global Node was not changed.
- Final production build passes: Vite **7.3.7**, **2,166 modules**, **20.45 seconds**, no build/chunk-size warning.
- Strict `npm run typecheck` passes after the final test additions. Compiler configuration/strictness are unchanged.
- Final unit suite: **17/17 pass**. Tooling suite: **7/7 pass**.
- New styling contracts initially validated the existing contact design against the preserved v3 artifact. Final coverage adds native-date sizing, card icons/accents and responsive boundaries.
- npm prints the existing esbuild script-allowlist notice; no allowlist/security policy was weakened. Browser subprocesses print the inherited NO_COLOR/FORCE_COLOR notice, separate from browser console health.

The v3 baseline build took 1m31s; intermediate/final v4 builds varied. These are local observations under different cache/load conditions, not a reproducible build-speed claim.

## N. Browser, routing and development results

| Verification | Accepted prior baseline | Final result |
| --- | --- | --- |
| Ordinary production browser cases | 42 | **48**: original 42 plus six new styling cases |
| Existing scoped gallery failures | 2 | Exactly 2, unchanged |
| Routing checks, included above | 6 | 6 pass |
| Legal checks, included above | 6 | 6 pass |
| Serial development cases | 14 | 14 pass |
| Visual route/width cases | New phase coverage | 40 before + 40 after pass |

Production suite exits 0 with 50 expected results: **48 normal passes + two annotated failures**. The reporter still requires exactly the recorded gallery pointer obstruction and rejects additional errors. No skips, unexpected failures, flaky results or runner errors occurred.

The three new styling scenarios run in both existing browser projects. They cover field focus/status colors/native sizing; card typography/icon dimensions/previous accent painting; and breakpoint boundaries at 639/640, 767/768, 1023/1024, 1279/1280 and 1535/1536px. Navbar visibility, heading metrics and overflow are checked.

Production start: `2026-10-29T07:56:18.255Z`, duration **265.22s**. Development start: `2026-10-29T08:49:33.814Z`, duration **177.07s**. Development retains one worker, the original 60s timeout and the 14 existing selected workflows/module/image checks. Live traces/JSON remain outside Vite's watched workspace. The first desktop module/image case took 52.8s including its full-page screenshot; this is not an isolated startup benchmark.

No captured browser warning, console error, uncaught page error, unexpected external request or asset-loading assertion failure occurred in the successful runs. Routes, loading/lazy pages, menus, gallery keyboard/thumbnails, catalog filters, footer and simulated form behavior remain covered.

## O. Bundle/CSS output comparison

| Measurement | Tailwind 3 | Tailwind 4 | Delta |
| --- | ---: | ---: | ---: |
| Production file count | 24 | 24 | 0 |
| CSS raw bytes | 103,356 | 169,715 | +66,359 |
| CSS gzip bytes | 11,969 | 16,337 | +4,368 |
| JavaScript raw bytes | 521,629 | 518,994 | -2,635 |
| Entry JavaScript raw bytes | 405,040 | 402,554 | -2,486 |
| Entry JavaScript gzip bytes | 131,059 | 130,186 | -873 |
| Total raw bytes | 626,113 | 689,837 | +63,724 |
| Sum of individually gzipped files | 180,655 | 184,131 | +3,476 |

CSS changes from `assets/index-kgXL8nnn.css` to `assets/index-BFnCNyUp.css`. CSS grows approximately **64.2% raw / 36.5% gzip**; total summed gzip grows approximately **1.92%**. This is a disclosed payload cost, not a performance improvement.

Inspection finds **194 support blocks (28,854 bytes)** and **54 registered properties (3,502 bytes)**, plus longer variable-based declarations/rule expansions in this @apply-heavy stylesheet. No previously emitted custom selector is missing. No unexplained logical asset/page chunk was added or removed. All eight lazy pages remain; the data chunk and favicon are unchanged. The smaller JS reflects the approved newer transformation targets and changed style-class strings/import hashes, not a React/runtime package change.

All 24 final artifact hashes still match the build used for production verification after development testing. Raw/gzip/hash manifests and CSS analysis are retained locally. No Lighthouse, real-network, runtime CPU or minimum-browser performance improvement is claimed.

## P. Security and dependency integrity

| Fresh audit | Before | After |
| --- | ---: | ---: |
| Full, including development | 0 | 0 |
| Production only | 0 | 0 |
| Unique reported advisory IDs | 0 | 0 |

Audits exit 0; no new production/high-severity finding is reported. Full and targeted `npm ls --all --include=dev` checks pass with valid peers and a single Tailwind 4 core/Vite integration. No Tailwind 3 or additional Tailwind PostCSS processor remains. Clean-install lock integrity is verified. npm audit is an advisory check, not a full application security assessment.

## Q. Existing defects and release boundaries

The two gallery pointer-obstruction failures, simulated contact success, generated/unverified catalog and prior hosting/provider publication gates remain unchanged. Photo fixtures do not prove live asset availability; local SPA preview does not prove hosted routing. No provider, database, catalog, hosting/domain/alias or deployment change occurred.

Some original accent strings did not produce gradients in v3; preserving their rendered appearance is intentional here. Revisiting their design is separate work.

For later separately authorized Vercel operations, installing the absent CLI with `npm i -g vercel` is strongly recommended. It was not installed in this phase.

## R. Remaining risks and limits

- Larger CSS payload warrants review; no claim of universally faster delivery.
- Current Chromium tests/emulation do not certify Safari/Firefox/Edge minimum versions or real devices. Native controls/compositing merit browser-specific release checks.
- Small raster/alpha differences remain and are disclosed; complete byte-identical visuals are not claimed.
- Live fonts/images, every composited contrast pair, screen readers, forced-colors behavior and a full accessibility certification were not exhaustively tested.
- Local cold/startup and screenshot workload timing remains variable; passing checks do not establish a production performance benchmark.
- No application content, semantics or interaction was intentionally redesigned.

## S. Recommended next stage

Owner review/commit should precede further implementation. A separately authorized next slice can assess CSS delivery/output size using the preserved visual baseline before broader feature work. Any simplification must keep the same design contracts. **Phase 1B.3D has not begun**; APIs, database, hosting, redesign and broad TypeScript conversion remain outside this phase.

## T. Exact inventory and manual Git handoff

| State | Path |
| --- | --- |
| Modified | `README.md` — current stack and approved browser policy |
| Modified | `package.json` |
| Modified | `package-lock.json` |
| Modified | `vite.config.js` — single Tailwind plugin and JS/CSS targets |
| Modified | `tailwind.config.js` — retained theme; source scope moves to CSS |
| Modified | `src/index.css` — migration and measured compatibility rules |
| Modified | `src/components/CarCard.jsx` — background utility only |
| Modified | `src/components/CatalogModelCard.jsx` — background utility only |
| Deleted | `postcss.config.js` — obsolete Tailwind/Autoprefixer pipeline |
| Untracked, preserved/updated | `docs/vehicle-discovery/Phase-1/PHASE_1B3C_TAILWIND_REPORT.md` |
| Untracked, new | `tests/e2e/styling-contract.spec.ts` — three scenarios, two projects |

All are unstaged/uncommitted; index empty. There are no other Git-visible changes. Diagnostics, cached fonts, screenshots, runners, audit/lock ledgers and original report copies are under existing ignored `output/playwright/phase-1b3c/` or the documented temporary artifact directory. They are not proposed for staging.

Recommended Conventional Commit:

```text
build: migrate Tailwind CSS to 4.3.3

Use the official Vite integration and owner-approved modern browser targets.
Preserve measured typography, card accents, icon sizes, focus and native controls.
Add responsive styling regression checks and document visual and bundle results.
```

Verification commands, with Node 24.22.1/npm 11.19.1 selected:

```powershell
npm ci --include=dev --no-audit
npm run build
npm run typecheck
npm run test:unit
npm run test:tooling
npx --no-install playwright test
npm ls --all --include=dev
npm audit --include=dev --json
npm audit --omit=dev --json

$env:TW_VISUAL_STAGE='review-' + (Get-Date -Format 'yyyyMMdd-HHmmss')
npx --no-install playwright test --config output/playwright/phase-1b3c/visual.config.ts
node output/playwright/phase-1b3c/compare-visuals.mjs $env:TW_VISUAL_STAGE
npx --no-install playwright test --config output/playwright/phase-1b3c/playwright-dev.config.ts --workers=1 --grep 'direct load and refresh: /$|catalog search filters|desktop/mobile navigation|contact validation|nested query string|trailing slash route|development modules and images'
git diff --check
```

The one-off visual/development commands depend on ignored local evidence files; the new styling contracts are committed-source candidates in the normal suite. Before rerunning captures, use a new stage name to preserve existing evidence. The actual installs used the existing temporary npm cache; `--include=dev` is necessary because the inherited environment sets NODE_ENV=production.

Owner-only review/stage/commit commands below were **not executed by the agent**:

```powershell
git branch --show-current
git rev-parse HEAD
git log -3 --oneline
git status --short --untracked-files=all
git diff --check
git diff -- README.md package.json package-lock.json vite.config.js tailwind.config.js postcss.config.js src/index.css src/components/CarCard.jsx src/components/CatalogModelCard.jsx
Get-Content tests/e2e/styling-contract.spec.ts
Get-Content docs/vehicle-discovery/Phase-1/PHASE_1B3C_TAILWIND_REPORT.md

git add -- README.md package.json package-lock.json vite.config.js tailwind.config.js postcss.config.js src/index.css src/components/CarCard.jsx src/components/CatalogModelCard.jsx tests/e2e/styling-contract.spec.ts docs/vehicle-discovery/Phase-1/PHASE_1B3C_TAILWIND_REPORT.md
git diff --cached --check
git diff --cached --stat
git diff --cached
git commit -m "build: migrate Tailwind CSS to 4.3.3" -m "Use the official Vite integration and approved modern browser targets. Preserve measured design behavior, add styling regression checks and document visual, security and bundle verification."
git status --short
```

Inspect the staged diff before personally committing. No push, PR, merge, rebase, reset, branch operation or deployment is included or was performed.

## U. Rollback guidance

Before committing, archive this report/evidence, restore only this phase's nine tracked paths from **`92a3a6ad9d8ee26352b7000f9b25011e596db536`** (including the deleted PostCSS configuration), and archive/remove only this phase's two untracked source/report files if abandoning the change. Reinstall with `npm ci --include=dev`, rebuild and validate the React 19/Vite 7/Tailwind 3 checkpoint. Preserve the dated browser-policy decision separately when archiving.

After committing, an owner-controlled revert of this phase's commit provides a history-preserving rollback. No rollback or Git write was executed. The original application baseline/history and production deployment remain untouched.

**Stop after Phase 1B.3C for owner review. No Phase 1B.3D or deployment authorization is inferred.**
