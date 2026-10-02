import { cn } from '@/lib/utils'
import { AnalyticalLabel } from '../brand/analytical-label'

type SectionIntroProps = {
  eyebrow: string
  title: React.ReactNode
  titleId: string
  children?: React.ReactNode
  className?: string
}

/** Editorial section opening: analytical eyebrow, section heading and optional lead copy. */
export function SectionIntro({ eyebrow, title, titleId, children, className }: SectionIntroProps) {
  return (
    <div className={cn('flex flex-col gap-6', className)}>
      <AnalyticalLabel>{eyebrow}</AnalyticalLabel>
      <h2 id={titleId} className="type-heading-section text-balance text-fg">
        {title}
      </h2>
      {children ? (
        <div className="flex flex-col gap-4 type-body-large text-pretty text-fg-secondary">{children}</div>
      ) : null}
    </div>
  )
}
