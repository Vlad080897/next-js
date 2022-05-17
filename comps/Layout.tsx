import { NextPage } from 'next'
import React from 'react'
import Footer from './Footer'
import Header from './Header'

const Layout: NextPage<IProps> = ({ children }) => {
  return (
    <div className='content'>
      <Header />
      {children}
      <Footer />
    </div>

  )
}

export default Layout

type IProps = {
  children: JSX.Element
}