import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";
import image from "./img/logo.png"

const Navbar = () => {
    let {state, functionHandle} = useContext(GlobalContext)
    let {input, setInput} = state
    let {handleSearch, handleChange} = functionHandle
    return(
        <>
        <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Document</title>
          <div className="topnav">
            <a href>
              <img src={image} width={70} alt="sanbercode" />
            </a>
            <Link to="/">Home</Link>
            <Link to="/mobile-list">Mobile Apps List</Link>
            <Link to="/about">About</Link>
            <form onSubmit = {handleSearch}>
              <input onChange={handleChange} type="text" value={input.search} name="search" />
              <input type="submit" defaultValue="Cari" />
            </form>
          </div>
        </>
    )
}

export default Navbar