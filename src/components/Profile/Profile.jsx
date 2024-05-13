import React, { useContext } from 'react'
import UserContex from '../../context/UserContex'
import Inner1 from './Ineer1/Inner1'

export default function Profile() {
    const {user} = useContext(UserContex)

    if(!user) return <h1>Not Logged In</h1>
  return (
    <div>
        Profile :{user.name}
        <Inner1 />
        <h1>More component</h1>
      
    </div>
  )
}
