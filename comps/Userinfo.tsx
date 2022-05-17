import { NextPage } from 'next'
import React from 'react'
import { serverResponse } from '../pages/users/[id]'


const Userinfo: NextPage<IUserInfoType> = ({ user }) => {
  return (
    <div>
      Name: <h3>{user.name}</h3>
      Website:<h3>{user.website}</h3>
      Mail:<h3>{user.email}</h3>
      Phone:<h3>{user.phone}</h3>
    </div>
  )
}

export default Userinfo

interface IUserInfoType {
  user: serverResponse
} 