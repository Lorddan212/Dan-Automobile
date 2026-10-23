# DanAuto Phase 1A implementation and verification

Date: 2026-10-23. Status: local foundation and closeout verified. Phase 1B has not started. The implementation evidence below records the original handoff; the final closeout assessment updates Git state, security findings and verification results.

The original application is recoverable, the 14 accepted planning documents are committed locally, and TypeScript and browser regression tooling are added. No application source, appearance, routes, runtime dependency versions, or deployment configuration changed. No push, deployment, provider integration, backend, database, migration, or ingestion occurred.

## Baseline and Git protection

| Item | Verified value |
| --- | --- |
| Original branch | `main` |
| Original commit; unchanged local `main` | `05b0ac136b9075fab0b41a4b31307f54146471ea` |
| Remote, unchanged | `https://github.com/Lorddan212/Dan-Automobile.git` |
| Annotated local tag | `danauto-app-baseline-2026-10-23`, targeting the original commit |
| Current local branch | `modernization/phase-1a-foundation`, created from the original commit |
| Original documentation checkpoint | `79beae7cb4ef5134297d88a6361fbe286c11d73f` |
| Checkpoint subject | `docs: preserve accepted Phase 0 planning baseline` |
| Exact planning directory | `docs/vehicle-discovery/Phase-0/` |

The checkpoint contains exactly 14 Markdown documents, 1,533 inserted lines, and no application/tooling changes. The tag is annotated, and its dereferenced target equals `main`. No refs were pushed by the implementation agent. This establishes recoverable local isolation; it does not configure remote branch protection. The existing production integrations and their settings were left untouched. A future push to a production-connected branch must remain separately authorized.

The 14 newly tracked files under `docs/vehicle-discovery/Phase-0/` are:

```text
API_PROVIDER_EVALUATION.md
CODEX_PHASE_0_HANDOFF.md
DATA_AND_APPLICATION_ARCHITECTURE.md
FREE_MULTI_API_STRATEGY.md
HOSTING_ASSESSMENT.md
IMAGE_AND_DESIGN_STRATEGY.md
IN_PLACE_MODERNIZATION_PLAN.md
OPEN_DATA_ENRICHMENT_REVIEW.md
PHASE_0B_VALIDATION_REPORT.md
PRD.md
PROVIDER_INQUIRY_DRAFTS.md
PROVIDER_RIGHTS_REGISTER.md
README.md
ROADMAP_AND_ACCEPTANCE.md
```

At the original agent handoff, `.codex/environments/environment.toml` was pre-existing, untracked and unstaged. Its inspected content was generated workspace configuration with an empty setup script; no secret was observed there. `.vscode/settings.json` remained ignored. The agent staged no environment file, local configuration, generated build, browser binary, report artifact or secret; tooling/report changes were then uncommitted. The later user-created commit and current closeout are recorded below.

## Verified recovery backup

External backup directory:

```text
C:\Users\HP\Desktop\DanAuto-Recovery\phase-1a-20261023
```

| Artifact | SHA-256 |
| --- | --- |
| `danauto-baseline-source-and-docs.zip` | `5414E1E5C9F4B5EB64AFB812F65A4F24511D3531387233F9C5AF5F38002CA6CC` |
| `danauto-history.bundle` | `7D12BB0B6AF1D166FF7F681A4843B96FE81E9E96AF200885D75FAB1F1DBE12D4` |

`CHECKSUMS.json` records those hashes. `payload/BACKUP_MANIFEST.json` records per-file hashes for 49 files: 33 original tracked files, all 14 accepted documents, and the two relevant local workspace configuration files. Dependencies, builds, browser caches and other unnecessary generated artifacts were excluded.

Recovery was exercised in the external `restore/` directory: clone the bundle, overlay the archive, verify the recovered HEAD, compare every manifest hash, install the locked baseline dependencies and build. All 49 restored files matched; a final recheck again found zero mismatches. Both archive checksums were reverified. `git bundle verify` confirmed complete original history. `git fsck --full` passed; its dangling tool-managed tree notice is not repository corruption.

The archive and bundle intentionally preserve the pre-tooling baseline. The bundle predates the new local tag, branch and documentation commit; the archive separately preserves the accepted documents. They are not a backup of the uncommitted Phase 1A tooling. Neither original backup was overwritten. Recovery should continue in a fresh isolated directory; do not reset or overwrite a dirty working tree. Production rollback was neither needed nor performed.

## Exact tooling changes

| File | Change |
| --- | --- |
| `package.json` | Two scripts, five exact development pins, Node engine range and npm version declaration |
| `package-lock.json` | Locked new tooling and Node engine metadata; no existing package version changed |
| `.gitignore` | Ignore `output/playwright/` reports, traces and screenshots |
| `.nvmrc` | New exact Node version `24.22.1` |
| `tsconfig.json` | New incremental TypeScript configuration |
| `playwright.config.ts` | New local production-preview regression runner |
| `tests/e2e/fixtures.ts` | New external-asset isolation and browser-error checks |
| `tests/e2e/legacy-routes.spec.ts` | New route and behavior checks, including an explicitly recorded baseline defect |
| `docs/vehicle-discovery/Phase-1/PHASE_1A_IMPLEMENTATION_REPORT.md` | This report |

Pinned direct development additions:

| Package | Version |
| --- | --- |
| `@playwright/test` | `1.64.1` |
| `typescript` | `5.9.3` |
| `@types/node` | `24.19.2` |
| `@types/react` | `18.3.31` |
| `@types/react-dom` | `18.3.7` |

The lock adds ten package entries including transitive tooling dependencies. Every pre-existing package version remains identical. React / React DOM remain `18.3.1`, Vite `5.4.21`, Tailwind `3.4.19`, React Router DOM `7.14.0`, Framer Motion `12.38.0`, and the React Vite plugin `4.7.0`.

TypeScript uses `allowJs: true`, `checkJs: false`, `strict: true`, `noEmit: true`, bundler module resolution and React JSX handling. Existing `.jsx` files are preserved; this establishes checking for new TypeScript and the test/configuration surface, not a completed type audit of legacy JavaScript.

