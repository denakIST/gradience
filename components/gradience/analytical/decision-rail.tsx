import { cn } from '@/lib/utils'

type DecisionRailProps = {
  stages: string[]
  activeIndex: number
  label?: string
  className?: string
}

export function DecisionRail({ stages, activeIndex, label = 'Decision lifecycle', className }: DecisionRailProps) {
  return (
    <ol aria-label={label} className={cn('flex flex-col', className)}>
      {stages.map((stage, index) => {
        const active = index === activeIndex
        return (
          <li
            key={stage}
            aria-current={active ? 'step' : undefined}
            className="flex h-11 animate-illuminate items-center gap-3.5"
            style={{ animationDelay: `calc(var(--motion-stagger-illuminate) * ${index})` }}
          >
            <span
              className={cn(
                'flex size-6.5 shrink-0 items-center justify-center rounded-sm border type-micro tabular-nums',
                active ? 'border-selected bg-selected text-on-action' : 'border-line-subtle bg-surface text-fg-secondary',
              )}
            >
              {String(index + 1).padStart(2, '0')}
            </span>
            <span className={cn('type-supporting-small font-semibold uppercase', active ? 'text-selected' : 'text-fg')}>
              {stage}
            </span>
          </li>
        )
      })}
    </ol>
  )
}
