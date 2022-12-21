import { RootLayout } from '@src/layout/RootLayout/RootLayout'
import { Content } from '@src/pages/content'
import { Head } from '@src/pages/head'

const Page = () => {
  return (
    <>
      <Head />
      <RootLayout>
        <Content />
      </RootLayout>
    </>
  )
}

export default Page
