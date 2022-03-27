import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const ElementAlert = () =>{
    const {state} = useContext(GlobalContext)
    const {alert} = state

    var color =""
    switch(alert){
        case "update": color ="-yellow-"; break
        case "delete": color ="-red-"; break
        case "create": color ="-green-"; break
    }
         
    return(
        <>
      <div class={`fixed w-1/6 bottom-12 bg${color}200 border${color}600 text${color}600 border-l-4 p-4`} role="alert">
    <p className="font-bold">
        Success
    </p>
    <p>
    Data berhasil di{alert}
    </p>
    </div>
        </>
    )
    
}

export default ElementAlert