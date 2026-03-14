# IPI Partner App UI Implementation Plan

This plan translates the UI audit into an execution-ready sequence. It is intentionally grouped by the requested workstreams and emphasizes safe rollout order, shared primitives first, and page-specific application second.

## 1) Navigation improvements

### What needs to change
- Normalize shell behavior across breakpoints so sidebar/topbar behavior does not switch unpredictably between fixed and static patterns.
- Standardize nav visual hierarchy (active, hover, collapsed, grouped states) and remove competing decorative effects.
- Improve settings/visibility controls semantics and discoverability while preserving page-access reliability.
- Align iconography and label treatment for consistent scanning.

### Components to create
- `AppShellLayout` (single source for sidebar + topbar + page container).
- `SideNav` primitives:
  - `NavGroup`
  - `NavItem`
  - `NavSectionDivider`
  - `NavToggle` (collapse/expand behavior)
- `TopBar` primitive with pluggable actions area.
- `VisibilityControlPanel` (replacing ad hoc settings-menu structure).

### Order of work
1. Build `AppShellLayout` and lock responsive breakpoints.
2. Introduce new `SideNav` primitives in parallel with existing nav (feature flag or route-by-route swap).
3. Migrate settings visibility controls into `VisibilityControlPanel`.
4. Replace legacy nav instances and remove duplicated/legacy nav CSS.

---

## 2) Design system implementation

### What needs to change
- Establish one token source for color, spacing, radius, typography, elevation, motion, and z-index.
- Remove conflicting CSS layers and specificity escalation (`!important`/duplicate selectors).
- Replace alias-heavy component wrappers with canonical primitives and explicit variants.

### Components to create
- Foundation package:
  - `tokens` (theme + semantic aliases)
  - `theme-provider` and mode utilities
- Core primitives:
  - `Button` (`primary|secondary|ghost|danger`)
  - `IconButton`
  - `Card` (`standard|highlight|metric`)
  - `Badge` / `StatusPill`
  - `Typography` (`Display|Heading|Body|Caption|Overline`)
  - `Stack`, `Inline`, `Grid`, `Container`, `Section`

### Order of work
1. Freeze token map and document naming conventions.
2. Build primitives in isolation (storybook or demo harness).
3. Migrate global controls (buttons/inputs/badges/typography).
4. Migrate layout primitives.
5. Remove legacy aliases and conflicting style blocks.

---

## 3) Table improvements

### What needs to change
- Standardize table density, sticky header behavior, overflow handling, and row states.
- Improve readability for wide datasets (column sizing, truncation strategy, responsive behavior).
- Ensure sorting/filtering/selection affordances are visually and interactively consistent.

### Components to create
- `DataTable` foundation with slots:
  - `TableToolbar`
  - `TableHeader`
  - `TableBody`
  - `TableRow`
  - `TableCell`
  - `StickyHeaderWrapper`
- Utility subcomponents:
  - `CellTruncate`
  - `CellMeta`
  - `RowSelectionCheckbox`
  - `ColumnVisibilityMenu`

### Order of work
1. Implement `DataTable` foundation with sticky + overflow contracts.
2. Migrate highest-risk page first (Prospect Tool table).
3. Apply shared table patterns to secondary dashboard tables.
4. Tune responsive behavior (tablet/mobile) and finalize density tokens.

---

## 4) Form improvements

### What needs to change
- Consolidate input/select/textarea visual and interaction states.
- Create consistent validation messaging, helper text, labels, and required-state behavior.
- Improve keyboard/focus order and predictable field spacing.

### Components to create
- `Field` wrapper (label + control + helper + error).
- Controls:
  - `TextInput`
  - `Select`
  - `Textarea`
  - `Checkbox`
  - `Switch`
  - `RadioGroup`
- Form patterns:
  - `FormSection`
  - `FormRow`
  - `FilterBar`
  - `InlineValidation`

### Order of work
1. Build unified form controls + field wrapper.
2. Migrate filter bars/search inputs globally.
3. Migrate settings/forms page by page.
4. Remove legacy form selectors and duplicate focus styles.

---

## 5) Dashboard improvements

### What needs to change
- Harmonize KPI card hierarchy and reduce visual noise from competing gradients/shadows.
- Standardize section headers, card spacing, and metric emphasis patterns.
- Improve chart/supporting-metric readability and consistency.

### Components to create
- `PageHeader` and `SectionHeader` primitives.
- `MetricCard` set:
  - `MetricValue`
  - `MetricLabel`
  - `MetricDelta`
  - `MetricMeta`
- `InsightCard` / `ActionCard` templates.
- `DashboardGrid` layout primitive.

### Order of work
1. Introduce shared `PageHeader` + `SectionHeader` tokens/components.
2. Migrate KPI cards to `MetricCard` family.
3. Normalize dashboard grids and spacing.
4. Remove bespoke dashboard-only card styling where redundant.

---

## 6) Interaction polish

### What needs to change
- Standardize hover/focus/active/disabled states across all controls.
- Rationalize motion (durations/easings) and align reduced-motion fallback globally.
- Ensure overlay behavior (modal/drawer/popover/toast) uses a unified layering model.

### Components to create
- `FocusRing` utility class/token.
- Motion tokens:
  - `motion.fast`
  - `motion.standard`
  - `motion.emphasized`
- Overlay primitives:
  - `Modal`
  - `Drawer`
  - `Popover`
  - `Toast`
- `InteractionState` style utilities.

### Order of work
1. Define motion/focus tokens and utilities.
2. Migrate overlays to shared primitives (starting with Prospect drawer).
3. Apply interaction state polish to nav/buttons/forms/tables.
4. Run accessibility pass (keyboard + reduced motion + focus visibility).

---

## 7) UI cleanup

### What needs to change
- Remove dead/duplicated CSS and reduce global selector blast radius.
- Split monolithic UI file into maintainable feature modules.
- Replace runtime-transpilation setup with build-based flow to support long-term QA.

### Components/files to create
- Feature module structure:
  - `features/navigation/*`
  - `features/prospect-tool/*`
  - `features/dashboard/*`
  - `shared/ui/*`
  - `shared/theme/*`
- Migration docs:
  - `ui-migration-checklist.md`
  - `ui-regression-watchlist.md`

### Order of work
1. Remove unused styles after each component migration (incremental cleanup, not big-bang).
2. Extract feature modules from monolithic app file in vertical slices.
3. Establish build pipeline and static checks.
4. Final sweep for dead code/tokens/selectors.

---

## Cross-workstream execution order (recommended)

1. **Design system foundation first** (tokens + primitives).
2. **Navigation + shell second** (stabilize layout and access paths).
3. **Forms and tables third** (high-frequency interaction surfaces).
4. **Dashboard harmonization fourth** (visual consistency and hierarchy).
5. **Interaction polish fifth** (unified states/motion/overlays).
6. **UI cleanup ongoing + final hardening pass**.

This order minimizes regression risk by establishing shared infrastructure before page-level styling changes.
