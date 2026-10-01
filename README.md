# Flowly

Flowly is a responsive landing-page concept for an AI project-planning product. It was built with React, Vite, and StyleX, based on a Figma design reference.

## AI-Assisted Development

I used GitHub Copilot as an AI coding assistant during development. Copilot helped draft and refine parts of the implementation, while I reviewed and changed the results, organized the page into section components, and made the final design and implementation decisions. I used AI to speed up the work while keeping control of the product direction and code.

The Figma design was also created with AI assistance, then reviewed and refined to match my intended visual direction.

This project is a demonstration of using AI as part of a frontend workflow, not an automatically generated, unreviewed result.

## Features

- Responsive landing page with product, workflow, benefits, integrations, customer story, pricing, FAQ, and footer sections
- Mobile navigation menu and interactive FAQ accordion
- StyleX styling with shared design styles and local Figma-exported assets
- Reduced-motion support for entrance animations

This is a frontend portfolio concept. Product actions and account flows are illustrative and are not connected to a backend. Brand marks, customer quotes, and performance figures are sample content, not verified customer claims.

## Tech Stack

- React
- Vite
- StyleX
- ESLint

## Run Locally

```sh
npm install
npm run dev
```

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
