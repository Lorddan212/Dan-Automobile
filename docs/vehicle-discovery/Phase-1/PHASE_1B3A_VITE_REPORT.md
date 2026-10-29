# Phase 1B.3A — Vite and Build Tooling Modernization

Implementation and production validation: 2026-10-24. Closeout, refreshed audits and development-server retest: 2026-10-28, Africa/Lagos. **Phase 1B.3A is complete locally for owner review.** All changes remain unstaged and uncommitted. No push, merge, PR or deployment has occurred.

## A. Starting branch and HEAD

- Branch: `modernization/phase-1b3a-vite` (already selected by the owner).
- HEAD: `ae949e33e73336201ae1af0c1ebce715c3850a45` — `refactor(types): migrate Legal page to TSX`.
- Phase 1B.2C was committed. The entry working tree and index were clean, with the earlier migration/security checkpoints preserved.
- Local `main`: `05b0ac136b9075fab0b41a4b31307f54146471ea`, unchanged.

Reviewed the Phase 1B.2A/B/C reports, prior security-remediation report, package manifest/lockfile, Vite, TypeScript, PostCSS and Tailwind configurations, Node/npm pins and regression commands. No branch or Git reference was created or switched.

## B. Existing and final dependency versions

| Package/tool | Before | Final |
| --- | --- | --- |
| Vite | 5.4.21, manifest `^5.4.10` | 7.3.7, manifest `~7.3.7` |
| `@vitejs/plugin-react` | 4.7.0, manifest `^4.3.1` | Same version and manifest range |
| esbuild | 0.21.5 | 0.28.2, required transitively by Vite |
| Node / npm | 24.22.1 / 11.19.1 | Unchanged |
| TypeScript / Node types | 5.9.3 / 24.19.2 | Unchanged |
| React / React DOM | 18.3.1 / 18.3.1 | Unchanged |
| React Router DOM / Framer Motion | 7.18.4 / 12.38.0 | Unchanged |
| Tailwind / PostCSS / Autoprefixer | 3.4.19 / 8.5.31 / 10.4.27 | Unchanged |

The Node engine range, `.nvmrc`, npm packageManager declaration, scripts and exact test/type dependency pins remain unchanged.

## C. Official compatibility evidence and target selection

