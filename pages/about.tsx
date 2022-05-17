import type { NextPage } from 'next'
import Head from 'next/head'
import AboutContent from '../comps/AboutContent'
import React from 'react'

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>NextJS | About</title>
        <meta name='keywords' content='About NextJS' />
      </Head>
      <AboutContent />
    </>
  )
}

export default About
