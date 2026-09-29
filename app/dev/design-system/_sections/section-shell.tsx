import { AnalyticalLabel, Container, SectionHeading } from '@/components/gradience'
import { cn } from '@/lib/utils'

type SectionShellProps = {
  id: string
  index: string
  title: string
  description: string
  mode?: 'light' | 'intelligence'
  surface?: 'background' | 'surface'
  children: React.ReactNode
}

export function SectionShell({
  id,
  index,
  title,
  description,
  mode = 'light',
  surface = 'surface',
  children,
}: SectionShellProps) {
  return (
    <section
      aria-labelledby={`${id}-title`}
      data-reference-section={id}
      data-mode={mode}
      className={cn('py-16 md:py-24', surface === 'surface' ? 'bg-surface' : 'bg-background')}
    >
      <Container className="flex flex-col gap-12">
        <SectionHeading id={`${id}-title`} index={index} title={title} description={description} />
        {children}
      </Container>
    </section>
  )
}

export function InventoryLabel({ name, usage }: { name: string; usage: string }) {
  return (
    <div className="flex max-w-57.5 flex-col gap-1.5">
      <h3 className="type-ui-small font-semibold text-fg">{name}</h3>
      <p className="type-supporting-small text-fg-secondary">{usage}</p>
    </div>
  )
}

export function ScenarioStateSpec({ className }: { className?: string }) {
  return (
    <dl className={cn('flex max-w-77.5 flex-col gap-3', className)}>
      <div className="flex flex-col gap-1">
        <AnalyticalLabel as="dt">Default state</AnalyticalLabel>
        <dd className="type-supporting-small text-fg-secondary">stroke: Structural Grid · marker: Grid · arrow: Slate</dd>
      </div>
      <div className="flex flex-col gap-1">
        <AnalyticalLabel as="dt" tone="signal">
          Selected state
        </AnalyticalLabel>
        <dd className="type-supporting-small text-fg-secondary">
          strokeWidth: 2 · stroke: Signal Cyan · marker: Cyan · arrow: Cyan
        </dd>
      </div>
    </dl>
  )
}
