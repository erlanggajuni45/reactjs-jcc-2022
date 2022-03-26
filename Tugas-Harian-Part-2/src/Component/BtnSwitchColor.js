import React, { useContext } from "react";
import { SwitchColorContext } from "../context/SwitchColor";

const BtnSwitchColor = (props) => {
    let {value, setValue} = useContext(SwitchColorContext)
    let color = (value == '#f8fafc') ? "Dark" : "Light"

    const handleSwitch = () => {
        if (value == '#f8fafc'){
            setValue('#0f172a')
        } else if(value == '#0f172a') {
            setValue('#f8fafc')
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