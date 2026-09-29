import { cn } from '@/lib/utils'
import { trajectories } from './trajectory-paths'

type Point = { x: number; y: number }

/**
 * - `simple`: the primary analytical signal only — selected trajectory, selected state and its annotation.
 * - `canonical`: the complete approved grammar — grid, uncertainty contours, neutral alternatives,
 *   current state, selected state and selected trajectory.
 */
export type OpportunitySurfaceVariant = 'simple' | 'canonical'

type OpportunitySurfaceProps = {
  variant?: OpportunitySurfaceVariant
  selected: {
    label: string
    value: string
    detail?: string
  }
  /** Rendered by the canonical variant only. */
  current?: {
    label: string
    detail?: string
  }
  currentPoint?: Point
  selectedPoint?: Point
  decisionBoundaryX?: number
  size?: 'wide' | 'compact'
}

const gridStops = [20, 40, 60, 80]

export function OpportunitySurface({
  variant = 'canonical',
  selected,
  current = { label: 'Current', detail: 'Baseline 100' },
  currentPoint = { x: 7, y: 73 },
  selectedPoint = { x: 89, y: 16 },
  decisionBoundaryX,
  size = 'wide',
}: OpportunitySurfaceProps) {
  const isCanonical = variant === 'canonical'

  return (
    <div
      data-variant={variant}
      className={cn(
        'relative h-64 w-full sm:h-auto',
        size === 'wide' ? 'sm:aspect-[1248/460]' : 'sm:aspect-[632/330]',
      )}
    >
      {isCanonical ? (
        <svg
          aria-hidden="true"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="absolute inset-0 hidden size-full stroke-line-subtle sm:block"
          style={{ strokeWidth: 'var(--viz-line-grid)', strokeOpacity: 'var(--viz-opacity-grid)' }}
        >
          {gridStops.map((stop) => (
            <line key={`v${stop}`} x1={stop} x2={stop} y1="0" y2="100" vectorEffect="non-scaling-stroke" />
          ))}
          {gridStops.map((stop) => (
            <line key={`h${stop}`} x1="0" x2="100" y1={stop} y2={stop} vectorEffect="non-scaling-stroke" />
          ))}
        </svg>
      ) : null}

      {isCanonical ? (
        <svg
          aria-hidden="true"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="absolute inset-0 hidden size-full fill-none stroke-viz-neutral sm:block"
        >
          <ellipse cx="50" cy="45" rx="32" ry="29" vectorEffect="non-scaling-stroke" style={{ strokeWidth: 'var(--viz-line-contour)', strokeOpacity: 'var(--viz-opacity-contour-outer)' }} />
          <ellipse cx="52" cy="44.5" rx="21" ry="18.5" vectorEffect="non-scaling-stroke" style={{ strokeWidth: 'var(--viz-line-contour)', strokeOpacity: 'var(--viz-opacity-contour-middle)' }} />
          <ellipse cx="54" cy="43" rx="10" ry="10" vectorEffect="non-scaling-stroke" style={{ strokeWidth: 'var(--viz-line-contour)', strokeOpacity: 'var(--viz-opacity-contour-inner)' }} />
        </svg>
      ) : null}

      {isCanonical
        ? trajectories.alternatives.map((path) => (
            <svg
              key={path.d}
              aria-hidden="true"
              viewBox={path.viewBox}
              preserveAspectRatio="none"
              className="absolute inset-0 hidden size-full fill-none stroke-viz-neutral sm:block"
            >
              <path
                d={path.d}
                vectorEffect="non-scaling-stroke"
                style={{ strokeWidth: 'var(--viz-line-trajectory-neutral)', strokeOpacity: 'var(--viz-opacity-trajectory-neutral)' }}
              />
            </svg>
          ))
        : null}

      <svg
        aria-hidden="true"
        viewBox={trajectories.selected.viewBox}
        preserveAspectRatio="none"
        className="absolute inset-0 size-full animate-reveal fill-none stroke-signal"
      >
        <path
          d={trajectories.selected.d}
          vectorEffect="non-scaling-stroke"
          strokeLinecap="round"
          style={{ strokeWidth: 'var(--viz-line-trajectory-selected)' }}
        />
      </svg>

      {decisionBoundaryX !== undefined ? (
        <span
          aria-hidden="true"
          className="absolute inset-y-0 w-(--viz-line-decision-boundary) bg-viz-boundary opacity-(--viz-opacity-decision-boundary)"
          style={{ left: `${decisionBoundaryX}%` }}
        />
      ) : null}

      <span
        aria-hidden="true"
        className="absolute size-(--viz-point-current) -translate-x-1/2 -translate-y-1/2 rounded-full bg-viz-current"
        style={{ left: `${currentPoint.x}%`, top: `${currentPoint.y}%` }}
      />
      <span
        aria-hidden="true"
        className="absolute size-(--viz-point-selected) -translate-x-1/2 -translate-y-1/2 rounded-full border-(length:--viz-point-ring) border-surface bg-selected"
        style={{ left: `${selectedPoint.x}%`, top: `${selectedPoint.y}%` }}
      />

      <div
        className="absolute flex flex-col gap-1"
        style={{ left: `${currentPoint.x}%`, top: `calc(${currentPoint.y}% + 32px)` }}
      >
        <span className="type-label-analytical text-fg-secondary">{current.label}</span>
        {current.detail ? (
          <span className="hidden type-supporting-small uppercase text-fg-secondary sm:block">{current.detail}</span>
        ) : null}
      </div>

      <div className="absolute top-[8%] left-[44%] flex max-w-[50%] flex-col gap-1 sm:left-[61%]">
        <span className="type-label-analytical text-signal">{selected.label}</span>
        <span className="type-ui-default font-semibold text-fg sm:type-body-default sm:font-semibold">{selected.value}</span>
        {selected.detail ? (
          <span className="type-supporting-small uppercase text-fg-secondary">{selected.detail}</span>
        ) : null}
      </div>
    </div>
  )
}
