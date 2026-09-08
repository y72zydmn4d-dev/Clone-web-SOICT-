# SOICT academic portal

A frontend-only Next.js experience inspired by an academic technology school website. All content is typed mock data under `data/`; no API, database, authentication service, or backend is used.

## Run locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

For a production check:

```bash
npm run build
npm start
```

## Included interactions

- Persistent light/dark mode and news/event bookmarks through `localStorage`
- Responsive sticky navigation and mobile drawer
- News search, category filtering, sorting, pagination, article details
- Event search and filters, event details, add-to-calendar affordance
- People/program search and filters, people and program details
- Global multi-content search, research detail panels, contact form confirmation
