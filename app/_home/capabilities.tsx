import { TextLink } from '@/components/gradience/brand/text-link'
import { Container } from '@/components/gradience/layout/container'
import { SectionIntro } from '@/components/gradience/marketing/section-intro'
import { CapabilitySignature, type CapabilitySignatureKind } from './capability-signature'

const capabilities: { name: string; question: string; signature: CapabilitySignatureKind; structure: string }[] = [
  {
    name: 'Forecasting & Scenario Intelligence',
    question: 'What is likely to happen—and what could change it?',
    signature: 'forecast',
    structure: 'Observed trajectory · Baseline · Alternative futures',
  },
  {
    name: 'Measurement & Incrementality',
    question: 'What is actually creating growth?',
    signature: 'measurement',
    structure: 'Observed outcome · Baseline · Incremental contribution',
  },
  {
    name: 'Investment Optimization',
    question: 'Where should the next dollar go?',
    signature: 'optimization',
    structure: 'Current allocation · Alternatives · Selected opportunity',
  },
  {
    name: 'Pricing & Elasticity',
    question: 'What happens when price changes?',
    signature: 'pricing',
    structure: 'Price · Demand response · Revenue optimum',
  },
  {
    name: 'Customer Intelligence',
    question: 'Where is the greatest customer opportunity?',
    signature: 'customer',
    structure: 'Population · Segments · Opportunity concentration',
  },
]

export function Capabilities() {
  return (
    <section aria-labelledby="capabilities-title" data-home-section="capabilities" className="border-t border-line">
      <Container className="flex flex-col gap-16 py-24 md:py-32">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionIntro
            eyebrow="Capabilities"
            title="Advanced analytics for consequential decisions."
            titleId="capabilities-title"
            className="max-w-(--layout-reading)"
          />
          <TextLink href="/capabilities">Explore capabilities</TextLink>
        </div>

        <ul className="flex flex-col border-b border-line">
          {capabilities.map((capability) => (
            <li
              key={capability.name}
              className="grid grid-cols-1 gap-4 border-t border-line py-8 md:grid-cols-12 md:gap-x-(--grid-gutter) md:gap-y-6 lg:items-center"
            >
              <h3 className="type-label-analytical text-fg md:col-span-5 lg:col-span-4">{capability.name}</h3>
              <p className="type-heading-question text-balance text-fg md:col-span-7 lg:col-span-5">
                {capability.question}
              </p>
              <figure className="flex flex-col gap-2 md:col-span-7 md:col-start-6 lg:col-span-3 lg:col-start-auto">
                <CapabilitySignature kind={capability.signature} className="h-12 w-30 lg:h-14 lg:w-full lg:max-w-40" />
                <figcaption className="type-supporting-small uppercase text-fg-secondary">
                  {capability.structure}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
