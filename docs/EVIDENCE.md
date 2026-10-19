# Evidence

The portfolio uses the checked-in manifest at `data/evidence.json`. It records historical default-branch test-count snapshots for the three featured repositories. The source commit SHAs were not captured, and these tests were not rerun as part of the portfolio refresh.

| Repository | Baseline tests | Verification |
|---|---:|---|
| hybrid-log-classifier | 16 | `pytest -q` |
| kay-kay | 5 | `pytest -q` |
| recoup | 6 | `pytest -q` |

These counts are historical snapshots, not live counters or fresh verification. `make validate-evidence` validates manifest shape only; it does not execute tests in sibling repositories or regenerate the counts. These are not production benchmarks. Re-run the listed commands at a recorded commit before using counts as current evidence. The incident-triage extension is proposed in [Hybrid Log Classifier PR #5](https://github.com/HarshCodeK/hybrid-log-classifier/pull/5); its tests are not included in the baseline count until that change is merged and re-verified.

CI and Docker status are reported only where a prior workflow run supports the claim. A configured workflow is not the same as a successful run.
