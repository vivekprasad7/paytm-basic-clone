import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const User = ({user}) => {

  const navigate = useNavigate()
  
const { firstName, lastName, username, _id} = user

  return (
         <div className='flex justify-between items-center'>
                <div className='flex justify-around items-center gap-2'>
                    <img className='w-10' src="https://www.seekpng.com/png/full/428-4287240_no-avatar-user-circle-icon-png.png" alt="user-icon" />
                    <h2>{firstName}  {lastName}</h2>
                </div>
                <button onClick={() => {
                  navigate("/send?id=" + _id + "&name=" + firstName )
                }} className='bg-sky-500 p-2 m-2 rounded-lg text-white'>Send Money</button>
            </div>
  )
}

export default User