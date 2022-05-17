import { NextPage } from 'next'
import React from 'react'
import Userinfo from '../../comps/Userinfo'

export const getStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data: serverResponse[] = await res.json()
  const paths = data.map(user => {
    return {
      params: { id: user.id.toString() }
    }
  })
  return {
    paths: paths,
    fallback: false
  }
}

export const getStaticProps = async (context: { params: { id: number } }) => {
  const id = context.params.id;
  const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
  const data: serverResponse = await res.json();
  return {
    props: { user: data }
  }
}

const CurrentUser: NextPage<{user: serverResponse}> = ({ user }) => {
  return (
    <Userinfo user={user} />

  )
}

export default CurrentUser

export type serverResponse = {
  id: number,
  name: string
  website: string,
  phone: string,
  email: string
}