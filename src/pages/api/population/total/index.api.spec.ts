import { expect, test } from '@playwright/test'

test.describe('/api/population/total', () => {
  test.describe('正常系', () => {
    test('レスポンスが正しく返ってくる', async ({ request }) => {
      const response = await request.get(
        '/api/population/total?prefectureCode=1'
      )
      expect(response.ok()).toBeTruthy()
      const json = await response.json()
      expect(json).toContainEqual(
        expect.objectContaining({
          value: 5039206,
          year: 1960,
        })
      )
    })
  })
  test.describe('異常系', () => {
    test('都道府県コード存在しない場合にエラーを返す', async ({ request }) => {
      const response = await request.get('/api/population/total')
      expect(response.status()).toBe(400)
      const json = await response.json()
      expect(json).toHaveProperty('message', 'prefectureCodeは必須です。')
    })

    test('都道府県コードがNumber型に変換できない場合にエラーを返す', async ({
      request,
    }) => {
      const response = await request.get(
        '/api/population/total?prefectureCode=test'
      )
      expect(response.status()).toBe(400)
      const json = await response.json()
      expect(json).toHaveProperty('message', '都道府県コードが不正です。')
    })

    test('都道府県コードは正常だがデータが存在しない場合にエラーを返す', async ({
      request,
    }) => {
      const response = await request.get(
        '/api/population/total?prefectureCode=1000'
      )
      expect(response.status()).toBe(404)
      const json = await response.json()
      expect(json).toHaveProperty('message', 'データが存在しません。')
    })
  })
})
