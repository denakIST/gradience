import { Container } from '@/components/gradience/layout/container'
import { AnalyticalLabel } from '@/components/gradience/brand/analytical-label'
import { Wordmark } from '@/components/gradience/brand/wordmark'
import { TextLink } from '@/components/gradience/brand/text-link'

export default function Home() {
  return (
    <main className="flex min-h-dvh flex-col justify-center py-24">
      <Container className="flex flex-col gap-6">
        <Wordmark />
        <AnalyticalLabel>Homepage not yet implemented</AnalyticalLabel>
        <TextLink href="/dev/design-system">View the design system</TextLink>
      </Container>
    </main>
  )
}
