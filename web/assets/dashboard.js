// Generic dashboard: real numbers only, straight from evidence.json.
import { loadJSON, evidence, table, fail } from "./house.js";

try {
  const d = await loadJSON("evidence.json");
  document.getElementById("kpis").innerHTML = evidence(d.headline);
  document.getElementById("rows").innerHTML = table(d.rows, ["metric", "value", "command"]);
} catch (e) {
  fail(document.getElementById("kpis"), e);
}
