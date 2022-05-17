import { NextPage } from 'next'
import React from 'react'
import TopUsers from '../../comps/TopUsers'
import { serverResponse } from './[id]'

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data: serverResponse[] = await res.json()
    return {
        props: { users: data }
    }
}

const Users: NextPage<{ users: serverResponse[] }> = ({ users }) => {
    return (
        <TopUsers users={users} />
    )
}

export default Users