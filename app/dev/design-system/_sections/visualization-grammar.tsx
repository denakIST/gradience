import { AnalyticalLabel, OpportunitySurface, VisualizationContainer, VisualizationLegend } from '@/components/gradience'
import { grammarLegend, lineWeights, opacities } from '../_data'
import { SectionShell } from './section-shell'

function SpecList({ label, items }: { label: string; items: { name: string; value: string }[] }) {
  return (
    <div className="flex flex-col">
      <AnalyticalLabel tone="signal">{label}</AnalyticalLabel>
      <dl className="flex flex-col">
        {items.map((item) => (
          <div key={item.name} className="flex justify-between gap-4 border-b border-line py-3">
            <dt className="type-ui-small font-semibold text-fg">{item.name}</dt>
            <dd className="type-ui-small text-fg-secondary tabular-nums">{item.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}

export function VisualizationGrammar() {
  return (
    <SectionShell
      id="grammar"
      index="05"
      title="Canonical visualization grammar"
      description="The Opportunity Surface is the approved decision landscape: neutral contours and plausible alternatives frame one selected direction. It never reads as a stock chart, mountain, decorative wave or upward-growth arrow."
      surface="background"
    >
      <div data-mode="intelligence">
        <VisualizationContainer description="Canonical opportunity surface: current point at baseline 100, Scenario 03 selected direction with value up 8.7 percent or 8.7 million dollars, 82 percent confidence.">
          <OpportunitySurface
            selected={{
              label: 'Scenario 03 · Selected direction',
              value: 'Δ VALUE +8.7% · +$8.7M',
              detail: 'Confidence 82% · 78–86% range',
            }}
          />
        </VisualizationContainer>
      </div>

      <div className="grid gap-10 lg:grid-cols-3 lg:gap-12">
        <SpecList label="Line weights · Exact" items={lineWeights} />
        <SpecList label="Opacity · Exact" items={opacities} />
        <div className="flex flex-col gap-4">
          <AnalyticalLabel tone="signal">Required anatomy</AnalyticalLabel>
          <p className="type-body-default text-pretty text-fg">
            Annotation typography · axis / grid treatment · uncertainty contours · current point · selected point ·
            confidence range · decision boundary.
          </p>
          <p className="type-ui-small text-pretty text-fg-secondary">
            Alternative paths remain neutral. Exactly one selected direction, selected point and analytical annotation
            use Signal Cyan.
          </p>
        </div>
      </div>

      <VisualizationLegend items={grammarLegend} className="border-t border-line pt-4" />
    </SectionShell>
  )
}
