# Session Context

> Read this file first. It is the cheap way back into the project after time away.
> Append-only, newest entry first, kept under about 150 lines.

## Current state — 2026-10-19

- The featured portfolio shortlist is now three projects: Hybrid Log Classifier, KAY-KAY, and Recoup.
- The profile README, homepage, evidence manifest, and printable resume now use that same shortlist.
- Hybrid Log Classifier PR #4 (reliability, throttling, and load-test tooling) and PR #5 (bounded evidence-first triage) are both merged into `main`. The triage workflow is advisory-only; no remediation commands execute.
- PR #5 CI passed after raw request-body bounds, timestamp validation, positive-duration serialization, and regression-test fixes: Python tests, compile check, diff check, Docker build, and container smoke run. This verifies the code branch, not a production deployment.
- `Repo-6` README alignment has been merged. Its site HTML and deployment remain untouched pending checks of canonical-site routing, external links, unique assets, and history before any retirement decision. No repositories or history were deleted.
- Evidence counts in `data/evidence.json` are historical snapshots and were not refreshed after the reliability PRs for Hybrid Log Classifier, Financial Assistant, KAY-KAY, and MegaProject or the Hybrid Log Classifier triage PR merged. Rerun tests at recorded commits before publishing updated counts.

## 1. What this is

The portfolio site: a landing page, an evidence wall built from each repository's
measured numbers, and a printable resume at /resume.html. Static files on GitHub
Pages, no framework, no build dependency.

## 2. Historical state (2026-10-03; superseded by the current-state entry above)

- Tests: 8 passing (`npm test`)
- Repositories listed: 5 — hybrid-log-classifier, multimodal-financial-assistant,
  megaproject, kay-kay, recoup
- The old manifest described the then-current counts as measured on 2026-10-03. Commit SHAs were not captured; treat these as historical snapshots, not current verification.

## 3. Landmines

- **The site once advertised six repositories that no longer existed.** Nothing
  failed, because nothing checked. `tests/links.test.js` now fails the build if
  a panel links to a repo absent from evidence.json, if the markup is unbalanced,
  or if a retired model id appears.
- `harshkharavle.github.io` does not resolve. Links now point at
  `github.com/HarshCodeK`. Do not reintroduce the Pages URL.
- KAY-KAY was listed as "5 tests passing" when it had 29, and MegaProject as 0
  tests with a description of an architecture it no longer had. Both corrected
  against measured runs.

## 4. Historical next action (superseded)

The earlier session planned to align `/resume.html` and print to PDF. The portfolio refresh has merged and aligns the resume with the three-project shortlist. Exported-PDF rendering and deployment remain unverified. Deployment and print-to-PDF rendering remain unverified.

## 5. Historical open question (resolved in the current proposal)

- Recoup is included in the printable resume and three-project shortlist. The actual exported PDF and deployment still need manual verification.

## 6. Session entries (newest first)

### 2026-10-03 - sibling repositories rebuilt, evidence regenerated

The five sibling repositories were rebuilt with clean histories and their model
registries updated to production ids (`openai/gpt-oss-120b` default; the retired
llama ids 404 on this account). Two live bugs were found and fixed while testing
against the real API: the log classifier's LLM tier crashed on the current Groq
SDK response type, and the agent's `list_dir`/`read_file`/`grep` rejected an
empty path the model sometimes sends. Every figure here was re-measured after
those fixes; README no longer claims repos are "live" or that recoup ships a
Docker image.

### 2026-10-02 - removed dead repositories, corrected measured numbers
Did: removed six panels for deleted repositories (fiduciary, regent, proofsheet,
aegis, holdfast, and the non-resolving portfolio link); corrected KAY-KAY from
5 to 29 tests and MegaProject from 0 to 38; added the two projects that were
missing entirely (hybrid-log-classifier, multimodal-financial-assistant);
rewrote README.md, resume.html and llms.txt against measured figures; added
`tests/links.test.js` with seven checks, verified failing on a deliberately
reintroduced dead link.
Next: print the resume to PDF and deploy.