The [Vite support policy](https://vite.dev/releases) currently lists Vite 8.3 for regular patches, Vite 7.3 for important/security backports and Vite 6.4 for security backports. Vite 5 is unsupported. Vite 7.3.7 is a stable, supported target that retains the current Rollup/esbuild pipeline. Vite 6 offers a shorter support tier; Vite 8 introduces the broader [Rolldown/Oxc migration](https://vite.dev/guide/migration), which is unnecessary for this bounded change.

The [Vite 7 migration guide](https://v7.vite.dev/guide/migration) requires Node 20.19+ or 22.12+; the official registry package metadata declares `^20.19.0 || >=22.12.0`, accepting the existing Node 24.22.1. Its optional Node-types peer accepts the existing 24.19.2. TypeScript compatibility is established by the unchanged strict typecheck, not inferred from Vite's transpilation alone.

The [official plugin 4.7.0 metadata](https://raw.githubusercontent.com/vitejs/vite-plugin-react/plugin-react@4.7.0/packages/plugin-react/package.json) explicitly includes `^7.0.0` in its Vite peer range. Its installed README supports React Fast Refresh from React 16.9 onward. The final upgrade therefore retains plugin 4.7.0 and React 18, avoiding an unnecessary plugin major change. A plugin 5.2.0 trial was reverted after this compatibility check; the final validation applies to plugin 4.7.0.

Vite's [TypeScript/JSX and CSS support](https://v7.vite.dev/guide/features) fits the existing JS/TSX application and PostCSS configuration. The application uses client React Router, native ESM configuration and no SSR, custom bundler plugin, Sass, runtime API or custom resolver. Existing routing behavior is verified through browser tests rather than assumed from package versions.

## D. Upgrade decisions and exact package changes

The only manifest change is Vite's range to `~7.3.7`, allowing patches within the selected supported minor. The lockfile pins the tested version exactly. No direct package was added; no override or forced audit fix was used.

The final semantic lockfile comparison records **25 existing version updates, five added package paths and zero removals**:

- Vite 5.4.21 to 7.3.7 and esbuild 0.21.5 to 0.28.2.
- Twenty-three existing `@esbuild/*` optional platform packages follow esbuild to 0.28.2.
- Three new optional esbuild platforms: `@esbuild/netbsd-arm64`, `@esbuild/openbsd-arm64` and `@esbuild/openharmony-arm64`, all 0.28.2.
- Vite-local `fdir` 6.5.0 and `picomatch` 4.0.7 are added to satisfy Vite's normal dependency ranges while retaining other locked parents.

These are build/development dependencies. Existing production dependency versions are preserved. Full exact package-path evidence is in ignored `output/playwright/phase-1b3a/lock-changes.json`.

## E. Configuration changes

`vite.config.js` retains `plugins: [react()]` and explicitly sets:

```js
build: {
  target: ["es2020", "edge88", "firefox78", "chrome87", "safari14"]
}
```

This matches the installed Vite 5 default target list captured before the upgrade. Vite 7 raises the default browser target, so the explicit list preserves the application's existing transformation baseline. It does not replace real legacy-browser testing or add polyfills.

No TypeScript, Tailwind, PostCSS, routing, hosting or `vercel.json` change was required. No CORS, allowed-host or filesystem protection was weakened. Local verification binds explicitly to loopback using the documented [server options](https://v7.vite.dev/config/server-options).

## F. Security advisories addressed

The 2026-10-24 before/after audit comparison confirmed nine advisories removed by the dependency upgrade, with no new advisory ID. The separate parser advisory metadata correction observed at closeout is explained in section G and is not counted as a tenth Vite fix:

| Dependency | Advisory removed | Individual severity |
| --- | --- | --- |
| esbuild | [GHSA-67mh-4wv8-2f99](https://github.com/advisories/GHSA-67mh-4wv8-2f99) | Moderate |
| Vite | [GHSA-4w7w-66w2-5vf9](https://github.com/advisories/GHSA-4w7w-66w2-5vf9) | Moderate |
| Vite | [GHSA-v6wh-96g9-6wx3](https://github.com/advisories/GHSA-v6wh-96g9-6wx3) | Moderate |
| Vite | [GHSA-fx2h-pf6j-xcff](https://github.com/advisories/GHSA-fx2h-pf6j-xcff) | High |
| Vite | [GHSA-698v-4r3x-3vcv](https://github.com/advisories/GHSA-698v-4r3x-3vcv) | Moderate |
| Vite | [GHSA-r825-w8mm-5pxw](https://github.com/advisories/GHSA-r825-w8mm-5pxw) | Moderate |
| Vite | [GHSA-587h-7wmj-h5pm](https://github.com/advisories/GHSA-587h-7wmj-h5pm) | High |
| Vite | [GHSA-9jrq-w75r-8gcw](https://github.com/advisories/GHSA-9jrq-w75r-8gcw) | Low |
| Vite | [GHSA-rq7h-c2jc-7f22](https://github.com/advisories/GHSA-rq7h-c2jc-7f22) | Moderate |

Inventory removal is verified by the patched dependency tree; no exploit traffic was sent. Development-server/editor exposure is distinct from the emitted static production application. The [esbuild advisory](https://github.com/evanw/esbuild/security/advisories/GHSA-67mh-4wv8-2f99) concerns its serve API.

## G. Current audits and the parser advisory metadata correction

| Audit | Before upgrade, Oct 24 | After upgrade, Oct 24 | Closeout, Oct 28 |
| --- | --- | --- | --- |
| Full affected package entries | 5: one high, four moderate | 3: moderate only | 0 |
| Full unique advisory IDs | 10 | 1 | 0 |
| Production affected packages / unique IDs | 0 / 0 | 0 / 0 | 0 / 0 |

The Oct 24 remaining [GHSA-rj75-hqrm-r3gf](https://github.com/advisories/GHSA-rj75-hqrm-r3gf) entry propagated through `postcss-selector-parser`, `postcss-nested` and Tailwind: three package entries representing one advisory. The official record was updated on Oct 26 and now lists **6.1.5 as patched**, which is the version already installed before this Vite phase. Fresh full and production-only audits on Oct 28 both exit 0 with zero findings.

This last reduction is an advisory affected-range correction recognizing the existing parser patch, not another package upgrade, withdrawal or Vite remediation. Tailwind 3 and the parser remain unchanged; no parser-major override was introduced. Current npm audits report no affected package, without implying that dependency audits establish absence of every possible vulnerability.

## H. Build, installation and strict typecheck

- Fresh pre-upgrade Vite 5 build passed: 2,165 transformed modules, 37.93 seconds.
- Final `npm ci --include=dev --no-audit` passed using the existing temporary cache; 152 packages installed. Audits were run separately. SHA-256 verification confirms the clean install did not change the final lockfile.
- `npm ls --all --include=dev --json` passed with a valid dependency tree.
- Final strict `npm run typecheck` passed with no configuration changes.
- Final Vite 7 production build passed: 2,164 transformed modules, 11.63 seconds.

Build timings are single local observations under variable machine load, not a reproducible speed benchmark. No Vite build warning or chunk-size warning occurred. npm emitted an esbuild install-script allowlist notice; its normal postinstall completed successfully and no allowlist configuration was added. Browser subprocesses emitted the existing NO_COLOR/FORCE_COLOR environment notice.

## I. Unit, tooling, browser and routing results

- Final unit tests: **17/17 pass**.
- Final tooling tests: **7/7 pass**.
- Final production-preview browser suite: **42 normal passes plus the two existing scoped gallery expected failures**, exit 0. All six routing and six legal-page checks pass. Zero skips, unexpected failures, flaky results or runner errors.
- Production browser execution: `2026-10-24T07:47:24.248Z` (08:47:24.248 Lagos), 198.68 seconds. At closeout, all 24 current built-file hashes were verified against the tested artifact, and application sources/dependency versions were confirmed unchanged.
- Development server: **14/14 checks pass with one worker**, exit 0, on Oct 28. Assertions and the existing 60-second test timeout were unchanged. Checks cover both desktop and mobile projects.
- The initial two-worker dev run on Oct 24 recorded 12 passes and two desktop navigation timeouts (one homepage refresh, one catalog navigation). Neither was a content assertion or recorded application error. The serial rerun passed those same cases and all remaining checks. This supports functionality under the tested serial conditions; the precise cause of the concurrent dev timeouts was not profiled and remains a local performance/concurrency limitation to monitor.

Existing assertions, fixtures, expected-failure guards, reporter and test scripts are unchanged. No test was weakened or failure widened.

The standard commands remain `npm run typecheck`, `npm run test:unit`, `npm run test:tooling` and `npm run test:e2e` (which includes the production build). Fresh audit commands were `npm audit --include=dev --json` and `npm audit --omit=dev --json` through the local evidence collector. The one-off development configuration and module/image test are retained only in ignored evidence. The local rerun command was:

```powershell
npx --no-install playwright test --config output/playwright/phase-1b3a/playwright-dev.config.ts --workers=1 --grep 'direct load and refresh: /$|catalog search filters|desktop/mobile navigation|contact validation|nested query string|trailing slash route|development modules and images'
```

## J. Production bundle comparison

| Measurement | Vite 5 baseline | Vite 7 final |
| --- | ---: | ---: |
| Output files | 24 | 24 |
| Total raw bytes | 554,616 | 545,977 |
| Total JavaScript raw bytes | 449,854 | 441,493 |
| CSS raw bytes | 103,634 | 103,356 |
| Sum of individually gzipped files | 158,551 | 157,227 |
| Entry JavaScript raw bytes | 326,975 | 324,904 |
| Entry JavaScript gzip bytes | 107,016 | 107,598 |

Total raw output falls 8,639 bytes (about 1.56%); the summed gzip measurement falls 1,324 bytes. The entry's gzip size increases 582 bytes despite its smaller raw size. This small tradeoff is disclosed rather than described as a universal size improvement.

The logical file/chunk inventory is unchanged, including all eight lazy page chunks, shared Button/data chunks, public favicon, CSS and HTML. There are no unexplained new chunks or production packages. Changed hashes and minified JS/CSS are expected from the newer Vite/esbuild pipeline; source and production library versions remain unchanged. Browser route/layout/asset checks verify the resulting application. No application source, style or catalog edit was used to compensate for tooling changes.

The graph reports one fewer transformed module while retaining all application page chunks. No material bundle-size regression was observed; runtime performance, Lighthouse scores and real-device timing were not benchmarked. The favicon remains unchanged, and the existing routing asset test checks served bytes/MIME against every emitted file.

## K. Application behavior verification

Production-preview coverage retains Home, About, Services, Cars, Details, Gallery, Contact and all three legal routes; direct loads and refreshes; lazy-page rendering; search/filter/empty states; valid/unknown detail records; keyboard gallery/thumbnails; appointment navigation; redirects; desktop/mobile menus; contact validation/simulated success; and asset bytes/MIME types. The existing expected-gallery-failure reporter still requires exactly the recorded pointer obstruction.

The development-server rerun verifies homepage load/refresh, catalog filters, desktop/mobile navigation and gallery, contact validation, nested query strings and trailing-slash refresh. Additional probes verify `/@vite/client`, `/@react-refresh` and the transformed Button/Legal TSX modules return JavaScript successfully. Hero and catalog images have completed loading with positive natural width under the unchanged image fixture. No uncaught page/console errors or unexpected external requests were reported by the fixtures.

Representative viewports retain desktop Chromium at 1440 x 900 and the mobile Chromium iPhone 13 profile. Production legal-page bounds/overflow checks pass in both. Development home screenshots are retained as supporting evidence; they use substituted assets and capture unscrolled content with existing in-view animations, so they are not complete visual-parity evidence. No source/CSS, link, metadata, animation or responsive behavior was intentionally altered.

Raw production and development results, summaries, package/build manifests, audit snapshots and the separate `audit-closeout.json` attribution record are under `output/playwright/phase-1b3a/`. The initial dev timeout result is preserved as `dev-browser-results-initial.json`; final dev results are stored separately. These are ignored local artifacts, not files proposed for staging.

The existing gallery pointer-interception defect and simulated contact success remain intentionally unchanged. Existing deterministic image/font fixtures verify application rendering, not live third-party asset availability or real contact delivery. Local Vite SPA fallback is not evidence that Vercel's deployed routing is corrected.

## L. Remaining compatibility and release risks

Vite 7.3 remains supported as of this assessment, but its support tier should be reviewed during future upgrades. The explicit browser target preserves transformation intent; older physical browsers are not covered by the Chromium suite. React, Router, Framer Motion, PostCSS and Tailwind major versions remain unchanged.

The pre-existing gallery/contact defects, Vercel SPA routing problem and commercial hosting restriction remain independent follow-up/release concerns. The earlier parser audit entry is no longer reported for the installed patched version, as explained in section G. No hosting or production state was changed. For later authorized Vercel operations, installing the absent CLI with `npm i -g vercel` is strongly recommended; it was not installed in this phase.

## M. Recommended Phase 1B.3B React modernization scope

After owner review and commit, assess a separate React 19 change: select verified compatible React/React DOM and matching type-package versions, check Router/Framer Motion/Lucide peers, review React 18.3 deprecation warnings and current root/effect/ref contracts, then validate the same unit/tooling/browser baselines. Keep Vite 7, Tailwind 3, provider work, routing architecture and unrelated TS migrations outside that React slice. Do not introduce React Compiler or a new rendering framework implicitly. Phase 1B.3B has not begun.

## N. Exact files and manual Git handoff

| Git state | Path |
| --- | --- |
| Modified | `package.json` — only Vite's version range |
| Modified | `package-lock.json` — required toolchain dependency changes |
| Modified | `vite.config.js` — explicit previous browser targets |
| Untracked | `docs/vehicle-discovery/Phase-1/PHASE_1B3A_VITE_REPORT.md` |

No tracked file was removed. The index remains empty. Branch and HEAD remain those in section A. Evidence/scripts/configuration for one-off checks are under existing ignored `output/playwright/phase-1b3a/`, not additional application systems or repositories.

Recommended Conventional Commit message:

```text
build: upgrade Vite to 7.3.7

Preserve existing browser targets and the React 18/Tailwind 3 stack.
Refresh required build dependencies and remove nine audited advisories.

Document clean-install, production and development regression checks
and distinguish the parser advisory metadata correction from Vite fixes.
```

Owner-only review/commit commands below were not executed by the agent:

```powershell
git branch --show-current
git log -3 --oneline
git status --short --untracked-files=all
git diff --check
git diff -- package.json package-lock.json vite.config.js
Get-Content docs/vehicle-discovery/Phase-1/PHASE_1B3A_VITE_REPORT.md

git add -- package.json package-lock.json vite.config.js docs/vehicle-discovery/Phase-1/PHASE_1B3A_VITE_REPORT.md
git diff --cached --check
git diff --cached --stat
git diff --cached
git commit -m "build: upgrade Vite to 7.3.7" -m "Preserve existing browser targets and the React 18/Tailwind 3 stack. Refresh required build dependencies, remove nine audited advisories and document production/development regression verification."
git status --short
```

## O. Rollback recommendations

Before committing, the owner can archive this report and restore only `package.json`, `package-lock.json` and `vite.config.js` from `ae949e33e73336201ae1af0c1ebce715c3850a45`, then perform `npm ci --include=dev` and rebuild. Remove only this phase's new report if desired after archiving it. Review local changes first; do not reset the repository or touch unrelated work.

After committing, an owner-controlled revert of the phase commit provides a reviewable rollback while preserving history. Restoring the older toolchain also restores its nine addressed advisories, so it is a recovery option rather than a security recommendation. No rollback, staging, commit, push, merge, remote PR or deployment was performed by the agent.
