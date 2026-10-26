# Recipes

## Add a landing

Copy the two locale entries for an existing recipe in `src/content/landings/`. Keep `slug` identical between translations, set `locale`, and select an existing `kind` for its composition. For a distinct visual direction extend the schema's `kind` enum and its styles. The generated route is `/landing/<slug>/` and `/en/landing/<slug>/`; no copied route files are needed.

The supported sections are `features`, `faq`, `cta`. Their order is content-owned; their markup is component-owned. Use direct Astro composition when a page needs rich bespoke markup. The hero accepts named `actions` and `media` slots.

## Add imagery

Put a real, licensed bitmap under `src/assets/`, import it in a view and pass its `ImageMetadata` to `ResponsiveImage`. Use meaningful alt text, or an empty alt for a decorative image. Choose sensible source dimensions and test the generated formats. `public/` is for unchanged files; create it when you need icons, downloads or verification files. There are no bundled photos, external fonts or claimed image performance measurements.

## Build a small tool

Use `AppView` and `Estimator` as the example: labels, native validity constraints, an announced result, a pure tested calculation, and no network dependency. The output is invalidated when inputs change. This demonstration stores no values and makes no financial promises. For a dashboard, reuse the layout and primitives; introduce feature modules only as distinct features emerge.

Use a framework island when stateful interaction warrants its runtime. Install one integration, give it the narrowest useful boundary, and choose `client:visible`/`client:idle` for noncritical widgets or `client:load` for essential immediate interaction. Client-only interaction is never an authorization boundary.

## Capture leads or use a CMS

A static form needs a real POST endpoint. An Astro Action or on-demand route needs a compatible server adapter and deployment runtime. Keep landing pages prerendered where possible. Validate and bound input on the server, rate-limit submissions, handle spam and upstream failures, and report success only after durable acceptance. Keep API tokens server-side; do not put them in PUBLIC variables or island props. Never add a pretend success handler.

Use a validated build-time content loader for publishing-time CMS data. Consider live/request-time content only for genuine freshness or personalization requirements. Verify current Astro and adapter APIs before implementing. Private responses must not be publicly cached.

## Add analytics or experiments

Choose events from the product's real funnel first. Keep vendor calls in one module rather than inside every section. Load optional trackers only after the project's applicable consent decision; withdrawing consent must stop further tracking. This starter loads no trackers and therefore needs no decorative consent banner. Store no sensitive visitor data in browser storage. For a headline experiment requiring stable variants, evaluate assignment on the server/edge and account for cache isolation, flicker and attribution.
