import React, { createContext, useState } from 'react';

export const SwitchColorContext = createContext();

export const SwitchColorProvider = (props) => {

    let [value, setValue] = useState('navbar-light')
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