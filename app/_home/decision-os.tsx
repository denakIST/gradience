import { AnalyticalLabel } from '@/components/gradience/brand/analytical-label'
import { Container, ModeSurface } from '@/components/gradience/layout/container'
import { DecisionRail } from '@/components/gradience/analytical/decision-rail'
import { SectionIntro } from '@/components/gradience/marketing/section-intro'

const lifecycle = ['Data', 'Model', 'Scenarios', 'Judgment', 'Decision', 'Outcome', 'Learning']

const partialAnswers = [
  'A forecast can estimate what might happen.',
  'A dashboard can show what happened.',
  'AI can help interpret what the data says.',
]

export function DecisionOS() {
  return (
    <section aria-labelledby="decisionos-title" data-home-section="decisionos">
      <ModeSurface mode="intelligence">
        <Container className="flex flex-col gap-20 py-24 md:py-32">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-x-(--grid-gutter)">
            <SectionIntro
              eyebrow="DecisionOS by Gradience"
              title="Analytics shouldn't end with a model."
              titleId="decisionos-title"
              className="lg:col-span-5"
            />

            <div className="flex flex-col gap-8 lg:col-span-6 lg:col-start-7">
              <ul className="flex flex-col">
                {partialAnswers.map((line) => (
                  <li key={line} className="border-t border-line-subtle py-4 type-body-large text-fg-secondary">
                    {line}
                  </li>
                ))}
              </ul>
              <p className="type-heading-question text-balance text-fg">
                But none of those, by themselves, make the decision.
              </p>
              <p className="type-body-large text-pretty text-fg-secondary">
                DecisionOS brings models, assumptions, scenarios and human judgment into a structured decision process.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-6 border-t border-line pt-8">
            <AnalyticalLabel id="decisionos-lifecycle">Decision lifecycle</AnalyticalLabel>
            <DecisionRail
              stages={lifecycle}
              activeIndex={4}
              label="DecisionOS decision lifecycle"
              className="md:flex-row md:flex-wrap md:justify-between md:gap-x-6"
            />
            <p className="type-supporting-small uppercase text-fg-secondary">
              Learning returns to data · Each decision improves the next
            </p>
          </div>
        </Container>
      </ModeSurface>
    </section>
  )
}
