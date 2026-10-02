import { AnalyticalLabel } from '@/components/gradience/brand/analytical-label'
import { Container } from '@/components/gradience/layout/container'
import { ReturnPath } from '@/components/gradience/marketing/return-path'
import { SectionIntro } from '@/components/gradience/marketing/section-intro'
import { cn } from '@/lib/utils'

const steps = [
  { name: 'Understand', description: 'Identify what drives performance.' },
  { name: 'Predict', description: 'Model what is likely to happen.' },
  { name: 'Optimize', description: 'Evaluate alternatives and tradeoffs.' },
  { name: 'Decide', description: 'Translate evidence into action.' },
  { name: 'Learn', description: 'Compare expectations with outcomes and improve future decisions.' },
]

const returnLabel = 'Learning informs the next cycle'

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

        <div className="flex flex-col gap-8">
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
                  className="absolute top-0 left-0 size-(--viz-point-current) -translate-x-1/2 -translate-y-1/2 rounded-full bg-viz-current"
                />
                <h3 className="type-label-analytical text-fg">
                  <span className="sr-only">{`Step ${index + 1}: `}</span>
                  {step.name}
                </h3>
                <p className="type-body-default text-pretty text-fg-secondary">{step.description}</p>
              </li>
            ))}
          </ol>

          <ReturnPath label={returnLabel} end="80%" className="hidden md:flex" />
          <AnalyticalLabel className="md:hidden">{`Learn → Understand · ${returnLabel}`}</AnalyticalLabel>
          <p className="sr-only">After Learn, the cycle returns to Understand: {returnLabel.toLowerCase()}.</p>
        </div>
      </Container>
    </section>
  )
}
