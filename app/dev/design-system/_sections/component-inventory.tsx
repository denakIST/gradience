import {
  AnalyticalLabel,
  ApplicationNavigation,
  Button,
  ConfidenceIndicator,
  DataTable,
  Input,
  MarketingNavigation,
  Metric,
  OpportunitySurface,
  ScenarioIndicator,
  ScenarioSelector,
  Status,
  Tabs,
  TabsList,
  TabsTrigger,
  Tag,
  TextLink,
  VisualizationContainer,
} from '@/components/gradience'
import {
  analyticalTabs,
  applicationLinks,
  marketingLinks,
  scenarioColumns,
  scenarioRows,
  scenarios,
} from '../_data'
import { InventoryLabel, ScenarioStateSpec, SectionShell } from './section-shell'

export function ComponentInventory() {
  return (
    <SectionShell
      id="components"
      index="03"
      title="Component inventory"
      description="Approved current-file assets are the implementation source of truth. Reuse variants and instances; do not recreate their internal patterns in application code."
    >
      <div className="flex flex-col gap-4.5">
        <div className="flex flex-wrap items-baseline justify-between gap-3">
          <h3 className="type-heading-specimen text-fg">Navigation</h3>
          <p className="type-ui-xsmall text-fg-secondary">
            Light and Intelligence are contextual appearances—not separate brands.
          </p>
        </div>
        <MarketingNavigation links={marketingLinks} cta={{ label: 'Bring Us a Decision →', href: '#decision' }} />
        <div className="flex flex-wrap gap-12">
          <InventoryLabel name="Navigation/Marketing" usage="Spacious editorial site navigation · Gradience Light." />
          <InventoryLabel name="Navigation/Application" usage="Denser DecisionOS navigation · Gradience Intelligence." />
        </div>
        <ApplicationNavigation links={applicationLinks} activeHref="#decisions" />
      </div>

      <div className="grid gap-12 lg:grid-cols-2">
        <div className="flex flex-col gap-4.5">
          <InventoryLabel
            name="Button/Primary · Secondary"
            usage="Primary uses Signal Cyan. Secondary stays outlined. States preserve hierarchy."
          />
          <div className="flex flex-wrap items-center gap-3">
            <Button size="compact">{'Bring Us a Decision →'}</Button>
            <Button size="compact" variant="secondary" className="bg-surface">
              View methodology
            </Button>
            <Button size="compact" variant="secondary" disabled>
              Unavailable
            </Button>
          </div>
          <div className="flex flex-wrap items-center gap-7">
            <TextLink href="#decisionos">Explore DecisionOS</TextLink>
            <AnalyticalLabel>Analytical label</AnalyticalLabel>
          </div>
        </div>
        <div className="flex flex-col gap-4.5">
          <InventoryLabel name="Status/Decision" usage="Explicit workflow metadata. Selection alone receives Signal Cyan." />
          <div className="flex flex-wrap gap-2.5">
            <Status variant="draft">Draft</Status>
            <Status variant="selected">Selected</Status>
            <Status variant="reviewed">Reviewed</Status>
            <Status variant="needs-evidence">Needs Evidence</Status>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-5">
        <InventoryLabel
          name="Capability module · Section heading"
          usage="Question first, analytical proof second. Use section headings for editorial hierarchy."
        />
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col gap-4.5 lg:w-147.5">
            <AnalyticalLabel>03 · Investment optimization</AnalyticalLabel>
            <p className="type-heading-section text-balance text-fg">Where should the next dollar go?</p>
            <p className="type-body-default max-w-116 text-fg-secondary">
              Understand response curves, diminishing returns and business constraints to identify more productive
              allocations of capital.
            </p>
            <div className="flex flex-wrap gap-2">
              <Tag>Response Modeling</Tag>
              <Tag>Budget Allocation</Tag>
              <Tag>Scenario Optimization</Tag>
            </div>
          </div>
          <div
            role="img"
            aria-label="Response surface with one preferred allocation point"
            className="relative aspect-2/1 w-full rounded-control border border-line-subtle bg-surface lg:w-130"
          >
            <span className="absolute inset-[6.5%_3.5%] rounded-[50%] border border-line-subtle" />
            <span className="absolute inset-[12%_9%] rounded-[50%] border-2 border-signal" />
            <span className="absolute top-[37%] left-[58%] size-1.75 rounded-full bg-signal" />
            <span className="absolute inset-x-2 bottom-3 h-px bg-line-subtle" />
          </div>
        </div>
      </div>

      <div className="grid gap-12 lg:grid-cols-2 lg:gap-9">
        <div className="flex flex-col gap-4">
          <InventoryLabel name="Metric display" usage="Large exact figure with visible context and rule." />
          <div className="grid gap-5 sm:grid-cols-2">
            <Metric label="Projected value" value="$18.6M" detail="+12.4% vs plan" detailTone="signal" />
            <Metric label="Confidence" value="82%" detail="Reviewed · 78–86% range" detailTone="signal" />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <InventoryLabel
            name="Scenario default / selected · Confidence indicator"
            usage="Selection is structural. Confidence always includes a bounded range."
          />
          <div className="flex flex-col gap-6">
            <ScenarioSelector defaultValue="scenario-03" className="max-w-77.5">
              {scenarios.map((scenario) => (
                <ScenarioIndicator key={scenario.value} {...scenario} />
              ))}
            </ScenarioSelector>
            <ScenarioStateSpec />
            <ConfidenceIndicator
              value={82}
              low={78}
              high={86}
              explanation="Confidence contracts as modeled assumptions remain within the observed range."
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-12 lg:flex-row">
        <div className="flex flex-col gap-4 lg:w-185 lg:shrink-0">
          <InventoryLabel name="Data table/Default" usage="Aligned numerals, one-pixel rules and explicit selected row." />
          <DataTable
            caption="Scenario comparison"
            columns={scenarioColumns}
            rows={scenarioRows}
            getRowKey={(row) => row.id}
            selectedKey="reallocate"
          />
        </div>
        <div className="flex flex-1 flex-col gap-4">
          <InventoryLabel name="Input/Default" usage="Persistent label, visible boundary and concise helper text." />
          <Input
            label="Decision name"
            hideLabel
            defaultValue="Q4 growth allocation"
            helper="Use semantic border and text tokens; validation must never depend on color alone."
          />
        </div>
      </div>

      <div data-mode="intelligence" className="-mx-(--layout-margin) flex flex-col gap-4.5 bg-background px-(--layout-margin) py-8 lg:mx-0 lg:px-0">
        <div className="lg:px-0">
          <InventoryLabel
            name={'Tabs · Visualization container/\u200BOpportunity Surface'}
            usage="Tabs reveal analytical views. The container is the canonical visualization grammar."
          />
        </div>
        <Tabs defaultValue="Scenarios">
          <TabsList aria-label="Analytical views">
            {analyticalTabs.map((tab) => (
              <TabsTrigger key={tab} value={tab}>
                {tab}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
        <VisualizationContainer description="Opportunity surface: Scenario 03 selected direction, value up 8.7 percent at 82 percent confidence, from a current baseline of 100.">
          <OpportunitySurface
            variant="simple"
            selected={{ label: 'Scenario 03', value: 'Δ VALUE +8.7%', detail: 'Confidence 82%' }}
          />
        </VisualizationContainer>
      </div>
    </SectionShell>
  )
}
