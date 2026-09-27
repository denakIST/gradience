import { familyPaths } from '@/components/gradience/analytical/visualizations/trajectory-paths'
import { cn } from '@/lib/utils'
import { SectionShell } from './section-shell'

function Frame({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div role="img" aria-label={label} className="relative aspect-[402/150] overflow-hidden rounded-md border border-line bg-surface">
      {children}
    </div>
  )
}

function PathLayer({ path, className, width }: { path: { viewBox: string; d: string }; className: string; width: string }) {
  return (
    <svg aria-hidden="true" viewBox={path.viewBox} preserveAspectRatio="none" className={cn('absolute fill-none', className)}>
      <path d={path.d} vectorEffect="non-scaling-stroke" style={{ strokeWidth: width }} />
    </svg>
  )
}

const bars = [
  { h: 'h-[48%]', selected: false },
  { h: 'h-[30%]', selected: false },
  { h: 'h-[58%]', selected: false },
  { h: 'h-[73%]', selected: true },
  { h: 'h-[44%]', selected: false },
]

const clusters = [
  { x: 11, y: 30, selected: false },
  { x: 20, y: 57, selected: false },
  { x: 32, y: 37, selected: false },
  { x: 45, y: 63, selected: false },
  { x: 56, y: 27, selected: true },
  { x: 64, y: 51, selected: false },
]

const examples = [
  {
    name: 'Forecasting',
    text: 'Branching history and bounded future paths.',
    visual: (
      <Frame label="Forecast: one selected future path">
        <PathLayer path={familyPaths.forecastSelected} width="var(--viz-line-trajectory-selected)" className="top-[10%] left-0 h-[82%] w-[75%] stroke-signal" />
      </Frame>
    ),
  },
  {
    name: 'Measurement',
    text: 'Driver contribution and causal evidence.',
    visual: (
      <Frame label="Measurement: five drivers, one selected">
        <div className="absolute inset-x-[6%] top-[12%] bottom-[16%] flex items-end gap-[5%]">
          {bars.map((bar, index) => (
            <span key={index} className={cn('w-[7.5%]', bar.h, bar.selected ? 'bg-signal' : 'bg-viz-neutral opacity-55')} />
          ))}
        </div>
      </Frame>
    ),
  },
  {
    name: 'Optimization',
    text: 'Feasible response surface and selected allocation.',
    visual: (
      <Frame label="Optimization: selected allocation on the response surface">
        <span className="absolute top-[47%] left-[48%] size-1.75 rounded-full bg-signal" />
      </Frame>
    ),
  },
  {
    name: 'Pricing',
    text: 'Demand response with an explicit decision boundary.',
    visual: (
      <Frame label="Pricing: demand response with a decision boundary">
        <PathLayer path={familyPaths.responseCurve} width="var(--viz-line-trajectory-neutral)" className="top-[7%] left-0 h-[82%] w-[75%] stroke-viz-neutral" />
        <span className="absolute top-[12%] bottom-[14%] left-[52%] w-(--viz-line-decision-boundary) bg-signal" />
        <span className="absolute top-[40%] left-[52%] size-2.5 -translate-x-1/2 rounded-full bg-signal" />
      </Frame>
    ),
  },
  {
    name: 'Customer Intelligence',
    text: 'Cluster structure and selected opportunity.',
    visual: (
      <Frame label="Customer intelligence: clusters with one selected opportunity">
        {clusters.map((point) => (
          <span
            key={`${point.x}-${point.y}`}
            className={cn(
              'absolute -translate-x-1/2 -translate-y-1/2 rounded-full',
              point.selected ? 'size-3 bg-signal' : 'size-1.75 bg-viz-neutral opacity-55',
            )}
            style={{ left: `${point.x}%`, top: `${point.y}%` }}
          />
        ))}
      </Frame>
    ),
  },
  {
    name: 'DecisionOS',
    text: 'Evidence convergence toward an explicit decision.',
    visual: (
      <Frame label="DecisionOS: evidence converging on a decision">
        <span className="absolute top-[18%] left-[5%] h-0.5 w-[20%] bg-viz-neutral opacity-55" />
        <span className="absolute top-[24%] left-[5%] h-0.5 w-[14%] bg-viz-neutral opacity-55" />
        <span className="absolute top-[12%] bottom-[14%] left-[37%] w-px bg-line" />
        <span className="absolute top-[50%] left-[57%] h-0.5 w-[12%] bg-signal" />
        <span className="absolute top-[50%] left-[57%] size-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-signal" />
      </Frame>
    ),
  },
]

export function AnalyticalFamily() {
  return (
    <SectionShell
      id="family"
      index="06"
      title="Analytical family"
      description="Each domain preserves its analytical meaning while inheriting the same grid, line weights, labels, annotations, trajectory logic, uncertainty treatment and Signal Cyan semantics."
    >
      <ul className="grid gap-x-5 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
        {examples.map((example) => (
          <li key={example.name} className="flex flex-col gap-3">
            {example.visual}
            <div className="flex flex-col gap-1 sm:flex-row sm:gap-6">
              <h3 className="type-body-default font-medium text-fg sm:w-35 sm:shrink-0">{example.name}</h3>
              <p className="type-ui-small text-fg-secondary">{example.text}</p>
            </div>
          </li>
        ))}
      </ul>
      <div className="flex flex-col gap-3 border-t border-line pt-6 md:flex-row md:gap-24">
        <span className="type-ui-small font-medium uppercase text-signal">One family · Six meanings</span>
        <p className="type-body-default text-fg-secondary">
          Cyan always identifies the chosen analytical signal or direction—not every series, data point or positive
          outcome.
        </p>
      </div>
    </SectionShell>
  )
}
