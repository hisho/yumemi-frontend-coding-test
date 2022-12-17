import type { AppProps } from 'next/app'
const test = 'src/pages/_app.page.tsx'

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}

export default App
