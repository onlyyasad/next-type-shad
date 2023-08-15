import Layout from '@/components/Layout/Layout'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {

  const getLayout = Component.getLayout || ((page) => page)
  if(getLayout){
    return getLayout(
      <>
      <Component {...pageProps} />
      </>
    )
  }
  return getLayout(
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
