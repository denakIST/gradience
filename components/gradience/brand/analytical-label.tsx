import { cn } from '@/lib/utils'
import { textTones, type TextTone } from './text'

type AnalyticalLabelProps<T extends React.ElementType> = {
  as?: T
  tone?: Extract<TextTone, 'primary' | 'secondary' | 'signal'>
} & Omit<React.ComponentPropsWithoutRef<T>, 'as'>

export function AnalyticalLabel<T extends React.ElementType = 'span'>({
  as,
  tone = 'secondary',
  className,
  ...props
}: AnalyticalLabelProps<T>) {
  const Component = as ?? 'span'
  return <Component className={cn('type-label-analytical block', textTones[tone], className)} {...props} />
}
