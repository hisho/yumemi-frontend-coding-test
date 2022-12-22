import { type PlaywrightTestConfig, devices } from '@playwright/test'
import dotenv from 'dotenv'
import path from 'path'

dotenv.config()

dotenv.config({ path: path.resolve(__dirname, '.env.local') })

const config: PlaywrightTestConfig = {
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
  testMatch: 'src/**/*.e2e.spec.ts',
  use: {
    baseURL: process.env['NEXT_PUBLIC_FRONTEND_URL'] || 'http://localhost:3000',
    headless: true,
  },
}
export default config
