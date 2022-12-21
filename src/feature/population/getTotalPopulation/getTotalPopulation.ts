import { totalPopulationArraySchema } from '@src/model/population/totalPopulation'

type Params = {
  prefectureCode: number
}

export const fetchTotalPopulation = async ({ prefectureCode }: Params) => {
  try {
    const response = await fetch(
      `/api/population/total?prefectureCode=${prefectureCode}`,
      {
        method: 'GET',
      }
    )
    const json = await response.json()
    return totalPopulationArraySchema.parse(json)
  } catch (e) {
    return []
  }
}
