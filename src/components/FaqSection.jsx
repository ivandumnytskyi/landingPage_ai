import { useState } from 'react'
import * as stylex from '@stylexjs/stylex'
import { Eyebrow, faqItems, minus, plus, styles } from './shared'

function FaqItem({ question, answer, expanded, onToggle }) {
  return (
    <article {...stylex.props(styles.faqItem)}>
      <h3>
        <button type="button" aria-expanded={expanded} onClick={onToggle} {...stylex.props(styles.faqQuestion)}>
          <span>{question}</span>
          <img src={expanded ? minus : plus} alt="" {...stylex.props(styles.icon18)} />
        </button>
      </h3>
      {expanded && <p {...stylex.props(styles.faqAnswer)}>{answer}</p>}
    </article>
  )
}

export default function FaqSection() {
  const [openFaq, setOpenFaq] = useState(0)

  return (
    <section {...stylex.props(styles.container, styles.section, styles.white, styles.faq)}>
      <div {...stylex.props(styles.faqIntro)}>
        <div {...stylex.props(styles.sectionIntro)}>
          <Eyebrow>FAQ</Eyebrow>
          <h2 {...stylex.props(styles.sectionTitle)}>Questions, answered clearly.</h2>
          <p {...stylex.props(styles.sectionText)}>Still deciding? We’ll help you understand whether Flowly fits your team.</p>
        </div>
        <a href="mailto:hello@flowly.example" {...stylex.props(styles.button, styles.buttonLarge)}>Talk to a human</a>
      </div>
      <div {...stylex.props(styles.faqList)}>
        {faqItems.map(([question, answer], index) => (
          <FaqItem key={question} question={question} answer={answer} expanded={openFaq === index} onToggle={() => setOpenFaq(openFaq === index ? -1 : index)} />
        ))}
      </div>
    </section>
  )
}
