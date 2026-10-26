# Quality and release

## Automated checks

`npm run verify` must pass before release: Astro/TypeScript, boundary unit tests, build and asset budget. `npm run test:e2e` tests built pages in Chromium desktop and mobile emulation with axe checks. CI installs Chromium explicitly.

The budget sums gzip bytes for **all generated** JS and CSS assets and adds the largest page's inline executable JavaScript: JS ≤80 KiB, CSS ≤60 KiB. JSON-LD is excluded. This is deliberately stricter than the research's per-route proposal for a small starter. It checks transfer-size proxies, not execution time, image cost, Lighthouse or field Web Vitals. Expand the budget method to page-specific assets if the app grows; do not silently raise the limits.

Field targets from the research (LCP ≤2.5s, INP ≤200ms, CLS ≤0.1 at p75) are goals, not measured outcomes here. [Web Vitals](https://web.dev/articles/vitals) explains the distinction. Measure the deployed site on representative connections and devices. No Lighthouse ≥90 gate or preview deployment service is claimed in this initial template.

## Manual checks for a real project

- Navigate without a mouse; inspect focus, skip link, disclosures, form errors and the language/theme controls.
- Check zoom/reflow, long translated copy, reduced motion, forced colours and a real touch device. Mobile browser emulation does not replace hardware.
- Check the calculator's announcements with a screen reader. Native validation can vary by browser.
- Verify canonical/hreflang/sitemap origins and HTTP 404 on the actual host. Remove demo pages you will not publish and update navigation, alternatives and tests together.
- Audit licenses of new assets and providers; replace every fictional claim and CTA destination.
- Configure headers (CSP, HSTS where appropriate, MIME protection and referrer policy) on the actual host. An inline pre-paint theme initializer needs a CSP hash/nonce or a policy-compatible alternative. Do not claim headers from a provider-neutral static build.
- Review the production dependency audit; rerun after dependency changes. No scanner proves absence of vulnerabilities.

## Rendering record

The demo uses the `type-only-statement` direction (seed 1965420883) as a starter catalogue, with native system typography instead of a remote font. Its live interaction is the calculator. The subject's three compositions are the visual material. No invented product screenshots, found photographs, videos, awards or customer claims are included. Mandatory gallery-style imagery/motion quotas would add irrelevant assets to this reusable starter, so these are evaluated as limitations rather than product requirements.
