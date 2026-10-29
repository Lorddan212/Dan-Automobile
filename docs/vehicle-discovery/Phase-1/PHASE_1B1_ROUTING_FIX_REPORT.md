# DanAuto Phase 1B.1-R routing correction report

Status: **Local correction and validation PASS. Deployed-preview validation PENDING. Production deep links remain broken.**

Investigation and local tests: 2026-10-23 UTC. This checkpoint changes deployment configuration and adds regression coverage only. No push, pull request, deployment, project/domain/protection change, dependency installation/upgrade, security patch, provider integration, database operation or Phase 1B.2 work occurred.

## A. Root-cause assessment and supporting evidence

The probable cause is missing Vercel SPA fallback configuration. Confirmed observations:

- `src/main.jsx` uses BrowserRouter; `src/App.jsx` owns the business, legal, vehicle, legacy and wildcard routes in the browser.
- The repository and fetched `origin/main` had no root `vercel.json`; Vite configuration contains only the React plugin. There is no application server or API function directory.
- Public `/` delivers the accepted SPA shell, while all 13 direct non-root requests fail before React Router starts. Previous desktop/mobile browser diagnostics established working client navigation from `/`.
- The previous production audit established 24/24 public build files matching the recovered original build. This stage's production build also matches those same 24 files exactly.
- The owner's independent review reports no project-level routing rules. The available connector does not expose the detailed routing/build overrides, so that setting was not independently reverified through its reduced response.

Vercel's [official Vite SPA guidance](https://vercel.com/docs/frameworks/frontend/vite#using-vite-to-make-spas) explicitly requires a root fallback for this architecture. This is strong causal evidence, but only a separately authorized deployed candidate can establish that the proposed configuration fixes the actual service.

Whether this issue predates PR #6 remains unconfirmed. Its older immutable deployment redirects to Vercel login; the eventual login HTTP 200 is not an application pass. No bypass link or token was created.

## B. Existing deployment observations

Read-only inspection reconfirmed recorded deployment `dpl_4YLCenR2V5tgk7Snfx7dEnWE3h6r` as READY/production, with immutable hostname `dan-automobile-kzp7lf3cz-daniel-js-projects-14c7f014.vercel.app`. The prior report tied it to main merge `caa06557511bbdb28f59d2eb3d1ab4f17e6c76fa` and verified its public production alias. Fresh unauthenticated GET observations at **2026-10-23 22:37:28 UTC** against `https://dan-automobile.vercel.app`:

| Path | HTTP result |
| --- | --- |
| `/` | 200; original SPA shell hash matches |
| `/about` | 404; Vercel NOT_FOUND |
| `/services` | 404; Vercel NOT_FOUND |
| `/cars` | 404; Vercel NOT_FOUND |
| `/gallery` | 404; Vercel NOT_FOUND |
| `/contact` | 404; Vercel NOT_FOUND |
| `/privacy` | 404; Vercel NOT_FOUND |
| `/terms` | 404; Vercel NOT_FOUND |
| `/cookies` | 404; Vercel NOT_FOUND |
| `/cars/mercedes-e300` | 404; Vercel NOT_FOUND |
| `/cars/no-such-baseline-id` | 404; Vercel NOT_FOUND |
| `/models` | 404; Vercel NOT_FOUND |
| `/models/mercedes-e300` | 404; Vercel NOT_FOUND |
| `/unknown-baseline-route` | 404; Vercel NOT_FOUND |

Additional probes `/about?source=routing%20check`, `/about/?source=routing-check` and `/cars/mercedes-e300/?tag=one&tag=two` also returned 404/NOT_FOUND. Requests used manual redirect handling: none of these 17 responses contained a Location header. These public failures are not authentication/protection redirects. The earlier checks did not cover query/trailing-slash variants; this stage adds that evidence.

