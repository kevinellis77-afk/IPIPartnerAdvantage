# IPI Partner App UI/UX Audit (Senior Review)

## Executive summary

The app has strong content depth and a clear product narrative, but the UI foundation is currently inconsistent and difficult to scale. The biggest problems are not single-screen visuals; they are systemic: conflicting CSS layers, duplicated component patterns, mixed iconography, and a monolithic React file that combines data, layout, behavior, and styling concerns.

From a user perspective, this shows up as visual drift between pages, dense/low-legibility text in key places, and responsiveness patterns that are fragile around sidebar + table + drawer layouts. From a delivery perspective, it increases regression risk for every styling change.

---

## Top 15 issues ranked by impact

### Quick wins (high value, low effort)

1. **Raise small-text floor across UI labels/chips/tables to improve readability.**
   - Multiple core patterns use 10–11px text for navigation sublabels, status chips, and table headers, which is difficult on laptop scaling and lower-contrast themes.
   - Evidence: `styles.css` and `css/prospectTool.css` use repeated `font-size:10px/11px` for key UI metadata.

2. **Unify dropdown/input visual treatment (currently conflicting styles).**
   - `.ui-dropdown` and form controls are defined multiple times with different backgrounds, shadows, and focus behavior, producing inconsistent control states.
   - Evidence: early and later overrides in `styles.css` conflict.

3. **Reduce decorative noise in core navigation/surfaces.**
   - Heavy gradients, blurs, glows, and hover elevation are stacked across sidebar/cards/background; this competes with content hierarchy.
   - Evidence: fixed animated background orbs/dots, elevated card hover patterns, glassmorphism-heavy sidebar.

4. **Standardize icon style (emoji vs SVG).**
   - Content cards and journey items use emoji icons while nav uses SVG paths, producing inconsistent tone and unpredictable rendering across platforms.
   - Evidence: emoji icon content definitions alongside `NavIcon` SVG set.

5. **Improve menu semantics and interaction affordance in settings panel.**
   - A `role="menu"` container contains switch controls; this can confuse assistive tech expectations (menus are not typically form fields).

### Medium-impact improvements

6. **Fix responsive sidebar behavior crossover around 900–1100px.**
   - Sidebar is fixed desktop-first, then converted to static/full-width at <=1100px, with additional <=900 overrides. This creates brittle layout transitions and can shift nav context unexpectedly.

7. **Normalize table strategy for data-heavy pages.**
   - Prospect table uses `table-layout: fixed` plus aggressive word-breaking; headers are sticky and dense, causing scan friction and truncation behavior.

8. **Improve drawer mobile ergonomics in Prospect Tool.**
   - Drawer uses a desktop-first width with `min-width:420px`; this is relaxed only below 860px. Mid-size tablets and split-screen views are at risk.

9. **Create spacing rhythm consistency (page shells/sections/topbar).**
   - Same primitives are redefined through multiple “refinement pass/polish refresh” blocks, producing drift in paddings/margins across pages.

10. **Rationalize status badge and chip variants.**
   - Badge systems appear in multiple forms (`status-badge`, `status-pill`, `channel-chip`, tier badges), with different casing, radius, and color logic.

### Structural design-system improvements

11. **Break up `app.jsx` monolith into domain modules.**
   - A single ~13k-line file contains content models, components, state logic, and page definitions. This blocks parallel UI work and increases regression risk.

12. **Remove component alias duplication and consolidate primitives.**
   - Multiple wrappers represent the same primitive (`Card`, `SectionCard`, `StandardCard`, etc.), which obscures API ownership and variant behavior.

13. **Centralize tokens and eliminate cascade wars (`!important` + repeated selectors).**
   - The stylesheet includes repeated selectors and token-like overrides in separate phases, forcing specificity escalation.

14. **Move from runtime Babel/CDN architecture to build pipeline.**
   - App loads React UMD + Babel in browser and transpiles `app.jsx` at runtime, which is poor for performance/governance and hinders scalable UI quality gates.

15. **Define explicit accessibility baseline (contrast, focus, sizing, motion).**
   - Focus states exist, but typography and visual contrast vary by page. Motion is reduced in a few places, but not from a unified policy.

