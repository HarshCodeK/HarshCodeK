<div align="center">

# Harsh Paresh Kharavle

**AI Systems Engineer · Backend · Applied AI**

I build AI systems that stay honest under scrutiny — retrieval that refuses to
guess, agents that run inside a sandbox, and infrastructure that accounts for
every token it spends.

[![LinkedIn](https://img.shields.io/badge/LinkedIn-harsh--k--422932284-0A66C2?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/harsh-k-422932284/)
[![Email](https://img.shields.io/badge/Email-harsh.kharavle@gmail.com-D14836?style=for-the-badge&logo=gmail)](mailto:harsh.kharavle@gmail.com)

</div>

---

## Projects

Every repository below is live, has passing tests in CI, and builds its own
Docker image. Numbers below were measured on 2026-10-02.

### AI Systems

- [**megaproject**](https://github.com/HarshCodeK/megaproject) — A sandboxed tool-calling agent. The model is untrusted: every path is resolved and checked before any I/O, commands run from an allowlist, and secrets are redacted from tool output. A circuit breaker degrades to retrieval-only instead of failing. **38 tests.**
- [**hybrid-log-classifier**](https://github.com/HarshCodeK/hybrid-log-classifier) — Three-tier log classification where the ML tier **abstains** instead of guessing, so the cost saving is verifiable. Lines sharing an entity inside a 300-second window collapse into ranked incidents. A Java implementation is cross-checked against the Python one on every CI run. **27 Python + 14 JUnit tests.**
- [**multimodal-financial-assistant**](https://github.com/HarshCodeK/multimodal-financial-assistant) — Vision extraction plus ChromaDB retrieval that **refuses to answer when the policy does not cover the question**. An invented reason about money is worse than no answer. **14 tests.**

### Infrastructure

- [**kay-kay**](https://github.com/HarshCodeK/kay-kay) — An OpenAI-compatible gateway: provider fallback, hashed API keys, per-request telemetry and spend caps. Runs a bounded tool-calling agent *through itself*, so agent spend is capped and logged like any other call. **29 tests.**
- [**recoup**](https://github.com/HarshCodeK/recoup) — A deterministic payment reconciliation control plane with a SHA-256 hash-chained audit log. **153 tests.**

---

## Tech

**Python · Java · FastAPI · scikit-learn · Streamlit · SQLite · ChromaDB ·
sentence-transformers · RAG · LLM Applications · AI Agents · Docker · Git**

---

## A note on the numbers

The claim I care about most is a negative one: my financial assistant declines to
answer when the retrieved policy does not support an answer, and my log
classifier reports 0.833 rather than the 1.000 a leaky split produces. Both are
the result of measuring instead of assuming — and both are easy for a sceptical
interviewer to check, which is the point.
