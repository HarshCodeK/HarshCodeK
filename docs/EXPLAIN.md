# Explain it to me - harshkharavle.github.io

> Written so the owner can defend every line cold. No jargon without a plain sentence
> next to it.

## In one paragraph

Case studies for each repository, an evidence wall pulled from the repositories own EVIDENCE.json at build time, and a printable resume at /resume.html. The site is a build product. It reads each repository EVIDENCE.json when it builds and refuses to render a number that has no source file behind it, so the site cannot drift from reality. It also emits JSON-LD and llms.txt so AI search surfaces the right facts.

## The 3-minute demo

1. Run make evidence in two repos
2. Rebuild the site and show the wall update
3. Open /resume.html and print to PDF from the browser

## If an interviewer asks

1. Why no framework? The interesting part is the evidence pipeline, and a build script of 150 readable lines proves more than a scaffolded SPA.
2. How do you keep it honest? The build validates every entry against its source and fails the build on a missing source.
3. What does it cost to run? Nothing: static files on Pages.

## Words that appear in this repo

- evidence wall
- the aggregate of every repo measured numbers
case study
- one page: problem, constraint, decision, proof
AEO
- structured content so AI search cites the right facts

## What I would do next

Write the three case studies (regent, holdfast, proofsheet) and wire the evidence wall to the aggregate build.
