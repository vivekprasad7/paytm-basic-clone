import React from 'react'
import { useState } from 'react'
import Heading from '../../components/Heading'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Signup = () => {

    const navigate = useNavigate()

    const initialSignupInput = {
        firstName: "",
        lastName: "",
        username: "",
        password: ""
    }

    const [signupInput, setSignupInput] = useState(initialSignupInput)


    const changeHandler = (e) => {
        const { name, value } = e.target
        setSignupInput((prev) => ({ ...prev, [name]: value }))
    }

    
    const submitHandler = async (e) => {
        e.preventDefault()
        try {
            if( signupInput?.firstName &&
                signupInput?.lastName &&
                signupInput?.username &&
                signupInput?.password
                ) {
                    console.log("signup-called", signupInput)
                    const res = await axios.post("https://paytm-basic-clone.onrender.com/api/v1/user/signup", signupInput)
                    console.log("res-data", res.data)
                    localStorage.setItem("token", res.data.token)
                    navigate("/dashboard")
                }
            
        } catch (error) {
            console.error("Error while Signing Up", error)
        }
    }



    return (
        <div className='flex fl justify-center items-center bg-slate-50 h-screen'>
            <form className='w-[500px] flex flex-col gap-2 p-4 my-4 bg-white shadow-lg rounded-lg'>
                <Heading heading="Signup" />

                <label className='font-medium'>First Name: </label>
                <input
                    className='py-1 px-2 rounded-lg border border-slate-300'
                    name="firstName"
                    type="text"
                    placeholder='John'
                    value={signupInput?.firstName}
                    onChange={changeHandler}
                />
                <label className='font-medium'>Last Name: </label>
                <input
                    name="lastName"
                    className='py-1 px-2 rounded-lg border border-slate-300'
                    type="text"
                    placeholder='Doe'
                    value={signupInput?.lastName}
                    onChange={changeHandler}
                />
                <label className='font-medium'>Username </label>
                <input
                    name="username"
                    className='py-1 px-2 rounded-lg border border-slate-300'
                    type="text"
                    placeholder='johndoe@gmail.com'
                    value={signupInput?.username}
                    onChange={changeHandler}
                />
                <label className='font-medium'>Password: </label>
                <input
                    name="password"
                    className='py-1 px-2 rounded-lg border border-slate-300'
                    type="password"
                    placeholder=''
                    value={signupInput?.password}
                    onChange={changeHandler}
                />
                <button className='bg-sky-500 p-2 rounded-lg font-medium text-white' onClick={submitHandler}>Sign Up</button>


            </form>
        </div>
    )
}

export default Signup