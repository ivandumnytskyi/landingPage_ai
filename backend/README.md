# Flowly backend

A small, stateless Express API that turns a project goal into a starter plan. It uses deterministic templates and simple rules, with no AI provider, external API, or database.

## Run locally

```sh
npm install
cp .env.example .env
npm run dev
```

The API listens on `http://localhost:3001` by default. The only optional setting is `FRONTEND_ORIGIN`, which should be the exact browser origin allowed to call the API.

## Endpoints

- `GET /api/health` — health check
- `POST /api/plans` — JSON body: `{ "goal": "Launch a self-serve billing flow", "durationWeeks": 6, "teamSize": 3 }`

`goal` is required (10–500 characters). `durationWeeks` defaults to 6 and must be between 4 and 16; `teamSize` defaults to 3 and must be between 1 and 50. The response contains four suggested milestones, tasks, and basic timeline/team-size risks. Plans are generated on request and are not saved.

## Deploy to Vercel

Create a separate Vercel project for this repository and set its **Root Directory** to `backend`. Vercel will detect the Express app automatically. Set `FRONTEND_ORIGIN` to the exact origin of the deployed frontend, then deploy. No provider keys or database configuration are needed.

After deployment, the endpoints are available at `/api/health` and `/api/plans` on the backend's Vercel URL.
