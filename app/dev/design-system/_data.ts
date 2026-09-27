import type { DataTableColumn, LegendItem } from '@/components/gradience'

export const primitives = [
  { name: 'Gradience Ink', hex: '#101820', token: '--gradience-ink', swatch: 'bg-[var(--gradience-ink)]', text: 'text-[var(--gradience-white)]', meta: 'text-[var(--gradience-grid)]', border: 'border-[var(--gradience-ink)]' },
  { name: 'Warm Canvas', hex: '#F5F4F0', token: '--gradience-canvas', swatch: 'bg-[var(--gradience-canvas)]', text: 'text-[var(--gradience-ink)]', meta: 'text-[var(--gradience-slate)]', border: 'border-[var(--gradience-canvas)]' },
  { name: 'White', hex: '#FFFFFF', token: '--gradience-white', swatch: 'bg-[var(--gradience-white)]', text: 'text-[var(--gradience-ink)]', meta: 'text-[var(--gradience-slate)]', border: 'border-[var(--gradience-grid)]' },
  { name: 'Analytical Slate', hex: '#5F6972', token: '--gradience-slate', swatch: 'bg-[var(--gradience-slate)]', text: 'text-[var(--gradience-white)]', meta: 'text-[var(--gradience-grid)]', border: 'border-[var(--gradience-slate)]' },
  { name: 'Structural Grid', hex: '#D9DDE0', token: '--gradience-grid', swatch: 'bg-[var(--gradience-grid)]', text: 'text-[var(--gradience-ink)]', meta: 'text-[var(--gradience-slate)]', border: 'border-[var(--gradience-grid)]' },
  { name: 'Signal Cyan', hex: '#22B8C7', token: '--gradience-cyan', swatch: 'bg-[var(--gradience-cyan)]', text: 'text-[var(--gradience-ink)]', meta: 'text-[var(--gradience-slate)]', border: 'border-[var(--gradience-cyan)]' },
]

export const semanticTokens = [
  { name: 'color/background/primary', light: 'Warm Canvas', intelligence: 'Gradience Ink' },
  { name: 'color/background/inverse', light: 'Gradience Ink', intelligence: 'Warm Canvas' },
  { name: 'color/surface/primary', light: 'White', intelligence: 'Gradience Ink' },
  { name: 'color/text/primary', light: 'Gradience Ink', intelligence: 'White' },
  { name: 'color/text/secondary', light: 'Analytical Slate', intelligence: 'Structural Grid' },
  { name: 'color/text/inverse', light: 'White', intelligence: 'Gradience Ink' },
  { name: 'color/border/default', light: 'Structural Grid', intelligence: 'Analytical Slate' },
  { name: 'color/border/strong', light: 'Analytical Slate', intelligence: 'Structural Grid' },
  { name: 'color/signal/opportunity', light: 'Signal Cyan', intelligence: 'Signal Cyan' },
  { name: 'color/signal/selected', light: 'Signal Cyan', intelligence: 'Signal Cyan' },
  { name: 'color/action/primary', light: 'Signal Cyan', intelligence: 'Signal Cyan' },
  { name: 'color/status/selected', light: 'Signal Cyan', intelligence: 'Signal Cyan' },
]

export const typeSpecimens = [
  { name: 'Typography/Display/Hero', spec: '76 / 77 · Medium', sample: 'Model what could happen.' },
  { name: 'Typography/Display/Anchor', spec: '58 / 62 · Medium', sample: 'Decision clarity, systemized.' },
  { name: 'Typography/Display/Closing', spec: '48 / 51 · Medium', sample: 'Start with the decision.' },
  { name: 'Typography/Heading/Section', spec: '36 / 40 · Medium', sample: 'Evidence before commitment.' },
  { name: 'Typography/Heading/Question', spec: '28 / 34 · Medium', sample: 'Where should the next dollar go?' },
  { name: 'Typography/Body/Large', spec: '18 / 31 · Regular', sample: 'Designed for executive reading and analytical confidence.' },
  { name: 'Typography/Body/Default', spec: '16 / 25 · Regular', sample: 'Quantify assumptions, uncertainty and tradeoffs before capital is committed.' },
  { name: 'Typography/Label/Analytical', spec: '12 / Auto · SemiBold', sample: 'SCENARIO 03 · SELECTED DIRECTION', signal: true },
  { name: 'Typography/Metric/Large', spec: '44 / Auto · Medium', sample: '$18.6M · 82%', metric: true },
  { name: 'Typography/Supporting/Small', spec: '11 / Auto · Regular', sample: 'Reviewed Sep 24 · 78–86% range' },
]

export const spacingScale = [0, 4, 8, 12, 16, 24, 32, 48, 64, 96, 120, 128, 160]

export const constructionTokens = [
  'radius · 0 / 4 / 6',
  'border/hairline · 1',
  'layout/page-max · 1440',
  'layout/content · 1248',
  'layout/reading · 720',
]

export type ScenarioRow = {
  id: string
  scenario: string
  investment: string
  value: string
  confidence: string
}

