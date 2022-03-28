import React, { useState } from 'react';
import axios from 'axios';
import jsCookie from 'js-cookie';
import { useHistory } from 'react-router-dom';

const Login = () => {
    let history = useHistory()

    const [input, setInput] = useState({
        email: "",
        password: ""
    })

    const handleChange = (event) => {
        let {value, name} = event.target
        setInput({...input, [name] : value})
    }

    const handleLogin = (event) => {
        event.preventDefault()

        let {email, password} = input

        axios.post(`https://backendexample.sanbersy.com/api/user-login`, {email, password})
        .then((res) => {
            let {token} = res.data
            jsCookie.set('token', token)
            window.location = "/"
        })
    }

    return (
        <>
            <form onSubmit={handleLogin} class="my-20">
                <h1 class="text-3xl">Form Login</h1>
                <label>Email</label>
                <input onChange={handleChange} value={input.email} type="text" name="email" 
                class="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                />
                <br />
                <label>Password</label>
                <input onChange={handleChange} value={input.password} type="password" name="password" 
                class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                />
                <br />
                <input type="submit" />
            </form>
        </>
    )
}

export default Login