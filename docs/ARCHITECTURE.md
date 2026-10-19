# Architecture

## Flow

```
reviewed repository facts
        ↓
data/evidence.json
        ↓
index.html
        ↓
static portfolio page + project links
```

## Components

| Component | Responsibility |
|---|---|
| `index.html` | Homepage, three featured project summaries, evidence wall |
| `resume.html` | Printable resume, aligned with the same three-project shortlist |
| `data/evidence.json` | Checked-in baseline verification facts |
| `assets/house.css` | Shared visual styles |
| `assets/house.js` | Small client-side helpers |
| `tests/links.test.js` | Static checks for repository links, evidence manifest, and markup |
| `Makefile` | Local test, evidence-manifest validation, and static preview commands |

## Invariants

1. Featured project links point to existing repositories.
2. Test counts are explicit snapshots from the default branch and are not presented as production benchmarks.
3. Proposed changes in open PRs are labelled as proposed and are not described as merged or deployed.
4. Project summaries must not claim capabilities absent from the selected repositories.
5. The page remains usable as plain static HTML/CSS/JavaScript.
