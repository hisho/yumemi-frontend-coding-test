import { RootLayout } from '@src/layout/RootLayout/RootLayout'
import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const Layout = ({ children }: Props) => {
  return <RootLayout>{children}</RootLayout>
}

export default Layout
