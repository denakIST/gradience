import { Container } from '@/components/gradience/layout/container'
import { SectionIntro } from '@/components/gradience/marketing/section-intro'

export function Judgment() {
  return (
    <section aria-labelledby="judgment-title" data-home-section="judgment">
      <Container className="grid grid-cols-1 gap-16 py-32 md:py-40 lg:grid-cols-12 lg:gap-x-(--grid-gutter)">
        <SectionIntro
          eyebrow="AI + Human Judgment"
          title={
            <>
              AI that strengthens <span className="whitespace-nowrap">analysis—</span>
              <wbr />
              not replaces judgment.
            </>
          }
          titleId="judgment-title"
          className="lg:col-span-5"
        />

        <div className="flex flex-col gap-12 lg:col-span-6 lg:col-start-7">
          <p className="type-display-anchor text-fg">
            <span className="block text-fg-secondary">Models calculate.</span>
            <span className="block text-fg-secondary">AI interprets.</span>
            <span className="block">People decide.</span>
          </p>
          <div className="flex flex-col gap-4 border-t border-line pt-8 type-body-large text-pretty text-fg-secondary">
            <p>
              AI can help interrogate evidence, expose assumptions, interpret analytical outputs and accelerate
              analysis.
            </p>
            <p className="text-fg">Humans remain responsible for consequential decisions.</p>
          </div>
        </div>
      </Container>
    </section>
  )
}
