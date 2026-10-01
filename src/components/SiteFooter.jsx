import * as stylex from '@stylexjs/stylex'
import { Brand, footerGroups, styles } from './shared'

export default function SiteFooter() {
  return (
    <footer {...stylex.props(styles.container, styles.section, styles.footer)}>
      <div {...stylex.props(styles.footerContent)}>
        <div {...stylex.props(styles.footerBrand)}>
          <Brand footer />
          <p {...stylex.props(styles.footerText)}>AI project planning for small software teams with ambitious goals.</p>
        </div>
        {footerGroups.map(([heading, links]) => (
          <div key={heading} {...stylex.props(styles.footerGroup)}>
            <strong {...stylex.props(styles.footerHeading)}>{heading}</strong>
            {links.map((label) => (
              <a key={label} href={label === 'Pricing' ? '#pricing' : label === 'Customers' ? '#customers' : '#workflow'} {...stylex.props(styles.footerLink)}>{label}</a>
            ))}
          </div>
        ))}
      </div>
      <div {...stylex.props(styles.legal)}>
        <span>© 2026 Flowly Labs, Inc.</span>
        <div {...stylex.props(styles.legalLinks)}>
          <a href="#top" {...stylex.props(styles.footerLink)}>Privacy</a>
          <a href="#top" {...stylex.props(styles.footerLink)}>Terms</a>
          <a href="#top" {...stylex.props(styles.footerLink)}>System status</a>
        </div>
      </div>
    </footer>
  )
}
