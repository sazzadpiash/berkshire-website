import React, { createContext, useState } from 'react'

export const GlobalContext = createContext({});


const GlobalProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const globaldata = {
        cart,
        setCart,
    }

    return (
        <GlobalContext.Provider value={globaldata}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalProvider;
