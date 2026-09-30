import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const {userid} = useParams()
  return (
    <div className='bg-green-200 p-4'>User:{userid}</div>
  )
}

export default User