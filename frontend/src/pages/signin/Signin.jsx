import React from 'react'
import { useState } from 'react'
import Heading from '../../components/Heading'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"

const Signin = () => {

  const navigate = useNavigate()

    const initialSigninInput = {
        username:"",
        password:""
    }

    const [signinInput, setSigninInput] = useState(initialSigninInput)


    const changeHandler = (e) => {
        const {name, value} = e.target
        setSigninInput((prev) => ({...prev, [name] :value }))
    }

    const submitHandler = async (e) => {
      e.preventDefault()
      try {
        if(
          signinInput?.username &&
          signinInput?.password 
      ){
          console.log("signin-api", signinInput)
          const res = await axios.post("https://paytm-basic-clone.onrender.com/api/v1/user/signin", signinInput)
          console.log("res-data", res.data)
          localStorage.setItem("token", res.data.token)
          navigate("/dashboard")


      }

        
      } catch (error) {
        console.error("Error while signing in", error)
      }
    }

  return (
    <div className='flex fl justify-center items-center bg-slate-50 h-screen'>
        <form className='w-[500px] flex flex-col gap-2 p-4 my-4 bg-white shadow-lg rounded-lg'>
        <Heading heading="Signin"/>
             <label  className='font-medium'>Email </label>
            <input 
            name="username"
            className='py-1 px-3 rounded-lg border border-slate-300'
            type="text" 
            placeholder='johndoe@gmail.com'
            value={signinInput.username}
            onChange={changeHandler}
            />
             <label  className='font-medium'>Password: </label>
            <input 
            name="password"
            className='py-1 px-2 rounded-lg border border-slate-300'
            type="password" 
            placeholder=''
            value={signinInput.password}
            onChange={changeHandler}
            />
            <button onClick={submitHandler} className='bg-sky-500 p-2 rounded-lg font-medium text-white' >Sign In</button>
            <p className='m-auto'>Don't Have an Account? <Link className='font-medium' to={"/signup"}>Signup</Link></p>

        </form>
    </div>
  )
}

export default Signin