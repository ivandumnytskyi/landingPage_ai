import * as stylex from '@stylexjs/stylex'
import { styles } from './shared'

export default function TrustSection() {
  return (
    <section aria-label="Teams using Flowly" {...stylex.props(styles.container, styles.trust)}>
      <p {...stylex.props(styles.trustLabel)}>Small software teams plan and ship with Flowly</p>
      <div {...stylex.props(styles.logos)}>
        <span {...stylex.props(styles.logoWord)}>PATCHWORK</span>
        <span {...stylex.props(styles.logoWord)}>Orbit</span>
        <span {...stylex.props(styles.logoWord)}>KINETIC</span>
        <span {...stylex.props(styles.logoWord)}>Cobalt</span>
        <span {...stylex.props(styles.logoWord)}>Daybreak</span>
        <span {...stylex.props(styles.logoWord)}>STACKLINE</span>
        <span {...stylex.props(styles.trustMetric)}><strong {...stylex.props(styles.metricStrong)}>1,200+</strong><span {...stylex.props(styles.metricLabel)}>plans shipped</span></span>
      </div>
    </section>
  )
}
