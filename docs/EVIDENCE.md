# Evidence

The profile uses a small checked-in evidence manifest at `data/evidence.json`.

It records only current repository facts that have an explicit verification command. The portfolio page reads that manifest at runtime; it does not claim metrics that are absent from the manifest.

## Current evidence

| Repository | Tests | Verification |
|---|---:|---|
| hybrid-log-classifier | 16 | `pytest -q` |
| multimodal-financial-assistant | 6 | `pytest -q` |
| kay-kay | 5 | `pytest -q` |
| megaproject | 3 | `pytest -q` |
| recoup | 6 | `pytest -q` |

CI and Docker status are included in `data/evidence.json` only where previously verified.

## Important boundary

These numbers describe the current repository snapshots. They are not production benchmarks and should be rerun if the repositories change.
