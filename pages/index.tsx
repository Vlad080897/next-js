import type { NextPage } from 'next'
import Head from 'next/head'
import Homepage from '../comps/Homepage'
import '../public/favicon.ico'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>NextJS | Home</title>
        <meta name='keywords' content='NextJS' />
        <link rel="icon" href="../public/favicon.ico" />
      </Head>
      <Homepage />
    </>

  )
}

export default Home
