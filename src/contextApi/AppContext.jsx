import React, { createContext, useState } from 'react'

export const appContextApi = createContext();

const AppContextProvider = ({children}) => {
  const subHome = "SubHome";
    const [counter, setCounter] = useState(0);

    const incrementCount = ()=>{
        setCounter(counter +1);
    }
    const decrementCount = ()=>{
        setCounter(counter -1);
    }
    const resetCount = ()=>{
        setCounter(0);
    }
 return(
    <appContextApi.Provider value={{subHome, counter, incrementCount, decrementCount, resetCount}}>
        {children}
    </appContextApi.Provider>
 )
}

export default AppContextProvider;
