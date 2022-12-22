import { expect, test } from '@playwright/test'

test.describe('/api/prefectures', () => {
  test('正常系', async ({ request }) => {
    const response = await request.get('/api/prefectures')
    expect(response.ok()).toBeTruthy()
    const json = await response.json()
    expect(json).toContainEqual(
      expect.objectContaining({
        prefectureCode: 1,
        prefectureName: '北海道',
      })
    )
  })
})
