# ANT'S full visual renewal — Codex master brief (2026-10-26)

## Decision / supersedes earlier guidance
This is a **full design refresh**, not a light-touch visual polish. SENJYU (https://morikoshi.net/) is the principal **visual and experiential benchmark**, while ANT'S retains its own brand identity, authorized imagery, business facts and working user journeys. Do not interpret previous instructions to "preserve current design" as a restriction. Preserve content, data and required behavior, not legacy look-and-feel.

## Targets
Repository: https://github.com/hiroyukimaekawa-lang/ANT-S
Branch: codex/senjyu-inspired-redesign
Reference: https://morikoshi.net/
Site: ANT'S beauty / salon and visiting beauty corporate website.
Do not deploy, merge to main or modify external services without explicit approval.

## Current confirmed technical baseline
- Plain multi-page HTML: index.html, vision.html, salon.html, visit.html, beauty.html, cast.html, access.html.
- Shared style.css (~45KB) and main.js (~41KB), assets/ with salon and staff pictures.
- Existing hero slide, multiple editorial layout sections, scroll reveals and navigation.
- main.js injects a large CSS style tag id ants-responsive-unified: new design MUST resolve style conflicts intentionally.
- README references npm run dev, but package.json absent at root: determine available local preview command, don't assume npm.
- Existing placeholders and '#' links require audit; don't invent actual destinations.

## Design approach
1. Analyze SENJYU visually at desktop/tablet/mobile: typography, imagery hierarchy, large photography, spacing, editorial grid, background colors, animation timing, scroll behaviors, menu, mobile conversions. Document actual observations distinctly from proposed alternatives.
2. Produce docs/redesign/design-direction.md: mood board references (URLs/screen descriptions, not copyrighted pasted image files), visual tokens, font pairings, spacing scale, type scale, motion choreography and ANT'S-specific original design rationale.
3. Produce docs/redesign/page-map.md mapping legacy page content / link functionality to redesigned pages and user journeys. Existing pages remain accessible unless a redirect plan is explicitly approved. Actual facts must not be fabricated.
4. Build an **original** ANT'S art direction: immersive photographic hero, restrained premium typography, alternating asymmetrical editorial sections, ample whitespace, refined transition states, mobile-first layout, conversion CTAs using verified URLs.
5. Treat present layout, color and existing motion as replaceable. Refactor style.css and dynamic CSS injected by main.js rather than layering overrides forever. New structure may use css files such as assets/css/base.css, layout.css, components.css, pages.css and JS modules, but avoid unnecessary framework/toolchain migration; implement within current HTML/CSS/JS.
6. First redesign index.html fully, with usable responsive nav, hero, brand concept, services, salon list, cast and visit-beauty paths, contact CTA. Next redesign all six subpages in same cohesive visual language, preserving content accuracy and route compatibility.
7. Reuse only ANT'S / licensed imagery already in assets or expressly provided; create docs/redesign/assets-needed.md for missing hero, store, service images with intended sizes/crops and replacement plan. Do not scrape, hotlink or publish SENJYU photos, graphics or logo.
8. Motion: tasteful load-in, fade/translate reveals, slight image parallax/zoom where appropriate, hover/CTA transitions, header transitions. Respect reduced-motion and avoid jank / autoplay accessibility failures.
9. Ensure SEO title/description, semantic headings, alt text, keyboard menu, focus states, image optimization, no mobile overflow, good text contrast.
10. Keep working booking links, store pages, phone, recruiting, social links and other real-world data intact.

## Implementation plan
Phase A baseline: inspect repo + git status, catalog existing content and destinations, capture screenshots if browser is available, record blockers.
Phase B specification: reference audit + moodboard + page-map + image inventory + new design tokens and structural outline.
Phase C build: complete homepage overhaul in existing site, then shared header/footer and six remaining HTML pages.
Phase D validation: run local server (python3 -m http.server 8000 is acceptable for static site), test 375/390/768/1440 viewports, click all links, audit accessibility, JS errors, missing images, keyboard interactions, reduced motion; capture before/after screenshot evidence.
Phase E finish: write docs/redesign/implementation-report.md with changed files, tests, screenshots, open questions and required client assets; open Draft PR only. No main merge, no deployment.

## Acceptance criteria
- Visually feels like a **new site**, not a retouched old one. Coherent typography, colors, sections, and motion across all 7 pages.
- Original ANT'S creative expression informed by SENJYU design quality, not a copied site.
- All existing legitimate content/flows survive, site works without a build step, mobile-first and accessible.
- Before/after screenshots at desktop and mobile; report and testing evidence.
- Need no user approval for normal local design decisions; do not fabricate missing facts or force fake imagery. Continue implementation as far as feasible in one Codex run.
