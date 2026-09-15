# Weekly plan - harshkharavle.github.io

Rule: one feature per week, each week ending with a commit, a green gate and one
published number. UI work happens at the end of a week, never before the backend of
that week works. If a week has no measurable claim, the week is not finished.

| Week | Feature | Commit line | Number to publish |
|---|---|---|---|
| Week | Feature | Commit line | Number to publish |
|---|---|---|---|
| W1 | Three case studies | feat: three case studies | see docs/EVIDENCE.md |
| W2 | docs(case): regent, holdfast, proofsheet | feat: docs(case): regent, holdfast, proofsheet | see docs/EVIDENCE.md |
| W3 | words per case study
Three teardowns | feat: words per case study
three teardowns | see docs/EVIDENCE.md |
| W4 | docs(writing): decision teardowns | feat: docs(writing): decision teardowns | see docs/EVIDENCE.md |
| W5 | citations per teardown
Light theme and print | feat: citations per teardown
light theme and print | see docs/EVIDENCE.md |
| W6 | feat(css): light theme, print stylesheet | feat: feat(css): light theme, print stylesheet | see docs/EVIDENCE.md |
| W7 | print quality
OG images | feat: print quality
og images | see docs/EVIDENCE.md |
| W8 | feat(build): one image per case study | feat: feat(build): one image per case study | see docs/EVIDENCE.md |
| W9 | image per page
Typed blog engine | feat: image per page
typed blog engine | see docs/EVIDENCE.md |
| W10 | feat(blog): posts as typed objects | feat: feat(blog): posts as typed objects | see docs/EVIDENCE.md |
| W11 | posts published
RSS and llms.txt | feat: posts published
rss and llms.txt | see docs/EVIDENCE.md |
| W12 | feat(build): feeds for humans and machines | feat: feat(build): feeds for humans and machines | see docs/EVIDENCE.md |
| W13 | feed validity
Live demo embeds | feat: feed validity
live demo embeds | see docs/EVIDENCE.md |
| W14 | feat(case): embed a runnable slice | feat: feat(case): embed a runnable slice | see docs/EVIDENCE.md |
| W15 | demos embedded
Accessibility pass | feat: demos embedded
accessibility pass | see docs/EVIDENCE.md |
| W16 | feat(a11y): contrast, focus, labels | feat: feat(a11y): contrast, focus, labels | see docs/EVIDENCE.md |
| W17 | axe violations
v1.0 | feat: axe violations
v1.0 | see docs/EVIDENCE.md |
| W18 | docs: ship v1.0 and announce | feat: docs: ship v1.0 and announce | see docs/EVIDENCE.md |
| W19 | full evidence wall | feat: full evidence wall | see docs/EVIDENCE.md |

## Every week, without exception

1. Run the gate: `npm test && node scripts/build.js`
2. Append to `docs/SESSION_CONTEXT.md` (what I did, what I learned, next action).
3. Update `docs/EVIDENCE.md` if a new number exists, with the command.
4. Commit with a conventional message and push.

## Anti-drift rules

- Never let a week pass with zero commits in an active repo.
- A feature that cannot be measured is decoration; cut it.
- Do not add a dependency the plan does not need.
