import * as stylex from '@stylexjs/stylex'
import { Arrow, Eyebrow, route, refresh, triangleAlert, styles } from './shared'

const benefitItems = [
  [route, 'Plans that explain themselves', 'Every task traces back to an outcome, so tradeoffs stay visible.'],
  [triangleAlert, 'Risks surfaced early', 'Flowly flags unclear ownership, tight dependencies, and scope creep.'],
  [refresh, 'Always-current context', 'Status, priorities, and dates stay in sync as your team works.'],
]

export default function BenefitsSection() {
  return (
    <section {...stylex.props(styles.container, styles.section, styles.white, styles.benefits)}>
      <div {...stylex.props(styles.benefitsHead)}>
        <div {...stylex.props(styles.sectionIntro)}>
          <Eyebrow>Less project overhead</Eyebrow>
          <h2 {...stylex.props(styles.sectionTitle)}>Clarity without a full-time project manager.</h2>
          <p {...stylex.props(styles.sectionText)}>Flowly gives focused teams the planning discipline of a larger organization, without the ceremony.</p>
        </div>
        <p {...stylex.props(styles.audience)}>Built for teams of 3–30 shipping web, mobile, and platform products.</p>
      </div>
      <div {...stylex.props(styles.benefitGrid)}>
        {benefitItems.map(([icon, title, text], index) => (
          <article key={title} {...stylex.props(styles.benefit, index === 0 && styles.benefitFirst)}>
            <span {...stylex.props(styles.benefitIcon)}><img src={icon} alt="" {...stylex.props(styles.icon20)} /></span>
            <h3 {...stylex.props(styles.benefitTitle)}>{title}</h3>
            <p {...stylex.props(styles.benefitText)}>{text}</p>
            <a href="#pricing" {...stylex.props(styles.textLink)}>Explore feature <Arrow /></a>
          </article>
        ))}
      </div>
    </section>
  )
}