The connector confirms project `prj_RB6sUa2WbMHeRiONSsDv1oHr7jYG`, framework Vite and Node 24.x, but omits root/output/build/install/routing configuration fields. They must not be interpreted as null overrides simply because they are absent. A read-only `vercel project inspect dan-automobile` attempt failed with missing CLI authentication (and a CLI update-worker timeout); no login/link/setup operation followed. Exact dashboard override values therefore remain unverified here. Repository layout, Vite defaults and successful delivery of all baseline output files support the expected repository root and `dist` output; reconfirm dashboard values before any preview. No override is added in this change.

## C. Exact configuration changes

Added root `vercel.json`, matching the official example:

```json
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

No React Router, source, style, build-directory, framework, redirect, cleanUrls or trailingSlash setting changes. There is no such conflicting setting in the repository. Rewrites serve the shell internally rather than redirecting the browser; existing client redirects remain owned by React Router. In particular, legacy `/models` redirects and unknown-path home redirects keep their existing behavior. Their existing Navigate targets do not preserve a legacy URL's query; this correction does not change that behavior.

## D. Git starting point and preservation

| Item | Verified state |
| --- | --- |
| Entry branch / HEAD | `modernization/phase-1a-foundation` / `c6d02aadfab149f75851f4a757e6f8ec00ca0ffc` |
| Fetched origin/main | `caa06557511bbdb28f59d2eb3d1ab4f17e6c76fa` |
| Common ancestor | `d7871ae8f3eb15432849f046c89d76fd06186976`; one unique commit per side |
| Dedicated routing branch | `modernization/phase-1b1-routing`, created from fetched origin/main |
| Additive reconciliation merge | `2c68e70917250c682bb31b380af33d6a360fb22a`, parents origin/main and original c6d02aa |
| Unchanged local main / baseline tag target | `05b0ac136b9075fab0b41a4b31307f54146471ea` |
| Baseline tag | `danauto-app-baseline-2026-10-23` |

Fetch changed remote-tracking references only. The reconciliation merge was conflict-free, preserves the original c6d02aa as an ancestor, and produces a tree identical to that closeout. The original foundation branch remains at c6d02aa. No reset, rebase, force operation or main update occurred. The new branch has no upstream at closeout, avoiding an accidental upstream association with main.

The only untracked entry at start was the legitimate `PHASE_1B1_SECURITY_REPORT.md`. Its SHA-256 is unchanged: `4D4D96C345DEC2C3229D6625CF42F3F5F17522362673698C257603F19BB741A8`. A separate temporary recovery copy was made before switching branches. The original report is included unchanged in this checkpoint as prior-stage evidence; its historical statements refer to that stage, not this correction. Ignored diagnostic evidence remains available under `output/playwright/phase-1b1/`. Existing tracked `.codex/environments/environment.toml` is untouched.

Recovery directory `C:\Users\HP\Desktop\DanAuto-Recovery\phase-1a-20261023` remains intact. Both recorded checksums were reverified:

- `danauto-history.bundle`: `7D12BB0B6AF1D166FF7F681A4843B96FE81E9E96AF200885D75FAB1F1DBE12D4`.
- `danauto-baseline-source-and-docs.zip`: `5414E1E5C9F4B5EB64AFB812F65A4F24511D3531387233F9C5AF5F38002CA6CC`.

`git bundle verify` again confirms complete original history. The restored 49-file manifest was checked again; original recovery resources were not overwritten. The Phase 0 folder remains `docs/vehicle-discovery/Phase-0`, with its 14 Markdown files tracked. These original archives predate the new tooling/routing commits; they are not represented as backups of this new checkpoint.

## E. Actual tests and results

Used the existing portable Node **24.22.1** and npm **11.19.1** by prepending their temporary installation directory to PATH. No global runtime change. Dependencies and lockfile are unchanged; installation was unnecessary, and no clean install or audit fix ran.

| Command / check | Actual result |
| --- | --- |
| `npm ls --depth=0` | Exit 0; existing production dependency selections valid (inherited NODE_ENV=production filters this listing) |
| `npm run typecheck` | Exit 0; strict no-emit TypeScript check includes the new spec |
| `npm run test:tooling` | Exit 0; 7/7 tests, including rejection of extra/incorrect gallery failure errors |
| `npm run test:e2e` | Exit 0; production build plus 38 expected outcomes: **36 normal passes and 2 existing expected gallery failures** |
| Build within E2E command | Vite 5.4.21; 2,164 modules; 24 output files; no source change |
| Built-file baseline comparison | 24/24 SHA-256 byte matches against recovered original dist; file counts match |
| Vercel CLI 59.11.2 local schema/route transformation | Valid schema; malformed destination/source controls rejected; filesystem handler precedes fallback; all 16 pathname probes match compiled fallback |
| New asset request check | All 24 dist files return 200 with exact bytes on each project; JS/CSS/HTML/SVG MIME checks pass; asset query retained; no HTTP redirects |
| `git diff --check` and staged whitespace review | Pass |
| Source/package/lock/build-config/old-regression diff against c6d02aa | Empty |

Playwright report start: `2026-10-23T22:34:19.217Z`; browser duration approximately 3.9 minutes. Zero unexpected results, skips, flaky results or runner errors. Each expected gallery failure has exactly one recorded error and remains subject to the unchanged custom reporter's obstruction-specific validation. No assertion was relaxed. Existing browser fixtures substitute external images/styles and reject other external requests; these runs do not verify external-image availability, real mobile hardware or pixel parity.

Existing `legacy-routes.spec.ts` covers direct load/refresh of homepage, About, Services, Cars, Gallery, Contact and three legal pages; valid and invalid vehicle IDs; nested refresh; legacy redirects; wildcard fallback; desktop/mobile navigation; catalog filters; usable gallery controls; simulated contact validation/success. New `routing-delivery.spec.ts` adds nested query/repeated-parameter preservation through refresh, trailing-slash query preservation through refresh, and all built asset bytes/MIME types. Both files run for desktop Chromium and emulated mobile Chromium.

Diagnostic commands (ignored local evidence, not new project dependencies):

```powershell
node output/playwright/phase-1b1/validate-routing-local.mjs
node output/playwright/phase-1b1/refresh-routing-observations.mjs
```

The first imports the already-installed CLI's schema validator and routing-utils transformer, confirms filesystem-before-rewrite ordering, validates negative controls and checks build hashes. Its first diagnostic assertion incorrectly expected undefined for schema success; it was corrected to the CLI's actual null return, then all checks passed. Only that ignored diagnostic was affected. JSON evidence is in `routing-local-validation.json`, `routing-production-refresh.json` and `output/playwright/results.json`. Internal CLI imports are diagnostic/version-specific, not a portable dependency or replacement for deployed verification.

**Verification boundary:** Playwright uses Vite production preview at `127.0.0.1:4175`. Vite supplies its own SPA fallback and does not execute vercel.json. The CLI checks configuration validity and route compilation, not Vercel's live edge/asset/function routing. No local result is proof of deployed rewrite success.

## F. Assets, SPA routes and API compatibility

Vercel's [configuration reference](https://vercel.com/docs/project-configuration/vercel-json) documents filesystem precedence for rewrites. Its installed official transformer also emits the filesystem phase before this fallback. Existing files and actual functions should therefore retain priority; local delivery checks independently verify all current built files. The application has no legitimate API endpoints to exercise, and none were invented for this task.

A missing `/api/...` or missing asset path is not explicitly excluded by the basic catch-all and can receive SPA HTML. This is an acknowledged fallback property, not a backend success response. When a backend is introduced, separately define/test its namespace, missing-endpoint behavior, methods, authorization and non-HTML errors before integration; do not assume this configuration alone establishes future API correctness. Existing actual functions retain filesystem priority according to the documented routing order.

Vercel reserves `/.well-known` against rewrites per its [rewrite documentation](https://vercel.com/docs/routing/rewrites). No platform-reserved endpoint, monitoring service, proxy or middleware is introduced or overridden here. Actual reserved-path handling and file/function priority still require preview verification. No provider requests or database connections occur in the application/test changes. No public data ingestion/publication permission changes occur.

There is no cleanUrls or custom redirect setting in the repository; the `/index.html` destination is appropriate for the documented Vite defaults. If dashboard overrides include cleanUrls=true, reconcile that before deployment because the destination must then follow extensionless semantics. Query strings on normal business/detail URLs stay in the browser during internal rewriting; actual platform query forwarding and slash normalization remain preview checks.

## G. Changed files and local checkpoint

Only four files belong to this routing checkpoint:

1. `vercel.json`: documented minimal SPA fallback and schema reference.
2. `tests/e2e/routing-delivery.spec.ts`: three new regression scenarios, each run on desktop/mobile.
3. `docs/vehicle-discovery/Phase-1/PHASE_1B1_SECURITY_REPORT.md`: preserved, unchanged prior-stage report, now protected by Git.
4. `docs/vehicle-discovery/Phase-1/PHASE_1B1_ROUTING_FIX_REPORT.md`: this report.

Commit subject: `fix: add Vercel SPA fallback and routing regression coverage`. Parent is reconciliation merge `2c68e70917250c682bb31b380af33d6a360fb22a`; the final commit ID is supplied in the handoff and is available through `git log -1` on the named routing branch. A commit cannot embed its own final object ID. This report is finalized before the checkpoint; the local commit is made only after the listed checks and staged review pass. No generated output, local environment file, source or dependency change is staged. Local working-tree cleanliness is verified after commit.

Rollback of the unshipped correction, if later needed, is a reviewed revert of the routing checkpoint on a development branch. Do not reset main, alter the baseline tag or remove the preserved closeout history. No production rollback is needed or authorized because production was not changed.

## H. Remaining deployment-verification requirements

Pending: a separately authorized real Vercel preview built from the exact reviewed routing commit. Before it can be accepted, confirm repository-root configuration discovery, actual build/output overrides, absence of conflicting dashboard routing/cleanUrls, candidate commit identity, and expected protection behavior. Repeat the full direct-route table, refresh, query/repeated parameters, trailing slashes, legacy/wildcard browser behavior, desktop/mobile navigation, and exact static asset bytes/MIME. Validate reserved paths and any actual functions separately. Never count a login redirect/HTML page as a route or asset pass.

Production remains at the existing release and still returns the demonstrated non-root 404s. A successful preview does not itself publish or authorize production. The issue's historical onset remains unknown.

## I. Recommended preview procedure, not executed

1. Review this local checkpoint and explicitly authorize publishing **only the dedicated routing branch and a preview**, with a named target/project. Reinspect origin/main and remote branch state first; do not push main or tags. Pushing the branch may itself trigger an automatic preview, so push approval must account for that deployment.
2. Confirm in the authorized read-only project view that root is the repository root, build command is the expected npm build, output is dist, and no dashboard rules or cleanUrls setting conflict. Use the protected branch commit, including preserved closeout reporter; no dependency patches bundled.
3. Create the authorized preview using the existing project. Record its exact commit/deployment ID and URL. If protected, use an explicitly approved read-only access mechanism; do not disable protection or expose bypass credentials.
4. Run the matrix in H against that preview. Capture first-hop and final status/Location, body type, asset hashes and browser assertions. Confirm legacy/wildcard redirects are browser behavior rather than a missing server response. Keep external dependencies controlled and do not submit real appointments.
5. Present preview evidence for review. Production promotion/merge requires separate explicit approval and a subsequent public-domain recheck; no release is implied by this local report.

## J. Security remediation resumption

**Do not resume security patches under this routing-only authorization.** Local routing correction passes its applicable checks, but the original Phase 1B.1 production safety gate has not passed. First obtain separate preview authorization and validate the deployed routing candidate; production-gate resolution or an explicit owner revision of that gate is still required before the paused dependency work may resume. A preview pass alone does not silently revise a production gate.

The earlier audit findings are unchanged; no vulnerability remediation is claimed. Once the gate is resolved/revised and security work is authorized to resume, refresh remote/dependency evidence and perform compatible updates with the existing regression matrix. Phase 1B.2, framework upgrades, provider ingestion/redistribution and production deployment remain outside this task.

**Decision: GO for review of the local routing checkpoint; NO-GO for claiming a deployed fix, publishing or automatically resuming security implementation.**
