import { expect, test } from '@playwright/experimental-ct-react'
import { Header } from '@src/component/Header/Header'

test('headerのテスト', async ({ mount }) => {
  const component = await mount(<Header title={'タイトル'} />)

  expect(await component.locator('h1').textContent()).toBe('タイトル')
})
