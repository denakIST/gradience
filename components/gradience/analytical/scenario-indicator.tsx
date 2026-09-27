'use client'

import * as RadioGroup from '@radix-ui/react-radio-group'
import { cn } from '@/lib/utils'
import { AnalyticalLabel } from '../brand/analytical-label'

type ScenarioSelectorProps = React.ComponentProps<typeof RadioGroup.Root> & {
  label?: string
}

export function ScenarioSelector({ label = 'Scenario selector', className, children, ...props }: ScenarioSelectorProps) {
  return (
    <div className={cn('flex flex-col gap-3', className)}>
      <AnalyticalLabel aria-hidden="true">{label}</AnalyticalLabel>
      <RadioGroup.Root aria-label={label} className="flex flex-col gap-3" {...props}>
        {children}
      </RadioGroup.Root>
    </div>
  )
}

type ScenarioIndicatorProps = {
  value: string
  title: string
  description: string
  className?: string
}

export function ScenarioIndicator({ value, title, description, className }: ScenarioIndicatorProps) {
  return (
    <RadioGroup.Item
      value={value}
      className={cn(
        'group flex w-full items-center gap-4 rounded-control border border-line-subtle bg-surface-raised p-4 text-left',
        'data-[state=checked]:border-2 data-[state=checked]:border-selected data-[state=checked]:p-3.75',
        className,
      )}
    >
      <span
        aria-hidden="true"
        className="size-2.5 shrink-0 rounded-full bg-line-subtle group-data-[state=checked]:bg-selected"
      />
      <span className="flex min-w-0 flex-1 flex-col gap-1">
        <span className="type-ui-default font-semibold text-fg">{title}</span>
        <span className="type-ui-xsmall text-fg-secondary">{description}</span>
      </span>
      <span aria-hidden="true" className="type-ui-default text-fg-tertiary group-data-[state=checked]:text-selected">
        {'→'}
      </span>
    </RadioGroup.Item>
  )
}
