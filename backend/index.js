import { fileURLToPath } from 'node:url'
import process from 'node:process'
import 'dotenv/config'
import cors from 'cors'
import express from 'express'

const app = express()
const allowedOrigin = process.env.FRONTEND_ORIGIN ?? 'http://localhost:5173'

const phases = [
  {
    title: 'Define the scope',
    tasks: [
      'Agree on what success looks like',
      'List requirements, constraints, and open questions',
    ],
  },
  {
    title: 'Build the plan',
    tasks: [
      'Break the goal into deliverable work',
      'Identify dependencies and assign owners',
    ],
  },
  {
    title: 'Build and validate',
    tasks: [
      'Complete the highest-priority work',
      'Review progress and test the result',
    ],
  },
  {
    title: 'Launch and learn',
    tasks: [
      'Prepare and launch the deliverable',
      'Review outcomes and capture follow-up work',
    ],
  },
]

export function validatePlanInput(input = {}) {
  if (!input || typeof input !== 'object' || Array.isArray(input)) {
    return { error: 'Request body must be a JSON object.' }
  }

  const { goal, durationWeeks = 6, teamSize = 3 } = input

  if (typeof goal !== 'string' || goal.trim().length < 10 || goal.trim().length > 500) {
    return { error: 'Goal must be between 10 and 500 characters.' }
  }

  if (!Number.isInteger(durationWeeks) || durationWeeks < 4 || durationWeeks > 16) {
    return { error: 'Duration must be a whole number between 4 and 16 weeks.' }
  }

  if (!Number.isInteger(teamSize) || teamSize < 1 || teamSize > 50) {
    return { error: 'Team size must be a whole number between 1 and 50.' }
  }

  return { goal: goal.trim(), durationWeeks, teamSize }
}

export function generatePlan({ goal, durationWeeks, teamSize }) {
  const milestones = phases.map((phase, index) => {
    const startWeek = Math.ceil((durationWeeks * index) / phases.length) + 1
    const endWeek = Math.ceil((durationWeeks * (index + 1)) / phases.length)

    return {
      title: phase.title,
      startWeek,
      endWeek,
      tasks: phase.tasks.map((title) => ({ title, status: 'todo' })),
    }
  })

  const risks = []
  if (durationWeeks <= 4) {
    risks.push('The short timeline leaves little room for delays or unexpected work.')
  }
  if (teamSize === 1) {
    risks.push('A single-person team may need to reduce scope to protect the timeline.')
  }

  return { goal, durationWeeks, teamSize, milestones, risks }
}

app.use(cors({ origin: allowedOrigin }))
app.use(express.json({ limit: '10kb' }))

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok' })
})

app.post('/api/plans', (req, res) => {
  const input = validatePlanInput(req.body)
  if ('error' in input) {
    return res.status(400).json({ error: input.error })
  }

  return res.status(201).json({ plan: generatePlan(input) })
})

app.use((error, _req, res, _next) => {
  void _next

  if (error instanceof SyntaxError && 'body' in error) {
    return res.status(400).json({ error: 'Request body must be valid JSON.' })
  }

  if (error?.type === 'entity.too.large') {
    return res.status(413).json({ error: 'Request body is too large.' })
  }

  console.error('Unhandled API error:', error)
  return res.status(500).json({ error: 'Internal server error.' })
})

export default app

if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) {
  const port = Number(process.env.PORT) || 3001
  app.listen(port, () => {
    console.log(`Flowly API listening on port ${port}`)
  })
}
