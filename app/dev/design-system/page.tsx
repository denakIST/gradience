import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { AnalyticalFamily } from './_sections/analytical-family'
import { ComponentInventory } from './_sections/component-inventory'
import { Foundations } from './_sections/foundations'
import { ImplementationNotes } from './_sections/implementation-notes'
import { ModeExamples } from './_sections/mode-examples'
import { ProductExample } from './_sections/product-example'
import { SystemStatus } from './_sections/system-status'
import { TokenArchitecture } from './_sections/token-architecture'
import { VisualizationGrammar } from './_sections/visualization-grammar'

export const metadata: Metadata = {
  title: 'Design system · Gradience',
  description: 'Development-only reference for the Gradience design system.',
  robots: { index: false, follow: false },
}

export default function DesignSystemPage() {
  if (process.env.NODE_ENV === 'production' && process.env.ENABLE_DESIGN_SYSTEM_PAGE !== 'true') {
    notFound()
  }

  return (
    <main>
      <SystemStatus />
      <TokenArchitecture />
      <Foundations />
      <ComponentInventory />
      <ProductExample />
      <VisualizationGrammar />
      <AnalyticalFamily />
      <ModeExamples />
      <ImplementationNotes />
    </main>
  )
}
