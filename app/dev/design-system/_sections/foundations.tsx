import { AnalyticalLabel } from '@/components/gradience'
import { cn } from '@/lib/utils'
import { constructionTokens, spacingScale, typeSpecimens } from '../_data'
import { SectionShell } from './section-shell'

export function Foundations() {
  return (
    <SectionShell
      id="foundations"
      index="02"
      title="Foundations"
      description="Typography roles, spacing, construction and grid are implementation contracts shared by both modes."
    >
      <div className="flex flex-col gap-12 lg:flex-row">
        <div className="flex flex-col gap-3 lg:w-75 lg:shrink-0">
          <AnalyticalLabel tone="signal">Typography</AnalyticalLabel>
          <h3 className="text-[30px] leading-[34.5px] font-medium text-fg">Approved hierarchy · Manrope only</h3>
          <p className="type-body-default text-fg-secondary">
            Style names are implementation contracts. Do not select type sizes ad hoc.
          </p>
        </div>
        <ul className="flex flex-1 flex-col">
          {typeSpecimens.map((style) => (
            <li
              key={style.name}
              className="flex flex-col gap-1 border-t border-line py-3 first:border-t md:flex-row md:items-center md:gap-5"
            >
              <span className="type-ui-xsmall font-semibold text-fg md:w-67.5 md:shrink-0">{style.name}</span>
              <span className="type-supporting-small text-fg-secondary md:w-35 md:shrink-0">{style.spec}</span>
              <span
                className={cn(
                  'md:flex-1',
                  style.signal
                    ? 'type-ui-small font-semibold text-signal'
                    : style.metric
                      ? 'type-heading-component text-fg tabular-nums'
                      : 'text-[18px] leading-[25px] text-fg',
                )}
              >
                {style.sample}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col gap-12 lg:flex-row">
        <div className="flex flex-1 flex-col gap-4.5">
          <AnalyticalLabel>Spacing scale</AnalyticalLabel>
          <ul className="flex items-end gap-2.5">
            {spacingScale.map((step) => (
              <li key={step} className="flex flex-1 flex-col items-center justify-end gap-2">
                <span
                  aria-hidden="true"
                  className={cn('w-full', step === 160 ? 'bg-signal' : 'bg-fg-tertiary opacity-55')}
                  style={{ height: `${Math.max(2, step / 3)}px` }}
                />
                <span className="type-micro font-normal text-fg-secondary tabular-nums">{step}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-4.5 lg:w-105 lg:shrink-0">
          <AnalyticalLabel>Construction</AnalyticalLabel>
          <ul className="flex flex-col">
            {constructionTokens.map((token) => (
              <li key={token} className="border-b border-line py-1 type-ui-small font-semibold text-fg">
                {token}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex flex-col gap-3 border-t border-line pt-5 md:flex-row md:items-center md:gap-8">
        <AnalyticalLabel tone="signal">Desktop grid</AnalyticalLabel>
        <p className="type-heading-specimen text-fg">12 columns · 24 gutter · 96 margins</p>
        <p className="type-ui-small text-fg-secondary md:flex-1 md:text-right">
          Content aligns to the 1248 px field inside the 1440 px page maximum.
        </p>
      </div>

      <div aria-hidden="true" className="hidden h-16 grid-cols-12 gap-(--grid-gutter) md:grid">
        {Array.from({ length: 12 }, (_, column) => (
          <span key={column} className="border-x border-line bg-background" />
        ))}
      </div>
    </SectionShell>
  )
}
