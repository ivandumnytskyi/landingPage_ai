import * as stylex from '@stylexjs/stylex'
import { Arrow, checkSmall, styles, triangleAlert } from './shared'

const projectPhases = ['Scope & architecture', 'Core billing flow', 'Migration & QA', 'Rollout']

const timelineItems = [
  ['Architecture', styles.bar1],
  ['Billing API', styles.bar2],
  ['Checkout UI', styles.bar3],
  ['Migration QA', styles.bar4],
  ['Rollout', styles.bar5],
]

export default function ShowcaseSection() {
  return (
    <section {...stylex.props(styles.container, styles.section, styles.dark, styles.showcase)}>
      <div {...stylex.props(styles.showcaseHeading)}>
        <div {...stylex.props(styles.showcaseCopy)}>
          <span {...stylex.props(styles.showcaseOverline)}>One shared plan</span>
          <h2 {...stylex.props(styles.sectionTitle)}>See what matters now—and what changes next.</h2>
        </div>
        <p {...stylex.props(styles.showcaseText)}>Flowly connects strategy, execution, and updates in one calm operating view.</p>
      </div>
      <div {...stylex.props(styles.showcaseCard)}>
        <aside {...stylex.props(styles.showcaseRail)}>
          <strong {...stylex.props(styles.railTitle)}>Billing launch</strong>
          <div {...stylex.props(styles.phaseList)}>
            {projectPhases.map((phase, index) => (
              <div key={phase} {...stylex.props(styles.phase, index < 2 && styles.phaseDone)}>
                <span {...stylex.props(styles.phaseMarker, index < 2 && styles.phaseMarkerDone)}>
                  {index < 2 && <img src={checkSmall} alt="" {...stylex.props(styles.tinyIcon)} />}
                </span>
                {phase}
              </div>
            ))}
          </div>
          <div {...stylex.props(styles.risk)}>
            <strong {...stylex.props(styles.riskLabel)}><img src={triangleAlert} alt="" {...stylex.props(styles.tinyIcon)} />Risk detected</strong>
            <p {...stylex.props(styles.riskText)}>Migration work has no fallback owner.</p>
          </div>
        </aside>
        <div {...stylex.props(styles.timeline)}>
          <div {...stylex.props(styles.timelineHeader)}>
            <div>
              <span {...stylex.props(styles.overline)}>Live timeline</span>
              <h3 {...stylex.props(styles.timelineTitle)}>Six-week delivery plan</h3>
            </div>
            <a href="#pricing" {...stylex.props(styles.button, styles.timelineButton)}>Share update <Arrow /></a>
          </div>
          <div {...stylex.props(styles.weekLabels)}>
            {['OCT 07', 'OCT 14', 'OCT 21', 'OCT 28', 'NOV 04', 'NOV 11'].map((week) => <span key={week}>{week}</span>)}
          </div>
          <div {...stylex.props(styles.timelineRows)}>
            {timelineItems.map(([label, bar]) => (
              <div key={label} {...stylex.props(styles.timelineRow)}>
                <span>{label}</span>
                <div {...stylex.props(styles.track)}><span {...stylex.props(bar)} /></div>
              </div>
            ))}
          </div>
          <div {...stylex.props(styles.timelineFooter)}>
            <span>2 dependencies resolved automatically</span>
            <strong {...stylex.props(styles.today)}>TODAY →</strong>
          </div>
        </div>
      </div>
    </section>
  )
}
