# Flowly

Flowly is a responsive landing-page concept for an AI project-planning product. It was built with a React + Vite frontend and an Express backend, based on a Figma design reference.

## AI-Assisted Development

I used GitHub Copilot as an AI coding assistant during development. Copilot helped draft and refine parts of the implementation, while I reviewed and changed the results, organized the page into section components, and made the final design and implementation decisions. I used AI to speed up the work while keeping control of the product direction and code.

The Figma design was also created with AI assistance, then reviewed and refined to match my intended visual direction.

This project is a demonstration of using AI as part of a frontend workflow, not an automatically generated, unreviewed result.

## Features

- Responsive landing page with product, workflow, benefits, integrations, customer story, pricing, FAQ, and footer sections
- Interactive plan builder connected to the Express backend, mobile navigation menu, and FAQ accordion
- StyleX styling with shared design styles and local Figma-exported assets
- Reduced-motion support for entrance animations

The plan builder generates a rules-based starter plan through the backend. Plans are not saved. Sign-in, billing, integrations, and other product actions remain illustrative. Brand marks, customer quotes, and performance figures are sample content, not verified customer claims.

## Tech Stack

- React
- Vite
- Express
- StyleX
- ESLint

## Run Locally

```sh
npm install
npm run dev
```

In another terminal, start the API:

```sh
cd backend
npm install
cp .env.example .env
npm run dev
```

The frontend uses `http://localhost:3001` by default. Set `VITE_API_URL` to the API origin when deploying the frontend separately. Set the backend's `FRONTEND_ORIGIN` to the frontend origin so browser requests are allowed. See [backend/README.md](./backend/README.md) for API and Vercel setup.

## Verify

```sh
npm run lint
npm run build
```

## Project Structure

```text
src/
	components/   Page sections and shared UI/styles
	assets/figma/ Local visual assets used by the page
	App.jsx       Page composition
	index.css     Global reset and font setup
```
