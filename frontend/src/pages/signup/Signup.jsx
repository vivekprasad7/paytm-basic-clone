import React from 'react'
import { useState } from 'react'
import Heading from '../../components/Heading'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Signup = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

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

    // const submitHandler = async () => {

    //     if(
    //         signupInput.firstName &&
    //         signupInput.lastName &&
    //         signupInput.username &&
    //         signupInput.password 
    //     ){
    //         console.log("axios called", signupInput)
    //         const res = await axios.post("http://localhost:4000/api/v1/user/signup", signupInput)
    //         console.log(res.data)
    //     }


    // }

    const submitHandler = async () => {
        try {
            if (
                signupInput.firstName &&
                signupInput.lastName &&
                signupInput.username &&
                signupInput.password
            ) {
                console.log("axios called", signupInput);

                try {
                    const res = await axios.post("https://paytm-basic-clone.onrender.com/api/v1/user/signup", signupInput, {
                        timeout: 10000 // Timeout set to 10 seconds (in milliseconds)
                    });

                    console.log(res.data);
                } catch (error) {
                    console.error("Error:", error);
                }
                // If signup is successful, you might want to redirect to another page or show a success message.
            }
        } catch (error) {
            console.error("Error in signup:", error.message);
            setError(error.response.data.message || "Failed to signup");
        }
    };


    async function handleSignup() {
        console.log("signup called", firstName, lastName, username, password);
        try {
            const response = await fetch("https://paytm-basic-clone.onrender.com/api/v1/user/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username,
                    firstName,
                    lastName,
                    password
                })
            });
            if (!response.ok) {
                throw new Error("HTTP error, status = " + response.status);
            }
            const data = await response.json();
            console.log("Response:", data);
        } catch (error) {
            console.error("Error:", error);
        }
    }

    // Call handleSignup function on button click
    // <button >Signup</button>




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
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
                <label className='font-medium'>Last Name: </label>
                <input
                    name="lastName"
                    className='py-1 px-2 rounded-lg border border-slate-300'
                    type="text"
                    placeholder='Doe'
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
                <label className='font-medium'>Username </label>
                <input
                    name="username"
                    className='py-1 px-2 rounded-lg border border-slate-300'
                    type="text"
                    placeholder='johndoe@gmail.com'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <label className='font-medium'>Password: </label>
                <input
                    name="password"
                    className='py-1 px-2 rounded-lg border border-slate-300'
                    type="password"
                    placeholder=''
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className='bg-sky-500 p-2 rounded-lg font-medium text-white' onClick={async () => {
                    try {
                        console.log("signup called", firstName, lastName, username, password);
                        const res = await axios.post("https://paytm-basic-clone.onrender.com/api/v1/user/signup", {
                            username,
                            firstName,
                            lastName,
                            password
                        });

                        console.log("data", res.data);

                        localStorage.setItem("token", res.data.token);
                    } catch (error) {
                        console.error("Error:", error);
                        // Handle error (e.g., display error message to the user)
                    }
                }}>Sign Up</button>


            </form>
        </div>
    )
}

export default Signup