# AGENTS.md - handoff contract

> Any AI or human resuming this repository starts here, then reads
> `docs/SESSION_CONTEXT.md`. No conversation history is required.

## What this is

Case studies for each repository, an evidence wall pulled from the repositories own EVIDENCE.json at build time, and a printable resume at /resume.html.

Tier L, domain personal product site. Stack: Static HTML/CSS/JS, Node build script, node:test, GitHub Pages.

## Non-negotiable rules

1. **Never rename or repurpose this repository** without being asked.
2. **No unmeasured claims.** Every number needs the command that reproduces it, recorded
   in `docs/EVIDENCE.md` and written into `EVIDENCE.json` by `make evidence`.
3. **Never invent a number.** If a figure is missing, write that it is missing.
4. **Do not push or change GitHub settings** unless explicitly asked.
5. **Run the gate before every commit:** `npm test && node scripts/build.js`
6. **Money is integer arithmetic.** No float on a money path (where applicable).
7. **No secrets in the repository.** Only `.env.example`.
8. **One feature per commit**, conventional commit messages.

## Current state

- Slice 1: landing with evidence wall and tier sections, case-study template, resume page with print CSS, JSON-LD and llms.txt, aggregator tests
- Next action: Write the three case studies (regent, holdfast, proofsheet) and wire the evidence wall to the aggregate build.

## Layout

src/ product code | tests/ | scripts/ smoke+evidence | web/ landing+dashboard | docs/ architecture, tradeoffs, explain, evidence, limitations, session, plan | AGENTS.md

## End of session ritual

Update `docs/SESSION_CONTEXT.md` (state, landmines, next action) and
`docs/EVIDENCE.md` (new numbers + commands), then report what changed and what the
numbers are.
