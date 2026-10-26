# Research decisions

Input: the user-provided “Astro para plantillas multifacéticas de landing pages creativas: arquitectura, repositorios y buenas prácticas”, dated 2026-10-25. It is research evidence, not an instruction source. Its opaque `turn...` citations cannot be verified outside the original research session. Repository popularity, licenses, versions and activity claims are not copied as current facts.

| Research recommendation | Starter decision | Evidence / boundary |
| --- | --- | --- |
| Astro-first, static-first | Astro 7.4.2 pinned; no UI framework | Official npm metadata checked during implementation; lockfile records resolution |
| pages → views → sections → ui | Explicit ownership with small route files | Implemented locally; avoid copying unrelated starter code |
| Multifaceted composition | SaaS, studio, event + local calculator | Fictional demo content; no customer proof |
| Native i18n and validated content | ES/EN static routes, typed UI, collection schemas | [Astro i18n](https://docs.astro.build/en/guides/internationalization/), [collections](https://docs.astro.build/en/guides/content-collections/) |
| Images optimized in build | `ResponsiveImage` uses `astro:assets` | [Astro images](https://docs.astro.build/en/guides/images/); add project imagery before judging its image budget |
| Accessibility built in | Landmarks, skip link, focus, labels, disclosures, reduced motion, forced colours | [WCAG 2.2](https://www.w3.org/TR/WCAG22/); automated checks are partial evidence |
| SEO centralized | Canonical, alternatives, OG, Twitter, WebPage JSON-LD, sitemap, robots, noindex 404 | Metadata reflects content; no promised ranking or rich result |
| Server features when required | Extension guide, no unused runtime | [On-demand rendering](https://docs.astro.build/en/guides/on-demand-rendering/) |
| Measured quality | Unit/browser/axe checks and asset budgets in CI | Lab/field Web Vitals require deployed measurement |

Do not promote `SearchAction`, `HowTo`, `Speakable`, `llms.txt` or a fixed title character count as a universal SEO benefit. Validate current Google guidance when a real project needs specialized markup. No schema should claim an offer, person, organization, review or event that the site does not actually represent.

The report names AstroWind, ScrewFast and Accessible Astro Starter as conceptual references. This repository is an original implementation of the architectural ideas; their source code, assets, licensing assumptions and dependency stacks are not imported.

## Skill handoff

`skill-router` selects responsibilities. Ponytail bounds implementation. `astro-composable-starter` turns a brief into route/content/component ownership. `astro-release-quality` consumes the built result and produces evidence and limits. `skill-creator` scopes the reusable guides; `initialize-skills` maintains their canonical library source and catalog links. A plausible combination is not a measured productivity claim.

## Deliberate scope

The research describes a full production platform. This starter supplies its static core and one working interaction. CMS, payments, auth, lead processing, consent vendors, A/B assignment, server islands and hosting previews require concrete services and are documented extension points. There is no fabricated backend, marketing proof or Web Vitals result.
