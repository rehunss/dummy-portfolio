# Arka Pradana — Marketing Portfolio

A cinematic, English-language portfolio for a fictional brand & growth strategist. Built as a showcase for website design and development services.

## Run locally

Requires Node.js 22.12+ (verified with Node 24.22.1).

```sh
npm ci
npm run dev
```

In a cloud sandbox with a read-only home directory, use `npm ci --cache /tmp/arka-npm-cache`. Astro telemetry is disabled in the scripts so startup does not need to write to the home directory. The development server defaults to port 4321 and listens on all interfaces.

```sh
npm run check
npm run build
npm run preview
npm test
```

Playwright uses system Chromium at `/usr/bin/chromium`. Set `CHROMIUM_PATH` to your Chromium/Chrome executable on a different machine. Tests start the development server automatically if port 4321 is not already serving the app. Browser reports are generated in ignored directories.

## Experience

- Responsive editorial homepage with locally hosted fonts and original generated imagery.
- Native scrolling with a reversible GSAP sequence: insight → idea → launch.
- Three detailed campaign case studies: Aeru, Kala Form and Sora Coast.
- Mobile layouts, keyboard navigation, reduced-motion alternatives and readable content without JavaScript.
- Project brief builder that downloads a text file locally. No backend, personal-data transmission, email delivery or fictional social accounts.
- Demo disclosure, synthetic marketing dataset and a custom 404 page.

## Content and assets

Edit project content in `src/data/projects.ts`, homepage copy in `src/pages/index.astro`, visual tokens in `src/styles/global.css`, and scroll choreography in `src/scripts/hero-motion.ts`.

The person, brands, career, research and campaign scenarios are fictional. The portrait and campaign photos are AI-generated concept artwork. Scenario A/B values explain a measurement model and do not represent campaign results. Campaign calls to action inside case-study mockups are visual examples.

Font licenses are included in `public/fonts/`. Barlow Condensed and Manrope use SIL OFL 1.1. Production WOFF2 files come from the pinned Fontsource packages. GSAP is distributed under its [standard license](https://gsap.com/standard-license/), not the MIT license; its copyright and license headers are retained in the installed library/build. See [asset provenance](docs/ASSET-CREDITS.json) and [portrait source](docs/reference-assets/images/SOURCES.json).

## Validation and handoff

See [implementation and verification](docs/IMPLEMENTATION.md) for test outcomes, local Lighthouse results, screenshots, and remaining deployment details.

The static output is `dist/`. Before public deployment, configure the real domain/site URL, use absolute Open Graph image URLs and canonical URLs, and add the owner's real business contact if desired. Configure the host to serve `404.html` for unknown routes. Publishing a website or the cloud environment is a separate action.

Original planning: [project plan](docs/PROJECT-PLAN.md), [content brief](docs/CONTENT-BRIEF.md), [asset plan](docs/ASSET-PLAN.md).
