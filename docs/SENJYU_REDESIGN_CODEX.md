# ANT'S × SENJYU-inspired website redesign — Codex implementation brief

## Scope and source of truth
Repository: https://github.com/hiroyukimaekawa-lang/ANT-S
Reference for design principles only: https://morikoshi.net/
Work on branch `codex/senjyu-inspired-redesign`. Do not merge or deploy without approval.
Preserve ANT'S brand, actual services, contact details, store pages and claims.

## Verified baseline (2026-10-26)
- Static multi-page site: index.html, salon.html, visit.html, beauty.html, cast.html, access.html, vision.html.
- Shared style.css and main.js; assets/ includes salon and staff photography.
- index.html contains hero-bg-slider, hero-copy-wrap, overlap-gallery, business sections, salon lists.
- style.css already has .reveal and .reveal-slide-* transitions.
- main.js dynamically injects stylesheet `#ants-responsive-unified`, defines hero fade, responsive design and scroll effects. Do not blindly override or duplicate these.
- README mentions npm but no package.json is present at the checked root; validate actual running method rather than assuming npm scripts exist.
- Some index.html hero / salon cards still contain visible photographic placeholders. Investigate how main.js assigns local images before replacing markup.
- Existing footer includes '#' placeholder links; audit, but do not invent destinations.
- Existing main.js contains random music-note particle effects. Consider simplifying only if visually justified and performance/accessibility preserved.

## Phase 0 — baseline and safety
1. Check git status, current branch, tracked/untracked changes, git log, available test/build scripts. Do not discard or overwrite user work.
2. Check original site architecture, page navigation, SEO metadata, image paths, external booking links and menu behavior.
3. Produce before screenshots at 1440x900, 768x1024, 390x844 and 375x812 for home and at least two subpages; run browser if available.
4. Log existing warnings, broken images, dead links, horizontal overflow, Core Web Vitals opportunities.
5. If tool limitations block browser inspection, document blockers and proceed with grounded implementation rather than claiming to have viewed animations.

## Phase 1 — analyze reference
Visit morikoshi.net on desktop and mobile. Record hero treatment, image-to-text ratio, editorial typography, whitespace, section rhythm, sticky/nav interaction, scroll reveals, hover states, CTA hierarchy and page transitions.
Do not copy HTML/CSS/JS or protected media verbatim. Never hotlink SENJYU image URLs. Use SENJYU imagery only for internal study. Obtain original/licensed ANT'S imagery for production.
Deliver docs/reference-audit.md with observed vs inferred behavior and mapping into ANT'S.

## Phase 2 — design principles & mapping
Create original premium, understated visual language for ANT'S:
- Full-bleed editorial hero with authentic salon imagery, readable contrast and minimal ANT'S copy.
- Refined serif display headlines + readable Japanese body font; consistent clamp() typography.
- Spacious alternating image/text sections with asymmetrical editorial composition; consistent responsive spacing variables.
- Clear journey: Hero → Vision / concept → Salon & visiting beauty → salon list → cast / beauty → booking/contact.
- Preserve existing pages and valid routing; don't invent prices, reviews, qualifications, branch names, dates or staff data.
- CTA must lead to existing verified ANT'S destinations; no fake links.
- Implement semantic h1/h2 hierarchy and accessible navigation.

## Phase 3 — implement in stages
A. Home: index.html plus existing shared CSS/JS, replacing only deficient components. Fix missing hero imagery after investigating existing asset injection. Prefer available assets/hero-section.jpg, top_catch*.jpg, hero_salon.png and suitable salon photos after visual review, not filename assumption.
B. Shared header/footer and responsive behavior. Ensure menu open/close, Escape, overlay, focus, aria-expanded.
C. Subpages: vision.html, salon.html, visit.html, beauty.html, cast.html, access.html — reuse common design language but preserve facts and functions.
D. Motion: IntersectionObserver reveal, stagger (100-180ms), hero transitions and restrained image zoom/hover. Use transforms/opacity, avoid layout-jank and excessive scroll handlers. Respect prefers-reduced-motion. Avoid duplicated effects already in main.js.
E. Image performance: use appropriate local, rights-cleared images, width/height or aspect-ratio, object-fit, responsive srcset when variants exist, loading=lazy below fold, eager/priority hero, WebP/AVIF where feasible. Never convert images destructively or replace staff photos without review.
F. Consolidate redundant CSS while preserving cascade. If moving dynamic styles from main.js to CSS, confirm regression-free layout first.

## Guardrails
- Do not add React/Next.js, npm toolchain or heavyweight animation dependency unless necessary and justified.
- Do not delete pages or working features. Do not change production, DNS, hosting, GitHub default branch or secrets.
- Avoid external asset scraping into deployable folders; maintain docs/assets-needed.md listing missing images, suggested crops and needed licenses.
- Mobile first, 320–1920px wide; no horizontal overflow. Fixed/sticky header should not obscure anchors.
- Maintain meta descriptions and meaningful alt text; do not remove existing structured data if found.

## Acceptance tests
- All 7 HTML pages render and internal links work (flag intentional external links).
- No broken asset URLs, console errors, or unexpected horizontal scrolling at 375/390/768/1440.
- Header, hamburger, CTA, external booking links work; keyboard navigation works.
- Hero and animations work; full content visible when JS unavailable / reduced-motion enabled.
- Visual snapshots before/after collected and compared.
- Check performance/accessibility with available browser tools; do not invent scores.
- Summarize changes, test evidence, outstanding image/license needs and exact review steps in docs/redesign-report.md.

## Codex execution guidance
Start with repository investigation and create docs/reference-audit.md. Then implement a self-contained first pass of the homepage. Continue through shared parts and subpages, run tests, and prepare a draft PR for human review. No direct deployment or merge. Resolve blockers within scope; only ask for a specific asset or permission when truly required.
