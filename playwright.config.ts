import { defineConfig } from '@playwright/test'

const port = Number(process.env.PLAYWRIGHT_PORT ?? 3100)
const externalBaseURL = process.env.PLAYWRIGHT_BASE_URL

export const REFERENCE_VIEWPORT = { width: 1440, height: 900 }

export default defineConfig({
  testDir: './tests/visual',
  outputDir: './test-results/artifacts',
  fullyParallel: false,
  workers: 1,
  retries: 0,
  reporter: [['list']],
  use: {
    baseURL: externalBaseURL ?? `http://localhost:${port}`,
    browserName: 'chromium',
    viewport: REFERENCE_VIEWPORT,
    deviceScaleFactor: 1,
    colorScheme: 'light',
    reducedMotion: 'reduce',
    locale: 'en-US',
    timezoneId: 'UTC',
  },
  webServer: externalBaseURL
    ? undefined
    : {
        command: `pnpm exec next dev --port ${port}`,
        url: `http://localhost:${port}/dev/design-system`,
        reuseExistingServer: !process.env.CI,
        timeout: 120_000,
      },
})
