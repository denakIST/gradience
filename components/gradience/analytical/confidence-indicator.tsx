import { useId } from 'react'
import { cn } from '@/lib/utils'
import { AnalyticalLabel } from '../brand/analytical-label'

type ConfidenceIndicatorProps = {
  value: number
  low: number
  high: number
  label?: string
  explanation?: string
  className?: string
}

/** Quantitative component: the fill width is always derived from `value`, never set independently. */
export function ConfidenceIndicator({
  value,
  low,
  high,
  label = 'Confidence interval',
  explanation,
  className,
}: ConfidenceIndicatorProps) {
  const labelId = useId()
  const clamped = Math.min(100, Math.max(0, value))

  return (
    <div className={cn('flex flex-col gap-4', className)}>
      <div className="flex items-start justify-between gap-4">
        <AnalyticalLabel id={labelId}>{label}</AnalyticalLabel>
        <span className="type-heading-component text-fg tabular-nums">{value}%</span>
      </div>
      <div
        role="meter"
        aria-labelledby={labelId}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={clamped}
        aria-valuetext={`${value}% confidence, bounded range ${low}–${high}%`}
        className="h-3 w-full overflow-hidden rounded-xs bg-surface-muted"
      >
        <div
          className="h-full origin-left animate-quantify rounded-xs bg-signal"
          style={{ width: `${clamped}%` }}
        />
      </div>
      <div className="flex justify-between gap-4 type-supporting-small text-fg-secondary tabular-nums">
        <span>{low}% LOW</span>
        <span>{high}% HIGH</span>
      </div>
      {explanation ? <p className="type-ui-small text-pretty text-fg-secondary">{explanation}</p> : null}
    </div>
  )
}
