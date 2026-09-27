import {
  AnalyticalLabel,
  ApplicationNavigation,
  Button,
  ConfidenceIndicator,
  DataTable,
  Input,
  Metric,
  OpportunitySurface,
  ScenarioIndicator,
  ScenarioSelector,
  Status,
  Tabs,
  TabsList,
  TabsTrigger,
  VisualizationContainer,
} from '@/components/gradience'
import { analyticalTabs, applicationLinks, scenarioColumns, scenarioRows, scenarios } from '../_data'
import { SectionShell } from './section-shell'

export function ProductExample() {
  return (
    <SectionShell
      id="product"
      index="04"
      title="Product-system example · DecisionOS"
      description="A compact production specimen proving the approved assets work together. This is a component integration reference—not a complete application."
      mode="intelligence"
      surface="background"
    >
      <ApplicationNavigation links={applicationLinks} activeHref="#decisions" className="px-0 md:px-8" />

      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div className="flex max-w-185 flex-col gap-4">
          <AnalyticalLabel tone="signal">DecisionOS · Capital allocation</AnalyticalLabel>
          <h3 className="type-display-closing text-balance text-fg">Where should we allocate the next $10 million?</h3>
          <p className="type-body-large text-pretty text-fg-secondary">
            Compare modeled response, management plan and actual performance before committing capital.
          </p>
        </div>
        <div className="flex flex-col items-start gap-4 lg:items-end">
          <Status variant="needs-evidence">Reviewed</Status>
          <Button>{'Commit selected plan →'}</Button>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Metric label="Projected value" value="$18.6M" detail="+12.4% vs plan" detailTone="signal" />
        <Metric label="Incremental lift" value="+8.7%" detail="Evidence-adjusted" detailTone="signal" />
        <Metric label="Confidence" value="82%" detail="78–86% range" />
        <div className="flex flex-col gap-3 border-t border-line pt-4">
          <AnalyticalLabel>Plan states</AnalyticalLabel>
          <div className="flex flex-wrap gap-2">
            <Status variant="needs-evidence">Model</Status>
            <Status variant="needs-evidence">Management plan</Status>
            <Status variant="needs-evidence">Actual</Status>
          </div>
        </div>
      </div>

      <Tabs defaultValue="Scenarios">
        <TabsList aria-label="Decision views">
          {analyticalTabs.map((tab) => (
            <TabsTrigger key={tab} value={tab}>
              {tab}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      <div className="grid gap-10 lg:grid-cols-3 lg:gap-9">
        <Input label="Decision name" defaultValue="Q4 growth allocation" />
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

      <VisualizationContainer
        label="Opportunity surface · Canonical"
        description="Opportunity surface: Scenario 03 selected direction, value up 8.7 percent or 8.7 million dollars, 82 percent confidence within a 78 to 86 percent range."
      >
        <OpportunitySurface
          variant="canonical"
          selected={{
            label: 'Scenario 03 · Selected direction',
            value: 'Δ VALUE +8.7% · +$8.7M',
            detail: 'Confidence 82% · 78–86% range',
          }}
        />
      </VisualizationContainer>

      <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:gap-14">
        <DataTable
          caption="Scenario comparison"
          columns={scenarioColumns}
          rows={scenarioRows}
          getRowKey={(row) => row.id}
          selectedKey="reallocate"
          className="lg:w-[60%]"
        />
        <div className="flex flex-col gap-3 lg:flex-1">
          <AnalyticalLabel>Integration result</AnalyticalLabel>
          <p className="type-body-large text-pretty text-fg">
            Navigation, metrics, states, selection, confidence, inputs, tabs, evidence and action share one hierarchy.
          </p>
        </div>
      </div>
    </SectionShell>
  )
}
