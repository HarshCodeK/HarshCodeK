# Architecture - harshkharavle.github.io

## The one idea

The site is a build product. It reads each repository EVIDENCE.json when it builds and refuses to render a number that has no source file behind it, so the site cannot drift from reality. It also emits JSON-LD and llms.txt so AI search surfaces the right facts.

## Flow

```
repo make evidence -> EVIDENCE.json -> build.js -> data/evidence.json -> pages + JSON-LD + llms.txt
```

## Modules

| Module | Responsibility | Must never do |
|---|---|---|
| Module | Responsibility | Must never do |
|---|---|---|
| scripts/build.js | aggregate and validate evidence | invent or estimate a number |
| case/ | one page per repository | contain aggregate logic |
| resume.html | printable, one page | link to unmeasured claims |

## Invariants

1. No rendered number without a source file and a command
2. A missing source renders as a refusal, not as a blank or a guess
3. The build is deterministic: same inputs, same output bytes

## Data

evidence(repo, tier, headline[], rows[], generated_at, source_path)

## Why these choices

See [TRADEOFFS.md](TRADEOFFS.md) and [adr/](adr/) for the decision records.
