import {
  devices,
  PlaywrightTestConfig,
} from '@playwright/experimental-ct-react'

/**
 * See https://playwright.dev/docs/test-configuration.
 */
const config: PlaywrightTestConfig = {
  /* Run tests in files in parallel */
  fullyParallel: true,

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
      },
    },
  ],

  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',

  /* Retry on CI only */
  retries: process.env['CI'] ? 2 : 0,

  /* The base directory, relative to the config file, for snapshot files created with toMatchSnapshot and toHaveScreenshot. */
  snapshotDir: './__snapshots__',

  testMatch: 'src/**/*.component.spec.tsx',

  /* Maximum time one test can run for. */
  timeout: 10 * 1000,

  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Port to use for Playwright component endpoint. */
    ctPort: 3100,

    ctViteConfig: {
      resolve: {
        alias: {
          '@src': '/src',
        },
      },
    },
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
  },

  /* Opt out of parallel tests on CI. */
  ...(process.env['CI'] ? { workers: 1 } : {}),
}

export default config