---

## Risky areas where styling changes can break functionality

1. **Sidebar/nav structure and page visibility toggles**
   - Nav rendering and hidden-page behavior are directly coupled to settings toggles; changing layout classes can accidentally hide access paths.

2. **Sticky table headers + wrapper overflow combos**
   - Table wrappers and sticky headers rely on precise overflow and z-index combinations; visual “cleanup” may break header stickiness.

3. **Prospect drawer layering and body scroll lock**
   - Drawer/backdrop/body overflow classes are tightly coordinated; changing positioning or overflow can reintroduce background scroll or trap issues.

4. **Theme token and override hierarchy**
   - Theme variables are set in JS, then heavily overridden in CSS; moving tokens without a migration map can create subtle theme regressions.

5. **Global element selectors**
   - Broad selectors (for headings/spans/table cells/buttons) affect all pages; any “quick” global typography tweak can produce collateral wrapping/regression.

---

## Recommended implementation roadmap

### Phase 0 — Guardrails (before visual changes)
- Create UI snapshot baseline for top pages and breakpoints.
- Add a token registry map (color, type scale, spacing, radius, shadow, motion).
- Define “do not break” contracts for sidebar, table stickiness, and drawers.

### Phase 1 — Quick wins (1 sprint)
- Set global typography scale floor (e.g., 12px metadata, 14px body min where possible).
- Unify form controls and primary/secondary/ghost button states.
- Standardize chip/badge style families and naming.
- Reduce decorative intensity in navigation + card hover for better content-first hierarchy.

### Phase 2 — Page-level consistency (1–2 sprints)
- Refactor sidebar responsiveness into one consistent breakpoint strategy.
- Rework Prospect Tool table + drawer behavior for tablet/mobile ergonomics.
- Harmonize page shell and section spacing tokens across all routes.

### Phase 3 — Structural systemization (2+ sprints)
- Split `app.jsx` into feature/page modules and a shared UI package.
- Replace duplicated wrappers with canonical primitives + variants.
- Migrate from runtime Babel to build-based app packaging.
- Add accessibility and visual regression checks into CI.

---

## Global/shared vs page-specific priorities

### Global/shared first
- Typography scale, spacing scale, and color token system.
- Buttons, inputs/selects, badges/chips, cards, tables (base patterns).
- Sidebar/topbar primitives and responsive layout shell.
- Focus ring, reduced motion, and contrast standards.

### Page-specific second
- Prospect Tool: table density, drawer sizing, KPI card readability.
- Hero/diagram pages: icon consistency and decorative background restraint.
- Any highly bespoke “dashboard” cards that diverge from shared primitives.

---

## Proposed reusable design-system primitives

1. **Layout**
   - `AppShell`, `SidebarLayout`, `PageContainer`, `Section`, `SplitPane`.

2. **Typography**
   - `Display`, `Heading`, `Body`, `Caption`, `Overline`, with tokenized scale.

3. **Actions**
   - `Button` (`primary|secondary|ghost|danger`), `IconButton`, `ButtonGroup`.

4. **Forms**
   - `Field`, `Select`, `Checkbox`, `Switch`, `Fieldset`, `FormRow`, `FilterBar`.

5. **Data display**
   - `Card` (`standard|highlight|metric`), `Badge`, `StatusPill`, `Table`, `DataList`, `MetricTile`, `ProgressBar`.

6. **Overlays**
   - `Modal`, `Drawer`, `Popover/Menu`, `Toast` with shared z-index and motion tokens.

7. **Navigation**
   - `NavGroup`, `NavItem`, `TopBar`, `Breadcrumb`, `TabBar`.

8. **Feedback/accessibility**
   - `EmptyState`, `InlineAlert`, `Skeleton`, shared focus-visible behavior, reduced-motion utility.

---

## Best implementation order (condensed)

1. **Stabilize token + primitive layer first** (typography/forms/buttons/badges).
2. **Then normalize layout shell + responsive nav/drawer/table patterns**.
3. **Then page-specific visual refinements**.
4. **Finally modularize codebase architecture and build pipeline migration**.

This order yields visible UX gains quickly while reducing the chance that future polish work creates regressions.
