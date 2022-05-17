import React from 'react'
import Link from 'next/link'
import logo from '../public/logo.svg'
import Image from 'next/image'

const Header = () => {
  return (
    <nav >
      <div className='logo'>
        <Link href='/'>
          <a>
            <h1>
              <Image
                src={logo}
                alt='logo'
                width={128}
                height={77} />
            </h1>
          </a>
        </Link>
      </div>
      <div>
        <Link href='/about'>
          <a>About</a>
        </Link>
      </div>
      <div>
        <Link href='/users'>
          <a>Top users</a>
        </Link>
      </div>
      <div>
        <Link href='/'>
          <a>Home</a>
        </Link>
      </div>
    </nav>
  )
}

export default Header