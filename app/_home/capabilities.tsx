import { TextLink } from '@/components/gradience/brand/text-link'
import { Container } from '@/components/gradience/layout/container'
import { SectionIntro } from '@/components/gradience/marketing/section-intro'

const capabilities = [
  { name: 'Forecasting & Scenario Intelligence', question: 'What is likely to happen—and what could change it?' },
  { name: 'Measurement & Incrementality', question: 'What is actually creating growth?' },
  { name: 'Investment Optimization', question: 'Where should the next dollar go?' },
  { name: 'Pricing & Elasticity', question: 'What happens when price changes?' },
  { name: 'Customer Intelligence', question: 'Where is the greatest customer opportunity?' },
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
              className="grid grid-cols-1 gap-3 border-t border-line py-8 md:grid-cols-12 md:items-baseline md:gap-x-(--grid-gutter)"
            >
              <h3 className="type-label-analytical text-fg md:col-span-5">{capability.name}</h3>
              <p className="type-heading-question text-balance text-fg md:col-span-7">{capability.question}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
