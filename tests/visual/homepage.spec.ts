import { expect, test } from '@playwright/test'

/*
 * Structural homepage validation only. No screenshot baseline is established until the first
 * implementation has been visually reviewed and approved.
 */

const SECTION_ORDER = [
  'navigation',
  'hero',
  'problem',
  'method',
  'capabilities',
  'decisionos',
  'judgment',
  'cta',
  'footer',
] as const

test.describe('homepage structure', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('renders navigation, hero headline and primary CTA', async ({ page }) => {
    const nav = page.getByRole('navigation', { name: 'Primary' })
    await expect(nav).toBeVisible()
    for (const label of ['Capabilities', 'DecisionOS', 'How We Work', 'Insights', 'About']) {
      await expect(nav.getByRole('link', { name: label, exact: true })).toBeVisible()
    }
    const h1 = page.getByRole('heading', { level: 1 })
    await expect(h1).toHaveCount(1)
    await expect(h1).toHaveText('Model what could happen.Decide what to do next.')
    await expect(nav.getByRole('link', { name: 'Bring Us a Decision →' })).toBeVisible()
  })

  test('renders the approved Opportunity Surface in the hero', async ({ page }) => {
    const surface = page.locator('[data-home-section="hero"] [data-variant="canonical"]')
    await expect(surface).toBeVisible()
    await expect(surface.locator('ellipse')).toHaveCount(3)
  })

  test('sections appear in the approved order', async ({ page }) => {
    const order = await page
      .locator('[data-home-section]')
      .evaluateAll((elements) => elements.map((element) => element.getAttribute('data-home-section')))
    expect(order).toEqual([...SECTION_ORDER])
  })

  test('DecisionOS is the single Intelligence environment', async ({ page }) => {
    await expect(page.locator('[data-mode="intelligence"]')).toHaveCount(1)
    await expect(page.locator('[data-home-section="decisionos"] [data-mode="intelligence"]')).toHaveCount(1)
    const background = await page
      .locator('[data-home-section="decisionos"] [data-mode="intelligence"]')
      .evaluate((element) => getComputedStyle(element).backgroundColor)
    expect(background).toBe('rgb(16, 24, 32)')
  })

  test('accessibility basics', async ({ page }) => {
    await expect(page.locator('html')).toHaveAttribute('lang', 'en')
    await expect(page.locator('header')).toHaveCount(1)
    await expect(page.locator('main')).toHaveCount(1)
    await expect(page.locator('footer')).toHaveCount(1)

    const levels = await page
      .locator('h1, h2, h3, h4, h5, h6')
      .evaluateAll((elements) => elements.map((element) => Number(element.tagName.slice(1))))
    for (let index = 1; index < levels.length; index++) {
      expect(levels[index] - levels[index - 1], `heading level skip at index ${index}`).toBeLessThanOrEqual(1)
    }

    const unlabeledImages = await page
      .locator('[role="img"]:not([aria-label]), img:not([alt])')
      .count()
    expect(unlabeledImages).toBe(0)

    await page.keyboard.press('Tab')
    const focused = await page.evaluate(() => document.activeElement?.getAttribute('aria-label'))
    expect(focused).toBe('Gradience home')
  })
})

test.describe('homepage mobile', () => {
  test.use({ viewport: { width: 375, height: 812 } })

  test('does not overflow horizontally', async ({ page }) => {
    await page.goto('/')
    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
    )
    expect(overflow).toBeLessThanOrEqual(0)
  })

  test('mobile menu is accessible', async ({ page }) => {
    await page.goto('/')
    const toggle = page.getByRole('button', { name: 'Menu' })
    await expect(toggle).toHaveAttribute('aria-expanded', 'false')
    await toggle.click()
    await expect(page.getByRole('button', { name: 'Close' })).toHaveAttribute('aria-expanded', 'true')
    const menu = page.locator(`#${await page.getByRole('button', { name: 'Close' }).getAttribute('aria-controls')}`)
    await expect(menu.getByRole('link', { name: 'DecisionOS' })).toBeVisible()
    await page.keyboard.press('Escape')
    await expect(page.getByRole('button', { name: 'Menu' })).toBeFocused()
    await expect(menu).toBeHidden()
  })
})
