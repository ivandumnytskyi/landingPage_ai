import { useState } from 'react'
import * as stylex from '@stylexjs/stylex'
import { Arrow, Brand, navItems, styles } from './shared'

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header {...stylex.props(styles.container, styles.header)}>
      <Brand />
      <nav aria-label="Main navigation" {...stylex.props(styles.nav)}>
        {navItems.map(([label, href]) => (
          <a key={label} href={href} {...stylex.props(styles.navLink)}>{label}</a>
        ))}
      </nav>
      <div {...stylex.props(styles.headerActions)}>
        <a href="#pricing" {...stylex.props(styles.button, styles.headerSignIn)}>Sign in</a>
        <a href="#pricing" {...stylex.props(styles.button, styles.buttonPrimary)}>Start free <Arrow /></a>
        <button
          type="button"
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          {...stylex.props(styles.menuButton)}
        >
          <span {...stylex.props(styles.menuGlyph)}>
            <i {...stylex.props(styles.menuLine)} />
            <i {...stylex.props(styles.menuLine)} />
            <i {...stylex.props(styles.menuLine)} />
          </span>
        </button>
      </div>
      {menuOpen && (
        <nav aria-label="Mobile navigation" {...stylex.props(styles.mobileNav)}>
          {navItems.map(([label, href]) => (
            <a key={label} href={href} onClick={() => setMenuOpen(false)} {...stylex.props(styles.mobileNavLink)}>{label}</a>
          ))}
        </nav>
      )}
    </header>
  )
}
