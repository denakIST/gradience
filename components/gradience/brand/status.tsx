import { cn } from '@/lib/utils'

const statusStyles = {
  draft: { frame: 'border-line-subtle', label: 'text-fg', marker: 'bg-fg-tertiary' },
  selected: { frame: 'border-selected', label: 'text-selected', marker: 'bg-selected' },
  reviewed: { frame: 'border-line-strong', label: 'text-fg', marker: 'bg-fg-tertiary' },
  'needs-evidence': { frame: 'border-line-emphasis', label: 'text-fg', marker: 'bg-fg-tertiary' },
} as const

export type StatusVariant = keyof typeof statusStyles

type StatusProps = {
  variant: StatusVariant
  children: React.ReactNode
  className?: string
}

export function Status({ variant, children, className }: StatusProps) {
  const style = statusStyles[variant]
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-sm border px-2.25 py-1.5 type-micro uppercase',
        style.frame,
        style.label,
        className,
      )}
    >
      <span aria-hidden="true" className={cn('size-1.25 rounded-full', style.marker)} />
      {children}
    </span>
  )
}

export function Tag({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-sm border border-line-subtle px-2.5 py-1.5 type-supporting-small font-medium text-fg-secondary',
        className,
      )}
    >
      {children}
    </span>
  )
}
