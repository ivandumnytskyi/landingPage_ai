import * as stylex from '@stylexjs/stylex'
import { Arrow, styles } from './shared'

export default function CallToActionSection() {
  return (
    <section {...stylex.props(styles.container, styles.section, styles.cta)}>
      <div {...stylex.props(styles.ctaCopy)}>
        <span {...stylex.props(styles.ctaLabel)}>Start with one goal</span>
        <h2 {...stylex.props(styles.ctaTitle)}>Your next project already has a clearer path.</h2>
      </div>
      <div {...stylex.props(styles.ctaAction)}>
        <p {...stylex.props(styles.ctaText)}>Tell Flowly what your team needs to achieve. Get a plan you can use before your next standup.</p>
        <a href="#pricing" {...stylex.props(styles.button, styles.buttonLarge)}>Build my first plan <Arrow /></a>
        <span {...stylex.props(styles.ctaFoot)}>Free for 14 days · No credit card</span>
      </div>
    </section>
  )
}
