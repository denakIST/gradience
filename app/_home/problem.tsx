import { AnalyticalLabel } from '@/components/gradience/brand/analytical-label'
import { Container } from '@/components/gradience/layout/container'
import { SectionIntro } from '@/components/gradience/marketing/section-intro'

const executiveQuestions = [
  'What is actually driving performance?',
  'What happens if our assumptions change?',
  'Where will the next dollar create the most value?',
  'How confident should we be in the forecast?',
  'When should we change course?',
]

export function Problem() {
  return (
    <section aria-labelledby="problem-title" data-home-section="problem" className="border-t border-line">
      <Container className="grid grid-cols-1 gap-16 py-24 md:py-32 lg:grid-cols-12 lg:gap-x-(--grid-gutter)">
        <SectionIntro
          eyebrow="The problem"
          title={<>More data doesn&apos;t necessarily create better decisions.</>}
          titleId="problem-title"
          className="lg:col-span-5"
        >
          <p>
            Most organizations now have data, dashboards, forecasts, models and AI. Yet the consequential decisions
            still depend on understanding uncertainty, testing assumptions and weighing tradeoffs.
          </p>
          <p>More information does not answer the questions executives are actually accountable for.</p>
        </SectionIntro>

        <div className="flex flex-col gap-6 lg:col-span-6 lg:col-start-7">
          <AnalyticalLabel as="h3" id="problem-questions">
            The questions that remain
          </AnalyticalLabel>
          <ul aria-labelledby="problem-questions" className="flex flex-col border-b border-line">
            {executiveQuestions.map((question) => (
              <li key={question} className="border-t border-line py-6 type-heading-question text-balance text-fg">
                {question}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}
