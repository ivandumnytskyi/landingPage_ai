import { useState } from 'react'
import * as stylex from '@stylexjs/stylex'
import { Arrow, styles } from './shared'

const apiUrl = (import.meta.env.VITE_API_URL || 'http://localhost:3001').replace(/\/$/, '')

export default function CallToActionSection() {
  const [goal, setGoal] = useState('')
  const [durationWeeks, setDurationWeeks] = useState('6')
  const [teamSize, setTeamSize] = useState('3')
  const [plan, setPlan] = useState(null)
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  async function handleSubmit(event) {
    event.preventDefault()
    setError('')
    setPlan(null)
    setIsLoading(true)

    try {
      const response = await fetch(`${apiUrl}/api/plans`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          goal,
          durationWeeks: Number(durationWeeks),
          teamSize: Number(teamSize),
        }),
      })

      let data
      try {
        data = await response.json()
      } catch {
        throw new Error('The server returned an invalid response. Please try again.')
      }

      if (!response.ok) {
        throw new Error(data.error || 'Unable to create your plan. Please try again.')
      }

      setPlan(data.plan)
    } catch (requestError) {
      setError(requestError instanceof Error
        ? requestError.message
        : 'Unable to reach the planning service. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section {...stylex.props(styles.container, styles.section, styles.cta)}>
      <div {...stylex.props(styles.ctaCopy)}>
        <span {...stylex.props(styles.ctaLabel)}>Start with one goal</span>
        <h2 {...stylex.props(styles.ctaTitle)}>Your next project already has a clearer path.</h2>
      </div>
      <div {...stylex.props(styles.ctaAction)}>
        <p {...stylex.props(styles.ctaText)}>Tell Flowly what your team needs to achieve. Get a plan you can use before your next standup.</p>
        <form onSubmit={handleSubmit} {...stylex.props(styles.planForm)}>
          <label {...stylex.props(styles.planLabel)}>
            Project goal
            <input
              required
              minLength={10}
              maxLength={500}
              value={goal}
              onChange={(event) => setGoal(event.target.value)}
              placeholder="e.g. Launch a self-serve billing flow"
              {...stylex.props(styles.planInput)}
            />
          </label>
          <div {...stylex.props(styles.planFormRow)}>
            <label {...stylex.props(styles.planLabel)}>
              Duration (weeks)
              <input
                type="number"
                min="4"
                max="16"
                required
                value={durationWeeks}
                onChange={(event) => setDurationWeeks(event.target.value)}
                {...stylex.props(styles.planInput)}
              />
            </label>
            <label {...stylex.props(styles.planLabel)}>
              Team size
              <input
                type="number"
                min="1"
                max="50"
                required
                value={teamSize}
                onChange={(event) => setTeamSize(event.target.value)}
                {...stylex.props(styles.planInput)}
              />
            </label>
          </div>
          <button type="submit" disabled={isLoading} {...stylex.props(styles.button, styles.buttonLarge, styles.planSubmit)}>
            {isLoading ? 'Building your plan…' : 'Build my plan'}
            {!isLoading && <Arrow />}
          </button>
          {error && <p role="alert" {...stylex.props(styles.planError)}>{error}</p>}
        </form>
        <span {...stylex.props(styles.ctaFoot)}>A simple starter plan, generated instantly.</span>
      </div>
      {plan && (
        <section aria-live="polite" aria-labelledby="plan-result-title" {...stylex.props(styles.planResult)}>
          <div {...stylex.props(styles.planResultHeader)}>
            <span {...stylex.props(styles.planResultEyebrow)}>Your starter plan · {plan.durationWeeks} weeks · {plan.teamSize} people</span>
            <h3 id="plan-result-title">A first path toward your goal</h3>
            <p {...stylex.props(styles.planResultGoal)}>{plan.goal}</p>
          </div>
          <div {...stylex.props(styles.planMilestones)}>
            {plan.milestones.map((milestone) => (
              <article key={milestone.title} {...stylex.props(styles.planMilestone)}>
                <span {...stylex.props(styles.planWeek)}>
                  {milestone.startWeek === milestone.endWeek
                    ? `Week ${milestone.startWeek}`
                    : `Weeks ${milestone.startWeek}–${milestone.endWeek}`}
                </span>
                <h4 {...stylex.props(styles.planMilestoneTitle)}>{milestone.title}</h4>
                <ul {...stylex.props(styles.planTaskList)}>
                  {milestone.tasks.map((task) => <li key={task.title}>{task.title}</li>)}
                </ul>
              </article>
            ))}
          </div>
          {plan.risks.length > 0 && (
            <div {...stylex.props(styles.planRisks)}>
              <strong>Things to consider</strong>
              {plan.risks.map((risk) => <p key={risk}>{risk}</p>)}
            </div>
          )}
        </section>
      )}
    </section>
  )
}
