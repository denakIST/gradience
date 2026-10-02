import type { Metadata } from 'next'
import { SiteFooter } from '@/components/gradience/marketing/site-footer'
import { SiteHeader } from '@/components/gradience/marketing/site-header'
import { primaryCta, primaryNavigation } from '@/lib/site'
import { Capabilities } from './_home/capabilities'
import { DecisionOS } from './_home/decision-os'
import { FinalCta } from './_home/final-cta'
import { Hero } from './_home/hero'
import { Judgment } from './_home/judgment'
import { Method } from './_home/method'
import { Problem } from './_home/problem'

export const metadata: Metadata = {
  title: 'Gradience | Advanced Analytics & Decision Intelligence',
  description:
    'Gradience applies advanced analytics, forecasting, measurement and optimization to help growth leaders make better business decisions with decision intelligence.',
}

export default function Home() {
  return (
    <>
      <SiteHeader links={primaryNavigation} cta={primaryCta} />
      <main>
        <Hero />
        <Problem />
        <Method />
        <Capabilities />
        <DecisionOS />
        <Judgment />
        <FinalCta />
      </main>
      <SiteFooter links={primaryNavigation} />
    </>
  )
}
