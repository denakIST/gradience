import {
  AnalyticalLabel,
  Button,
  ConfidenceIndicator,
  Container,
  DecisionRail,
  Input,
  Metric,
  OpportunitySurface,
  ScenarioIndicator,
  ScenarioSelector,
  SectionHeading,
  Status,
  Tabs,
  TabsList,
  TabsTrigger,
  Tag,
  VisualizationContainer,
  VisualizationLegend,
} from '@/components/gradience'
import { cn } from '@/lib/utils'
import { analyticalTabs, decisionStages, motionLogic, scenarios, sharedFoundations, surfaceLegend } from '../_data'

type ModePanelProps = {
  mode: 'light' | 'intelligence'
  eyebrow: string
  title: string
  description: string
  display: string
  primaryLabel: string
}

function ModePanel({ mode, eyebrow, title, description, display, primaryLabel }: ModePanelProps) {
  return (
    <div data-mode={mode} className="flex flex-col gap-12 bg-background p-6 md:p-11">
      <div className="flex flex-col gap-4">
        <AnalyticalLabel tone="signal">{eyebrow}</AnalyticalLabel>
        <h3 className="type-display-closing text-balance text-fg">{title}</h3>
        <p className="type-body-default text-pretty text-fg-secondary">{description}</p>
      </div>

      {mode === 'intelligence' ? (
        <div className="flex flex-col gap-2">
          <AnalyticalLabel>DecisionOS · Analytical tabs</AnalyticalLabel>
          <Tabs defaultValue="Scenarios">
            <TabsList aria-label="Analytical views">
              {analyticalTabs.map((tab) => (
                <TabsTrigger key={tab} value={tab}>
                  {tab}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
      ) : null}

      <div className="flex flex-col gap-6">
        <AnalyticalLabel>Shared typography &amp; actions</AnalyticalLabel>
        <p className="type-heading-section text-balance text-fg">{display}</p>
        <p className="type-body-default text-fg-secondary">
          Shared type scale, spacing rhythm and structural rules preserve one identity across context.
        </p>
        <div className="flex flex-wrap gap-2.5">
          <Button>{primaryLabel}</Button>
          <Button variant="secondary">Review evidence</Button>
        </div>
      </div>

      <Input label="Decision name" defaultValue="Q4 growth allocation" />

      <div className="grid gap-6 sm:grid-cols-2">
        <Metric label="Projected value" value="$18.6M" detail="+12.4% vs plan" detailTone="signal" />
        <Metric label="Confidence" value="82%" detail="Reviewed · 78-86% range" />
      </div>

      <VisualizationContainer
        label="Opportunity surface · Canonical visualization"
        legend={<VisualizationLegend items={surfaceLegend} />}
        description="Opportunity surface: Scenario 03 selected, value up 8.7 percent, 82 percent confidence."
      >
        <OpportunitySurface
          variant="canonical"
          size="compact"
          currentPoint={{ x: 7, y: 73 }}
          selectedPoint={{ x: 82, y: 16 }}
          selected={{ label: 'Scenario 03 · Selected', value: 'Δ VALUE +8.7%', detail: 'Confidence 82% · 78-86% range' }}
          current={{ label: 'Current · Baseline', detail: 'Baseline 100 · Reference' }}
        />
      </VisualizationContainer>

      <div className="grid gap-12 sm:grid-cols-2">
        <ScenarioSelector defaultValue="scenario-03">
          {scenarios.map((scenario) => (
            <ScenarioIndicator key={scenario.value} {...scenario} />
          ))}
        </ScenarioSelector>
        <ConfidenceIndicator
          value={82}
          low={78}
          high={86}
          explanation="Confidence contracts as modeled assumptions remain within the observed range."
        />
      </div>

      <div className="grid gap-8 sm:grid-cols-2">
        <DecisionRail stages={decisionStages} activeIndex={4} />
        <div className="flex flex-col gap-4">
          <AnalyticalLabel>Shared state grammar</AnalyticalLabel>
          <div className="flex flex-wrap gap-2">
            <Status variant="draft">Draft</Status>
            <Status variant="selected">Selected</Status>
            <Status variant="reviewed">Reviewed</Status>
          </div>
          <div className="flex flex-wrap gap-2">
            <Tag>Model</Tag>
            <Tag>Plan</Tag>
            <Tag>Actual</Tag>
          </div>
        </div>
      </div>
    </div>
  )
}

export function ModeExamples() {
  return (
    <section aria-labelledby="modes-title" data-reference-section="modes" data-mode="light" className="bg-surface">
      <Container className="flex flex-col gap-6 py-16 md:flex-row md:items-end md:justify-between md:py-18">
        <div className="flex flex-col gap-3.5">
          <AnalyticalLabel tone="signal">Contextual modes · One system</AnalyticalLabel>
          <h2 id="modes-title" className="type-display-anchor text-fg">
            Light / Dark System
          </h2>
        </div>
        <p className="type-body-large text-pretty text-fg-secondary md:max-w-130">
          Gradience Light and Gradience Intelligence change density and context-not brand meaning. Signal Cyan always
          means opportunity, direction, selection or primary action.
        </p>
      </Container>

      <div data-mode="intelligence" className="bg-background">
        <Container className="flex flex-wrap items-center gap-x-12 gap-y-3 py-5">
          <AnalyticalLabel>One system · shared foundations</AnalyticalLabel>
          <ul className="flex flex-wrap items-center gap-x-8 gap-y-2 type-ui-xsmall text-fg-secondary">
            {['Manrope · 12-72', '8-pt rhythm', '4-6 px radius', '1 px analytical rules'].map((token) => (
              <li key={token} className="flex items-center gap-8">
                {token}
                <span aria-hidden="true" className="h-3.5 w-px bg-line" />
              </li>
            ))}
            <li className="flex items-center gap-2 text-signal">
              <span aria-hidden="true" className="h-0.5 w-4 bg-signal" />
              Signal Cyan · one meaning
            </li>
          </ul>
        </Container>
      </div>

      <div className="mx-auto grid max-w-(--layout-page-max) lg:grid-cols-2">
        <ModePanel
          mode="light"
          eyebrow="Gradience Light"
          title="Editorial space. Executive clarity."
          description="Marketing context for senior decision-makers: calm, spacious and centered on the question before the technology."
          display="Find the direction of greatest opportunity."
          primaryLabel="Bring Us a Decision →"
        />
        <ModePanel
          mode="intelligence"
          eyebrow="Gradience Intelligence"
          title="Dense evidence. Explicit judgment."
          description="Application-oriented context for DecisionOS: quantitative, inspectable and structured around consequential choices."
          display="Scenario 03 creates the strongest evidence-adjusted value."
          primaryLabel="Select scenario →"
        />
      </div>

      <Container className="flex flex-col gap-12 py-16 md:py-24">
        <SectionHeading
          index="07"
          title="Shared foundations"
          description="One grammar, tuned by context. Both modes use Manrope, a 12-column grid, four-to-six pixel corners, one-pixel analytical rules and a consistent eight-point spacing rhythm."
        />
        <dl className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
          {sharedFoundations.map((item) => (
            <div key={item.label} className="flex flex-col gap-2 border-t border-line pt-4">
              <AnalyticalLabel as="dt">{item.label}</AnalyticalLabel>
              <dd className="flex flex-col gap-2">
                <span className="type-body-default font-medium text-fg">{item.value}</span>
                <span className="type-supporting-small text-fg-secondary">{item.note}</span>
              </dd>
            </div>
          ))}
        </dl>
      </Container>

      <div className="bg-background">
        <Container className="flex flex-col gap-10 py-16 md:py-24">
          <div className="flex flex-col gap-4">
            <AnalyticalLabel tone="signal">Motion logic</AnalyticalLabel>
            <h2 className="type-heading-section text-fg">Motion explains how a decision forms.</h2>
          </div>
          <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {motionLogic.map((item, index) => {
              const last = index === motionLogic.length - 1
              return (
                <li
                  key={item.name}
                  data-mode={last ? 'intelligence' : undefined}
                  className={cn(
                    'flex flex-col gap-2 rounded-control border p-5',
                    last ? 'border-line-subtle bg-background' : 'border-line bg-surface',
                  )}
                >
                  <span className={cn('type-micro font-normal', last ? 'text-signal' : 'text-fg-secondary')}>
                    {item.step}
                  </span>
                  <span className="type-ui-xsmall font-semibold uppercase text-fg">{item.name}</span>
                  <span className="type-ui-xsmall text-fg-secondary">{item.text}</span>
                  <code className="type-supporting-small text-fg-tertiary">{item.token}</code>
                </li>
              )
            })}
          </ol>
        </Container>
      </div>
    </section>
  )
}