Validation used portable Node `24.22.1` with npm `11.19.1`; global installations were not replaced. The official Node Windows archive was checked against its published SHA-256 (`d2046d28c2c3dcd211ac5145c0bf30e2047ef9dfb306693c8c6e2eccd8b95fa5`). `.nvmrc` selects the exact version; `engines` allows that version through Node 24, and `packageManager` records npm. These declarations do not change hosting settings or guarantee a host's exact patch version.

## Commands and actual verification results

Commands below assume the selected Node/npm are on `PATH`. The managed machine originally supplied `NODE_ENV=production`, so `--include=dev` is necessary for tooling installation.

| Check / command | Result |
| --- | --- |
| Original branch, HEAD, status, remote, tracked/untracked/ignored/staged inspection | Baseline confirmed; only the accepted docs and local `.codex` file were initially untracked |
| `git bundle create <external-path> --all`; `git bundle verify <external-path>` | Original history archived and verified |
| Isolated clone, archive overlay, SHA-256 manifest comparison; `git fsck --full` | Recovery passed, 49/49 files matched |
| Recovered original: `npm ci --include=dev --no-fund`; `npm run build` | Baseline clean install and build passed before tooling changes |
| Annotated `git tag`, `git switch -c`, explicit staging of the 14 docs, staged-diff review and documentation commit | Completed locally after successful baseline recovery/build |
| `npm install --save-dev --save-exact --include=dev --ignore-scripts --no-fund --cache <task-cache> <the five package@version pins above>` | Installed the pinned tooling |
| `npm install --package-lock-only --include=dev --ignore-scripts --no-audit --no-fund --cache <task-cache>` | Synchronized engine metadata in the lock |
| `npm ci --include=dev --ignore-scripts --no-audit --no-fund --cache <task-cache>` | Clean Phase 1A install passed: 150 installed packages on Windows |
| `npm run build` | Passed with unchanged Vite 5; final E2E command also rebuilt successfully |
| `npm run typecheck` | Passed, including after the final test edits |
| `node node_modules/@playwright/test/cli.js install chromium` | Installed and validated Chromium/headless shell revision 1248, browser `156.0.8078.4`, plus required helpers; browser garbage collection disabled to preserve other cached revisions |
| `npm run test:e2e` | Final exit 0: 30 passing checks and 2 reproduced expected failures, no skipped/unexpected/flaky checks or runner errors |
| `npm audit --include=dev --json --cache <task-cache>` | Completed; exit 1 reports the existing findings detailed below |
| Source SHA-256 and baseline Git diff checks | All 23 source files unchanged; public assets, entry HTML, bundler/style/deployment configuration also unchanged |
| Build-output SHA-256 comparison with recovered baseline | All 24 generated files matched byte for byte |
| `git diff --check`; new tooling-file whitespace/newline checks; status/index inspection | Passed; expected unstaged tooling and untracked new files only, with an empty index |

The initial recovered install without `--include=dev` omitted Vite because of the inherited production environment; the corrected clean install and baseline build passed before proceeding. An initial workspace install hit npm-cache `EPERM`; the authorized retry used a dedicated temporary cache. Sandbox Vite directory access and browser installation were blocked/stalled; approved execution outside that restriction succeeded without changing application configuration. A restricted recovery recheck also encountered Windows ownership protection; the same read-only check passed under the backup owner's execution context. No global Git trust exception was added.

The first browser run had 26 passes and four failures: two desktop reload checks exceeded the initial 30-second test budget, and gallery pointer interaction was obstructed at both widths. The final harness uses a 60-second test budget and DOM-content readiness plus application assertions on direct loads/reloads. The gallery defect was isolated rather than fixed or bypassed with forced pointer clicks. The final suite ran 32 cases in about 5.9 minutes. Playwright's console summarized `32 passed`; its JSON distinguishes 30 normal passes from two expected failures. A supplemental recovered-lock audit was cancelled after stalling and is not counted as completed verification.

Existing build warnings remain: Browserslist data is seven months old. npm reports existing security findings. The test runner also emits the harmless inherited `NO_COLOR` / `FORCE_COLOR` warning. Dependency install scripts were disabled for the new clean-install verification; the Windows optional esbuild binary still built successfully. No automatic audit fixes, browsers-data updates or application upgrades were applied.

## Browser coverage and retained defects

Both desktop Chromium (1440 by 900) and mobile Chromium (iPhone 13 device emulation) cover:

- Direct loading and refreshing `/`, `/about`, `/services`, `/cars`, `/gallery`, `/contact`, `/privacy`, `/terms` and `/cookies`, including shared branding/footer.
- The existing 166-card catalog, Camry search, no-results state, electric fuel filter, price filter, Tesla brand filter and reset behavior.
- A valid legacy detail record, next/previous keyboard actions, thumbnail selection, and appointment navigation.
- Unknown vehicle IDs, `/models` and `/models/:carId` redirects, and the existing unknown-route redirect to home.
- Desktop navigation, mobile menu open/Escape/route close, gallery content and return-home navigation.
- Contact validation, simulated loading/success/reset, and the absence of a submission HTTP request.
- No uncaught page exceptions, console errors or unexpected external requests during normal tested journeys.

Local artifacts are at `output/playwright/report/index.html`, `output/playwright/results.json`, and `output/playwright/test-results/`. They are ignored by Git. Tests serve the production build only on `127.0.0.1:4175` and do not reuse an unrelated server. External images are replaced with an inline SVG and external stylesheets with empty CSS; unexpected other external requests fail the test. These checks establish local behavior with deterministic substitutes, not live image/font availability, screenshot parity, production deep-link configuration, Safari/Firefox compatibility, real-device behavior or a complete accessibility audit.

Retained baseline issues:

1. **Contact submission is simulated.** It displays success after a timer without delivery or persistence. The test confirms that behavior; the message is not proof of receipt.
2. **Gallery arrow pointer obstruction.** On `/cars/mercedes-e300`, the gallery text layer intercepts the next-image click at both tested widths with the substituted assets/fonts. Existing JSX stacking and CSS position the text above the control. Keyboard activation and thumbnail interaction pass. A dedicated test marks only the observed `car-details-gallery-copy` pointer interception as an expected failure; a different failure or a working arrow requires review. No product CSS or behavior was changed to make the suite pass.
3. **Legacy catalog limitations remain.** The generated catalog and eight separate legacy detail records are not a verified production vehicle dataset. The catalog cards do not provide a detail navigation action, and catalog model IDs do not establish equivalence with detail IDs. No data correction, ingestion or catalog rewrite was attempted.