export const scenarioRows: ScenarioRow[] = [
  { id: 'current', scenario: 'Current plan', investment: '$14.0M', value: '$16.5M', confidence: '68%' },
  { id: 'reallocate', scenario: 'Reallocate', investment: '$14.0M', value: '$18.6M', confidence: '82%' },
  { id: 'defend', scenario: 'Defend margin', investment: '$12.8M', value: '$17.9M', confidence: '79%' },
]

export const scenarioColumns: DataTableColumn<ScenarioRow>[] = [
  { key: 'scenario', header: 'Scenario', className: 'w-[35%]' },
  { key: 'investment', header: 'Investment' },
  { key: 'value', header: 'Value', emphasizeWhenSelected: true },
  { key: 'confidence', header: 'Confidence' },
]

export const scenarios = [
  { value: 'scenario-01', title: 'Scenario 01 · Current plan', description: 'Baseline · 68% confidence' },
  { value: 'scenario-03', title: 'Scenario 03 · Reallocate', description: '+8.7% value · 82% confidence' },
]

export const analyticalTabs = ['Overview', 'Drivers', 'Scenarios', 'Assumptions', 'Learning']

export const decisionStages = ['Data', 'Model', 'Scenarios', 'Judgment', 'Decision', 'Outcome', 'Learning']

export const marketingLinks = [
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'DecisionOS', href: '#decisionos' },
  { label: 'How We Work', href: '#how-we-work' },
  { label: 'Insights', href: '#insights' },
  { label: 'About', href: '#about' },
]

export const applicationLinks = [
  { label: 'Decisions', href: '#decisions' },
  { label: 'Models', href: '#models' },
  { label: 'Scenarios', href: '#scenarios' },
  { label: 'Learning', href: '#learning' },
]

export const grammarLegend: LegendItem[] = [
  { label: 'Neutral alternatives', kind: 'neutral' },
  { label: 'Uncertainty contours', kind: 'neutral' },
  { label: 'Current point', kind: 'neutral' },
  { label: 'Selected direction', kind: 'signal' },
  { label: 'Confidence range', kind: 'neutral' },
  { label: 'Decision boundary', kind: 'neutral' },
]

export const surfaceLegend: LegendItem[] = [
  { label: 'Alternative', kind: 'neutral' },
  { label: 'Selected direction', kind: 'signal' },
]

export const lineWeights = [
  { name: 'visualization/line/grid', value: '1' },
  { name: 'visualization/line/contour', value: '1' },
  { name: 'visualization/line/trajectory-neutral', value: '1.5' },
  { name: 'visualization/line/trajectory-selected', value: '3' },
  { name: 'visualization/line/decision-boundary', value: '1' },
]

export const opacities = [
  { name: 'grid opacity', value: '.65' },
  { name: 'outer contour opacity', value: '.33' },
  { name: 'middle contour opacity', value: '.5' },
  { name: 'inner contour opacity', value: '.7' },
  { name: 'neutral trajectory opacity', value: '.5' },
]

export const implementationRules = [
  { label: 'Semantic tokens', text: 'Components consume Gradience Semantic names. Never bind production UI directly to primitive hex values.' },
  { label: 'Component reuse', text: 'Use approved current-file components and variants. Compose around an instance; do not fork or redraw its internals.' },
  { label: 'Radius', text: 'Use 4–6px radii for controls and bounded surfaces. Use 0 for editorial section geometry and analytical rules.' },
  { label: 'Rules', text: 'Use one-pixel structural and analytical rules. Reserve the 3px trajectory weight for the selected direction only.' },
  { label: 'Typography roles', text: 'Map content to named typography roles. Manrope is the only family; hierarchy comes from role, scale and whitespace.' },
  { label: 'Spacing discipline', text: 'Stay on the approved spacing scale. Use 96px desktop margins and the 1248px content field at page maximum.' },
  { label: 'Responsive simplification', text: 'Remove secondary annotation before changing hierarchy. Preserve the question, evidence, selection and action order.' },
  { label: 'Signal Cyan', text: 'Use only for opportunity, selection, analytical signal and primary action. Never use it as decorative color.' },
]

export const sharedFoundations = [
  { label: 'Color', value: 'Warm Canvas ↔ Ink', note: 'Context changes; cyan meaning does not.' },
  { label: 'Type', value: 'Manrope · 12-72', note: 'Editorial display and precise numerals.' },
  { label: 'Grid', value: '12 columns · 24 gap', note: 'Asymmetry with disciplined alignment.' },
  { label: 'Radius', value: '4-6 px', note: 'Tight, technical and never pill-heavy.' },
  { label: 'Motion', value: 'Slow · controlled', note: 'Only reveals causality, sequence or uncertainty.' },
]

export const motionLogic = [
  { step: '01', name: 'Reveal', text: 'Trajectories draw from a common baseline.', token: '--motion-duration-reveal' },
  { step: '02', name: 'Respond', text: 'Contours shift subtly as assumptions change.', token: '--motion-duration-respond' },
  { step: '03', name: 'Diverge', text: 'Scenarios separate to expose tradeoffs.', token: '--motion-duration-reveal' },
  { step: '04', name: 'Quantify', text: 'Confidence bands expand or contract.', token: '--motion-duration-quantify' },
  { step: '05', name: 'Illuminate', text: 'Decision stages activate in sequence.', token: '--motion-stagger-illuminate' },
]
