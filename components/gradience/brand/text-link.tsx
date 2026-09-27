import Link from 'next/link'
import { cn } from '@/lib/utils'

type TextLinkProps = React.ComponentProps<typeof Link>

export function TextLink({ className, children, ...props }: TextLinkProps) {
  return (
    <Link
      className={cn('group inline-flex items-center gap-2 type-ui-default font-semibold text-fg', className)}
      {...props}
    >
      {children}
      <span
        aria-hidden="true"
        className="h-0.5 w-5 bg-signal transition-transform duration-respond ease-controlled group-hover:translate-x-1"
      />
    </Link>
  )
}
