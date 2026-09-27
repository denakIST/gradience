import { AnalyticalLabel, Wordmark } from '@/components/gradience'
import { implementationRules } from '../_data'
import { SectionShell } from './section-shell'

export function ImplementationNotes() {
  return (
    <SectionShell
      id="notes"
      index="08"
      title="Implementation notes"
      description="Developer-facing constraints for production implementation in Next.js. These rules preserve the approved direction through responsive layouts and feature growth."
      surface="background"
    >
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {implementationRules.map((rule) => (
          <li key={rule.label} className="flex flex-col gap-2.5 border-t border-line pt-4.5">
            <AnalyticalLabel as="h3">{rule.label}</AnalyticalLabel>
            <p className="type-ui-default text-pretty text-fg">{rule.text}</p>
          </li>
        ))}
      </ul>

      <div className="flex flex-col gap-6 border-t border-line pt-6 lg:flex-row lg:items-center lg:gap-12">
        <span aria-hidden="true" className="h-0.75 w-12 shrink-0 bg-signal" />
        <div className="flex flex-col gap-2 lg:w-180 lg:shrink-0">
          <AnalyticalLabel tone="signal">Mobile · Required simplification</AnalyticalLabel>
          <p className="type-heading-component text-balance text-fg">
            Mobile simplifies the Opportunity Surface and converts DecisionOS to a vertical lifecycle without changing
            hierarchy.
          </p>
        </div>
        <p className="type-body-default text-pretty text-fg-secondary">
          Keep current point, selected point, one selected trajectory, confidence and decision boundary. Collapse
          alternative detail only when space requires it.
        </p>
      </div>

      <footer className="flex flex-col gap-3 border-t border-line-emphasis pt-7 sm:flex-row sm:items-center sm:justify-between">
        <Wordmark className="text-lg" />
        <span className="type-ui-xsmall font-semibold uppercase text-signal">
          Approved · Frozen visual direction · Ready for Next.js implementation
        </span>
      </footer>
    </SectionShell>
  )
}
