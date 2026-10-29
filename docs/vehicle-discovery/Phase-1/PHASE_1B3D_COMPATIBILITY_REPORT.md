# Phase 1B.3D — React Router Modernization and Framework Compatibility

Completed locally on **2026-10-29, Africa/Lagos**. **PASS for Phase 1B.3D owner review within the documented verification scope.** React Router 8.5.1 preserves the existing declarative architecture. The framework foundation is ready for a separately authorized Phase 1C design-system slice; production release remains blocked by section K. All 19 changed/new files remain unstaged and uncommitted. No staging, commit, branch change, remote synchronization or deployment was performed. Phase 1C has not begun.

## A. Starting checkpoint and Git safety

- Owner-selected branch: `modernization/phase-1b3c-tailwind`.
- Starting HEAD: `c96bdd536bdff0e50df86acf2d66e8aa9cd9e2a4`, `build: migrate Tailwind CSS to 4.3.3`.
- The owner committed the complete 11-file Tailwind checkpoint, including its report and styling tests. Initial working tree and index were clean; no conflicting unreviewed changes existed.
- Previous commits include React `92a3a6a`, Vite `fc9de8d`, and Legal TSX `ae949e3`. The accepted Phase 1B.3C report was reviewed as the baseline.
- Actual command runtime was verified as **Node 24.22.1 / npm 11.19.1**, using the existing portable Node distribution. `npx` is available. No global runtime was replaced. Installs explicitly include development dependencies because this environment inherits `NODE_ENV=production`.
- All work remains in this repository. Its existing history and production configuration are preserved.

## B. Router compatibility decision

