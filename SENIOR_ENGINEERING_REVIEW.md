# Senior Full-Stack Review (Targeted Refactor Plan)

## 1) High impact improvements

### A. Split `app.jsx` into feature modules (maintainability + readability + performance)
- `app.jsx` is currently ~11k lines and mixes shared UI primitives, navigation, feature pages, and business logic in one file.
- This makes refactors risky and increases bundle parse/execute cost.
- Suggested extraction order:
  1. `src/ui/primitives` (buttons/cards/table wrappers)
  2. `src/layout` (sidebar/topbar/shell)
  3. `src/features/*` (one folder per major page)
  4. `src/data` (constants currently in top-level arrays)

### B. Remove duplicated wrapper components and keep one canonical primitive set
- There are multiple aliases around the same component abstractions (e.g. `StandardCard` / `Card` / `SectionCard`; `StandardTable` / `DataTable`; `StandardButton` + `ActionButton`).
- Consolidating these will reduce API surface and avoid style drift.

### C. Replace inline style-heavy, imperative hover logic with class-driven CSS states
- Several areas mutate DOM styles directly in event handlers (`onMouseEnter` / `onMouseLeave`) instead of class toggles.
- This creates extra JS work per interaction and makes behavior harder to test.
- Refactor to CSS classes and pseudo-states (`:hover`, `[data-active=true]`) with design tokens.

#### Example refactor pattern
```jsx
// Before
<div
  className="prod-card"
  onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,.2)"; }}
  onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "none"; }}
/>

// After
<div className="prod-card" data-tone={zone.id} />
```

```css
.prod-card { transition: box-shadow .2s ease, border-color .2s ease; }
.prod-card:hover { box-shadow: var(--shadow-md); }
```

### D. Address accessibility blockers for interactive non-semantic elements
- Clickable `<div>`/`<g>` elements (e.g., toggle wrapper and SVG segments) are mouse-first and not keyboard-operable.
- Convert to semantic controls (`button`) or add `role="button"`, `tabIndex={0}`, and keyboard handlers.
- Add focus-visible states for custom interactive SVG segments.

## 2) Medium improvements

### E. Simplify and deduplicate CSS architecture
- `styles.css` contains layered/duplicated rules and repeated overrides for core layout and components.
- Several selectors are repeated with different values later in file, increasing unpredictability.
- Extract into sections/files:
  - `tokens.css`
  - `layout.css`
  - `components.css`
  - `features/*.css`
- Reduce `!important` usage to lower specificity debt.

### F. Improve mobile responsiveness defaults for dense grids
- Repeated `minmax(320px, 1fr)` grids can force awkward wrapping on narrow devices.
- For small viewports, switch to lower minimums (e.g. `minmax(240px, 1fr)`) or hard `1fr` under `640px`.
- Review fixed-width assumptions around diagram sizing and sidebars with mobile-first breakpoints.

### G. Replace `key={index}` usage in mapped lists with stable IDs
- There are multiple list renders keyed by index.
- Use stable keys (`id` or deterministic hash) to reduce reconciliation bugs during insert/reorder and improve correctness.

### H. Add lightweight profiling and memo boundaries for expensive subtrees
- The app renders many large sections with large inline style objects.
- Introduce memoized leaf components and `useMemo` for derived lists where re-renders are frequent.
- Add React Profiler pass before/after to validate changes.

## 3) Minor cleanup suggestions

### I. Remove dead/legacy assets and artifacts
- Clean up repository artifacts like `.DS_Store` and verify whether legacy HTML entry files are still required.
- This lowers cognitive overhead for future contributors.

### J. Reduce production console noise
- `js/prospectTool.js` logs dataset fetch details to console.
- Gate logs behind debug flags or remove in production build.

### K. Standardize button defaults
- Ensure reusable button primitives default to `type="button"` so they are safe when placed inside forms.

---

## Suggested 2-sprint execution plan

### Sprint 1 (risk reduction)
1. Extract design-system primitives + layout shell into modules.
2. Replace direct hover mutations in modal/diagram-related cards with CSS classes.
3. Fix non-semantic interactive elements (toggle + SVG segments).

### Sprint 2 (scale + polish)
1. Split feature pages from `app.jsx`.
2. Deduplicate CSS into token/layout/component files.
3. Replace index keys and remove dead files.
4. Add profiling baseline and memoize expensive regions.
