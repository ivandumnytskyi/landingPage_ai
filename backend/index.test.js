import assert from 'node:assert/strict'
import { test } from 'node:test'
import { generatePlan, validatePlanInput } from './index.js'

test('validates a goal and applies default duration and team size', () => {
  assert.deepEqual(
    validatePlanInput({ goal: ' Launch a self-serve billing flow ' }),
    { goal: 'Launch a self-serve billing flow', durationWeeks: 6, teamSize: 3 },
  )
})

test('rejects a missing or too-short goal', () => {
  assert.deepEqual(validatePlanInput({}), {
    error: 'Goal must be between 10 and 500 characters.',
  })
  assert.deepEqual(
    validatePlanInput({ goal: 'Ship it' }),
    { error: 'Goal must be between 10 and 500 characters.' },
  )
})

test('rejects non-object request bodies', () => {
  assert.deepEqual(validatePlanInput(null), {
    error: 'Request body must be a JSON object.',
  })
  assert.deepEqual(validatePlanInput([]), {
    error: 'Request body must be a JSON object.',
  })
})

test('rejects invalid duration and team size', () => {
  assert.deepEqual(
    validatePlanInput({ goal: 'Launch a billing flow', durationWeeks: 3 }),
    { error: 'Duration must be a whole number between 4 and 16 weeks.' },
  )
  assert.deepEqual(
    validatePlanInput({ goal: 'Launch a billing flow', teamSize: 0 }),
    { error: 'Team size must be a whole number between 1 and 50.' },
  )
})

test('generates four ordered milestones and relevant risks', () => {
  const plan = generatePlan({
    goal: 'Launch a self-serve billing flow',
    durationWeeks: 4,
    teamSize: 1,
  })

  assert.equal(plan.milestones.length, 4)
  assert.deepEqual(
    plan.milestones.map(({ startWeek, endWeek }) => [startWeek, endWeek]),
    [[1, 1], [2, 2], [3, 3], [4, 4]],
  )
  assert.equal(plan.milestones.flatMap(({ tasks }) => tasks).length, 8)
  assert.equal(plan.risks.length, 2)
})