**Proceed with a bounded declarative-mode upgrade.** The official documentation and registry identify **8.5.1** as stable; the changelog dates it 27 October 2026. [Release notes](https://reactrouter.com/changelog), [official homepage](https://reactrouter.com/).

The upgrade guide requires Node **22.22+** and React/DOM **19.2.7+**; framework mode additionally requires Vite 7+. Its removal of `react-router-dom` requires imports from `react-router`, with `react-router/dom` reserved for APIs such as the DOM RouterProvider. [Official v7 upgrade guide](https://reactrouter.com/upgrading/v7).

Installed Node 24.22.1 and React/DOM 19.3.1 satisfy those requirements. Registry metadata also requires React definitions >=19.2.0; both installed definition packages are 19.3.0. The manifest is ESM and TypeScript already uses ES2022, ESNext modules and Bundler resolution. [Router package metadata](https://registry.npmjs.org/react-router/8.5.1).

Actual application architecture:

- `BrowserRouter` wraps `App` in `main.jsx`. `Routes`/`Route` are component declarations; there is no data router, framework plugin, server entry, SSR or hydration.
- Eight page modules use `React.lazy`, with the existing Suspense compact loader, 1.4-second boot loader, AnimatePresence and pathname scroll manager.
- Routes remain `/`, `/about`, `/services`, `/gallery`, `/cars`, `/cars/:carId`, `/contact`, `/privacy`, `/terms`, `/cookies`, `/models`, `/models/:carId`, and `*`.
- The parameterized detail route reads `carId`; legacy routes replace history entries and redirect to Cars/details. Unknown paths redirect home. Unknown vehicle IDs retain the unavailable page. These are client behaviors, not server HTTP redirects/404s.
- There are no nested layout route trees, loaders/actions, `useMatches`, metadata handlers, programmatic `useNavigate`, navigation blocking, router view transitions, middleware, or Cloudflare router plugins to migrate.

The guide's latest-v7 recommendation was checked (7.18.5 is the maintained v7 tag). No applicable future-flag adoption is needed for this declarative application, so an intermediate dependency-only 7.18.5 installation was not introduced. The new behavioral tests were exercised on the original 7.18.4 first. The supported declarative BrowserRouter import remains the root package. [Declarative installation](https://reactrouter.com/start/declarative/installation).

## C. Original and selected versions

| Dependency | Original | Selected |
| --- | --- | --- |
| Direct `react-router-dom` | `^7.18.4`, installed 7.18.4 | Removed |
| `react-router` | Transitive 7.18.4 | Direct `~8.5.1`, installed 8.5.1 |
| React / React DOM | 19.3.1 | Unchanged |
| Vite / React plugin | 7.3.7 / 4.7.0 | Unchanged |
| Tailwind / Tailwind Vite plugin | 4.3.3 / 4.3.3 | Unchanged |

The patch range avoids silently adopting later Router minor releases, which may update supported Maintenance LTS Node minimums. No framework-mode or rendering migration was required.

## D. Exact dependency and import changes

- Router 8 adds `@remix-run/route-pattern 0.22.1` and `cookie-es 3.1.1`.
- Removes `react-router-dom 7.18.4`, `cookie 1.1.1`, and `set-cookie-parser 2.7.3`; updates only Router's existing version among retained lockfile package paths.
- npm reclassifies the unchanged React definitions and `csstype` as `devOptional` because Router has optional type peers. This is dependency classification, not a type-package upgrade.
- Eleven source files replace only the import specifier. Button's `To` type import also moves. Three unit-test files change only their router imports; assertions are unchanged.
- Every used export (`BrowserRouter`, `Routes`, `Route`, `Link`, `NavLink`, `Navigate`, `useLocation`, `useParams`, `StaticRouter`, and `To`) belongs to the root package. No application API requires `react-router/dom`.
- README now names React Router 8.5.1. No route definitions, component markup, styles, data, animation logic, form logic or hosting settings change.

## E. Other framework compatibility and issue classification

| Area | Finding | Classification/action |
| --- | --- | --- |
| React / DOM 19.3.1 | Versions match; DOM peer requires ^19.3.1 | Compatible; preserve |
| React types / DOM types 19.3.0 | DOM definitions accept React definitions ^19.3.0; satisfy Router | Compatible; preserve |
| TypeScript 5.9.3 / Node definitions 24.19.2 | Existing strict, no-emit Bundler configuration fits the ESM package | Compatible; preserve |
| Vite 7.3.7 / React plugin 4.7.0 | Plugin explicitly accepts Vite ^7; Node requirement is satisfied | Compatible; no unrelated plugin upgrade |
| Tailwind 4.3.3 / Vite plugin 4.3.3 | Plugin accepts Vite ^7; no obsolete Tailwind PostCSS configuration remains | Compatible; preserve |
| Framer Motion 12.38.0 | React/DOM peers accept ^19; existing AnimatePresence retained | Compatible; no upgrade authorized |
| Lucide React 1.7.0 | React peer accepts ^19 | Compatible; preserve |
| clsx 2.1.1 | No React peer dependency; currently unused by source | **C: legacy debt**; cleanup separately |
| tailwind-merge 3.5.0 | No React peer; currently unused by source | **C: legacy debt**; remove only in a later cleanup |
| Router DOM re-export removal | Unsupported package name in v8 | **A: required targeted fix**, implemented |
| Broad JS source surface | allowJs=true/checkJs=false leaves legacy JS outside strict checking | **C: legacy debt**, incremental migration later |
| Large global stylesheet / fixed boot delay | Prior Tailwind CSS growth and 1.4-second boot remain | **C: performance debt**, measure before changing |
| Route chunk error recovery | Suspense supplies loading UI, not an error boundary | **C: reliability debt**, add reviewed recovery separately |
| Lint / CI / preferences | No lint script or tracked GitHub workflow; no theme-preference or reduced-motion handling found in source | **C: remaining Phase 1 work**, not delivered here |
| Future package maintenance | Reassess supported releases and advisories regularly | **B: future maintenance**, no speculative upgrades now |
| Hosting, live routing and publication gates | Not addressed by framework compatibility | **D: release blockers**, section K |

No `ReactDOM.render`, `findDOMNode`, router view-transition API, incompatible framework configuration or dependency override was found in the reviewed source/configuration. StaticRouter in Node unit tests does not introduce application SSR. Vite's transitive PostCSS is normal processing infrastructure, not a second Tailwind processor. No additional React-dependent UI library was introduced.

## F. Cross-browser verification scope

Executable checks found Chromium available and **Firefox/WebKit unavailable**. Installed Playwright is **1.64.1**, with Chromium **156.0.8078.4** in its browser manifest. No browser download or system configuration was performed. Browser execution is Chromium, including a desktop viewport and Chromium emulation of an iPhone profile; it is not physical iOS/Safari testing.

The owner-approved policy remains Chrome/Edge 111+, Firefox 128+, Safari 16.4+ and equivalent modern mobile browsers. Exact minimum versions, branded Edge, physical mobile devices and Firefox/WebKit rendering remain unverified. Prior Phase 1B.3C's **134 screenshot pairs at four widths** remain historical evidence, not newly executed Router 8 comparisons. Real external font/image delivery is not proven by deterministic fixtures.

## G. Installation, build, types and regression results

Clean `npm ci --include=dev --no-audit` passed with **99 packages** and an unchanged SHA-256 lockfile hash. The existing esbuild install-script allowlist notice remains; no script-approval policy was weakened.

- Production build: **PASS**, Vite 7.3.7, **2,231 modules**, 15.18 seconds, no build/chunk warning.
- Strict `npm run typecheck`: **PASS**, unchanged compiler settings.
- Native Node unit tests: **17/17 PASS**.
- Native Node tooling/reporter tests: **7/7 PASS**.
- Production browser suite: **54 normal passes + two unchanged gallery expected failures = 56 expected results**, exit **0**. No unexpected failures, skips, flaky results, retries or runner errors.
- Development browser suite: **20/20 PASS**, comprising the original 14 selected workflows/module-image checks plus six new router compatibility cases, exit **0**. No skipped, unexpected, flaky or runner-error result.

| Check | Accepted Phase 1B.3C | Router 8 result |
| --- | ---: | ---: |
| Unit tests | 17 | 17 pass |
| Tooling tests | 7 | 7 pass |
| Normal production browser cases | 48 | 54 pass |
| Scoped gallery expected failures | 2 | Exactly 2 |
| Routing-delivery cases, included above | 6 | 6 pass |
| Legal cases, included above | 6 | 6 pass |
| Styling cases, included above | 6 | 6 pass |
| New router compatibility cases, included above | Not present | 6 pass |
| Development cases | 14 | 20 pass: original 14 + six new |

Production execution began `2026-10-29T22:18:41.549Z` and took **480.89 seconds**. Serial scheduling makes comparison with the prior two-worker run unsuitable as an application-speed benchmark. Browser fixture guards found no browser warning, console error, uncaught page error or unexpected external traffic. Existing Node subprocess NO_COLOR/FORCE_COLOR notices are distinct from browser-console health and were not suppressed.

Commands used, with the project's Node 24.22.1/npm 11.19.1 selected first:

```powershell
node --version
npm --version
npm ci --include=dev --no-audit
npm run build
npm run typecheck
npm run test:unit
npm run test:tooling
npx --no-install playwright test --workers=1
npm audit --include=dev
npm audit --omit=dev
npm ls --all --include=dev
git diff --check
```

The local npm cache path was supplied explicitly for installation/audits. The browser command runs after the separately recorded successful build, rather than redundantly rebuilding through `test:e2e`. One worker retains the existing 60-second test/15-second assertion timeouts, all assertions, zero retries and unchanged expected-failure classification.

Development verification used the following local evidence config. It imports the unchanged project configuration and existing module/image probe, selects the Vite development server with `NODE_ENV=development`, and writes live traces outside the watched project tree:

```powershell
npx --no-install playwright test --config output/playwright/phase-1b3d/playwright-dev.config.ts --workers=1 --grep 'direct load and refresh: /$|catalog search filters|desktop/mobile navigation|contact validation|nested query string|trailing slash route|development modules and images|router compatibility:'
```

Development execution began `2026-10-29T22:28:02.441Z`, duration **232.40 seconds**. The desktop module/image probe took **59.4 seconds**, within the original 60-second timeout but with a narrow margin; mobile took **19.7 seconds**. This probe includes module requests, image checks, navigation and a full-page screenshot. It is not an isolated startup measurement. Retain this timing risk for later test-workload/performance review; no timeout or assertion was relaxed.

Final integrity checks confirm **all 24 production artifact hashes unchanged after development testing**, and the lock hash unchanged since the clean install. `git diff --check` passes. Git's LF-to-CRLF notices describe checkout normalization, not whitespace-test failures. The complete tracked diff, two new files, semantic lock changes and import-only equivalence were reviewed. No additional source change requires retesting.

## H. Routing and styling verification

Three new scenarios run in both existing browser projects: detail/contact/legal back-forward history; history replacement for legacy and unknown redirects; and a deliberately delayed Services chunk showing the compact Suspense fallback before completing navigation. The interception matches production and development module URLs and always releases the held request.

Baseline evidence: initial Router 7 run passed four and timed out in two desktop checks. All **six passed serially** without changing assertions or timeouts. The initial failures/traces and serial result are preserved. This is disclosed baseline timing variability, not a fixed application defect or a new expected failure. All **six also pass on Router 8** in the full production suite.

The unchanged routing-delivery suite tests query values, repeated keys, trailing slashes, refresh, built-file bytes and MIME types. Existing business/legal routes, detail selection, desktop/mobile navigation, catalog filters and contact behavior retain their assertions. The six styling contracts retain focus/status colors, date-input sizing, card metrics, ten breakpoint boundaries and overflow checks. The gallery reporter still permits only the two recorded pointer-obstruction failures and rejects additional errors.

All those cases pass at both existing desktop/mobile profiles. A normalized comparison to HEAD confirms that all **14 changed source/unit-test files** are exactly the original content with the router package specifier replaced; no assertion, JSX, handler or route changed. CSS/config/data/hosting/fixture/reporter and all prior browser specs are unchanged. Styling contracts and identical emitted CSS establish the scoped checks here; no new 134-pair pixel-parity claim is made.

## I. Dependency security and integrity

Fresh `npm audit --include=dev` and `npm audit --omit=dev` both exit **0**, each reporting **zero findings at every severity**. `npm ls --all --include=dev` exits **0**, with valid installed peers. The lock/tree contains one React and one React DOM installation, both 19.3.1. There is no dependency override, old Router DOM wrapper, duplicate Tailwind major or Tailwind PostCSS processor.

The semantic lock diff contains exactly two added package paths, three removed paths and one retained package version update, as listed in D. No unrelated framework was upgraded. Full JSON audits, dependency tree and package inventories are retained locally. No force, legacy-peer-deps, override, automatic audit fix or install-script policy relaxation was used. Audit success is an advisory check, not complete application security certification.

## J. Production bundle comparison

| Measurement, bytes | Router 7 | Router 8 | Delta |
| --- | ---: | ---: | ---: |
| Output files | 24 | 24 | 0 |
| All JavaScript raw | 518,994 | 517,607 | -1,387 |
| All JavaScript gzip | 167,092 | 166,600 | -492 |
| Entry JavaScript raw | 402,554 | 401,167 | -1,387 |
| Entry JavaScript gzip | 130,186 | 129,693 | -493 |
| CSS raw | 169,715 | 169,715 | 0 |
| CSS gzip | 16,337 | 16,337 | 0 |
| Total raw | 689,837 | 688,450 | -1,387 |
| Sum of individually gzipped files | 184,131 | 183,639 | -492 |

All eight lazy page chunks remain, with unchanged raw sizes. Importing the new entry chunk changes dependent chunk hashes/filenames; this is not a route/page rewrite. The CSS, data chunk and favicon are byte-identical. No unexpected logical asset is added or removed. The one-byte difference between aggregate and entry gzip deltas comes from changed import references in other chunks.

The entry is now `assets/index-CSKjd-Q5.js`; CSS remains `assets/index-BFnCNyUp.css`. Total summed gzip falls about **0.27%**. Router's new dependency modules explain the transformed-module count increasing from 2,166 to 2,231 despite the slightly smaller emitted JavaScript. No application CPU, real-network or runtime speed improvement is claimed; build timings vary with cache and machine load. Prior Tailwind CSS payload growth is unchanged debt.

Baseline assets, package/lock, before/after hash/gzip manifests and exact lock changes are preserved in ignored `output/playwright/phase-1b3d/`. These gzip totals sum separate compressed files; they are not a single concatenated archive or a measured network waterfall.

## K. Development readiness versus release blockers

Framework readiness does not establish production release readiness. These accepted gates remain open:

1. **Commercial hosting eligibility:** the last owner-confirmed Vercel team plan is Hobby; billing was not re-inspected. Current official guidance still restricts Hobby to personal noncommercial use. A dealership advertising services needs eligible hosting before release. [Hobby policy](https://vercel.com/docs/plans/hobby), [commercial-use guidance](https://vercel.com/docs/limits/fair-use-guidelines#commercial-usage).
2. **Deployed SPA delivery:** the accepted preview report records that no eligible routing preview was deployed and production deep links failed. Those are historical observations, not a fresh production probe. Local preview success cannot mark the correction verified. `vercel.json` is unchanged.
3. **Catch-all boundaries:** `/(.*)` → `/index.html` is still broad. Missing assets, `/api/*`, reserved paths and genuine unavailable-resource status handling need host-level validation and scoped rules before an approved release.
4. **Hosting cutover:** accepted planning proposes Cloudflare subject to runtime/owner checks, with a Node-compatible fallback. No service was selected, provisioned or configured here. No separate repository or Next.js/framework migration is proposed.
5. **Gallery:** two pointer-overlay failures remain; keyboard/thumbnails work in the scoped baseline. They are not fixed by Router 8.
6. **Contact:** local validation and simulated success still send no appointment request. Delivery must be implemented and verified in a separately authorized task.
7. **Vehicle content:** the 166 generated model entries and small legacy detail set remain unverified sample/catalog content, not provider-validated listings. No catalog or price correction was made.
8. **Provider rights:** EPA commercial normalization/storage/public redistribution and vPIC redistribution clarification remain pending in the rights register. Unapproved ingestion, public redistribution, commercial publication and third-party media reuse remain disabled. No provider, Supabase or ingestion work began.
9. **Browser coverage:** Firefox/WebKit and exact minimum-browser/device checks remain a release-verification gap.

These gates do not inherently prevent local, separately authorized design-system development. They prevent treating this framework work as production or real-data publication approval. For later separately authorized Vercel work, **strongly recommend installing the absent CLI with `npm i -g vercel`** for env/log/deployment inspection; it is not installed or used in this phase.

## L. Remaining TypeScript migration inventory

Typed source already includes `Button.tsx`, `Footer.tsx`, `Loader.tsx`, `Legal.tsx`, and `formatNaira.ts`.

**18 legacy JavaScript source files remain:**

- Entry/routing: `src/main.jsx`, `src/App.jsx`.
- Components: `Navbar.jsx`, `Hero.jsx`, `CarCard.jsx`, `CatalogModelCard.jsx`.
- Pages: `Home.jsx`, `AboutPage.jsx`, `Services.jsx`, `Gallery.jsx`, `Cars.jsx`, `CarDetails.jsx`, `Contact.jsx`.
- Sections: `About.jsx`, `Showcase.jsx`, `Technology.jsx`, `Testimonials.jsx`.
- Data: `src/utils/data.js`.

The JavaScript build/theme configs are tooling files, separate from that source count. Node unit/tooling tests remain `.mjs`. No broad conversion or checkJs/strictness change was bundled with this upgrade. Future work should type shared navigation/card/form boundaries and the distinction between legacy catalog models and exact provider configurations before changing their consumers.

## M. Phase 1C handoff

**GO for owner review of a separately authorized local Phase 1C design-system slice.** No unresolved peer dependency or framework incompatibility was found in the exercised configuration. **NO-GO for production release or unapproved real-data ingestion/publication.** Cross-browser coverage, reliability/performance debt and section K gates remain open. Recommended separately authorized starting scope:

1. Inventory the existing colors, typography, spacing, focus, status and motion roles; agree a premium visual direction before global changes. Retain the dealership identity and all business routes.
2. Define a single reviewed token ownership strategy across the retained theme config and CSS theme/custom utilities. Preserve Phase 1B.3C compatibility rules until replacements have measured evidence.
3. Pilot typed button, input and card contracts in one bounded component/page slice, including loading, empty, error, focus and reduced-motion behavior. Avoid a whole-site rewrite or adding a component framework by default.
4. Establish reviewed screenshots and keyboard/contrast checks for that slice; obtain Firefox/WebKit coverage when available. Retain existing regression assertions and resolve any intentional appearance changes explicitly.
5. Track CSS/entry payload and image/font delivery with representative measurements. Do not infer runtime performance from build times, or add an API/backend solely for design work.

Current structure is seven shared components, eight page modules, four reusable home sections, two entry/routing files and two utilities/data files. No app feature directory, design-system package, API client, database or server rendering was added. The accepted future query/schema/backend architecture remains later work; React Router declarative mode does not block it.

This phase does not close every broader Phase 1 acceptance item. Lint/PR CI, theme preferences, reduced-motion behavior, the planned 320px shell check, fuller accessibility review and labeling future sample data still require their own scoped work. No lint pass or all-Phase-1 completion is claimed.

## N. Complete changed-file inventory

**17 modified tracked files:**

```text
README.md
package.json
package-lock.json
src/App.jsx
src/main.jsx
src/components/Button.tsx
src/components/CarCard.jsx
src/components/Footer.tsx
src/components/Navbar.jsx
src/pages/AboutPage.jsx
src/pages/CarDetails.jsx
src/pages/Legal.tsx
src/sections/About.jsx
src/sections/Showcase.jsx
tests/unit/button.test.mjs
tests/unit/legal-page.test.mjs
tests/unit/shared-layout.test.mjs
```

**Two new untracked files:**

```text
tests/e2e/router-compatibility.spec.ts
docs/vehicle-discovery/Phase-1/PHASE_1B3D_COMPATIBILITY_REPORT.md
```

Local build output, logs, dependency trees, bundle manifests, baseline failure evidence and the one-off development config are ignored evidence under `output/playwright/phase-1b3d/`. Active development traces/results used the temporary directory to avoid Windows/Vite watcher contention and were copied to the evidence folder only after the runner exited successfully. `final-verification-summary.json` records both completed suites and artifact/lock integrity. These artifacts are not staged or included in the commit inventory.

## O. Rollback guidance

The committed recovery point for this slice is **c96bdd536bdff0e50df86acf2d66e8aa9cd9e2a4**. It contains the accepted Tailwind/React/Vite application, source, package lock and tests. No deployment or database rollback is needed for changes that remain local.

Before any owner-directed rollback, preserve the current tracked diff and copy both untracked files separately; a Git diff alone omits them. Restore only this phase's reviewed tracked paths from that checkpoint, preserving unrelated later work, then run pinned `npm ci --include=dev`, build, typecheck and regression checks. The two new files must be retained or removed by an explicit owner decision. Do not use a destructive reset. If this phase has been committed later, a reviewed revert of that specific commit is preferable to rewriting shared history. No rollback command was executed.

## P. Manual owner handoff

Recommended Conventional Commit subject:

```text
build: upgrade React Router to v8
```

Optional body:

```text
Replace react-router-dom with react-router 8.5.1 while preserving declarative routes and lazy loading.

Add history, redirect replacement and Suspense regression coverage; record framework compatibility and remaining release gates.
```

**Owner-only commands, not executed by the agent:**

```powershell
git status --short --untracked-files=all
git branch --show-current
git log -4 --oneline
git diff --check
git diff --stat
git diff
Get-Content tests/e2e/router-compatibility.spec.ts
Get-Content docs/vehicle-discovery/Phase-1/PHASE_1B3D_COMPATIBILITY_REPORT.md

$phaseFiles = @(
  'README.md', 'package.json', 'package-lock.json',
  'src/App.jsx', 'src/main.jsx',
  'src/components/Button.tsx', 'src/components/CarCard.jsx',
  'src/components/Footer.tsx', 'src/components/Navbar.jsx',
  'src/pages/AboutPage.jsx', 'src/pages/CarDetails.jsx', 'src/pages/Legal.tsx',
  'src/sections/About.jsx', 'src/sections/Showcase.jsx',
  'tests/unit/button.test.mjs', 'tests/unit/legal-page.test.mjs',
  'tests/unit/shared-layout.test.mjs', 'tests/e2e/router-compatibility.spec.ts',
  'docs/vehicle-discovery/Phase-1/PHASE_1B3D_COMPATIBILITY_REPORT.md'
)
git add -- $phaseFiles
git diff --cached --check
git diff --cached --stat
git diff --cached
# After reviewing the staged content:
git commit -m "build: upgrade React Router to v8"
```

Do not include ignored evidence or unrelated changes in that commit. No push, PR, merge, branch switch or deployment command is included. Explicit owner review and authorization are required before Phase 1C implementation or any release operation.

Final branch remains `modernization/phase-1b3c-tailwind`; HEAD remains `c96bdd536bdff0e50df86acf2d66e8aa9cd9e2a4`; index remains empty. Exactly the 17 modified tracked files and two untracked files in N are present. No file outside this phase's Git-visible inventory was changed by the implementation, other than ignored local build/test evidence and dependency installation. No remote-write or deployment tool was invoked, so this work leaves the remote repository and production unchanged by the agent; external changes by others were not inspected or ruled out.
