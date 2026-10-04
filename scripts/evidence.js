// Writes EVIDENCE.json - the only source of numbers for the site and dashboard.
import { spawnSync } from "node:child_process";
import { writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { runMetrics } from "../src/bench.js";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");

const t = spawnSync(process.execPath, ["--test"], { cwd: ROOT, encoding: "utf8" });
const out = (t.stdout || "") + (t.stderr || "");
const pass = /pass (\d+)/.exec(out);
const fail = /fail (\d+)/.exec(out);
const m = runMetrics();
const doc = {
  repo: "harshkharavle.github.io",
  tier: "L",
  domain: "personal product site",
  generated_at: new Date().toISOString().replace(/\.\d+Z$/, "Z"),
  gate: { tests_passed: pass ? Number(pass[1]) : 0, tests_failed: fail ? Number(fail[1]) : 0, exit: t.status },
  headline: m.headline,
  rows: m.rows,
};
writeFileSync(join(ROOT, "EVIDENCE.json"), JSON.stringify(doc, null, 2) + "\n");
writeFileSync(join(ROOT, "web", "evidence.json"), JSON.stringify(doc, null, 2) + "\n");
console.log(JSON.stringify(doc.gate));
process.exit(fail ? 1 : 0);
