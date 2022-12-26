import { NEXT_PUBLIC_DESCRIPTION, NEXT_PUBLIC_TITLE } from '@src/constant/meta'

export const Head = () => {
  return (
    <>
      <title>{NEXT_PUBLIC_TITLE}</title>
      <meta content={NEXT_PUBLIC_DESCRIPTION} name={'description'} />
      <meta name="robots" content="none" />
    </>
  )
}
export default Head
