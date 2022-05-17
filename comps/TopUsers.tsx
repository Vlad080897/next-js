import { NextPage } from 'next'
import Link from 'next/link'
import React from 'react'
import { serverResponse } from '../pages/users/[id]'
import styles from '../styles/Users.module.css'

const TopUsers: NextPage<{ users: serverResponse[] }> = ({ users }) => {
  return (
    <>
      {users?.map(u => {
        return (
          <Link href={`users/${u.id}`} key={u.id}>
            <a className={styles.single}>
              <h1>{u.name}</h1>
            </a>
          </Link>
        )
      })}
    </>
  )
}

export default TopUsers