import { AnalyticalLabel, Container, Wordmark } from '@/components/gradience'

const principles = ['Clarity over decoration', 'Evidence over hype', 'Decision-making over technology theater']

export function SystemStatus() {
  return (
    <header data-reference-section="status" data-mode="light" className="bg-background pt-18 pb-22">
      <Container className="flex flex-col gap-16">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Wordmark className="text-lg" />
          <AnalyticalLabel>System specification · 2026 · Next.js production</AnalyticalLabel>
        </div>
        <div className="flex flex-col gap-12 lg:flex-row lg:items-end lg:gap-24">
          <div className="flex flex-col gap-6 lg:w-195 lg:shrink-0">
            <AnalyticalLabel tone="signal">System status</AnalyticalLabel>
            <h1 className="type-display-closing text-balance text-fg md:text-[64px] md:leading-[66px] md:tracking-[-2.5px]">
              {'GRADIENCE — Developer Handoff / Design System'}
            </h1>
          </div>
          <div className="flex flex-col items-start gap-4.5">
            <span className="rounded-sm border border-selected px-3 py-2.5 type-ui-xsmall font-semibold uppercase text-selected">
              Approved / Frozen visual direction
            </span>
            <p className="type-body-default text-pretty text-fg-secondary">
              Production specification for implementing the approved Gradience system in Next.js. Documentation and
              systemization only.
            </p>
          </div>
        </div>
        <div className="h-px bg-line" />
        <ul className="grid gap-8 md:grid-cols-3 md:gap-6">
          {principles.map((principle) => (
            <li key={principle} className="flex flex-col gap-3">
              <span aria-hidden="true" className="h-0.5 w-8 bg-signal" />
              <span className="type-body-default font-semibold text-fg">{principle}</span>
            </li>
          ))}
        </ul>
      </Container>
    </header>
  )
}
