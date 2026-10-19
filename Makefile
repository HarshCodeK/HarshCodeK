.PHONY: install test gate evidence dashboard run serve clean

install:
	npm install --no-audit --no-fund

test:
	npm test

evidence:
	node -e 'const rows = JSON.parse(require("node:fs").readFileSync("data/evidence.json", "utf8")); if (!Array.isArray(rows) || rows.length !== 3) throw new Error("expected three featured project rows"); for (const row of rows) { if (!row.repo || !Number.isInteger(row.tests_passed) || row.tests_passed < 0 || row.tests_failed !== 0) throw new Error("invalid evidence row: " + JSON.stringify(row)); } console.log("Validated " + rows.length + " featured project evidence rows.");'

gate: test evidence

serve:
	python3 -m http.server 8000

dashboard run: serve

clean:
	rm -rf node_modules
