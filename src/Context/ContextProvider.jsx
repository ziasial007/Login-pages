import {createContext, useState } from "react";

export const Context = createContext();

import React from 'react'

const ContextProvider = ({ children }) => {
  const [count, setCount] = useState(0)
  

  const handleIncrement = ()=>{
    setCount((preCount)=>Math.min(preCount + 1, 10));
  };
  const handleDecrement =()=>{
    setCount((preCount)=>Math.max(preCount -1, 0));
  }


  return (
    <Context.Provider value={{ count , handleIncrement , handleDecrement}}>
      {children}
    </Context.Provider>
  )
}

export default ContextProvider
