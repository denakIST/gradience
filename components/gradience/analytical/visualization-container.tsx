import { cn } from '@/lib/utils'
import { AnalyticalLabel } from '../brand/analytical-label'

type VisualizationContainerProps = {
  label?: string
  legend?: React.ReactNode
  description: string
  children: React.ReactNode
  className?: string
  frameClassName?: string
}

export function VisualizationContainer({
  label,
  legend,
  description,
  children,
  className,
  frameClassName,
}: VisualizationContainerProps) {
  return (
    <figure className={cn('flex flex-col gap-4', className)}>
      {label ? <AnalyticalLabel as="figcaption">{label}</AnalyticalLabel> : null}
      <div
        role="img"
        aria-label={description}
        className={cn('relative overflow-hidden rounded-md border border-line-subtle bg-surface', frameClassName)}
      >
        {children}
      </div>
      {legend}
    </figure>
  )
}

export type LegendItem = {
  label: string
  kind: 'neutral' | 'signal'
}

export function VisualizationLegend({ items, className }: { items: LegendItem[]; className?: string }) {
  return (
    <ul className={cn('flex flex-wrap items-center justify-between gap-x-8 gap-y-3', className)}>
      {items.map((item) => (
        <li key={item.label} className="flex items-center gap-2">
          <span
            aria-hidden="true"
            className={cn('w-7', item.kind === 'signal' ? 'h-0.75 bg-signal' : 'h-px bg-viz-neutral')}
          />
          <span className={cn('type-micro uppercase', item.kind === 'signal' ? 'text-signal' : 'text-fg-secondary')}>
            {item.label}
          </span>
        </li>
      ))}
    </ul>
  )
}
