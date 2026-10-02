.PHONY: install gate test evidence dashboard run clean

install:
	npm install --no-audit --no-fund

test:
	npm test

gate: test
	node scripts/smoke.js

evidence:
	node scripts/evidence.js

dashboard:
	node scripts/serve.js

run:
	node scripts/serve.js

clean:
	rm -rf node_modules coverage
