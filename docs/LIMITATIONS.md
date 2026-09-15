# Limitations - harshkharavle.github.io

> Read this before drawing conclusions from the README or the dashboard.
> Every line is a commitment to a later week, not an oversight.

## Not built

| Capability | Status | Why |
|---|---|---|
| Capability | Status | Why / when |
|---|---|---|
| No analytics or tracking | not built in slice 1 | scheduled in docs/PLAN_WEEKS.md |
| No framework build step - the build is one readable script | not built in slice 1 | scheduled in docs/PLAN_WEEKS.md |
| No invented metrics: if a repo has not measured it, the wall shows nothing | not built in slice 1 | scheduled in docs/PLAN_WEEKS.md |

## Known design choices that are not bugs

1. 1. Static files over a framework so the site outlives any framework churn
2. Aggregation at build time rather than fetch time, so Pages has no runtime dependency on the repos
3. JSON-LD and llms.txt so machine readers can cite the owner correctly

## Method limits

Slice 1 methods are deterministic and offline. Any statistical claim is only as strong as its sample, and the sample is documented in docs/EVIDENCE.md.
