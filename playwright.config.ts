// playwright.config.ts
import type { PlaywrightTestConfig } from '@playwright/test'
import dotenv from 'dotenv'
import path from 'path'

dotenv.config()

dotenv.config({ path: path.resolve(__dirname, '.env.local') })

const NEXT_PUBLIC_FRONTEND_URL =
  process.env['NEXT_PUBLIC_FRONTEND_URL'] ?? 'http://localhost:3000'

const config: PlaywrightTestConfig = {
  use: {
    baseURL: NEXT_PUBLIC_FRONTEND_URL,
  },
  webServer: {
    command: 'yarn dev',
    reuseExistingServer: true,
    url: NEXT_PUBLIC_FRONTEND_URL,
  },
}
export default config
