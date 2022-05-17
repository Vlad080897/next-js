import Head from 'next/head'
import type { AppProps } from 'next/app'
import Layout from '../comps/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout >
        <Component {...pageProps} />
      </Layout>
    </>

  )
}

export default MyApp
