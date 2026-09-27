import { cn } from '@/lib/utils'

export function Wordmark({ className }: { className?: string }) {
  return <span className={cn('type-wordmark text-fg', className)}>GRADIENCE</span>
}
