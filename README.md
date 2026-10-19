# Harsh Kharavle

**B.Tech CSE · Software Engineering · Applied AI Systems**

I build practical backend and AI software with explicit trust boundaries, reproducible tests, and honest failure modes. My portfolio is intentionally focused on three projects rather than a long list of shallow demos.

## Selected work

| Project | Engineering focus |
|---|---|
| [**Hybrid Log Classifier**](https://github.com/HarshCodeK/hybrid-log-classifier) | Rules → local ML → optional LLM, explicit abstention, and incident grouping. Reliability and reproducible load-test tooling are proposed in [PR #4](https://github.com/HarshCodeK/hybrid-log-classifier/pull/4); a bounded load-report/log triage extension is proposed in [PR #5](https://github.com/HarshCodeK/hybrid-log-classifier/pull/5). Neither PR is merged into the default branch yet. |
| [**KAY-KAY**](https://github.com/HarshCodeK/kay-kay) | LLM gateway prototype: hashed API keys, provider-fallback structure, pre-request spend reservation, and request telemetry. Provider integrations are deterministic stubs; accounting and rate limits are process-local, so this is not a production gateway. |
| [**Recoup**](https://github.com/HarshCodeK/recoup) | Deterministic payment reconciliation using integer paise, bounded timestamp matching, one-to-one transaction matching, and a separate recovery-policy gate. It has no money-execution API and no LLM dependency. |

## Engineering principles

- Deterministic validation and policy gates around probabilistic components.
- AI may assist diagnosis, but sensitive actions remain under explicit control.
- Application-level path checks are not OS isolation; prototypes are not production infrastructure.
- Performance and quality claims must be reproducible from source, tests, or a documented run.
- Prefer a small architecture with a demonstrated property over a large framework stack.

## Stack

Python · Java · FastAPI · Pydantic · scikit-learn · SQLite · REST APIs · LLM applications · Docker · Git · automated testing · CI

## Education

B.Tech, Computer Science & Engineering — DIT University, Dehradun.

## Contact

[GitHub](https://github.com/HarshCodeK) · [LinkedIn](https://www.linkedin.com/in/harsh-k-422932284/)
