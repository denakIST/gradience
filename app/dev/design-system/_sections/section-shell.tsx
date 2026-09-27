import { Container, SectionHeading } from '@/components/gradience'
import { cn } from '@/lib/utils'

type SectionShellProps = {
  id: string
  index: string
  title: string
  description: string
  mode?: 'light' | 'intelligence'
  surface?: 'background' | 'surface'
  children: React.ReactNode
}

export function SectionShell({
  id,
  index,
  title,
  description,
  mode = 'light',
  surface = 'surface',
  children,
}: SectionShellProps) {
  return (
    <section
      aria-labelledby={`${id}-title`}
      data-mode={mode}
      className={cn('py-16 md:py-24', surface === 'surface' ? 'bg-surface' : 'bg-background')}
    >
      <Container className="flex flex-col gap-12">
        <SectionHeading id={`${id}-title`} index={index} title={title} description={description} />
        {children}
      </Container>
    </section>
  )
}

export function InventoryLabel({ name, usage }: { name: string; usage: string }) {
  return (
    <div className="flex max-w-60 flex-col gap-1.5">
      <h3 className="type-ui-small font-semibold text-fg">{name}</h3>
      <p className="type-supporting-small text-fg-secondary">{usage}</p>
    </div>
  )
}
