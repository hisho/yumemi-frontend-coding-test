// playwright.config.ts
import type { PlaywrightTestConfig } from '@playwright/test'
import dotenv from 'dotenv'
import path from 'path'

dotenv.config()

dotenv.config({ path: path.resolve(__dirname, '.env.local') })

const config: PlaywrightTestConfig = {
  use: {
    baseURL: process.env.NEXT_PUBLIC_FRONTEND_URL,
  },
  webServer: {
    command: 'yarn dev',
    reuseExistingServer: true,
    url: process.env.NEXT_PUBLIC_FRONTEND_URL,
  },
}
export default config
