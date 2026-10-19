# AGENTS.md - handoff contract

> Any AI or human resuming this repository starts here, then reads
> `docs/SESSION_CONTEXT.md`. No conversation history is required.

## What this is

A static portfolio, a checked-in evidence manifest at `data/evidence.json`, and a printable resume at /resume.html. The manifest is a manually maintained snapshot, not a live pull from sibling repositories.

Tier L, domain personal product site. Stack: Static HTML/CSS/JS, Node build script, node:test, GitHub Pages.

## Non-negotiable rules

1. **Never rename or repurpose this repository** without being asked.
2. **No unmeasured claims.** Every number needs a documented verification command in
   `docs/EVIDENCE.md`. The manifest is a historical snapshot; `make validate-evidence`
   checks its structure only and does not run sibling-repository tests or regenerate counts.
3. **Never invent a number.** If a figure is missing, write that it is missing.
4. **Do not push or change GitHub settings** unless explicitly asked.
5. **Run the gate before every commit:** `make gate` (currently `npm test` plus manifest-shape validation). Do not claim that this gate runs sibling-project tests or generates fresh evidence.
6. **Money is integer arithmetic.** No float on a money path (where applicable).
7. **No secrets in the repository.** Only `.env.example`.
8. **One feature per commit**, conventional commit messages.

## Current state

- Slice 1: landing with evidence wall and tier sections, case-study template, resume page with print CSS, JSON-LD and llms.txt, aggregator tests
- Current proposed shortlist: three projects (Hybrid Log Classifier, KAY-KAY, Recoup).
- Counts in `data/evidence.json` are historical snapshots; commit SHAs were not recorded and they have not been rerun as part of this portfolio PR.

## Layout

tests/ | data/evidence.json | docs/ architecture, tradeoffs, explain, evidence, limitations, session, plan | AGENTS.md

## End of session ritual

Update `docs/SESSION_CONTEXT.md` (state, landmines, next action) and
`docs/EVIDENCE.md` (new numbers + commands), then report what changed and what the
numbers are.
