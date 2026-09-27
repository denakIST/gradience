import { AnalyticalLabel } from '@/components/gradience'
import { cn } from '@/lib/utils'
import { primitives, semanticTokens } from '../_data'
import { SectionShell } from './section-shell'

export function TokenArchitecture() {
  return (
    <SectionShell
      id="tokens"
      index="01"
      title="Token architecture"
      description="Primitives are locked values. Semantic tokens carry intent across Gradience Light and Gradience Intelligence without creating separate brands."
    >
      <div className="flex flex-col gap-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h3 className="type-heading-component text-fg">Gradience Primitives</h3>
          <AnalyticalLabel>Locked · Do not alias by hex in components</AnalyticalLabel>
        </div>
        <ul className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
          {primitives.map((color) => (
            <li
              key={color.name}
              className={cn('flex h-45 flex-col justify-between rounded-md border p-4', color.swatch, color.border)}
            >
              <span className={cn('type-ui-small font-semibold', color.text)}>{color.name}</span>
              <span className="flex flex-col gap-0.5">
                <span className={cn('type-ui-xsmall', color.meta)}>{color.hex}</span>
                <code className={cn('type-supporting-small', color.meta)}>{color.token}</code>
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col gap-5">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div className="flex flex-col gap-1.5">
            <h3 className="type-heading-component text-fg">Gradience Semantic</h3>
            <p className="type-ui-default text-fg-secondary">
              Consume these names in production. Mode values are implementation mappings—not new palettes.
            </p>
          </div>
        </div>
        <div className="overflow-x-auto rounded-md border border-line">
          <table className="w-full min-w-140 border-collapse text-left">
            <caption className="sr-only">Semantic token mappings per mode</caption>
            <thead>
              <tr>
                <th scope="col" className="px-4 py-2.5 type-label-analytical text-fg-secondary">Token</th>
                <th scope="col" className="w-44 px-4 py-2.5 type-label-analytical text-fg-secondary">Light</th>
                <th scope="col" className="w-44 px-4 py-2.5 type-label-analytical text-fg-secondary">Intelligence</th>
              </tr>
            </thead>
            <tbody>
              {semanticTokens.map((token) => (
                <tr key={token.name} className="border-t border-line">
                  <th scope="row" className="px-4 py-2.5 type-ui-small font-semibold text-fg">{token.name}</th>
                  <td className="px-4 py-2.5 type-ui-small text-fg-secondary">{token.light}</td>
                  <td className="px-4 py-2.5 type-ui-small text-fg-secondary">{token.intelligence}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex flex-col gap-4 border-t border-line pt-5 md:flex-row md:gap-8">
        <span aria-hidden="true" className="mt-3 h-0.75 w-12 shrink-0 bg-signal" />
        <p className="type-body-large font-semibold text-fg md:flex-1">
          Signal Cyan means opportunity / selection / analytical signal / primary action only.
        </p>
        <p className="type-body-default text-fg-secondary md:w-105">
          Never use cyan for decoration, generic emphasis, large backgrounds or ambient brand color.
        </p>
      </div>
    </SectionShell>
  )
}
