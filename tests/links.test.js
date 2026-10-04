import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const html = readFileSync(join(root, "index.html"), "utf8");
const evidence = JSON.parse(readFileSync(join(root, "data", "evidence.json"), "utf8"));

/**
 * These guard against a specific failure this site actually had: it advertised
 * six repositories that no longer existed, and claimed 5 passing tests for a
 * project that had 29. Nothing failed, because nothing checked.
 *
 * A dead GitHub link is worse than a missing one -- it looks like carelessness
 * rather than absence, and a recruiter clicking it lands on a 404.
 */

test("every repository in evidence.json has a panel on the page", () => {
  for (const item of evidence) {
    assert.ok(
      html.includes(`github.com/HarshCodeK/${item.repo}`),
      `${item.repo} is in evidence.json but has no panel`,
    );
  }
});

test("no panel links to a repository missing from evidence.json", () => {
  const linked = [...html.matchAll(/github\.com\/HarshCodeK\/([a-z0-9_.-]+)/g)]
    .map((m) => m[1]);
  const known = new Set(evidence.map((e) => e.repo));
  for (const slug of new Set(linked)) {
    assert.ok(known.has(slug), `index.html links ${slug}, which is not in evidence.json`);
  }
});

test("every evidence row cites a command that reproduces it", () => {
  for (const item of evidence) {
    for (const row of item.rows ?? []) {
      assert.ok(row.metric, `row without a metric in ${item.repo}`);
      assert.ok(row.command && row.command.length > 0, `uncited row in ${item.repo}: ${row.metric}`);
    }
  }
});

test("the html markup is balanced", () => {
  const opens = (html.match(/<article\b/g) ?? []).length;
  const closes = (html.match(/<\/article>/g) ?? []).length;
  assert.equal(opens, closes, "article tags are unbalanced");

  const divOpens = (html.match(/<div\b/g) ?? []).length;
  const divCloses = (html.match(/<\/div>/g) ?? []).length;
  assert.equal(divOpens, divCloses, "div tags are unbalanced");
});

test("no dead portfolio link", () => {
  // harshkharavle.github.io did not resolve; a 404 link reads worse than none.
  assert.ok(!html.includes("harshkharavle.github.io"), "links to a site that does not exist");
});

test("no retired model id appears on the page", () => {
  for (const dead of ["llama-3.3-70b-versatile", "llama-4-scout-17b", "qwen3.6-27b"]) {
    assert.ok(!html.includes(dead), `page advertises retired model ${dead}`);
  }
});

test("filter buttons match the tiers that have panels", () => {
  const filters = [...html.matchAll(/data-filter="(\w+)"/g)].map((m) => m[1]);
  for (const tier of ["S", "A", "B"]) {
    const panels = (html.match(new RegExp(`data-tier="${tier}"`, "g")) ?? []).length;
    if (panels === 0) {
      assert.ok(!filters.includes(tier), `filter button for ${tier} filters nothing`);
    }
  }
});
