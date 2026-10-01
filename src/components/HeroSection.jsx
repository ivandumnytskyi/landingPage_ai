import * as stylex from '@stylexjs/stylex'
import { Arrow, DashboardPreview, check, styles } from './shared'

export default function HeroSection() {
  return (
    <section {...stylex.props(styles.container, styles.section, styles.hero)}>
      <div {...stylex.props(styles.heroCopy)}>
        <div {...stylex.props(styles.announcement)}>
          <span {...stylex.props(styles.badge)}>New</span>
          <span>AI planning that works from your actual goals</span>
        </div>
        <h1 {...stylex.props(styles.heroTitle)}>Your goal, turned into a plan your team can ship.</h1>
        <p {...stylex.props(styles.heroText)}>Flowly turns a clear outcome into milestones, tasks, owners, dependencies, and risks, then keeps the plan current as work moves.</p>
        <div {...stylex.props(styles.heroActions)}>
          <a href="#pricing" {...stylex.props(styles.button, styles.buttonPrimary, styles.buttonLarge, styles.heroActionsButton)}>Build my first plan <Arrow /></a>
          <a href="#workflow" {...stylex.props(styles.button, styles.buttonLarge, styles.heroActionsButton)}>See how it works</a>
        </div>
        <div {...stylex.props(styles.assurances)}>
          <span {...stylex.props(styles.assurance)}><img src={check} alt="" {...stylex.props(styles.tinyIcon)} />Free for 14 days</span>
          <span {...stylex.props(styles.assurance)}><img src={check} alt="" {...stylex.props(styles.tinyIcon)} />No credit card</span>
          <span {...stylex.props(styles.assurance)}><img src={check} alt="" {...stylex.props(styles.tinyIcon)} />Setup in 5 minutes</span>
        </div>
        <p {...stylex.props(styles.assuranceMobile)}>14 days free · No credit card · Setup in 5 minutes</p>
      </div>
      <div {...stylex.props(styles.productStage)}>
        <span aria-hidden="true" {...stylex.props(styles.stageRuleV)} />
        <span aria-hidden="true" {...stylex.props(styles.stageRuleH)} />
        <DashboardPreview />
      </div>
    </section>
  )
}
