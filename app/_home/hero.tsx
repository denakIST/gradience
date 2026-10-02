import Link from 'next/link'
import { AnalyticalLabel } from '@/components/gradience/brand/analytical-label'
import { Button } from '@/components/gradience/brand/button'
import { Text } from '@/components/gradience/brand/text'
import { Container } from '@/components/gradience/layout/container'
import {
  VisualizationContainer,
  VisualizationLegend,
} from '@/components/gradience/analytical/visualization-container'
import { OpportunitySurface } from '@/components/gradience/analytical/visualizations/opportunity-surface'
import { primaryCta } from '@/lib/site'

export function Hero() {
  return (
    <section aria-labelledby="hero-title" data-home-section="hero">
      <Container className="grid grid-cols-1 gap-16 pt-12 pb-16 md:pt-20 md:pb-24 lg:grid-cols-12 lg:items-center lg:gap-x-(--grid-gutter) lg:pt-24 lg:pb-32">
        <div className="flex flex-col gap-8 lg:col-span-7">
          <AnalyticalLabel>Advanced Analytics for Better Business Decisions</AnalyticalLabel>
          <h1 id="hero-title" className="type-display-hero text-balance text-fg">
            <span className="block">Model what could happen.</span>
            <span className="block">Decide what to do next.</span>
          </h1>
          <Text role="body-large" tone="secondary" className="max-w-(--layout-reading) text-pretty">
            Gradience combines advanced analytics, machine learning and AI to help growth leaders understand what
            drives performance, forecast what could happen, and determine where to invest for greater impact.
          </Text>
          <div className="flex flex-col items-start gap-6">
            <Button asChild>
              <Link href={primaryCta.href}>{primaryCta.label}</Link>
            </Button>
            <AnalyticalLabel>Forecasting · Measurement · Optimization · Decision Intelligence</AnalyticalLabel>
          </div>
        </div>

        <div className="lg:col-span-5">
          <VisualizationContainer
            label="Illustrative analytical output"
            description="Illustrative opportunity surface. Several possible directions diverge from the current position; scenario 03 is identified as the more attractive path, shown with an example change in value of plus 8.7 percent at 82 percent confidence."
            legend={
              <div className="flex flex-col gap-3">
                <VisualizationLegend
                  items={[
                    { label: 'Alternative directions', kind: 'neutral' },
                    { label: 'Selected direction', kind: 'signal' },
                  ]}
                />
                <p className="type-supporting-small text-fg-secondary">
                  Example values for illustration only. Not a performance claim.
                </p>
              </div>
            }
          >
            <OpportunitySurface
              variant="canonical"
              size="compact"
              selectedPoint={{ x: 82, y: 16 }}
              selected={{ label: 'Scenario 03', value: 'Δ Value +8.7%', detail: 'Confidence 82%' }}
              current={{ label: 'Current', detail: 'Baseline' }}
              annotationPlacement={{ selected: 'leading', current: 'above' }}
            />
          </VisualizationContainer>
        </div>
      </Container>
    </section>
  )
}
