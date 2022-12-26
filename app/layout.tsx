import '@app/app.css'

import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const RootLayout = ({ children }: Props) => {
  return (
    <html>
      <head>
        <meta name="viewport" content="width=device-width" />
      </head>
      <body>{children}</body>
    </html>
  )
}

export default RootLayout
