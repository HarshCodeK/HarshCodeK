# Explain it

## In one paragraph

This is a static portfolio site with a small evidence manifest, project links, engineering principles, and a printable resume. The page intentionally keeps project descriptions close to the current repository implementations rather than presenting the larger original concepts as shipped features.

## The useful demo

1. Open the portfolio homepage.
2. Open a selected repository.
3. Read its README and tests.
4. Use the repository's documented commands to reproduce its local checks.

## If an interviewer asks

**Why no frontend framework?**  
The site is intentionally small and static. A framework would not add meaningful value to the portfolio itself.

**How do you keep the site honest?**  
The public descriptions are manually reviewed against the current repositories, while measurable test counts are kept in `data/evidence.json`.

**What does it cost to run?**  
The site is static and can be hosted as static files. The project repositories have their own runtime dependencies.

## What the site does not claim

It does not claim that all five projects are production systems, that application-level controls equal OS isolation, or that portfolio test counts are production-quality evidence.
