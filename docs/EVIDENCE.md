# Evidence

The portfolio uses the checked-in manifest at `data/evidence.json`. The manifest records baseline default-branch test counts for the three featured repositories.

| Repository | Baseline tests | Verification |
|---|---:|---|
| hybrid-log-classifier | 16 | `pytest -q` |
| kay-kay | 5 | `pytest -q` |
| recoup | 6 | `pytest -q` |

These counts are repository snapshots, not live counters. They are not production benchmarks and should be rerun if the repositories change. The incident-triage extension is proposed in [Hybrid Log Classifier PR #5](https://github.com/HarshCodeK/hybrid-log-classifier/pull/5); its tests are not included in the baseline count until that change is merged and re-verified.

CI and Docker status are reported only where a prior workflow run supports the claim. A configured workflow is not the same as a successful run.
