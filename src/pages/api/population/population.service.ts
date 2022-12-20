import { RESAS_API_KEY, RESAS_API_URL } from '@src/pages/api/constant/env'
import type { TotalPopulationInput } from '@src/pages/api/population/total/total-population.input'
import { totalPopulationInput } from '@src/pages/api/population/total/total-population.input'
import { z } from 'zod'

/**
 * resas apiから都道府県一覧を取得し、形を整える
 */
const schema = z
  .object({
    result: z.object({
      data: z.array(
        z.object({
          data: z.array(
            z.object({
              value: z.number(),
              year: z.number(),
            })
          ),
          label: z.string(),
        })
      ),
    }),
  })
  .transform(({ result }) => {
    return result.data.find((data) => data.label === '総人口')?.data ?? []
  })

/**
 * 都道府県一覧を取得する
 * @see https://opendata.resas-portal.go.jp/docs/api/v1/prefectures.html
 */
const fetchPopulationCompositionPerYear = ({
  prefectureCode,
}: {
  prefectureCode: number
}) =>
  fetch(
    `${RESAS_API_URL}/api/v1/population/composition/perYear?cityCode=-&prefCode=${prefectureCode}`,
    {
      headers: {
        'X-API-KEY': RESAS_API_KEY,
      },
      method: 'GET',
    }
  )

export class PopulationService {
  public static readonly getTotalPopulation = async (
    input: TotalPopulationInput
  ) => {
    const validateTotalPopulationInput = totalPopulationInput.safeParse(input)

    if (!validateTotalPopulationInput.success) {
      return {
        data: undefined,
        error: {
          message: '都道府県コードが不正です。',
        },
        status: 400,
      }
    }

    try {
      const response = await fetchPopulationCompositionPerYear(
        validateTotalPopulationInput.data
      )
      const json = await response.json()

      const totalPopulation = schema.safeParse(json)

      if (totalPopulation.success) {
        return {
          data: totalPopulation.data,
          error: undefined,
          status: 200,
        }
      } else {
        return {
          data: undefined,
          error: {
            message: 'データが存在しません。',
          },
          status: 404,
        }
      }
    } catch {
      return {
        data: undefined,
        error: {
          message: 'データが存在しません。',
        },
        status: 404,
      }
    }
  }
}
