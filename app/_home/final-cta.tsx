import Link from 'next/link'
import { AnalyticalLabel } from '@/components/gradience/brand/analytical-label'
import { Button } from '@/components/gradience/brand/button'
import { Container } from '@/components/gradience/layout/container'
import { primaryCta } from '@/lib/site'

const exampleDecisions = [
  'How much should we invest?',
  'What can we realistically forecast?',
  'Which investments are actually driving growth?',
  'What happens if we change price?',
  'Where is the greatest opportunity?',
]

export function FinalCta() {
  return (
    <section aria-labelledby="cta-title" data-home-section="cta" className="border-t border-line">
      <Container className="grid grid-cols-1 gap-16 py-24 md:py-32 lg:grid-cols-12 lg:gap-x-(--grid-gutter)">
        <div className="flex flex-col gap-6 lg:col-span-5">
          <AnalyticalLabel>Bring us a decision</AnalyticalLabel>
          <h2 id="cta-title" className="type-display-closing text-balance text-fg">
            Start with the decision.
          </h2>
        </div>

        <div className="flex flex-col gap-10 lg:col-span-6 lg:col-start-7">
          <p className="type-heading-question text-balance text-fg">What decision are you trying to make?</p>
          <ul aria-label="Example decisions" className="flex flex-col border-b border-line">
            {exampleDecisions.map((question) => (
              <li key={question} className="border-t border-line py-4 type-body-large text-fg-secondary">
                {question}
              </li>
            ))}
          </ul>
          <Button asChild className="self-start">
            <Link href={primaryCta.href}>{primaryCta.label}</Link>
          </Button>
        </div>
      </Container>
    </section>
  )
}
