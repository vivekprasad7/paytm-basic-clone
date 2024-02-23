import React from 'react'
import { useState } from 'react'
import Heading from '../../components/Heading'
import { Link } from 'react-router-dom'

const Signup = () => {

    const initialSignupInput = {
        firstName: "",
        lastName:"",
        email:"",
        password:""
    }

    const [signupInput, setSignupInput] = useState(initialSignupInput)


    const changeHandler = (e) => {
        const {name, value} = e.target
        setSignupInput((prev) => ({...prev, [name] :value }))
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
        <Heading heading="Signup"/>

            <label className='font-medium'>First Name: </label>
            <input 
            className='py-1 px-2 rounded-lg border border-slate-300'
            type="text" 
            placeholder='John'
            value={signupInput.firstName}
            onChange={changeHandler}
            />
             <label  className='font-medium'>Last Name: </label>
            <input 
            className='py-1 px-2 rounded-lg border border-slate-300'
            type="text" 
            placeholder='Doe'
            value={signupInput.lastName}
            onChange={changeHandler}
            />
             <label  className='font-medium'>Email </label>
            <input 
            className='py-1 px-2 rounded-lg border border-slate-300'
            type="text" 
            placeholder='johndoe@gmail.com'
            value={signupInput.email}
            onChange={changeHandler}
            />
             <label  className='font-medium'>Password: </label>
            <input 
            className='py-1 px-2 rounded-lg border border-slate-300'
            type="password" 
            placeholder=''
            value={signupInput.password}
            onChange={changeHandler}
            />
            <button className='bg-sky-500 p-2 rounded-lg font-medium text-white' onClick={() => submitHandler()}>Sign Up</button>
            <p className='m-auto'>Already Have an Account? <Link className='font-medium' to={"/signin"}>Login</Link></p>

        </form>
    </div>
  )
}

export default Signup