import { z } from 'zod'

export const totalPopulationSchema = z.object({
  value: z.number(),
  year: z.number(),
})

export const totalPopulationArraySchema = z.array(totalPopulationSchema)

export type TotalPopulation = z.infer<typeof totalPopulationSchema>