## Dependency security findings (original implementation snapshot)

The final completed-install npm audit reports **16 affected package entries: 12 high, 3 moderate, 1 low, 0 critical**. These counts include propagated dependency findings and are not a count of distinct exploitable vulnerabilities. An earlier advisory response reported 27 entries; no existing package was upgraded between responses, so the difference must not be described as remediation.

| Direct affected dependency | Severity | Relevant scope |
| --- | --- | --- |
| `postcss` | High | Build-time source-map/file-disclosure and CSS output advisories |
| `react-router-dom` | High | Findings propagated from `react-router`; applicability varies by routing/server feature |
| `tailwindcss` | High | Findings propagated through file-watching/globbing dependencies |
| `vite` | High | Development-server path handling, editor integration and related advisories |

The other 12 affected entries are transitive: `@babel/core` (low), `baseline-browser-mapping` (moderate), `braces` (high), `browserslist` (high), `chokidar` (high), `esbuild` (moderate), `fast-glob` (high), `micromatch` (high), `nanoid` (high), `postcss-selector-parser` (moderate), `react-router` (high), and `source-map-js` (high). No newly added Phase 1A package appears in that audit's affected list.

The current browser-only app does not enable React Router SSR/RSC server features, so server-specific router advisories are not evidence of an enabled server exploit here. Likewise, development-server findings do not by themselves establish a vulnerability in static deployed assets. Client routing and build/development risks still require review; a successful build is not a security clearance. Audit-proposed Vite/Tailwind major upgrades were deliberately not applied under Phase 1A's restrictions. Use a separately approved security change with its own regression evidence before a new production release.

## Original handoff boundaries and Phase 1B proposal

The local baseline, tag and documentation checkpoint exist, but remote protections, remote backup, CI and deployment gating were not configured. Backups are on the same computer and should eventually have a separately authorized second copy. The original handoff left tooling/report changes uncommitted; the closeout section records their subsequent checkpoint. EPA commercial permissions, vPIC redistribution clarification, image admission, approved ingestion and publication gates in Phase 0 remain in force; the completed development foundation does not grant provider rights or release permission.

Recommended next authorization: review and checkpoint this foundation, then define a small Phase 1B change for strict TypeScript domain types and pure utilities using explicit local fixtures, without provider calls or replacing the existing catalog. Keep dependency security remediation and the documented gallery interaction fix as separately reviewable changes. Add CI only after its repository/deployment effects are approved. React, Tailwind and routing upgrades should each have their own scope and validation.

No Phase 1B work, push, hosting change, service setup or publication is authorized by this report. Stop for user review.

## Phase 1A closeout assessment (2026-10-23)

This section supersedes earlier working-tree, audit-count and handoff status in the historical implementation record above. Closeout was authorized locally; no framework or application upgrade was performed.

### A. Repository, backup and configuration review

At closeout entry the working tree was clean and HEAD was already `d7871ae8f3eb15432849f046c89d76fd06186976`, the user-created Phase 1A tooling commit. The report's earlier statement that tooling was uncommitted was stale. Local `main` and the annotated baseline tag still target `05b0ac136b9075fab0b41a4b31307f54146471ea`. The 14-document checkpoint `79beae7cb4ef5134297d88a6361fbe286c11d73f` is an ancestor. The current branch remains `modernization/phase-1a-foundation`.

The existing user commit also tracks `.codex/environments/environment.toml`, despite its exclusion from the original agent checkpoint scope. The inspected six-line generated file has no credential or secret and an empty setup script. It was not edited, restaged or removed during closeout. No history was rewritten. Remote state was not queried; no fetch, push or deployment was performed during closeout. Therefore this report does not infer whether the user previously pushed that commit.

Both original archive SHA-256 checksums and all 49 restored-file hashes were reverified. The original bundle still verifies complete baseline history. The original backups were not overwritten; their scope and hashes remain as recorded above. Source, assets, application/configuration files and all original locked versions remain at the approved baseline.

`package-lock.json` contains the five exact new development pins plus their transitive entries, and its root dependency/engine metadata matches `package.json`. `npm ls --all --json --include=dev` exited 0 with no invalid/missing dependency errors. Adding the closeout script does not require lockfile changes because scripts are not stored in this lockfile. No install, override, audit fix or package upgrade was performed during closeout.

TypeScript still permits existing JS without checking it, applies strict checking to new TS, emits nothing, and includes the new reporter. Playwright remains pinned, uses two workers/no retries, a reserved loopback production-preview port, fresh server startup, blocked service workers and deterministic external-asset substitutes. No pre-existing unrelated work was modified.

### B. Complete dependency-security assessment

The same-day current audit and an isolated, unmodified copy of the original Git baseline manifest/lock both report **11 affected package entries: 7 high, 3 moderate, 1 low, 0 critical**. Their affected names, installed versions and advisory sets agree. Audit exit 1 denotes findings, not a failed audit request. The 196 dependency total includes optional/cross-platform lock entries; it is not the number installed on this Windows machine.

