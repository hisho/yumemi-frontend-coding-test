'use client'

import type { ErrorBoundaryFallbackProps } from '@src/component/ErrorBoundary/ErrorBoundary'

type Props = ErrorBoundaryFallbackProps

export const FetchPrefecturesError = (_: Props) => {
  return (
    <div>
      <p>エラーが発生しました</p>
    </div>
  )
}
