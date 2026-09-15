# Evidence - harshkharavle.github.io

> Every number this project claims, next to the command that produced it.
> `make evidence` regenerates `EVIDENCE.json`; nothing in this file is typed by hand.

| Metric | Value | Command |
|---|---|---|
| Metric | Value | Command |
|---|---|---|
| repositories feeding the evidence wall | not yet measured | node scripts/build.js |
| rendered numbers without a source file | not yet measured | node scripts/build.js --strict |
| broken internal links | not yet measured | node scripts/build.js --check-links |

## How EVIDENCE.json is produced

The bench script (src/bench.py or src/bench.js) computes metrics from the repository itself. scripts/evidence.* runs the test suite, merges those metrics and writes EVIDENCE.json plus web/evidence.json for the dashboard. A number that no command produced cannot appear here.

## Deliberately not measured yet

- the load or contention test (its week is in docs/PLAN_WEEKS.md)
- the real-user run (who, and what changed for them)
- any product metric that needs product code that does not exist yet
