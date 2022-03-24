import React, { useContext, useState } from "react";
import { SwitchColorContext } from "../context/SwitchColor";

const BtnSwitchColor = () => {
    let {value, setValue} = useContext(SwitchColorContext)
    let color = (value == 'navbar-light') ? "Dark" : "Light"

    const handleSwitch = () => {
        if (value == 'navbar-light'){
            setValue('navbar-dark')
        } else if(value == 'navbar-dark') {
            setValue('navbar-light')
        }

    }

    return(
        <>
        <button className="button-switch" onClick={handleSwitch}>Change Navbar to {color} Theme</button>
        </>
    )
}

export default BtnSwitchColor