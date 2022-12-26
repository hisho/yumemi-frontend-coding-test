import { ErrorBoundary } from '@src/component/ErrorBoundary/ErrorBoundary'
import { FetchPrefecturesError } from '@src/feature/prefecture/FetchPrefectures/FetchPrefecturesError'
import { FetchPrefecturesLoading } from '@src/feature/prefecture/FetchPrefectures/FetchPrefecturesLoading'
import { Prefecture, prefecturesSchema } from '@src/model/prefecture/prefecture'
import { ReactNode, Suspense, use } from 'react'

const fetcher = () =>
  fetch('/api/prefectures', {
    method: 'GET',
  }).then(async (res) => prefecturesSchema.parse(await res.json()))

type Props = {
  children: (prefectures: Prefecture[]) => ReactNode
}

const Fetcher = ({ children }: Props) => {
  const data = use(fetcher())

  return <>{children(data)}</>
}

export const FetchPrefectures = ({ children }: Props) => {
  return (
    <ErrorBoundary Fallback={FetchPrefecturesError}>
      <Suspense fallback={<FetchPrefecturesLoading />}>
        {/* eslint-disable-next-line react/no-children-prop */}
        <Fetcher children={children} />
      </Suspense>
    </ErrorBoundary>
  )
}
