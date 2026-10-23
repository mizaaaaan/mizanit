# Mizan's Portfolio

Personal portfolio and interactive resume for Md Mizanur Rahman.

## Run locally

Install Node.js, then run these commands from the project folder:

```sh
npm install
npm run dev
```

Open the local address printed by Vite. The site is built with React, TypeScript,
TanStack Start, and Tailwind CSS.

## Project map

- `src/routes/` contains the home page and resume routes.
- `src/components/home-page.tsx` assembles the portfolio sections.
- `src/components/resume-studio.tsx` renders the filterable resume.
- `src/lib/profile.ts` holds the portfolio content, links, and project list.
- `src/styles.css` contains the design tokens, global styles, and animations.
- `public/` contains images, the resume PDF, and site icons.

## Useful commands

- `npm run dev` starts the local development server.
- `npm run build` creates a production build.
- `npm run typecheck` checks TypeScript types.
- `npm run lint` checks source code style and common mistakes.

Live site: <https://mizanit.mizan962035.workers.dev/>
