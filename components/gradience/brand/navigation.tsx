import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Button } from './button'
import { Wordmark } from './wordmark'

type NavLink = { label: string; href: string }

type MarketingNavigationProps = {
  links: NavLink[]
  cta: NavLink
  className?: string
}

export function MarketingNavigation({ links, cta, className }: MarketingNavigationProps) {
  return (
    <nav
      aria-label="Primary"
      data-mode="light"
      className={cn('flex h-18 items-center justify-between gap-6 border-b border-line bg-background px-4 md:px-8', className)}
    >
      <Link href="/" aria-label="Gradience home">
        <Wordmark />
      </Link>
      <div className="flex items-center gap-7">
        <ul className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="type-ui-small font-medium text-fg-secondary">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <Button asChild>
          <Link href={cta.href}>{cta.label}</Link>
        </Button>
      </div>
    </nav>
  )
}

type ApplicationNavigationProps = {
  links: NavLink[]
  activeHref: string
  className?: string
}

export function ApplicationNavigation({ links, activeHref, className }: ApplicationNavigationProps) {
  return (
    <nav
      aria-label="DecisionOS"
      data-mode="intelligence"
      className={cn('flex h-18 items-center justify-between gap-6 border-b border-line-subtle bg-background px-4 md:px-8', className)}
    >
      <Link href="/" aria-label="Gradience home">
        <Wordmark />
      </Link>
      <ul className="flex items-center gap-5 overflow-x-auto">
        {links.map((link) => {
          const active = link.href === activeHref
          return (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-current={active ? 'page' : undefined}
                className={cn('type-ui-small whitespace-nowrap', active ? 'font-semibold text-signal' : 'font-medium text-fg-secondary')}
              >
                {link.label}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
