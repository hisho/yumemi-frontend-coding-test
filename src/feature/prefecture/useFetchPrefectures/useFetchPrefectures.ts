import { Prefecture, prefecturesSchema } from '@src/model/prefecture/prefecture'
import { useEffect, useRef, useState } from 'react'

export const useFetchPrefectures = () => {
  const mountedRef = useRef<boolean>(false)
  const [prefectures, setPrefectures] = useState<Prefecture[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  useEffect(() => {
    if (mountedRef.current) return
    mountedRef.current = true
    setIsLoading(true)
    ;(async () => {
      try {
        const response = await fetch('/api/prefectures', {
          method: 'GET',
        })
        const json = await response.json()
        setPrefectures(prefecturesSchema.parse(json))
      } catch (e) {
        setPrefectures([])
      } finally {
        setIsLoading(false)
      }
    })()
  }, [])

  return {
    data: prefectures,
    isLoading,
  } as const
}

export type UseFetchPrefecturesReturn = ReturnType<typeof useFetchPrefectures>
