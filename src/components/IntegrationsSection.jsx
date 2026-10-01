import * as stylex from '@stylexjs/stylex'
import { Eyebrow, integrationItems, lock, styles } from './shared'

export default function IntegrationsSection() {
  return (
    <section {...stylex.props(styles.container, styles.section, styles.light, styles.integrations)}>
      <div {...stylex.props(styles.sectionIntro)}>
        <Eyebrow>Fits your stack</Eyebrow>
        <h2 {...stylex.props(styles.sectionTitle)}>Bring the tools. Lose the busywork.</h2>
        <p {...stylex.props(styles.sectionText)}>Flowly reads the signals your team already creates and turns them into accurate project context.</p>
      </div>
      <div {...stylex.props(styles.integrationGrid)}>
        {integrationItems.map(([name, icon]) => (
          <div key={name} {...stylex.props(styles.integration)}>
            <span {...stylex.props(styles.integrationIcon)}><img src={icon} alt="" {...stylex.props(styles.icon17)} /></span>
            {name}
          </div>
        ))}
        <p {...stylex.props(styles.integrationNote)}><img src={lock} alt="" {...stylex.props(styles.icon18)} />Read-only by default. You choose what Flowly can update.</p>
      </div>
    </section>
  )
}
