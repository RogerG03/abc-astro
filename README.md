# ABC Astro

A static-first starter for landing pages and small browser tools. Three example compositions (SaaS, studio, event), Spanish/English routes and a working estimator share one foundation. All business names and claims in the demos are fictional.

## Start

Node **22.23.4+** (Node 24 recommended), npm 9.6.5+.

```sh
npm ci
npm run dev
```

Open `http://127.0.0.1:4321`. Try `/`, `/en/`, `/landing/saas/`, `/landing/studio/`, `/landing/event/`, `/app/` and their `/en/` equivalents. `npm run preview` serves a completed build.

## Adapt

1. Choose a composition in `src/content/landings/`. Edit both locale JSON files; their schema validates at build time.
2. Change the order of `sections` or compose Astro sections directly in a view. Add a section in the schema and the view together. Do not build an arbitrary JSON page renderer.
3. Set brand tokens in `src/styles/tokens.css`, then adjust the composition in `src/styles/global.css`. Demo variants intentionally have different hero treatments.
4. Replace fictional content and CTA destinations. Add real local images under `src/assets/` and use `ResponsiveImage` in the hero's `media` slot; set `priority` only for the LCP image. No stock photography or customer claims are bundled.
5. Set **SITE_URL** to the real origin through the build environment before publishing. The default `https://example.com` intentionally emits `noindex` and disallows crawling. A preview built with a real domain needs host-level access protection or a separate preview origin/indexing policy.
6. Run the checks below and deploy **dist/** to a static host. Configure the host to serve `404.html` with HTTP 404; disable SPA fallback. Root deployment is supported; subpath deployment needs base-aware links and an explicit audit.

`SITE_URL` is read by `astro.config.ts` from the process environment. Export it in your shell/hosting settings; copying `.env.example` alone does not set this configuration value.

```powershell
$env:SITE_URL = 'https://your-domain.com'
npm run build
```

## Validate

```sh
npm run verify
npx playwright install chromium
npm run test:e2e
```

`verify` runs Astro/TypeScript checks, unit tests, production build and gzip budgets. Browser tests cover the generated routes at desktop/mobile sizes, automated WCAG A/AA checks, calculator validation, theme persistence and no-script content. Automated checks do not certify WCAG conformance. Review keyboard navigation, screen-reader announcements, zoom, contrast and real phones for each project.

## Learn and extend

- [Architecture and ownership](docs/architecture.md)
- [Recipes and extension boundaries](docs/recipes.md)
- [Research synthesis and source decisions](docs/research.md)
- [Quality, deployment and limits](docs/quality.md)
- [Observed validation results](docs/validation.md)
- [Reusable skills](https://github.com/RogerG03/my-personals-skills): `astro-composable-starter` and `astro-release-quality`.

No client framework, CMS, backend, tracker or authentication service is installed. The calculator processes values in memory; only the theme preference is stored locally. Add a server adapter and boundary validation when the product actually requires persistent or private data.
