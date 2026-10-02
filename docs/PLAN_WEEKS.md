# Weekly plan

Rule: one feature per week, each ending with a commit, a green gate and one
published number. UI work happens at the end of a week, never before the backend
of that week works. If a week has no measurable claim, the week is not finished.

## The earlier plan is void

The previous plan targeted case studies for `regent`, `holdfast` and
`proofsheet`. Those repositories no longer exist, so those weeks cannot be done.
They are not restated here, because leaving them on the page would make the site
a record of work that was abandoned.

## Current

| Week | Feature | Number to publish |
|---|---|---|
| W1 | Remove the six dead repository panels; correct KAY-KAY (5 -> 29) and MegaProject (0 -> 38); add the two missing projects | 5 live repositories, 8 tests passing |
| W2 | Add `tests/links.test.js`: dead-link, markup-balance, uncited-row, retired-model and empty-filter guards | 7 checks, verified failing on a reintroduced dead link |
| W3 | Print `/resume.html` to PDF and confirm it fits one page | 1 page |
| W4 | Case studies for the four live repositories, one per week | each cites its own pytest run |

## Rules that survived

1. No number without the command that reproduces it.
2. If a repository is deleted, its panel goes in the same commit that notices.
3. A filter button must filter something.
