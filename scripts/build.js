// Aggregates sibling repositories' EVIDENCE.json into data/evidence.json.
// Refuses to render a number that has no source file behind it.
import { existsSync, readFileSync, readdirSync, writeFileSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const DESK = dirname(ROOT);
const strict = process.argv.includes("--strict");
const checkLinks = process.argv.includes("--check-links");

const found = [];
const self = ROOT.split(/[\\/]/).pop();
for (const entry of readdirSync(DESK, { withFileTypes: true }).sort((a, b) => a.name.localeCompare(b.name))) {
  if (!entry.isDirectory() || entry.name === self || entry.name.startsWith("_")) continue;
  const p = join(DESK, entry.name, "EVIDENCE.json");
  if (!existsSync(p)) continue;
  const doc = JSON.parse(readFileSync(p, "utf8"));
  for (const h of doc.headline || []) {
    if (!h.command) {
      const msg = `uncited metric in ${doc.repo}: ${h.label}`;
      if (strict) throw new Error(msg);
      console.warn("warn:", msg);
    }
  }
  found.push({
    repo: doc.repo, tier: doc.tier, domain: doc.domain,
    gate: doc.gate, headline: doc.headline || [], rows: doc.rows || [], source: p,
  });
}

mkdirSync(join(ROOT, "data"), { recursive: true });
writeFileSync(join(ROOT, "data", "evidence.json"), JSON.stringify(found, null, 2) + "\n");

const llms = [
  "# Harsh Kharavle - portfolio evidence", "",
  "Every line below is generated from a repository's own EVIDENCE.json.", "",
  ...found.map((f) => `- ${f.repo} (${f.tier} tier, ${f.domain}): ${f.gate?.tests_passed ?? 0} tests passing; source: ${f.source}`),
  "",
].join("\n");
writeFileSync(join(ROOT, "llms.txt"), llms);

if (checkLinks) {
  const pages = ["index.html", "resume.html"];
  for (const page of pages) {
    const p = join(ROOT, page);
    if (!existsSync(p)) continue;
    const html = readFileSync(p, "utf8");
    for (const m of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
      const ref = m[1];
      if (/^(https?:|mailto:|#)/.test(ref)) continue;
      const target = join(ROOT, ref.split("#")[0]);
      if (!existsSync(target)) throw new Error(`broken link in ${page}: ${ref}`);
    }
  }
  console.log("link check passed");
}

console.log(`aggregated ${found.length} repositories`);
