'use client'

import Link from 'next/link'
import { useId, useRef, useState } from 'react'
import { Button } from '../brand/button'
import { Wordmark } from '../brand/wordmark'
import { Container } from '../layout/container'
import type { SiteLink } from '@/lib/site'

type SiteHeaderProps = {
  links: SiteLink[]
  cta: SiteLink
}

/**
 * Responsive composition of the approved MarketingNavigation anatomy (wordmark, quiet links,
 * single primary action) with a disclosure menu below `lg`, which MarketingNavigation lacks.
 */
export function SiteHeader({ links, cta }: SiteHeaderProps) {
  const [open, setOpen] = useState(false)
  const menuId = useId()
  const toggleRef = useRef<HTMLButtonElement>(null)

  function close() {
    setOpen(false)
  }

  return (
    <header
      data-home-section="navigation"
      className="border-b border-line bg-background"
      onKeyDown={(event) => {
        if (event.key === 'Escape' && open) {
          close()
          toggleRef.current?.focus()
        }
      }}
    >
      <Container>
        <nav aria-label="Primary" className="flex h-18 items-center justify-between gap-6">
          <Link href="/" aria-label="Gradience home">
            <Wordmark />
          </Link>
          <div className="flex items-center gap-7">
            <ul className="hidden items-center gap-7 lg:flex">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="type-ui-small font-medium text-fg-secondary transition-colors duration-respond ease-controlled hover:text-fg"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Button asChild className="hidden sm:inline-flex">
              <Link href={cta.href}>{cta.label}</Link>
            </Button>
            <Button
              ref={toggleRef}
              variant="secondary"
              size="compact"
              aria-expanded={open}
              aria-controls={menuId}
              onClick={() => setOpen((value) => !value)}
              className="lg:hidden"
            >
              {open ? 'Close' : 'Menu'}
            </Button>
          </div>
        </nav>
      </Container>

      <div id={menuId} hidden={!open} className="border-t border-line lg:hidden">
        <Container className="flex flex-col gap-8 py-8">
          <ul className="flex flex-col">
            {links.map((link) => (
              <li key={link.href} className="border-b border-line">
                <Link href={link.href} onClick={close} className="block py-4 type-body-large font-medium text-fg">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Button asChild className="sm:hidden">
            <Link href={cta.href} onClick={close}>
              {cta.label}
            </Link>
          </Button>
        </Container>
      </div>
    </header>
  )
}
