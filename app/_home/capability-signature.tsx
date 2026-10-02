import type { CSSProperties } from 'react'

export type CapabilitySignatureKind = 'forecast' | 'measurement' | 'optimization' | 'pricing' | 'customer'

// The --viz-opacity-* tokens are calibrated for full-size surfaces and disappear at signature scale,
// so neutral structure uses the line color tokens instead.
type NeutralTone = 'alternative' | 'observed' | 'reference'

const neutralTones: Record<NeutralTone, { className: string; style: CSSProperties }> = {
  alternative: { className: 'stroke-line-strong', style: { strokeWidth: 'var(--viz-line-trajectory-neutral)' } },
  observed: { className: 'stroke-fg-secondary', style: { strokeWidth: 'var(--viz-line-trajectory-neutral)' } },
  reference: { className: 'stroke-line', style: { strokeWidth: 'var(--viz-line-grid)' } },
}
const signal: CSSProperties = { strokeWidth: 'var(--viz-line-trajectory-selected)' }

function Neutral({ d, tone = 'alternative' }: { d: string; tone?: NeutralTone }) {
  const { className, style } = neutralTones[tone]
  return <path d={d} className={className} style={style} vectorEffect="non-scaling-stroke" />
}

function Signal({ d }: { d: string }) {
  return <path d={d} className="stroke-signal" style={signal} strokeLinecap="round" vectorEffect="non-scaling-stroke" />
}

function Point({ x, y, tone }: { x: number; y: number; tone: 'current' | 'signal' | 'neutral' }) {
  const className = tone === 'signal' ? 'fill-signal' : tone === 'current' ? 'fill-viz-current' : 'fill-viz-neutral'
  return <circle cx={x} cy={y} r={tone === 'neutral' ? 1.6 : 2.4} className={className} />
}

/** Each signature encodes the analytical structure of the question; cyan marks only the answer. */
const signatures: Record<CapabilitySignatureKind, React.ReactNode> = {
  forecast: (
    <>
      <Neutral d="M52 4 V44" tone="reference" />
      <Neutral d="M4 34 C14 30 20 36 30 30 S44 28 52 26" tone="observed" />
      <Neutral d="M52 26 C72 24 92 26 116 25" />
      <Neutral d="M52 26 C72 30 92 36 116 40" />
      <Signal d="M52 26 C70 22 90 14 116 7" />
      <Point x={52} y={26} tone="current" />
    </>
  ),
  measurement: (
    <>
      <Neutral d="M4 34 C30 33 60 32 116 30" />
      <Neutral d="M4 34 C30 33 48 30 60 24 S96 14 116 12" tone="observed" />
      <Signal d="M108 13 V30" />
      <Point x={108} y={13} tone="signal" />
      <Point x={108} y={30} tone="neutral" />
    </>
  ),
  optimization: (
    <>
      <Neutral d="M12 32 C40 32 70 38 104 42" />
      <Neutral d="M12 32 C40 30 70 26 104 24" />
      <Neutral d="M12 32 C36 30 60 4 84 6" />
      <Signal d="M12 32 C42 26 72 14 104 10" />
      <Point x={12} y={32} tone="current" />
      <Point x={104} y={10} tone="signal" />
    </>
  ),
  pricing: (
    <>
      <Neutral d="M4 44 H116" tone="reference" />
      <Neutral d="M8 8 C40 14 76 28 112 40" />
      <Signal d="M8 38 C30 14 50 8 64 8 S96 18 112 34" />
      <Neutral d="M64 8 V44" tone="reference" />
      <Point x={64} y={8} tone="signal" />
    </>
  ),
  customer: (
    <>
      {[
        [10, 30], [16, 22], [20, 36], [26, 28], [32, 18], [36, 34], [42, 26], [48, 38], [52, 20],
        [58, 30], [64, 40], [70, 24], [74, 34],
      ].map(([x, y]) => (
        <Point key={`${x}-${y}`} x={x} y={y} tone="neutral" />
      ))}
      <Neutral d="M86 4 C100 4 114 8 114 18 S100 30 86 28 S80 4 86 4" tone="reference" />
      {[
        [92, 12], [98, 18], [104, 12], [100, 24], [108, 20],
      ].map(([x, y]) => (
        <Point key={`${x}-${y}`} x={x} y={y} tone="signal" />
      ))}
    </>
  ),
}

export function CapabilitySignature({ kind, className }: { kind: CapabilitySignatureKind; className?: string }) {
  return (
    <svg
      aria-hidden="true"
      data-signature={kind}
      viewBox="0 0 120 48"
      className={className}
      fill="none"
    >
      {signatures[kind]}
    </svg>
  )
}
