import React from 'react'
import { useState } from 'react'
import Heading from '../../components/Heading'
import { Link, useSearchParams } from 'react-router-dom'

const Send = () => {

  const [searchParams] = useSearchParams()
  console.log(searchParams)
  const id  = searchParams.get("id")
  const firstName  = searchParams.get("name")


const [ amount, setAmount] = useState(0)

    const changeHandler = (e) => {
        const {name, value} = e.target
        setAmount(value)
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

        <div className='flex justify-evenly items-center gap-2'>
                        <div className='w-12 h-12 rounded-full bg-sky-500 flex items-center justify-center'>
                      <span className='text-2xl'>{firstName[0].toUpperCase()}</span>
                    </div>
                    <h2>{firstName}</h2>
                </div>
             <label  className='font-medium py-3'>Amount (in Rs.) </label>
            <input 
            className='py-1 px-2 rounded-lg border border-slate-300'
            type="text" 
            placeholder='Enter amount'
            value={amount}
            onChange={changeHandler}
            />
           
            <button className='bg-sky-500 p-2 rounded-lg font-medium text-white' onClick={async() => {
              await axios.post("http://localhost:3000/api/v1/account/transfer", {
                to:id,
                amount
              },{
                headers: {
                  Authorization: "Bearer " + localStorage.getItem("token")
                }
              })
            }}>Transfer Money</button>

        </form>
    </div>
  )
}

export default Send