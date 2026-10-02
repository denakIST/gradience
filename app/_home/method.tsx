import { AnalyticalLabel } from '@/components/gradience/brand/analytical-label'
import { Container } from '@/components/gradience/layout/container'
import { SectionIntro } from '@/components/gradience/marketing/section-intro'
import { cn } from '@/lib/utils'

const steps = [
  { name: 'Understand', description: 'Identify what drives performance.' },
  { name: 'Predict', description: 'Model what is likely to happen.' },
  { name: 'Optimize', description: 'Evaluate alternatives and tradeoffs.' },
  { name: 'Decide', description: 'Translate evidence into action.', selected: true },
  { name: 'Learn', description: 'Compare expectations with outcomes and improve future decisions.' },
]

export function Method() {
  return (
    <section aria-labelledby="method-title" data-home-section="method" className="border-t border-line">
      <Container className="flex flex-col gap-16 py-24 md:gap-20 md:py-32">
        <SectionIntro
          eyebrow="The Gradience Method"
          title="From complexity to direction."
          titleId="method-title"
          className="max-w-(--layout-reading)"
        >
          <p>One connected analytical process, from the drivers of performance to the decision, and back again.</p>
        </SectionIntro>

        <div className="flex flex-col gap-10">
          <ol aria-label="Gradience Method sequence" className="grid grid-cols-1 md:grid-cols-5">
            {steps.map((step, index) => (
              <li
                key={step.name}
                className={cn(
                  'relative flex flex-col gap-3 border-l border-line-strong pb-12 pl-8',
                  'md:border-t md:border-l-0 md:pt-10 md:pr-6 md:pb-0 md:pl-0',
                  index === steps.length - 1 && 'pb-0',
                )}
              >
                <span
                  aria-hidden="true"
                  className={cn(
                    'absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full',
                    step.selected
                      ? 'size-(--viz-point-selected) border-(length:--viz-point-ring) border-background bg-selected'
                      : 'size-(--viz-point-current) bg-viz-current',
                  )}
                />
                <h3 className="type-label-analytical text-fg">
                  {step.name}
                  {step.selected ? <span className="sr-only"> (the point of decision)</span> : null}
                </h3>
                <p className="type-body-default text-pretty text-fg-secondary">{step.description}</p>
              </li>
            ))}
          </ol>
          <AnalyticalLabel>Learn → Understand · Each outcome informs the next decision</AnalyticalLabel>
        </div>
      </Container>
    </section>
  )
}
