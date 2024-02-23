import React from 'react'
import { useState } from 'react'
import Heading from '../../components/Heading'
import { Link } from 'react-router-dom'

const Send = () => {


const [ amount, setAmount] = useState(0)

    const changeHandler = (e) => {
        const {name, value} = e.target
        setSigninInput((prev) => ({...prev, [name] :value }))
    }

    // const submitHandler = () => {

    //     if(
    //         signupInput.firstName &&
    //         signupInput.lastName &&
    //         signupInput.email &&
    //         signupInput.password 
    //     ){
            
    //     }


    // }

  return (
    <div className='flex fl justify-center items-center bg-slate-50 h-screen'>
        <form className='w-[500px] flex flex-col gap-2 p-4 my-4 bg-white shadow-lg rounded-lg'>
        <Heading heading="Send Money"/>

        <div className='flex justify-around items-center gap-2'>
                    <img className='w-10' src="https://www.seekpng.com/png/full/428-4287240_no-avatar-user-circle-icon-png.png" alt="user-icon" />
                    <h2>User Name</h2>
                </div>
             <label  className='font-medium'>Amount (in Rs.) </label>
            <input 
            className='py-1 px-2 rounded-lg border border-slate-300'
            type="text" 
            placeholder='Enter amount'
            value={amount}
            onChange={changeHandler}
            />
           
            <button className='bg-sky-500 p-2 rounded-lg font-medium text-white' onClick={() => submitHandler()}>Transfer Money</button>

        </form>
    </div>
  )
}

export default Signin