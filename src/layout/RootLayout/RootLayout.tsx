import { Footer } from '@src/component/Footer/Footer'
import { Header } from '@src/component/Header/Header'
import { NEXT_PUBLIC_TITLE } from '@src/constant/meta'
import styles from '@src/layout/RootLayout/RootLayout.module.css'
import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export const RootLayout = ({ children }: Props) => {
  return (
    <div className={styles.root}>
      <Header title={NEXT_PUBLIC_TITLE} />
      <main className={`${styles.main} wrapper`}>{children}</main>
      <Footer />
    </div>
  )
}
