import NextHead from 'next/head'
import { Children, isValidElement, ReactNode } from 'react'
import { isNotUndefined } from 'typesafe-utils'

type Props = {
  children: ReactNode
}

const followingMetaTags = ['title', 'meta', 'link']

/**
 * Next.jsのHeadのwrapper
 * should only return to the following tags: <title>, <meta>, <link>
 * @see https://beta.nextjs.org/docs/api-reference/file-conventions/head
 */
export const Head = ({ children }: Props) => {
  const childrenToArray = Children.toArray(children)
    .map((child) => {
      if (
        isValidElement(child) &&
        followingMetaTags.includes(String(child.type))
      ) {
        return child
      }
      return undefined
    })
    .filter(isNotUndefined)
  return <NextHead>{childrenToArray}</NextHead>
}
