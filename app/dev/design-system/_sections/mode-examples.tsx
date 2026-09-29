import { AnalyticalLabel, Button, ConfidenceIndicator, Input, Metric, Status, Wordmark } from '@/components/gradience'
import { familyPaths } from '@/components/gradience/analytical/visualizations/trajectory-paths'
import { SectionShell } from './section-shell'

type ModePanelProps = {
  mode: 'light' | 'intelligence'
  eyebrow: string
  title: string
  description: string
  context: string
  primaryLabel: string
  rangeTone: 'signal' | 'secondary'
}

const panels: ModePanelProps[] = [
  {
    mode: 'light',
    eyebrow: 'Gradience Light',
    title: 'Editorial space. Executive clarity.',
    description: 'Spacious decision context for senior audiences.',
    context: 'Marketing context',
    primaryLabel: 'Bring Us a Decision →',
    rangeTone: 'signal',
  },
  {
    mode: 'intelligence',
    eyebrow: 'Gradience Intelligence',
    title: 'Dense evidence. Explicit judgment.',
    description: 'Inspectable DecisionOS context for consequential choices.',
    context: 'DecisionOS context',
    primaryLabel: 'Select scenario →',
    rangeTone: 'secondary',
  },
]

function CompactSurface() {
  return (
    <div
      role="img"
      aria-label="Opportunity surface: the selected direction rises past the decision boundary from the current point"
      className="relative h-37.5 overflow-hidden rounded-[6px] border border-line bg-surface"
    >
      <svg
        aria-hidden="true"
        viewBox={familyPaths.forecastSelected.viewBox}
        preserveAspectRatio="none"
        className="absolute top-[11%] left-0 h-[75%] w-[55%] fill-none stroke-signal"
      >
        <path
          d={familyPaths.forecastSelected.d}
          vectorEffect="non-scaling-stroke"
          style={{ strokeWidth: 'var(--viz-line-trajectory-selected)' }}
        />
      </svg>
      <span className="absolute top-[10.7%] bottom-[12.7%] left-[43.4%] w-(--viz-line-decision-boundary) bg-viz-boundary" />
      <span className="absolute top-[19.3%] left-[50.2%] size-2.5 -translate-1/2 rounded-full bg-signal" />
      <span className="absolute top-[76.7%] left-[4.8%] size-1.5 -translate-1/2 rounded-full bg-viz-current" />
    </div>
  )
}

function ModePanel({ mode, eyebrow, title, description, context, primaryLabel, rangeTone }: ModePanelProps) {
  return (
    <div data-mode={mode} className="flex flex-col bg-background px-10 pt-11 pb-10">
      <AnalyticalLabel tone="signal">{eyebrow}</AnalyticalLabel>
      <h3 className="type-heading-section mt-4 text-[38px]! leading-[42px]! text-balance text-fg">{title}</h3>
      <p className="type-body-default mt-3 text-fg-secondary">{description}</p>

      <div className="mt-8 flex items-center justify-between border-y border-line py-3.5">
        <Wordmark className="type-ui-xsmall" />
        <AnalyticalLabel>{context}</AnalyticalLabel>
      </div>

      <div className="mt-8 flex flex-wrap gap-2.5">
        <Button>{primaryLabel}</Button>
        <Button variant="secondary">Review evidence</Button>
      </div>

      <Input label="Decision name" defaultValue="Q4 growth allocation" data-mode="light" className="mt-9" />

      <div className="mt-8 flex flex-col">
        <Metric label="Projected value" value="$18.6M" detail="+12.4% vs plan" detailTone="signal" />
        <Metric label="Confidence" value="82%" detail="78–86% range" detailTone={rangeTone} />
      </div>

      <div className="mt-6 flex flex-col gap-3">
        <AnalyticalLabel>Opportunity surface · Canonical</AnalyticalLabel>
        <CompactSurface />
      </div>

      <ConfidenceIndicator value={82} low={78} high={86} label="Scenario 03 · Selected" className="mt-10" />

      <div className="mt-8 flex flex-wrap gap-2">
        <Status variant="draft">Draft</Status>
        <Status variant="selected">Selected</Status>
        <Status variant="reviewed">Reviewed</Status>
      </div>
    </div>
  )
}

export function ModeExamples() {
  return (
    <SectionShell
      id="modes"
      index="07"
      title="Mode examples"
      description="Gradience Light and Gradience Intelligence use the same semantic components and canonical visualization grammar. Context changes density and contrast; meaning does not."
    >
      <div className="grid grid-cols-1 md:grid-cols-2">
        {panels.map((panel) => (
          <ModePanel key={panel.mode} {...panel} />
        ))}
      </div>
    </SectionShell>
  )
}
