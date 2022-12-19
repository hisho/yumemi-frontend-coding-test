import { PrefecturesService } from '@src/pages/api/prefectures/prefectures.service'
import type { NextApiRequest, NextApiResponse } from 'next'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    const { data, error, status } = await PrefecturesService.getPrefectures()
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
