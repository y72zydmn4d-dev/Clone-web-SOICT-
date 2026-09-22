# SoICT frontend clone

Local, frontend-only recreation of the public SoICT website. It reproduces the visual hierarchy, responsive navigation, page templates, local routing, language switch, carousel-style hero, listings, people cards, pagination controls, and a back-to-top control.

## Technology

React with Vite and a single responsive CSS stylesheet. No backend, database, or API server is required.

## Run locally

```bash
npm install
npm run dev
```

The project configures its npm cache inside `work/npm-cache`, so installation does not depend on a machine-wide npm cache.

Build a production bundle with:

```bash
npm run build
```

## Routing and content

The application uses browser paths directly, including Vietnamese routes such as `/dao-tao/gioi-thieu-chung` and English counterparts beneath `/en/`. Common listing, information, article, and staff templates are selected based on the current path. Menu, page labels, current public news, and event data are held in `src/data.js`.

## Assets and language

Source-derived logo, banner, news imagery, footer image, and local font files are in `public/assets/`. The language control switches between `/` and `/en/`; English navigation wording was collected from the official public English site.
