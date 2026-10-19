# Session Context

> Read this file first. It is the cheap way back into the project after time away.
> Append-only, newest entry first, kept under about 150 lines.

## Current state — 2026-10-19

- The featured portfolio shortlist is now three projects: Hybrid Log Classifier, KAY-KAY, and Recoup.
- The printable resume and profile README are being aligned to that same shortlist.
- Hybrid Log Classifier PR #5 adds a bounded evidence-first triage workflow; it is based on the open `reliability-final` branch and is not merged into `main`.
- On the latest PR #5 head, the Python test job, compile check, and diff check passed. The Docker build/container smoke job is still running; do not describe the full workflow as green until that job finishes.
- `Repo-6` is a second portfolio-site candidate and remains untouched pending a decision about canonical site, external links, and unique assets. No repositories or history were deleted.
- Evidence counts in `data/evidence.json` are baseline main-branch snapshots; proposed PR changes are not included until merged and re-verified.

## 1. What this is

The portfolio site: a landing page, an evidence wall built from each repository's
measured numbers, and a printable resume at /resume.html. Static files on GitHub
Pages, no framework, no build dependency.

## 2. State of the world

- Tests: 8 passing (`npm test`)
- Repositories listed: 5 — hybrid-log-classifier, multimodal-financial-assistant,
  megaproject, kay-kay, recoup
- Every figure in `data/evidence.json` carries the command that reproduces it,
  measured 2026-10-03

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

## 4. Next action

Keep /resume.html aligned with the repository evidence and print to PDF before applications. The portfolio CI gate is test-only unless a checked-in smoke script is added.

## 5. Open questions

- The site lists recoup (162 tests, F1 0.805) but it is not on the PDF resume
  used for applications. Decide whether to add it there.

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
