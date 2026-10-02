<div align="center">

# Harsh Paresh Kharavle

**AI Systems Engineer | Applied AI & Backend**

I build applied AI systems with explicit trust boundaries: retrieval that can refuse to guess, agents with constrained tools, and AI infrastructure with measurable request costs.

[![LinkedIn](https://img.shields.io/badge/LinkedIn-harsh--k--422932284-0A66C2?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/harsh-k-422932284/)
[![Email](https://img.shields.io/badge/Email-harsh.kharavle@gmail.com-D14836?style=for-the-badge&logo=gmail)](mailto:harsh.kharavle@gmail.com)

</div>

---

## Projects

Project descriptions below are derived from repository code and test files; current CI status is maintained by each repository. The latest repository checks were used to verify the listed project descriptions; Recoup is tested locally and does not currently ship a Dockerfile.

### AI Systems

- [**megaproject**](https://github.com/HarshCodeK/megaproject) — A sandboxed tool-calling agent. The model is untrusted: every path is resolved and checked before any I/O, commands run from an allowlist, and secrets are redacted from tool output. A circuit breaker degrades to retrieval-only instead of failing. **automated test suite included.**
- [**hybrid-log-classifier**](https://github.com/HarshCodeK/hybrid-log-classifier) — Three-tier log classification where the ML tier **abstains** instead of guessing, so the cost saving is verifiable. Lines sharing an entity inside a 300-second window collapse into ranked incidents. A Java implementation is cross-checked against the Python one on every CI run. **Python and Java test suites included.**
- [**multimodal-financial-assistant**](https://github.com/HarshCodeK/multimodal-financial-assistant) — Vision/text document extraction plus ChromaDB policy retrieval with explicit refusal behavior when the retrieved context does not cover the question. **automated test suite included.**

### Infrastructure

- [**kay-kay**](https://github.com/HarshCodeK/kay-kay) — An OpenAI-compatible gateway: provider fallback, hashed API keys, per-request telemetry and spend caps. Runs a bounded tool-calling agent whose provider turns pass through the same metered accounting path. **automated test suite included.**
- [**recoup**](https://github.com/HarshCodeK/recoup) — A deterministic payment reconciliation control plane with a SHA-256 hash-chained audit log. **automated test suite included.**

---

## Tech

**Python · Java · FastAPI · scikit-learn · Streamlit · SQLite · ChromaDB ·
sentence-transformers · RAG · LLM Applications · AI Agents · Docker · Git**

---

## A note on the evidence

The strongest claims in these projects are intentionally narrow: grouped evaluation rather than a leaky random split for the log classifier, question-conditioned policy retrieval for the financial assistant, and bounded provider accounting for KAY-KAY. Each is backed by repository code and tests rather than a generic AI claim.
