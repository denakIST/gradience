import { cn } from '@/lib/utils'

type ReturnPathProps = {
  label: string
  /** Horizontal start (left) of the return path, as a CSS length. Aligns the arrow with the first stage. */
  start?: string
  /** Horizontal end (right edge) of the return path, as a CSS length. Aligns with the last stage. */
  end: string
  className?: string
}

/**
 * Restrained feedback path drawn beneath a horizontal sequence: it drops from the last stage,
 * runs back along the baseline and rises into the first stage, labelled with what flows back.
 */
export function ReturnPath({ label, start = '0px', end, className }: ReturnPathProps) {
  return (
    <div aria-hidden="true" className={cn('flex flex-col gap-3', className)}>
      <div
        className="relative h-8 border-x border-b border-line-strong"
        style={{ marginLeft: start, width: `calc(${end} - ${start} + 1px)` }}
      >
        <svg
          viewBox="0 0 9 6"
          className="absolute -top-1.5 -left-1 h-1.5 w-2.25 fill-none stroke-line-strong"
          style={{ strokeWidth: 'var(--viz-line-trajectory-neutral)' }}
        >
          <path d="M0.5 5.5 L4.5 1 L8.5 5.5" vectorEffect="non-scaling-stroke" />
        </svg>
      </div>
      <p className="type-label-analytical text-fg-secondary" style={{ paddingLeft: start }}>
        {label}
      </p>
    </div>
  )
}
