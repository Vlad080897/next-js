import Link from 'next/link'
import React from 'react'
import styles from '../styles/Home.module.css'

const Homepage = () => {
  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.title}>NextJS</h1>
        <p className={styles.text}>
          The React Framework for Production
        </p>
        <p className={styles.text}>
          Next.js gives you the best developer experience with all the features you need for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more. No config needed.
        </p>
        <Link href="https://nextjs.org/" >
          <a className={styles.btn} target={'_blank'}>See More Info</a>
        </Link>
      </div>
    </div >
  )
}

export default Homepage