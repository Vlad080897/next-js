import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

const NotFound = () => {
    const rout = useRouter()
    useEffect(() => {
        setTimeout(() => {
            rout.push('/')
        }, 3000)
    }, [])

    return (
        <div className='not-found'>
            <h1>Sorry...</h1>
            <h2>The page has not found.</h2>
            <p>Go to the<Link href='./'><a>Homepage</a></Link> </p>
        </div>
    )
}

export default NotFound