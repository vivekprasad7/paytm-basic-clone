import React from 'react'

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

    const submitHandler = () => {

        if(
            signupInput.firstName &&
            signupInput.lastName &&
            signupInput.email &&
            signupInput.password 
        ){
            
        }


    }

  return (
    <div>
        <form>
            <label>First Name: </label>
            <input 
            type="text" 
            placeholder='John'
            value={signupInput.firstName}
            onChange={changeHandler}
            />
             <label>Last Name: </label>
            <input 
            type="text" 
            placeholder='Doe'
            value={signupInput.lastName}
            onChange={changeHandler}
            />
             <label>Email </label>
            <input 
            type="text" 
            placeholder='johndoe@gmail.com'
            value={signupInput.email}
            onChange={changeHandler}
            />
             <label>Password: </label>
            <input 
            type="password" 
            placeholder=''
            value={signupInput.password}
            onChange={changeHandler}
            />
            <button onClick={() => submitHandler()}>Sign Up</button>
            <p>Already Have an Account, Login</p>

        </form>
    </div>
  )
}

export default Signup