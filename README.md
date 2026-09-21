<div align="center">

# Harsh Paresh Kharavle

**B.Tech CSE fresher building control planes for AI systems.**

Systems where trust is engineered, not claimed. Where the LLM can triage but cannot move money. Where double-booking is structurally impossible.

[![LinkedIn](https://img.shields.io/badge/LinkedIn-harsh--k--422932284-0A66C2?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/harsh-k-422932284/)
[![Email](https://img.shields.io/badge/Email-harsh.kharavle@gmail.com-D14836?style=for-the-badge&logo=gmail)](mailto:harsh.kharavle@gmail.com)
[![Portfolio](https://img.shields.io/badge/Portfolio-harshkharavle.github.io-4CC38A?style=for-the-badge)](https://harshkharavle.github.io)

</div>

---

## The one-liner

> I don't build AI wrappers. I build **control planes** â€” systems where AI does what it's good at, and is structurally prevented from doing what it shouldn't.

---

## S-Tier Flagships

<table>
<tr>
<td width="50%" valign="top">

### <a href="https://github.com/HarshCodeK/recoup">recoup</a>

**Deterministic payment reconciliation control plane.**

Normalizes transactions from 5 sources, auto-matches with rule engine + Jaccard probability, classifies exceptions, triages ambiguous cases with an LLM that can **refuse** but cannot touch money. SHA-256 hash-chained audit log. 153 tests.

`Python` `Pydantic` `SQLite` `153 tests`

**The invariant:** *LLM can triage. LLM cannot move money.*

</td>
<td width="50%" valign="top">

### <a href="https://github.com/HarshCodeK/megaproject">megaproject</a>

**Unified AI agent OS built from 5 separate AI systems.**

Voice meeting agent, multi-model code orchestrator, RAG enterprise chatbot, hybrid log classifier, and financial voice agent â€” all wired into a single agent OS through a plugin architecture. One runtime, five capabilities.

`TypeScript` `Python` `FastAPI` `Realtime` `5 plugins`

**The invariant:** *One system, five capabilities, zero duplicated infrastructure.*

</td>
</tr>
</table>

---

## A-Tier Cross-Domain

<table>
<tr>
<td width="50%" valign="top">

### <a href="https://github.com/HarshCodeK/fiduciary">fiduciary</a>

**Trust layer for agentic commerce.**

AI buyer agent searches a catalog and pays on Razorpay â€” but every money action passes through a control plane the agent cannot bypass. 5 components: effective-price engine, idempotency guard, HMAC consent tokens, hash-chained audit, signed receipts. 6 demo scenarios.

`TypeScript` `Fastify` `Razorpay test-mode` `HMAC` `SHA-256`

**The invariant:** *The model is untrusted. The control plane is trusted.*

</td>
<td width="50%" valign="top">

### <a href="https://github.com/HarshCodeK/kay-kay">kay-kay</a>

**Universal AI operating layer.**

OpenAI-compatible gateway that routes, observes, and accounts for AI workloads â€” model-agnostic by design. Drop-in: change `base_url` + `api_key` and existing apps get provider fallback, telemetry, and cost tracking. 4-chapter roadmap: Connect â†’ Optimize â†’ Operate â†’ Govern.

`Python` `FastAPI` `SQLite` `OpenAI-compatible` `4-chapter roadmap`

**The invariant:** *We do not build AI. We decide how a company's software should use AI.*

</td>
</tr>
</table>

---

## B-Tier Supporting

<table>
<tr>
<td width="33%" valign="top">

### <a href="https://github.com/HarshCodeK/regent">regent</a>

**LLM gateway with integer micro-USD cost accounting.**

One OpenAI-compatible endpoint that routes to providers, records every call in an append-only ledger, and enforces budgets. 32 tests, 99% coverage.

`Python` `FastAPI` `SQLite` `32 tests` `99% coverage`

**The invariant:** *Every call is accounted for. Unknown price is flagged, not guessed.*

</td>
<td width="33%" valign="top">

### <a href="https://github.com/HarshCodeK/proofsheet">proofsheet</a>

**Verifiable engineering evidence for any repository.**

Point it at a repo and it returns an evidence sheet â€” what's tested, what's documented, what would break â€” with a file:line citation for every claim.

`Python` `FastAPI` `Pydantic` `deterministic`

**The invariant:** *A claim without a file citation is not a claim.*

</td>
<td width="33%" valign="top">

### <a href="https://github.com/HarshCodeK/aegis">aegis</a>

**Autonomous customer resolution agent with trust protocol.**

Every action passes through: policy check â†’ dry-run â†’ commit â†’ verify â†’ auto-rollback on failure. Hand-rolled agent loop â€” no LangChain, no framework. Built at IIT Bhubaneswar hackathon.

`TypeScript` `Next.js 16` `Gemini API` `chaos injection`

**The invariant:** *Agent cannot bypass policy. Failure triggers rollback.*

</td>
</tr>
<tr>
<td width="33%" valign="top">

### <a href="https://github.com/HarshCodeK/holdfast">holdfast</a>

**Booking API where double-booking is structurally impossible.**

Three layers of defence: idempotency keys, guarded transactions with `select_for_update`, and partial unique database constraints. Zero double-bookings under contention.

`Python` `Django` `DRF` `SQLite` `Postgres-ready`

**The invariant:** *For a given resource and slot, exactly one hold wins.*

</td>
<td width="33%" valign="top" colspan="2">

### <a href="https://harshkharavle.github.io">harshkharavle.github.io</a>

**The portfolio is itself a system.**

Case studies, evidence wall, and resume â€” all generated from each repository's own measured numbers. No metric on this page is typed by hand. Zero framework dependencies.

`HTML` `CSS` `JS` `GitHub Pages` `zero framework`

**The invariant:** *Every number traces to a repository's evidence.*

</td>
</tr>
</table>

---

## Evidence

| Metric | Value | Source |
|---|---|---|
| repos on profile | **9** | `gh repo list HarshCodeK` |
| active repos | **9** | all unarchived |
| tests (recoup) | **153 passing** | `python -m pytest` in recoup |
| tests (regent) | **32 passing, 99% coverage** | `python -m pytest --cov=src` in regent |
| tests (proofsheet) | **9 passing** | `python -m pytest` in proofsheet |
| audit chain integrity | **verified** | `python -c "from src.event_store import ..."` in recoup |
| framework dependencies (hub) | **0** | `cat package.json` |

---

## How I work

```
deployed beats described    â€” every repo has a landing page and dashboard
a number or it did not happen â€” EVIDENCE.md with reproduce commands
tradeoffs are the deliverable â€” TRADEOFFS.md in every repo
explainable or excluded      â€” EXPLAIN.md + AGENTS.md per repo
```

---

## Tech I actually use

**Languages:** Python, TypeScript, SQL
**Backend:** FastAPI, Django, DRF, Fastify
**Frontend:** React, Next.js, HTML/CSS/JS (vanilla)
**Data:** SQLite, PostgreSQL, ChromaDB
**AI/ML:** Groq, Gemini, sentence-transformers, scikit-learn
**Tools:** Git, CI/CD, pytest, ruff, Docker
**Patterns:** Control planes, trust boundaries, hash-chained audit logs, idempotency, policy engines

---

## What I deliberately do not build

- Todo apps, weather apps, calculators, e-commerce clones
- Another RAG chatbot, or an AI feature without a trust boundary
- Any claim without the command that reproduces it
- A repository that repeats a pattern I already have

---

<div align="center">

*"Implementation became abundant. What is scarce is judgement."*

</div>
