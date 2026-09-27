import { cn } from '@/lib/utils'

export const typeRoles = {
  'display-hero': 'type-display-hero',
  'display-anchor': 'type-display-anchor',
  'display-closing': 'type-display-closing',
  'heading-section': 'type-heading-section',
  'heading-question': 'type-heading-question',
  'body-large': 'type-body-large',
  'body-default': 'type-body-default',
  'label-analytical': 'type-label-analytical',
  'metric-large': 'type-metric-large',
  'supporting-small': 'type-supporting-small',
  'heading-component': 'type-heading-component',
  'heading-specimen': 'type-heading-specimen',
  'body-small': 'type-body-small',
} as const

export type TypeRole = keyof typeof typeRoles

export const textTones = {
  primary: 'text-fg',
  secondary: 'text-fg-secondary',
  tertiary: 'text-fg-tertiary',
  signal: 'text-signal',
  inverse: 'text-fg-inverse',
} as const

export type TextTone = keyof typeof textTones

type TextProps<T extends React.ElementType> = {
  as?: T
  role?: TypeRole
  tone?: TextTone
} & Omit<React.ComponentPropsWithoutRef<T>, 'as' | 'role'>

export function Text<T extends React.ElementType = 'p'>({
  as,
  role = 'body-default',
  tone = 'primary',
  className,
  ...props
}: TextProps<T>) {
  const Component = as ?? 'p'
  return <Component className={cn(typeRoles[role], textTones[tone], className)} {...props} />
}
