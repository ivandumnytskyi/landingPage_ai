import * as stylex from '@stylexjs/stylex'
import { Arrow, checkSmall, Eyebrow, priceFeatures, styles } from './shared'

export default function PricingSection() {
  return (
    <section id="pricing" {...stylex.props(styles.container, styles.section, styles.light, styles.pricing)}>
      <div {...stylex.props(styles.sectionIntro)}>
        <Eyebrow>Simple pricing</Eyebrow>
        <h2 {...stylex.props(styles.sectionTitle)}>One plan for teams that want to move.</h2>
        <p {...stylex.props(styles.sectionText)}>Try every feature free for 14 days. Keep your work even if you decide not to continue.</p>
      </div>
      <div {...stylex.props(styles.offer)}>
        <div {...stylex.props(styles.generatedMetric)}>
          <strong {...stylex.props(styles.priceLabel)}>Team plan</strong>
          <div {...stylex.props(styles.priceRow)}><span {...stylex.props(styles.price)}>$12</span><span {...stylex.props(styles.priceUnit)}>per person / month</span></div>
          <span {...stylex.props(styles.billing)}>Billed monthly. Cancel any time.</span>
        </div>
        <div {...stylex.props(styles.offerFeatures)}>
          {priceFeatures.map((feature) => (
            <div key={feature} {...stylex.props(styles.offerFeature)}>
              <span {...stylex.props(styles.checkCircle)}><img src={checkSmall} alt="" {...stylex.props(styles.checkIcon)} /></span>
              {feature}
            </div>
          ))}
        </div>
        <div {...stylex.props(styles.offerAction)}>
          <a href="mailto:hello@flowly.example" {...stylex.props(styles.button, styles.buttonPrimary, styles.buttonLarge)}>Start free for 14 days <Arrow /></a>
          <span {...stylex.props(styles.actionNote)}>No credit card required</span>
          <a href="mailto:hello@flowly.example" {...stylex.props(styles.contactNote)}>Need more than 15 seats? Talk to us →</a>
        </div>
      </div>
    </section>
  )
}
