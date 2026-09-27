import { cn } from '@/lib/utils'
import { AnalyticalLabel } from '../brand/analytical-label'

type MetricProps = {
  label: string
  value: string
  detail?: string
  detailTone?: 'signal' | 'secondary'
  className?: string
}

export function Metric({ label, value, detail, detailTone = 'secondary', className }: MetricProps) {
  return (
    <div className={cn('flex flex-col gap-2 border-t border-line pt-4', className)}>
      <AnalyticalLabel>{label}</AnalyticalLabel>
      <p className="type-metric-large text-fg">{value}</p>
      {detail ? (
        <p className={cn('type-ui-default', detailTone === 'signal' ? 'text-signal' : 'text-fg-secondary')}>{detail}</p>
      ) : null}
    </div>
  )
}
