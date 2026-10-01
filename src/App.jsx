import * as stylex from '@stylexjs/stylex'
import SiteHeader from './components/SiteHeader'
import HeroSection from './components/HeroSection'
import TrustSection from './components/TrustSection'
import WorkflowSection from './components/WorkflowSection'
import BenefitsSection from './components/BenefitsSection'
import ShowcaseSection from './components/ShowcaseSection'
import IntegrationsSection from './components/IntegrationsSection'
import CustomerStorySection from './components/CustomerStorySection'
import PricingSection from './components/PricingSection'
import FaqSection from './components/FaqSection'
import CallToActionSection from './components/CallToActionSection'
import SiteFooter from './components/SiteFooter'
import { styles } from './components/shared'

export default function App() {
  return (
    <main id="top" {...stylex.props(styles.page)}>
      <SiteHeader />
      <HeroSection />
      <TrustSection />
      <WorkflowSection />
      <BenefitsSection />
      <ShowcaseSection />
      <IntegrationsSection />
      <CustomerStorySection />
      <PricingSection />
      <FaqSection />
      <CallToActionSection />
      <SiteFooter />
    </main>
  )
}
