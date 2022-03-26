import React, { createContext, useState } from 'react';

export const SwitchColorContext = createContext();

export const SwitchColorProvider = (props) => {

    let [value, setValue] = useState('#f8fafc')
    return(
        <SwitchColorContext.Provider
            value={{
                value,
                setValue
            }}
        >
            {props.children}
            </SwitchColorContext.Provider>
    )
}