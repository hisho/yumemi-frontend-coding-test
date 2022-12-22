import { expect, test } from '@playwright/test'

test.describe('トップページテスト', () => {
  test('headerがレンダリングされている', async ({ page }) => {
    await page.goto('/')
    await expect(await page.locator('header')).toBeVisible()
    await expect(await page.locator('header h1').innerText()).toEqual(
      process.env.NEXT_PUBLIC_TITLE
    )
  })

  test('footerがレンダリングされている', async ({ page }) => {
    await page.goto('/')
    await expect(await page.locator('footer')).toBeVisible()
    await expect(await page.locator('footer span').innerText()).toEqual(
      'Copyright © 2022 - All right reserved by Hisho'
    )
  })

  test('都道府県をクリックしたらグラフが表示される', async ({ page }) => {
    await page.goto(`./`)

    const prefectureNames = ['北海道', '東京都', '広島県', '沖縄県']
    const clickPrefecture = async (prefectureName: string) => {
      await Promise.allSettled([
        page.waitForResponse((response) => response.status() === 200),
        page.getByLabel(prefectureName).click(),
      ])
      expect(
        await page
          .locator('.highcharts-legend-item text')
          .getByText(prefectureName)
          .textContent()
      ).toBe(prefectureName)
    }

    for await (const prefectureName of prefectureNames) {
      await clickPrefecture(prefectureName)
    }
  })

  test('都道府県を再度クリックしたらグラフから消える', async ({ page }) => {
    await page.goto(`./`)

    const prefectureName = '北海道'
    await Promise.allSettled([
      page.waitForResponse((response) => response.status() === 200),
      page.getByLabel(prefectureName).click(),
    ])
    await expect(
      await page
        .locator('.highcharts-legend-item text')
        .getByText(prefectureName)
        .textContent()
    ).toBe(prefectureName)

    await page.getByLabel(prefectureName).uncheck()

    await expect(
      await page
        .locator('.highcharts-legend-item text')
        .getByText(prefectureName)
    ).not.toBeVisible()
  })
})
