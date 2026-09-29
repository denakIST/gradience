'use client'

import { useId } from 'react'
import { cn } from '@/lib/utils'
import { AnalyticalLabel } from './analytical-label'

type InputProps = Omit<React.ComponentProps<'input'>, 'size'> & {
  label: string
  hideLabel?: boolean
  helper?: string
  error?: string
}

export function Input({ label, hideLabel, helper, error, id, className, ...props }: InputProps) {
  const generatedId = useId()
  const inputId = id ?? generatedId
  const helperId = `${inputId}-helper`
  const errorId = `${inputId}-error`
  const describedBy = [error ? errorId : null, helper ? helperId : null].filter(Boolean).join(' ') || undefined

  return (
    <div className={cn('flex flex-col gap-2', className)}>
      <AnalyticalLabel as="label" htmlFor={inputId} className={hideLabel ? 'sr-only' : undefined}>
        {label}
      </AnalyticalLabel>
      <input
        id={inputId}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy}
        className={cn(
          'h-12 w-full rounded-control border border-line-subtle bg-surface-raised px-3.5 type-ui-default text-fg',
          'placeholder:text-fg-tertiary',
          'aria-invalid:border-line-emphasis',
          'disabled:opacity-55',
        )}
        {...props}
      />
      {error ? (
        <p id={errorId} className="type-supporting-small text-fg">
          <span className="font-semibold">Error: </span>
          {error}
        </p>
      ) : null}
      {helper ? (
        <p id={helperId} className="type-supporting-small text-fg-secondary">
          {helper}
        </p>
      ) : null}
    </div>
  )
}
