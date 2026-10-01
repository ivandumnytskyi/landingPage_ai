import * as stylex from '@stylexjs/stylex'
import { customerPortrait, metrics, styles } from './shared'

export default function CustomerStorySection() {
  return (
    <section id="customers" {...stylex.props(styles.container, styles.section, styles.white, styles.customer)}>
      <img src={customerPortrait} alt="Product leader Maya Chen working at a laptop" {...stylex.props(styles.portrait)} />
      <div {...stylex.props(styles.customerStory)}>
        <div {...stylex.props(styles.quoteContent)}>
          <div {...stylex.props(styles.eyebrow)}><span {...stylex.props(styles.quoteRule)} />Customer story</div>
          <blockquote {...stylex.props(styles.quote)}>“Flowly gave us the plan we would have spent three meetings arguing into existence. We edited it for ten minutes and started.”</blockquote>
          <div {...stylex.props(styles.author)}>
            <strong {...stylex.props(styles.authorName)}>Maya Chen</strong>
            <span {...stylex.props(styles.authorMeta)}>Head of Product, Patchwork · 14-person team</span>
          </div>
        </div>
        <div {...stylex.props(styles.results)}>
          {metrics.map(([value, label]) => (
            <div key={value} {...stylex.props(styles.generatedMetric)}>
              <strong {...stylex.props(styles.resultValue)}>{value}</strong>
              <span {...stylex.props(styles.resultLabel)}>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
