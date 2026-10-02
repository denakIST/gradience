import Link from 'next/link'
import { AnalyticalLabel } from '../brand/analytical-label'
import { Wordmark } from '../brand/wordmark'
import { Container } from '../layout/container'
import type { SiteLink } from '@/lib/site'

export function SiteFooter({ links }: { links: SiteLink[] }) {
  return (
    <footer data-home-section="footer" className="border-t border-line bg-background">
      <Container className="flex flex-col gap-16 py-16 md:py-24">
        <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
          <div className="flex flex-col gap-4">
            <Link href="/" aria-label="Gradience home" className="self-start">
              <Wordmark />
            </Link>
            <AnalyticalLabel>Advanced Analytics &amp; Decision Intelligence</AnalyticalLabel>
            <p className="type-body-default text-fg">Find the direction of greatest opportunity.</p>
          </div>
          <nav aria-label="Footer">
            <ul className="flex flex-col gap-3 md:items-end">
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
          </nav>
        </div>
        <div className="border-t border-line pt-6">
          <p className="type-supporting-small text-fg-secondary">gradienceanalytics.com</p>
        </div>
      </Container>
    </footer>
  )
}
