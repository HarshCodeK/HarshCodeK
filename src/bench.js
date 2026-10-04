// Slice 1 metrics: the repository measured against the house standard.
import { readdirSync, readFileSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const count = (p) => (existsSync(join(ROOT, p)) ? readdirSync(join(ROOT, p)).length : 0);

export function runMetrics() {
  const src = count("src");
  const tests = count("tests");
  const docs = count("docs");
  const readme = readFileSync(join(ROOT, "README.md"), "utf8").split("\n");
  const commands = readme.filter((l) => /^(node |npm |make )/.test(l.trim())).length;
  const rows = [
    { metric: "source modules", value: src, command: "ls src/" },
    { metric: "test files", value: tests, command: "ls tests/" },
    { metric: "documents maintained", value: docs, command: "ls docs/" },
    { metric: "reproducible commands in README", value: commands, command: "grep -c node README.md" },
  ];
  const headline = [
    { label: "source modules", value: String(src), command: "ls src/", tone: "info" },
    { label: "test files", value: String(tests), command: "ls tests/", tone: "" },
    { label: "documents maintained", value: String(docs), command: "ls docs/", tone: "accent" },
  ];
  return { headline, rows };
}
