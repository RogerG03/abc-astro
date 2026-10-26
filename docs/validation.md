# Validation record

Checked on 2026-10-25 (America/Managua), Windows, Node 24.20.0, Astro 7.4.2.

| Check | Observed result |
| --- | --- |
| `npm run check` | 0 errors, 0 warnings, 0 hints |
| `npm test` | 3 tests passed: arithmetic bounds, invalid numbers, localized paths |
| `npm run build` | 11 pages, including both languages and 404 |
| `npm run test:build` | Generated links and language alternatives resolve |
| `npm run budget` | 760 gzip bytes JS including the largest page's inline scripts; 1,899 gzip bytes CSS |
| `npm run test:e2e` | 30 passed: Chromium desktop/mobile, route metadata, overflow, axe, calculation, themes, blocked storage, no-script content |
| `npm install` audit | 0 reported vulnerabilities in the resolved dependency tree |
| Alternate production origin | Build with `SITE_URL=https://abc.example` emitted that origin, indexable metadata and allowing robots; default build restored afterwards |
| Design source lint | 0 failures, 0 warnings |
| Visual review | Catalogue at 1440/768/390px; light calculator/studio and mobile event inspected |

The design inspector's unmodified gallery rubric reports `few-pictures` and `still-page` failures, plus no-video and cream-text warnings. Those are explicit limits of this typography-led starter, not passing checks. No unrelated imagery or entrance choreography was added to satisfy a gallery quota. The implementation has no fetched media or font credits to supply.

ROUND 1

Seen in one second: the large Spanish composition headline.
Idea: ABC's selectable landing compositions become the catalogue's coloured working material.
Live thing: follow a recipe or calculate hours times rate.
Layout words: hero=statement / catalogue=three choices / approach=split / FAQ=disclosure.
Scores: design 6.5 · usability 8 · creativity 6 · content 7 → overall 7.0 before the inspector cap; **6.0 with its unresolved failures**.
Caps applied: missing imagery and entrance motion; this remains a starter rather than a finished branded marketing site.
Top three limits: no project-specific media, no signature motion, and deliberately sample business content. Their appropriate fix is to supply a real brand brief, assets and claims when deriving a site; adding fictional proof or arbitrary assets here would obscure the starter's purpose.

No real-device, screen-reader, deployed-header, Lighthouse or field Web Vitals result is claimed. CI is configured separately; a passing local run is not a remote CI acknowledgment.
