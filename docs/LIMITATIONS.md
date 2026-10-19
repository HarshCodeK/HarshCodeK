# Limitations

## Current limitations

| Area | Limitation |
|---|---|
| Evidence | Test counts are default-branch snapshots and should be rerun after repository changes. |
| Project scope | The portfolio features three portfolio-scale projects, not production services. |
| Incident triage | The Hybrid Log Classifier triage extension is in an open PR; it is not merged or deployed. Suggestions do not establish root cause. |
| Security | MegaProject demonstrates an application-level path boundary, not OS/container isolation; it is not one of the three featured projects. |
| AI reliability | Probabilistic components are bounded, but they are not guaranteed to be correct. |
| Evaluation | Hybrid Log Classifier uses a small synthetic dataset; its metrics are not production benchmarks. |
| Gateway | KAY-KAY uses deterministic provider stubs and process-local accounting/rate limits. |
| Payments | Recoup does not execute money or authorize financial actions. |

## Deliberate choices

1. Keep the portfolio static and dependency-light.
2. Show only evidence tied to a repository or explicit verification command.
3. Feature three complementary projects instead of a long catalogue.
4. Prefer honest limitations over broader but unsupported project claims.
