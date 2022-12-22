import { NEXT_PUBLIC_DESCRIPTION, NEXT_PUBLIC_TITLE } from '@src/constant/meta'
import { Head as Helmet } from '@src/lib/next/Head/Head'

export const Head = () => {
  return (
    <Helmet>
      <title>{NEXT_PUBLIC_TITLE}</title>
      <meta content={NEXT_PUBLIC_DESCRIPTION} name={'description'} />
      <meta name="robots" content="none" />
    </Helmet>
  )
}
