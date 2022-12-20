import { PopulationService } from '@src/pages/api/population/population.service'
import type { NextApiRequest, NextApiResponse } from 'next'
import { z } from 'zod'

const requestQuerySchema = z
  .object({
    query: z.object({
      prefectureCode: z.string(),
    }),
  })
  .transform(({ query }) => {
    return {
      prefectureCode: Number(query.prefectureCode),
    }
  })

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    const validateRequestQuery = requestQuerySchema.safeParse(req)
    if (!validateRequestQuery.success) {
      res.status(400).json({ message: 'prefectureCodeは必須です。' })
      return
    }
    const { data, error, status } = await PopulationService.getTotalPopulation(
      validateRequestQuery.data
    )
    if (typeof data !== 'undefined') {
      res.status(status).json(data)
    } else if (typeof error !== 'undefined') {
      res.status(status).json(error)
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' })
  }
}

export default handler
