import * as stylex from '@stylexjs/stylex'
import { Eyebrow, sparkles, styles } from './shared'

const workflowSteps = [
  ['State the goal', 'Add the outcome, deadline, constraints, and the people available.'],
  ['Review the plan', 'Flowly proposes milestones, tasks, owners, dependencies, and risks.'],
  ['Ship and adapt', 'As work changes, the plan updates without losing the original intent.'],
]

export default function WorkflowSection() {
  return (
    <section id="workflow" {...stylex.props(styles.container, styles.section, styles.light, styles.workflow)}>
      <div {...stylex.props(styles.sectionIntro)}>
        <Eyebrow>Goal to plan</Eyebrow>
        <h2 {...stylex.props(styles.sectionTitle)}>Start with the outcome. Flowly handles the breakdown.</h2>
        <p {...stylex.props(styles.sectionText)}>No blank project templates. Describe what success looks like and Flowly builds a practical first draft around your team, timeline, and tools.</p>
      </div>
      <div {...stylex.props(styles.workflowBody)}>
        <div {...stylex.props(styles.steps)}>
          {workflowSteps.map(([title, text], index) => (
            <div key={title} {...stylex.props(styles.step)}>
              <span {...stylex.props(styles.stepNumber, index === 0 && styles.stepNumberActive)}>0{index + 1}</span>
              <div {...stylex.props(styles.stepCopy)}>
                <strong {...stylex.props(styles.stepTitle)}>{title}</strong>
                <p {...stylex.props(styles.stepText)}>{text}</p>
              </div>
            </div>
          ))}
        </div>
        <div {...stylex.props(styles.transformCard)}>
          <div {...stylex.props(styles.cardMeta)}><span>Your goal</span><span {...stylex.props(styles.ready)}>Ready</span></div>
          <p {...stylex.props(styles.outcome)}>“Launch self-serve billing by November 15 without delaying onboarding work.”</p>
          <div {...stylex.props(styles.divider)} />
          <div {...stylex.props(styles.generation)}>
            <span {...stylex.props(styles.generationMark)}><img src={sparkles} alt="" {...stylex.props(styles.icon20)} /></span>
            <div {...stylex.props(styles.generationCopy)}>
              <span>Building your launch plan</span>
              <div {...stylex.props(styles.generationTrack)}><div {...stylex.props(styles.generationFill)} /></div>
            </div>
            <span {...stylex.props(styles.percentage)}>78%</span>
          </div>
          <div {...stylex.props(styles.generatedMetrics)}>
            {[['4', 'milestones'], ['18', 'tasks'], ['3', 'risks'], ['6 wk', 'timeline']].map(([value, label]) => (
              <div key={label} {...stylex.props(styles.generatedMetric)}>
                <strong {...stylex.props(styles.generatedValue)}>{value}</strong>
                <span {...stylex.props(styles.generatedLabel)}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
