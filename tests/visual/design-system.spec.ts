import { expect, test, type Page } from '@playwright/test'

/*
 * Reference captures only. No pixel-difference baselines are asserted until approved Figma PNG
 * exports are supplied; at that point switch `capture` to `expect(section).toHaveScreenshot(...)`.
 */

const REFERENCE_SECTIONS = [
  'status',
  'tokens',
  'foundations',
  'components',
  'product',
  'grammar',
  'family',
  'modes',
  'notes',
] as const

const DISABLE_MOTION = `
  *, *::before, *::after {
    animation: none !important;
    transition: none !important;
    caret-color: transparent !important;
  }
`

async function openReference(page: Page) {
  await page.goto('/dev/design-system?capture=1')
  await page.addStyleTag({ content: DISABLE_MOTION })
  await page.waitForLoadState('networkidle')
  await page.evaluate(async () => {
    await document.fonts.ready
  })
  const manropeLoaded = await page.evaluate(async () => {
    const faces = [...document.fonts].filter((face) => face.family.includes('Manrope'))
    await Promise.all(faces.map((face) => face.load().catch(() => face)))
    return faces.some((face) => face.status === 'loaded')
  })
  expect(manropeLoaded, 'Manrope must be loaded before capture').toBe(true)
}

test.describe('design-system reference @1440', () => {
  test.beforeEach(async ({ page }) => {
    await openReference(page)
  })

  test('renders at the fixed reference viewport', async ({ page }) => {
    expect(page.viewportSize()).toEqual({ width: 1440, height: 900 })
    await expect(page.locator('main[data-reference-capture]')).toHaveCount(1)
  })

  for (const id of REFERENCE_SECTIONS) {
    test(`capture section: ${id}`, async ({ page }) => {
      const section = page.locator(`[data-reference-section="${id}"]`)
      await expect(section).toHaveCount(1)
      await section.scrollIntoViewIfNeeded()
      await section.screenshot({
        path: `test-results/reference/${id}.png`,
        animations: 'disabled',
        caret: 'hide',
      })
    })
  }

  test('confidence fill is driven by its value', async ({ page }) => {
    const meters = page.locator('[role="meter"]')
    const count = await meters.count()
    expect(count).toBeGreaterThan(0)
    for (let index = 0; index < count; index++) {
      const meter = meters.nth(index)
      const value = Number(await meter.getAttribute('aria-valuenow'))
      const ratio = await meter.evaluate((element) => {
        const fill = element.firstElementChild as HTMLElement
        return fill.getBoundingClientRect().width / element.getBoundingClientRect().width
      })
      expect(ratio * 100).toBeCloseTo(value, 0)
    }
  })

  test('opportunity surface variants expose the approved layers', async ({ page }) => {
    const simple = page.locator('[data-variant="simple"]')
    const canonical = page.locator('[data-variant="canonical"]')
    await expect(simple.first()).toBeVisible()
    await expect(canonical.first()).toBeVisible()
    await expect(simple.first().locator('ellipse')).toHaveCount(0)
    await expect(canonical.first().locator('ellipse')).toHaveCount(3)
  })
})
