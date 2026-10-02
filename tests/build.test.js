import test from "node:test";
import assert from "node:assert/strict";
import { runMetrics } from "../src/bench.js";

test("metrics are computable and cited", () => {
  const m = runMetrics();
  assert.ok(m.headline.length > 0, "no headline metrics");
  for (const r of m.rows) {
    assert.ok(r.metric && "command" in r, `uncited row: ${JSON.stringify(r)}`);
  }
});