The original accepted 16-entry report was a genuine earlier snapshot. [GHSA-vfj7-8cjw-p6xm](https://github.com/advisories/GHSA-vfj7-8cjw-p6xm) was withdrawn at **2026-10-23 12:53:02 UTC** as not practically exploitable. Its removal also removes the propagated `chokidar`, `micromatch`, `fast-glob` and `tailwindcss` entries: 16 minus 5 equals 11. No installed version changed, so this is not remediation. The still earlier 27-entry response included additional propagated/peer findings; it is retained as historical evidence without claiming an unverified exact cause for that earlier aggregation difference.

There are **32 active unique GHSA identifiers**, plus **one withdrawn historical identifier**, across the reviewed evidence. Package-entry severity aggregates multiple advisories and dependency propagation. `react-router-dom` is a production direct dependency; `react-router` is production transitive. All other affected entries are dev/build dependencies. Dev-only classification reduces deployed static-site exposure but does not remove developer/CI risk. No newly introduced Phase 1A package is affected in the current audit, and all reviewed affected package versions also exist in the original baseline. This is a scoped dependency/reachability assessment, not a penetration test or security clearance.

The inventory below covers **all 27 package entries ever reported in the Phase 1A snapshots**, including the 16 originally requested and the current 11. Each chain is a verified representative path from `npm ls`; `npm explain` confirms the principal leaf paths. Further paths may exist. Every inventory row is unchanged from baseline (pre-existing: yes). Inherited findings use the leaf-package advisory rows in the following ledger; they are not additional unique vulnerabilities.

| Installed package | Relationship / use | Representative introduction chain | Audit state | Available correction / major requirement | Recommended stage |
| --- | --- | --- | --- | --- | --- |
| `@babel/core@7.29.0` | Transitive / dev-build | app > @vitejs/plugin-react > @babel/core | low now | 7.29.6; no major | S1: compatible Babel 7 patch |
| `@babel/helper-compilation-targets@7.28.6` | Transitive / dev-build | app > @vitejs/plugin-react > @babel/core > @babel/helper-compilation-targets | historical only | No independent advisory; update browserslist using the ledger below; re-audit the parent | S1 inherited fixes; S4 if selector parser remains |
| `@babel/helper-module-transforms@7.28.6` | Transitive / dev-build | app > @vitejs/plugin-react > @babel/core > @babel/helper-module-transforms | historical only | No independent advisory; update @babel/core using the ledger below; re-audit the parent | S1 inherited fixes; S4 if selector parser remains |
| `@babel/plugin-transform-react-jsx-self@7.27.1` | Transitive / dev-build | app > @vitejs/plugin-react > @babel/plugin-transform-react-jsx-self | historical only | No independent advisory; update @babel/core using the ledger below; re-audit the parent | S1 inherited fixes; S4 if selector parser remains |
| `@babel/plugin-transform-react-jsx-source@7.27.1` | Transitive / dev-build | app > @vitejs/plugin-react > @babel/plugin-transform-react-jsx-source | historical only | No independent advisory; update @babel/core using the ledger below; re-audit the parent | S1 inherited fixes; S4 if selector parser remains |
| `@vitejs/plugin-react@4.7.0` | Direct / dev-build | app > @vitejs/plugin-react | historical only | No independent advisory; update @babel/core, esbuild, vite using the ledger below; re-audit the parent | S1 inherited fixes; S4 if selector parser remains |
| `autoprefixer@10.4.27` | Direct / dev-build | app > autoprefixer | historical only | No independent advisory; update browserslist, postcss using the ledger below; re-audit the parent | S1 inherited fixes; S4 if selector parser remains |
| `baseline-browser-mapping@2.10.16` | Transitive / dev-build | app > autoprefixer > browserslist > baseline-browser-mapping | moderate now | 2.11.0; no major | S1: compatible mapping patch |
| `braces@3.0.3` | Transitive / dev-build | app > tailwindcss > chokidar > braces | historical only | Advisory withdrawn; no patched version listed or needed for it | Withdrawn: no current remediation requirement |
| `browserslist@4.28.2` | Transitive / dev-build | app > autoprefixer > browserslist | high now | 4.28.7; no major | S1: compatible Browserslist patch |
| `chokidar@3.6.0` | Transitive / dev-build | app > tailwindcss > chokidar | historical only | No own advisory; withdrawn braces propagation | Withdrawn propagated finding; no current major upgrade required |
| `esbuild@0.21.5` | Transitive / dev-build | app > vite > esbuild | moderate now | 0.25.0; Vite 5 constrains 0.21, so update Vite major | S3: update through Vite, no forced override |
| `fast-glob@3.3.3` | Transitive / dev-build | app > tailwindcss > fast-glob | historical only | No own advisory; withdrawn braces propagation | Withdrawn propagated finding; no current major upgrade required |
| `micromatch@4.0.8` | Transitive / dev-build | app > tailwindcss > micromatch | historical only | No own advisory; withdrawn braces propagation | Withdrawn propagated finding; no current major upgrade required |
| `nanoid@3.3.11` | Transitive / dev-build | app > postcss > nanoid | high now | 3.3.18 covers all three; no major | S1: compatible Nano ID 3 patch |
| `postcss@8.5.8` | Direct / dev-build | app > postcss | high now | 8.5.23 covers listed PostCSS findings; no major | S1: PostCSS 8 patch |
| `postcss-import@15.1.0` | Transitive / dev-build | app > tailwindcss > postcss-import | historical only | No independent advisory; update postcss using the ledger below; re-audit the parent | S1 inherited fixes; S4 if selector parser remains |
| `postcss-js@4.1.0` | Transitive / dev-build | app > tailwindcss > postcss-js | historical only | No independent advisory; update postcss using the ledger below; re-audit the parent | S1 inherited fixes; S4 if selector parser remains |
| `postcss-load-config@6.0.1` | Transitive / dev-build | app > tailwindcss > postcss-load-config | historical only | No independent advisory; update postcss using the ledger below; re-audit the parent | S1 inherited fixes; S4 if selector parser remains |
| `postcss-nested@6.2.0` | Transitive / dev-build | app > tailwindcss > postcss-nested | historical only | No independent advisory; update postcss, postcss-selector-parser using the ledger below; re-audit the parent | S1 inherited fixes; S4 if selector parser remains |
| `postcss-selector-parser@6.1.2` | Transitive / dev-build | app > tailwindcss > postcss-selector-parser | moderate now | 6.1.3 fixes low; 7.1.6 fixes moderate, parser major / parent review | S1 fixes low; S4 reviews parser 7 for remaining moderate |
| `react-router@7.14.0` | Transitive / production | app > react-router-dom > react-router | high now | 7.18.2 covers listed findings; propose matched 7.18.4, no major | S2: matched router 7 maintenance update |
| `react-router-dom@7.14.0` | Direct / production | app > react-router-dom | high now | Matched 7.18.4 forwards fixed react-router; no major | S2: matched router 7 maintenance update |
| `source-map-js@1.2.1` | Transitive / dev-build | app > postcss > source-map-js | high now | 1.2.2; no major | S1: compatible source-map patch |
| `tailwindcss@3.4.19` | Direct / dev-build | app > tailwindcss | historical only | No own advisory; withdrawn braces propagation; parser reviewed separately | Withdrawn high; parser risk still tracked at S4 |
| `update-browserslist-db@1.2.3` | Transitive / dev-build | app > autoprefixer > browserslist > update-browserslist-db | historical only | No independent advisory; update browserslist using the ledger below; re-audit the parent | S1 inherited fixes; S4 if selector parser remains |
| `vite@5.4.21` | Direct / dev-build | app > vite | high now | 6.4.4 covers listed Vite findings; major from installed 5 | S3: isolated Vite 5 to 6 security migration |

Every ledger row inherits the direct/transitive, production/dev, dependency-chain and baseline classification from that package's inventory row. First-fixed versions are taken from live GitHub Advisory metadata for the installed release line; candidate combined remediation versions were checked against the npm registry. A first-fixed version fixes that particular advisory, not necessarily all advisories. For example PostCSS needs at least 8.5.23 for all four listed issues; Nano ID needs 3.3.18 for all three; parser 6.1.3 leaves the moderate parser issue unresolved; matched router 7.18.4 covers all listed router fixes. Existing parent ranges and full post-change audits must be validated when implementation is separately authorized.

| Advisory / CVE | Installed leaf package | Severity | First fixed version | Major change needed from this tree? | Current-site applicability and remediation stage |
| --- | --- | --- | --- | --- | --- |
| [GHSA-4x5r-pxfx-6jf8](https://github.com/advisories/GHSA-4x5r-pxfx-6jf8) / CVE-2026-49356 | `@babel/core@7.29.0` | low | 7.29.6 | No | Requires attacker-controlled compiled JS and readable output/source maps; trusted-source build only here. S1. |
| [GHSA-w5vr-8v7q-w6rv](https://github.com/advisories/GHSA-w5vr-8v7q-w6rv) / CVE-2026-45819 | `baseline-browser-mapping@2.10.16` | moderate | 2.11.0 | No | Invalid mapping API input can stop Node; website visitors do not call this build helper. S1. |
| [GHSA-vfj7-8cjw-p6xm](https://github.com/advisories/GHSA-vfj7-8cjw-p6xm) / CVE-2026-93687 | `braces@3.0.3` | high (withdrawn) | None listed; withdrawn | Not applicable | Withdrawn as not practically exploitable on 2026-10-23; retain historical trace only. |
| [GHSA-c83g-rgw3-j3cx](https://github.com/advisories/GHSA-c83g-rgw3-j3cx) / CVE-2026-73089 | `browserslist@4.28.2` | high | 4.28.7 | No | Many attacker-controlled target queries can exhaust compiler memory; no visitor query interface here. S1. |
| [GHSA-73wf-gq98-2v4g](https://github.com/advisories/GHSA-73wf-gq98-2v4g) / CVE-2026-73088 | `browserslist@4.28.2` | high | 4.28.7 | No | Untrusted custom statistics can crash/pollute build processing; no custom stats file in this repository. S1. |
| [GHSA-67mh-4wv8-2f99](https://github.com/advisories/GHSA-67mh-4wv8-2f99) | `esbuild@0.21.5` | moderate | 0.25.0 | Vite major; 0.x API change | Targets esbuild serve API CORS; this app uses Vite/preview, not a standalone esbuild serve service. S3. |
| [GHSA-28wg-ghj8-5hjv](https://github.com/advisories/GHSA-28wg-ghj8-5hjv) / CVE-2026-67214 | `nanoid@3.3.11` | high | 3.3.16 | No | Negative attacker-controlled nonsecure ID size loops; no application Nano ID call/input path found. S1. |
| [GHSA-2v37-7h3g-55p8](https://github.com/advisories/GHSA-2v37-7h3g-55p8) / CVE-2026-67213 | `nanoid@3.3.11` | high | 3.3.18 | No | Zero-size custom generator loops; no visitor-controlled generator size here. S1. |
| [GHSA-xwg4-73v4-xw9w](https://github.com/advisories/GHSA-xwg4-73v4-xw9w) / CVE-2026-73086 | `nanoid@3.3.11` | high | 3.3.12 | No | Oversized ID argument can corrupt randomness; build-only dependency, no session-token use here. S1. |
| [GHSA-qx2v-qp2m-jg93](https://github.com/advisories/GHSA-qx2v-qp2m-jg93) / CVE-2026-41305 | `postcss@8.5.8` | moderate | 8.5.10 | No | Untrusted CSS embedded inside HTML style tags is required; current build extracts repository CSS. S1. |
| [GHSA-6g55-p6wh-862q](https://github.com/advisories/GHSA-6g55-p6wh-862q) / CVE-2026-45623 | `postcss@8.5.8` | high | 8.5.12 | No | Attacker CSS/source-map paths can disclose build-host files; no visitor CSS processing. S1. |
| [GHSA-fxqj-rqcc-2cmp](https://github.com/advisories/GHSA-fxqj-rqcc-2cmp) / CVE-2026-69153 | `postcss@8.5.8` | moderate | 8.5.23 | No | Incomplete map-path validation when from is unset; same untrusted-CSS precondition. S1. |
| [GHSA-r28c-9q8g-f849](https://github.com/advisories/GHSA-r28c-9q8g-f849) / CVE-2026-73646 | `postcss@8.5.8` | high | 8.5.18 | No | Map-path traversal can disclose build-host map data; trusted repository CSS currently. S1. |
| [GHSA-w9m9-85wc-3x92](https://github.com/advisories/GHSA-w9m9-85wc-3x92) / CVE-2026-9358 | `postcss-selector-parser@6.1.2` | low | 6.1.3 | No | Untrusted deeply nested selectors can exhaust recursion during CSS builds. S1 compatible low-severity fix. |
| [GHSA-rj75-hqrm-r3gf](https://github.com/advisories/GHSA-rj75-hqrm-r3gf) / CVE-2026-104844 | `postcss-selector-parser@6.1.2` | moderate | 7.1.6 | Yes | Large untrusted flat selectors can exhaust CPU; visitor inputs are not compiled as CSS. S4 parent/parser review. |
| [GHSA-49rj-9fvp-4h2h](https://github.com/advisories/GHSA-49rj-9fvp-4h2h) / CVE-2026-42211 | `react-router@7.14.0` | high | 7.14.2 | No | Framework server deserialization plus application prototype pollution required; no Framework server here. S2 before future SSR. |
| [GHSA-8x6r-g9mw-2r78](https://github.com/advisories/GHSA-8x6r-g9mw-2r78) / CVE-2026-42342 | `react-router@7.14.0` | high | 7.15.0 | No | Framework __manifest endpoint DoS; current BrowserRouter has no such endpoint. S2. |
| [GHSA-84g9-w2xq-vcv6](https://github.com/advisories/GHSA-84g9-w2xq-vcv6) / CVE-2026-53663 | `react-router@7.14.0` | low | 7.15.1 | No | Framework document-request CSRF checks; vendor excludes Declarative/Data modes. S2. |
| [GHSA-wrjc-x8rr-h8h6](https://github.com/advisories/GHSA-wrjc-x8rr-h8h6) / CVE-2026-53669 | `react-router@7.14.0` | moderate | 7.18.0 | No | Client navigation with attacker-supplied backslash path; potentially relevant mode, but reviewed targets are internal constants or fixed /cars/ prefix. S2 before accepting external targets. |
| [GHSA-h8fp-f39c-q6mh](https://github.com/advisories/GHSA-h8fp-f39c-q6mh) / CVE-2026-53667 | `react-router@7.14.0` | moderate | 7.18.0 | No | Unstable RSC error redirect handling only; RSC not enabled. S2 before enabling it. |
| [GHSA-337j-9hxr-rhxg](https://github.com/advisories/GHSA-337j-9hxr-rhxg) / CVE-2026-53666 | `react-router@7.14.0` | moderate | 7.18.0 | No | Manual SSR/hydration with overwritten errors required; no SSR/hydration here. S2. |
| [GHSA-chx6-hx7r-mcp5](https://github.com/advisories/GHSA-chx6-hx7r-mcp5) / CVE-2026-55685 | `react-router@7.14.0` | high | 7.18.0 | No | Framework manifest matching DoS; vendor excludes Declarative/Data modes. S2. |
| [GHSA-2j2x-hqr9-3h42](https://github.com/advisories/GHSA-2j2x-hqr9-3h42) / CVE-2026-40181 | `react-router@7.14.0` | moderate | 7.14.1 | No | Server/data redirect target issue; vendor excludes BrowserRouter Declarative mode. S2. |
| [GHSA-qwww-vcr4-c8h2](https://github.com/advisories/GHSA-qwww-vcr4-c8h2) | `react-router@7.14.0` | high | 7.18.2 | No | Unstable RSC action CSRF only; no server actions or RSC here. S2 before any RSC integration. |
| [GHSA-68fv-2mgg-jv7q](https://github.com/advisories/GHSA-68fv-2mgg-jv7q) / CVE-2026-93749 | `source-map-js@1.2.1` | high | 1.2.2 | No | Malicious indexed map offsets can block build-time Node; no runtime map processing from users. S1. |
| [GHSA-4w7w-66w2-5vf9](https://github.com/advisories/GHSA-4w7w-66w2-5vf9) / CVE-2026-39365 | `vite@5.4.21` | moderate | 6.4.2 | Yes | Exposed dev server plus predictable external map paths; no Vite production server. Keep local server isolated pending S3. |
| [GHSA-v6wh-96g9-6wx3](https://github.com/advisories/GHSA-v6wh-96g9-6wx3) / CVE-2026-53632 | `vite@5.4.21` | moderate | 6.4.3 | Yes | Windows editor middleware may expose NTLM hashes to malicious paths; relevant developer OS, not static assets. S3. |
| [GHSA-fx2h-pf6j-xcff](https://github.com/advisories/GHSA-fx2h-pf6j-xcff) / CVE-2026-53571 | `vite@5.4.21` | high | 6.4.3 | Yes | Windows dev-server deny bypass for sensitive files; do not expose unpatched dev server. S3. |
| [GHSA-698v-4r3x-3vcv](https://github.com/advisories/GHSA-698v-4r3x-3vcv) / CVE-2026-112943 | `vite@5.4.21` | moderate | 6.4.4 | Yes | Windows editor launch with attacker filename/environment/ADS can execute commands. S3. |
| [GHSA-r825-w8mm-5pxw](https://github.com/advisories/GHSA-r825-w8mm-5pxw) / CVE-2026-112944 | `vite@5.4.21` | moderate | 6.4.4 | Yes | Editor flag handling depends on planted paths/editor/WSL; no WSL observed in this PowerShell run. S3. |
| [GHSA-587h-7wmj-h5pm](https://github.com/advisories/GHSA-587h-7wmj-h5pm) / CVE-2026-112942 | `vite@5.4.21` | high | 6.4.4 | Yes | Windows editor-path check bypass can remove planted-file prerequisite; local development risk remains. S3. |
| [GHSA-9jrq-w75r-8gcw](https://github.com/advisories/GHSA-9jrq-w75r-8gcw) / CVE-2026-112945 | `vite@5.4.21` | low | 6.4.4 | Yes | Custom middleware transformIndexHtml plus inline script needed; current default Vite SPA config does not enable it. S3. |
| [GHSA-rq7h-c2jc-7f22](https://github.com/advisories/GHSA-rq7h-c2jc-7f22) / CVE-2026-112946 | `vite@5.4.21` | moderate | 6.4.4 | Yes | Non-Windows exposed dev server and root/absolute path collision; not this Windows configuration. S3 for later Linux CI/dev. |

**Stage definitions and decision:** S1 is a narrowly reviewed compatible build-tool patch/lock update (PostCSS 8.5.23+, Babel 7.29.6+, Browserslist 4.28.7+, mapping 2.11.0+, Nano ID 3.3.18+, source-map-js 1.2.2+, parser 6.1.3+). S2 separately updates matched `react-router-dom`/`react-router` within 7, with 7.18.4 registry-verified as a candidate. S3 separately migrates Vite 5 to at least 6.4.4, the lowest maintained line covering these findings; this also moves esbuild through its supported parent. S4 reviews the parser-7 dependency boundary with the later Tailwind migration or a specifically tested parent-supported change. No blind parser override, Tailwind major upgrade due to the withdrawn finding, or `npm audit fix --force` is justified.

The installed React plugin 4.7.0 advertises Vite 4/5/6/7 compatibility. Vite 6.4.4 accepts Node 24 and depends on esbuild ^0.25.0. Vite 8.3.5 is also registry-verified but changes bundler/compiler internals and is outside that plugin's peer range; it is not the minimum-risk immediate jump. [Vite support policy](https://vite.dev/releases) currently lists security support for 6.4 and newer selected lines. Developer Windows editor/FS issues deserve prompt S3 review even though this is a static production app. Do not expose an unpatched dev server or build untrusted contributions with production credentials. Current deterministic tests use preview, not an exposed Vite development server.

React Router vendor notes explicitly exclude Declarative BrowserRouter mode from several Framework/RSC/SSR findings. [Framework deserialization advisory](https://github.com/advisories/GHSA-49rj-9fvp-4h2h) requires server features and existing application prototype pollution; it is not evidence of enabled remote RCE here. The [client navigation advisory](https://github.com/advisories/GHSA-wrjc-x8rr-h8h6) is potentially relevant in this mode, but inspected navigation uses internal constants or a fixed internal prefix. Reassess before allowing user-controlled navigation targets or enabling server rendering. This scope distinction does not remove the package findings or authorize release.

Live evidence is saved locally under ignored `output/playwright/security/`: current/baseline audit JSON, historical snapshots, 33 advisory records, registry patch-version metadata, dependency tree and explanations. The isolated baseline audit folder contains only Git baseline manifests and was not installed or edited by npm. No original baseline file was modified. GitHub Advisory metadata and npm registry GET requests were read-only research; no provider APIs or datasets were used.

### C. Gallery defect and expected-failure review

The previous JSON report genuinely contains 30 normal passes and two expected failures, no skips/unexpected/flaky tests or runner errors. Each expected failure was the same next-image pointer timeout on `/cars/mercedes-e300`, at 1440x900 desktop and emulated iPhone 13 mobile widths with external fonts/images substituted. Source diff against `05b0ac1` confirms that the defect was not introduced by Phase 1A. The gallery copy is later in the DOM, absolutely positioned over the controls without a stacking/hit-testing correction; the copy or its description intercepts the next button center. Exact original-font/live-production behavior was not asserted by this isolated test.

The original test catches and annotates only a matching pointer error, but Playwright's expected-failure status applies to the entire test. Thus a later fixture/browser-close error could also have been classified as expected. Closeout adds a final-result reporter that permits only the reviewed gallery title, status `failed`, exactly one error, the 5,000 ms locator-click timeout and the specific copy-interception evidence. Extra errors, an unrelated failure, an unreviewed annotation or an unexpected pass fail the overall command. Seven focused Node tests verify those rejection paths, including overriding an otherwise successful run when a second teardown error appears. [Playwright expected-failure semantics](https://playwright.dev/docs/api/class-testinfo#test-info-fail).

Catalog badge counts now match card counts before value loops, prices must be positive, Tesla filtering must reduce results, valid detail refresh is checked, and mobile navigation must actually detach after route selection. These strengthen assertions without changing product behavior or widening timeouts. The gallery remains unchanged. A future focused correction should put arrows above noninteractive copy (or disable copy pointer interception where appropriate), verify readable text and any links, and prove mouse/touch/keyboard/thumbnail behavior at both widths with real-font checks. Convert both expected failures into ordinary pointer success tests only after that separately approved fix.

### D/E. Reviewed checkpoint contents and Git identifiers

Closeout changes exactly six approved files: `package.json`, `playwright.config.ts`, `tests/e2e/legacy-routes.spec.ts`, new `tests/e2e/baseline-reporter.ts`, new `tests/tooling/baseline-reporter.test.mjs`, and this implementation report. The five original tooling pins, lockfile, .nvmrc, tsconfig, source, CSS and deployment files are unchanged. No generated audit JSON, research script, screenshot, trace, environment configuration or ignored file belongs in the new commit.

The reviewed local completion checkpoint uses subject **`chore: close out Phase 1A verification and harden regression reporting`**, parent `d7871ae8f3eb15432849f046c89d76fd06186976`, on `modernization/phase-1a-foundation`. Its hash is provided in the final handoff and obtainable from `git log -1`; a commit cannot include its own final hash. No amend, rebase, reset, branch movement on main, push or deployment was performed.

### F. Closeout command results

- `npm ls --all --json --include=dev`: exit 0, consistent installed dependency graph; no reinstall was required for this unchanged lock.
- Current and isolated baseline `npm audit --include=dev --json` (baseline additionally `--package-lock-only`): both exit 1 with the same 11 affected entries and advisory sets; successful finding-producing requests.
- `npm run typecheck`: pass for the new TS/reporting surface. An intermediate reporter signature mismatch was corrected to the asynchronous onEnd contract before final verification.
- `npm run test:tooling`: 7/7 pass; no skips or failures.
- `npm run test:e2e`: final exit 0; build passed; **30 normal passes + 2 narrowly validated expected failures**, no skipped/unexpected/flaky tests or runner errors. Chromium revision 1248, Node 24.22.1/npm 11.19.1; fresh deterministic local server. Run start `2026-10-23T20:54:16.447Z`; duration approximately 5.0 minutes.
- Backup checksums, 49/49 restored hashes, baseline bundle verification, final 24-file build hash comparison, source/config diff, lock metadata comparison and `git diff --check`: pass as checked before committing. LF-to-CRLF informational Git notices do not indicate whitespace failures.

### G. Remaining risks

The gallery pointer issue and simulated contact delivery remain unfixed. Data remains generated legacy content; no provider licensing or data-publication gate was cleared. High dependency findings remain pre-existing and need the staged security work above. No new materially exploitable Phase 1A dependency finding was discovered. Current tests do not prove live assets, real devices, Safari/Firefox, full accessibility, production routing or hosting isolation. Baseline backups remain on this machine and do not automatically include later tooling commits. The user's prior tracked .codex file is recorded transparently, not treated as newly approved agent configuration. Remote branch protection, CI/deployment gating and off-machine backup still require explicit service/release authorization.

### H/I. Proposed modernization sequence and readiness

Use the frozen Phase 0 phase boundaries: gradual TS/contracts, separate React, Vite and Tailwind upgrades. The security findings justify separately prioritizing S1/S2/S3 without bundling frameworks. Only the local Phase 1A closeout is implemented here.

Every stage below starts from a clean reviewed parent, makes one bounded commit, and keeps production/main untouched. Rollback means revert that stage commit on the development branch and restore its lock with `npm ci --include=dev`; re-run the same checks. Do not reset shared history. Any approved bug fix intentionally changes the reference behavior and therefore updates its regression expectation explicitly.

| Stage / scope | Expected files | Compatibility risk | Required tests | Acceptance criterion | Rollback detail |
| --- | --- | --- | --- | --- | --- |
| S1: compatible security patches, first proposed authorization | package.json only where a direct patch pin is reviewed; package-lock.json; report | Transitive deduplication, changed generated CSS/browser data; no framework major | Clean install, npm ls, audit vs frozen list, build, typecheck, tooling and both E2E projects; inspect CSS diff | No new advisories, targeted patch findings removed, unchanged business routes/behavior; remaining parser/esbuild findings explicitly retained | Revert S1 manifest/lock; reinstall previous lock and restore pre-S1 build comparison |
| S2: React Router 7 maintenance, separate security change | package.json/lock; redirect tests; report; src/App.jsx only if an evidenced compatibility fix is required | Minor navigation behavior changes; avoid mode/API rewrite | Valid/missing details, /models redirects, wildcard route, direct refresh and navigation at both widths; audit | Matched router packages at an audited 7.x candidate such as 7.18.4; no mode/URL change | Revert router manifest/lock and any directly required fix together |
| S3: isolated Vite security modernization | package.json/lock; vite.config.js only as required; report; Node config only if engine evidence requires it | Vite 5 to 6 config/build changes; keep React 18/Tailwind 3/router fixed | Clean install, peer/engine check, HMR startup, build/preview/deep links/E2E; fresh audit | At least audited 6.4.4 on Node 24.22.1, plugin peers valid, listed Vite/esbuild findings removed, deploy configuration unchanged | Revert only Vite/config/lock commit; restore old build with loopback-only test server |
| Phase 1B: incremental TS/contracts, own review after any authorized security commits | src/types or shared contracts; selected src/utils modules; tsconfig; focused tests; report | Meaning of null/units/provenance; accidental import or legacy JS checking changes | Strict typecheck and pure fixture-based utility tests plus full regression; add Vitest only when a concrete TS unit scope needs it | Explicit configuration identity/unknown values/units; no API/ingestion; no blanket JSX conversion; existing pages unchanged | Revert small typed boundary/utility commit; allowJs/checkJs baseline preserved |
| Separate gallery correction | src/index.css; src/pages/CarDetails.jsx only if needed; pointer tests/reporter allowance; report | Stacking changes can obstruct readable text or controls, particularly with real fonts | Pointer/touch/keyboard/thumbnails/appointment, both widths; real-font layout check | Two gallery pointer cases become normal passes; no forced clicks or hidden errors | Revert CSS/JSX fix with corresponding test expectation changes |
| Phase 1C: React 18.3 to audited React 19, separate framework upgrade | package.json/lock; React type pins; src/main.jsx and only components affected by verified changes | JSX transform, ref/type removals, effect/motion behavior; keep Vite/Tailwind/router fixed during this commit | Strict typecheck, peer inspection, all route/contact/nav/motion journeys, console/deprecation review | Matched React/DOM 19 and types; no deprecated API errors, same behavior/design | Revert React/type changes and any required compatibility edits together |
| Phase 1D follow-up: newer Vite generation only if needed for the selected runtime | package.json/lock; vite.config; Node config if necessary | Vite 7/8 browser defaults, Rolldown/Oxc and React-plugin peer ranges; no simultaneous React or CSS migration | Review each migration guide, engine/peer/build/HMR/preview/browser tests and fresh audit | Justified supported target, matching plugin, explicit supported-browser decision; no mandatory jump to 8 merely because latest | One Vite-generation commit per reviewed boundary; revert each independently |
| Phase 1E / S4: Tailwind 3 to 4 and parser boundary | package.json/lock; src/index.css; tailwind.config.js; postcss.config.js or Vite CSS plugin configuration; affected class sites, report | Extensive @apply usage/theme tokens, utility/preflight/hover defaults, browser floor; avoid two competing CSS integrations | Visual comparisons with approved real assets/fonts, all business routes at multiple widths, keyboard/contrast, build/typecheck/E2E/audit | Preserved visual identity and routes; CSS 4 compatibility explicit; browser support approved; parser findings resolved or separately justified | Revert complete CSS/theme/integration/lock stage; restore Tailwind 3 build |
| Accessibility/responsive/component improvements, one behavior per commit | Navbar/Button/Hero/carousels, src/index.css and focused page/tests only as selected | Focus restoration, keyboard navigation, autoplay/reduced-motion and overflow interactions; avoid broad component rewrite | Keyboard-only and focus-visible checks, reduced-motion, pause controls, real phone/tablet widths; axe/RTL tooling only with approved concrete scope | Named WCAG-oriented defects closed with manual + automated evidence; retained content/business routes | Revert each behavior/component commit independently; keep framework upgrades separate |

React 18.3 is already installed and the modern createRoot entry is present; React 19 requires the modern JSX transform and matched types. Installed Motion 12.38.0 and Lucide 1.7.0 advertise React 19 peers, which is compatibility evidence, not a substitute for runtime tests. [React upgrade guide](https://react.dev/blog/2024/04/25/react-19-upgrade-guide). Tailwind 4 requires a browser-floor decision (Safari 16.4+, Chrome 111+, Firefox 128+) and changes integration and CSS semantics; keep its migration independent. [Tailwind upgrade guide](https://tailwindcss.com/docs/upgrade-guide). Server rendering/metadata for a future indexable discovery catalog remains a later design/implementation gate; do not convert existing business routes to Framework/SSR mode during this foundation work.

**Readiness: conditional GO for a newly authorized, bounded Phase 1B local TS/contracts scope or the separately reviewed S1 security patch.** No technical blocker from Phase 1A prevents that local work. S2/S3/S4, gallery repair, React/Tailwind/Vite-generation changes, CI/service setup and every release require their own explicit scope/approval. **NO-GO for production publication or deployment** until security, provider rights, images, hosting, production checks and release authorization are satisfied. This closeout neither begins nor authorizes Phase 1B.
