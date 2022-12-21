import { expect, test } from '@playwright/experimental-ct-react'
import { Header } from '@src/component/Header/Header'

test('headerのテスト', async ({ mount }) => {
  const component = await mount(<Header />)

  expect(await component.textContent()).toBe('header')
})
