# harshkharavle.github.io

<sub>L tier - personal product site</sub>

> Case studies for each repository, an evidence wall pulled from the repositories own EVIDENCE.json at build time, and a printable resume at /resume.html.

[![ci](https://github.com/HarshCodeK/harshkharavle.github.io/actions/workflows/ci.yml/badge.svg)](https://github.com/HarshCodeK/harshkharavle.github.io/actions/workflows/ci.yml)
![licence](https://img.shields.io/badge/licence-MIT-lightgrey)
![status](https://img.shields.io/badge/status-slice%201-blue)

**Status: slice 1.** Slice 1 renders the evidence wall from real EVIDENCE.json files and refuses to show a number with no source. Every number in this file has the command that reproduces it,
and every number that does not exist yet is marked as missing instead of estimated.

---

## The problem

Portfolios drift: claims are typed by hand, go stale, and cannot be checked.

**Who it is for:** recruiters and interviewers who would rather see evidence than read adjectives

## Evidence

| Metric | Value | Reproduce |
|---|---|---|
| Metric | Value | Reproduce |
|---|---|---|
| repositories feeding the evidence wall | not yet measured | node scripts/build.js |
| rendered numbers without a source file | not yet measured | node scripts/build.js --strict |
| broken internal links | not yet measured | node scripts/build.js --check-links |

Anything not in this table is not a claim yet.

## What this is NOT

- No analytics or tracking
- No framework build step - the build is one readable script
- No invented metrics: if a repo has not measured it, the wall shows nothing

The full honest list lives in [docs/LIMITATIONS.md](docs/LIMITATIONS.md).

## How it works

Each repository runs make evidence and writes EVIDENCE.json with its own real numbers|The site build script reads those files and merges them into one aggregate, refusing any entry with no source|Pages render from that aggregate; a missing source is rendered as a refusal, never as a guess

```
repo make evidence -> EVIDENCE.json -> build.js -> data/evidence.json -> pages + JSON-LD + llms.txt
```

## Quickstart

```bash
node scripts/build.js   # aggregates ../<repo>/EVIDENCE.json into data/evidence.json
node scripts/serve.js    # http://localhost:8040
```

Run the gate exactly as CI does:

```bash
npm test && node scripts/build.js
```

## Dashboard

The dashboard is the demo: it reads only numbers produced by this repo.

```bash
make evidence     # runs the real work and writes EVIDENCE.json
make dashboard    # serves web/ on http://localhost:8080
```

## Decisions, not just code

| Read this | Why |
|---|---|
| [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) | module map and the invariants |
| [docs/TRADEOFFS.md](docs/TRADEOFFS.md) | the governing constraint and the options rejected |
| [docs/EXPLAIN.md](docs/EXPLAIN.md) | plain-language walkthrough and a 3-minute demo script |
| [docs/EVIDENCE.md](docs/EVIDENCE.md) | every number, and how to reproduce it |
| [docs/SESSION_CONTEXT.md](docs/SESSION_CONTEXT.md) | current state, landmines, next action |
| [AGENTS.md](AGENTS.md) | handoff contract for any future session |

## Weekly plan

1. Three case studies
2. docs(case): regent, holdfast, proofsheet
3. words per case study
Three teardowns

(full table in docs/PLAN_WEEKS.md)

Full plan: [docs/PLAN_WEEKS.md](docs/PLAN_WEEKS.md).

## Licence

MIT - see [LICENSE](LICENSE).
