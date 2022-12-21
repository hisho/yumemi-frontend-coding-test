import { expect, test } from '@playwright/experimental-ct-react'
import { Footer } from '@src/component/Footer/Footer'

test('footerのテスト', async ({ mount }) => {
  const component = await mount(<Footer />)

  expect(await component.locator('span').textContent()).toBe(
    'Copyright © 2022 - All right reserved by Hisho'
  )
})
