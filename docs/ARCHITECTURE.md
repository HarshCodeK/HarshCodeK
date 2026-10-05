# Architecture

## Flow

```
current repository state
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
| `index.html` | Homepage, project summaries, evidence wall |
| `resume.html` | Printable resume |
| `data/evidence.json` | Checked-in verification facts |
| `assets/house.css` | Shared visual styles |
| `assets/house.js` | Small client-side helpers |
| `tests/` | Static checks for links and markup |
| `src/bench.js` | Small local metrics helper for the portfolio repository |

## Invariants

1. Project links point to the current repository names.
2. Measured numbers shown by the evidence wall come from `data/evidence.json`.
3. Project descriptions must not claim capabilities absent from the selected repositories.
4. The page remains usable as plain static HTML/CSS/JavaScript.
