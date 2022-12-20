import { RESAS_API_KEY, RESAS_API_URL } from '@src/pages/api/constant/env'
import { z } from 'zod'

/**
 * resas apiから都道府県一覧を取得し、形を整える
 */
const schema = z
  .object({
    result: z.array(
      z.object({
        prefCode: z.number(),
        prefName: z.string(),
      })
    ),
  })
  .transform(({ result }) =>
    result.map(({ prefCode, prefName }) => ({
      prefectureCode: prefCode,
      prefectureName: prefName,
    }))
  )

/**
 * 都道府県一覧を取得する
 * @see https://opendata.resas-portal.go.jp/docs/api/v1/prefectures.html
 */
const fetchPrefectures = () =>
  fetch(`${RESAS_API_URL}/api/v1/prefectures`, {
    headers: {
      'X-API-KEY': RESAS_API_KEY,
    },
    method: 'GET',
  })

export class PrefecturesService {
  public static readonly getPrefectures = async () => {
    try {
      const response = await fetchPrefectures()
      const json = await response.json()
      const prefectures = schema.safeParse(json)
      if (prefectures.success) {
        return {
          data: prefectures.data,
          error: undefined,
          status: 200,
        }
      } else {
        return {
          data: undefined,
          error: {
            message: '都道府県が存在しません。',
          },
          status: 404,
        }
      }
    } catch {
      return {
        data: undefined,
        error: {
          message: '都道府県が存在しません。',
        },
        status: 404,
      }
    }
  }
}
