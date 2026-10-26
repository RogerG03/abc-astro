# Architecture

```text
src/
  pages/                 URLs, locale selection and getStaticPaths
    en/                  Matching English routes
    landing/[slug].astro Routes generated from validated content
  views/                 Home, landing composition, small application
  layouts/               Document shell, navigation, theme initialization
  components/
    sections/            Hero, features, FAQ, closing action
    ui/                  Action, theme control, responsive image
    seo/                 Metadata and escaped JSON-LD
    islands/             Interactive estimator with a native Astro script
  content/landings/       Local JSON entries by language
  content.config.ts      Loader and schemas; invalid content fails build
  i18n/                  Complete typed interface dictionaries
  lib/                   Pure routing and calculation logic
  styles/                Brand tokens and global responsive composition
tests/
  unit/                  Arithmetic and routing boundaries
  e2e/                   Built-site behaviour, a11y and viewport checks
scripts/                 Build asset budgets
docs/                    Decisions, recipes and release constraints
.github/workflows/       Reproducible validation
```

Dependencies point downward: pages select data and views; views compose sections; sections use primitives. The shared layout owns document-level SEO, language, navigation and theme. UI primitives do not fetch content or make business decisions. `lib` stays independent of Astro rendering.

The `sections` array is a small explicit vocabulary, not a plug-in registry. Add only blocks used by a real recipe. The three landing variants share markup but vary alignment, colour treatment and section order. A genuinely different product flow deserves a new view rather than another boolean on every component.

Plain `.astro` components emit static HTML. The estimator uses a small bundled script; `islands` is a responsibility label here, not a claim of React hydration. Native FAQ disclosures need no script. No `client:load` or application runtime is shipped for static blocks.

Spanish lives at `/`, English at `/en/`. A page canonicalizes to itself; language alternatives point at matching routes. Do not advertise a locale until its content and route exist. Missing translations fail through the typed interface dictionary; landing translation parity is checked in the built-site tests.

No empty `services`, `repositories`, `adapters`, `stores`, `actions` or `api` folders are included. Create a boundary only when it has an actual implementation and caller.
