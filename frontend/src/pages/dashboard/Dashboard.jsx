import React, { useEffect, useState } from 'react'
import axios from "axios"
import User from '../../components/User'

const Dashboard = () => {

    const [ users, setUsers] = useState([])
    const [filter, setFilter] = useState("")

    const fetchUsers = async () => {
        const res = await axios.get("http://localhost:3000/api/v1/user/bulk?filter=" + filter)
        console.log("data", res.data.user)
        setUsers(res.data.user)
    }

    useEffect(() => {
        fetchUsers()
    },[filter])


  return (
    <div className=''>
        <div className='flex p-2 m-2 justify-around items-center rounded-full bg-cyan-500 text-white'>
            <h1>Payments App</h1>
            <div className='flex justify-around items-center'>
                <h3 className='px-2'>Hello, User</h3>
                <img className='w-10' src="https://www.seekpng.com/png/full/428-4287240_no-avatar-user-circle-icon-png.png" alt="user-icon" srcset="" />
            </div>
        </div>

        <div className='flex justify-center font-bold'>
            <h1 className='py-3'>Your Balance: $2000  {filter}</h1>

        </div>

        <div className='flex flex-col items-center m-3 p-2'>
            <h2 className='pb-2'>Users</h2>
            <input 
            className='border border-slate-500 p-1 px-2 rounded-lg w-[100%]' 
            type="text"
            placeholder='Search Users..' 
            value={filter}
            onChange={(e) =>setFilter(e.target.value)}
            />
        </div>

        <div className='w-[90%] m-auto'>
           {
            users.map((user) => <User user={user} key={user._id}/>)
           }
        </div>
    </div>
  )
}

export default Dashboard