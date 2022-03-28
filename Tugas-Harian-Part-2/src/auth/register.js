import React, { useState } from "react";
import axios from "axios";
import jsCookie from "js-cookie";
import { useHistory } from "react-router-dom";

const Register = () => {
    let history = useHistory()

    const [input, setInput] = useState({
        name: "",
        email: "",
        password: ""
    })

    const handleChange = (event) => {
        let {name, value} = event.target
        setInput({...input, [name] : value})
    }

    const handleRegister = (event) => {
        event.preventDefault()
        
        let {name, email, password} = input

        if(name !== ""){
            if(email !== ""){
                if(password !== ""){
                    axios.post(`https://backendexample.sanbersy.com/api/register`, {name: name, email: email, password: password})
                    .then(
                    history.push('/login')
                    )
                  }
                }
            }                   
    }
    return(
        <>
        <form onSubmit={handleRegister} class="my-20">
            <h1 class="text-3xl">Form Register</h1>
            <label>Nama</label>
            <input onChange={handleChange} type="text" value={input.name} name="name" 
            class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            />
            <br />
            <label>Email</label>
            <input onChange={handleChange} type="text" value={input.email} name="email" 
            class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            />
            <br />
            <label>Password</label>
            <input onChange={handleChange} type="password" value={input.password} name="password" 
            class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            />
            <br />
            <input type="submit" /> 
        </form>
        </>
    )
}

export default Register