import { cn } from '@/lib/utils'

type SectionHeadingProps = {
  index?: string
  title: string
  description?: React.ReactNode
  as?: 'h1' | 'h2' | 'h3'
  id?: string
  className?: string
}

export function SectionHeading({ index, title, description, as: Heading = 'h2', id, className }: SectionHeadingProps) {
  return (
    <header
      className={cn('flex flex-col gap-3 border-b border-line pb-5 md:flex-row md:gap-8', className)}
    >
      {index ? (
        <span className="type-ui-xsmall font-semibold text-signal tabular-nums md:w-14 md:shrink-0">{index}</span>
      ) : null}
      <Heading id={id} className="type-heading-component text-fg md:w-80 md:shrink-0">
        {title}
      </Heading>
      {description ? <p className="type-body-small text-pretty text-fg-secondary md:flex-1">{description}</p> : null}
    </header>
  )
}
