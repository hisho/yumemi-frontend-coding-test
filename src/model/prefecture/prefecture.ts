import { z } from 'zod'

export const prefectureSchema = z.object({
  prefectureCode: z.number(),
  prefectureName: z.string(),
})

export const prefecturesSchema = z.array(prefectureSchema)

export type Prefecture = z.infer<typeof prefectureSchema>
