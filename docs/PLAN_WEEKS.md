# Weekly plan

Rule: one feature per week, each ending with a commit, a green gate and one
published number. UI work happens at the end of a week, never before the backend
of that week works. If a week has no measurable claim, the week is not finished.

## The earlier plan is void

The previous plan targeted case studies for `regent`, `holdfast` and
`proofsheet`. Those repositories no longer exist, so those weeks cannot be done.
They are not restated here, because leaving them on the page would make the site
a record of work that was abandoned.

## Current portfolio plan

The featured shortlist is intentionally three projects: Hybrid Log Classifier,
KAY-KAY, and Recoup. Do not restore a five-repository showcase merely to match
the older plan. The manifest is a historical snapshot; record commit SHAs and
rerun tests before publishing fresh counts.

| Checkpoint | Work | Completion evidence |
|---|---|---|
| P1 | Keep the merged Hybrid Log Classifier reliability and triage workflows correct | CI remains green; keep evidence and documentation aligned with merged behavior |
| P2 | Finish portfolio factual-claim review | README, homepage, resume, evidence manifest, and handoff docs agree; no stale current-state plan |
| P3 | Render and inspect the printable resume | Verify page count and clipping from an actual exported PDF; do not claim deployment until checked |
| P4 | Audit Repo-6 retirement candidates | Check Pages/deployment configuration, inbound links, unique assets, and history before any site/repository retirement |
| P5 | Refresh evidence at pinned commits | Record repository commit SHAs and exact commands; distinguish test counts from performance benchmarks |

make gate validates portfolio tests and manifest shape only. It does not run
sibling-repository tests, regenerate evidence, export the resume, or deploy the
site.
## Rules that survived

1. No number without the command that reproduces it.
2. If a repository is deleted, its panel goes in the same commit that notices.
3. A filter button must filter something.
