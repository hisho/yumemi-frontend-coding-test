import { z } from 'zod'

export const totalPopulationInput = z.object({
  prefectureCode: z.number(),
})

export type TotalPopulationInput = z.infer<typeof totalPopulationInput>
