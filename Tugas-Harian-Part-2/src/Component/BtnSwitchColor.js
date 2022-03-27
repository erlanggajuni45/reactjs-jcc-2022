import React, { useContext } from "react";
import { SwitchColorContext } from "../context/SwitchColor";

const BtnSwitchColor = (props) => {
    let {value, setValue} = useContext(SwitchColorContext)
    let color = (value == "bg-[#f8fafc]") ? "Dark" : "Light"

    const handleSwitch = () => {
        if (value == "bg-[#f8fafc]"){
            setValue("bg-[#0f172a]")
        } else if(value == "bg-[#0f172a]") {
            setValue("bg-[#f8fafc]")
        }

    }

    return(
        <>
        <button onClick={handleSwitch} type="button" 
        class={props.class}>
                {color}
        </button>
        </>
    )
}

export default BtnSwitchColor