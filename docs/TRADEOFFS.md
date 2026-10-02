# Tradeoffs - harshkharavle.github.io

> The governing constraint first, then what was rejected. This file exists because
> implementation is cheap and judgement is not.

## The governing constraint

No build framework: the build script must be readable in one sitting, and the output must work as plain static files on GitHub Pages.

## Decisions

1. Static files over a framework so the site outlives any framework churn
2. Aggregation at build time rather than fetch time, so Pages has no runtime dependency on the repos
3. JSON-LD and llms.txt so machine readers can cite the owner correctly

## Deliberate refusals

1. Refused to hand-type any metric into the HTML
2. Refused to add an analytics script

## What would change my mind

1. Add client-side search only when the case-study count makes findability a real problem
