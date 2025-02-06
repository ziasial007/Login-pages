import React, { useState } from 'react'
import { useContext } from 'react'
import { Context } from '../Context/ContextProvider'
const Compo3 = () => {
    const { count , handleChange ,handlePlus ,handleDecrement , handleIncrement} = useContext(Context)
  
    
   



    return (
        <>
            {count} <br />
            <button type="button" onClick={handleIncrement} className='bg-gray-300 m-1'>+ click</button>
            <button type="button" onClick={handleDecrement}className='bg-gray-300 m-1'> - click</button>

        </>
    )
}

export default Compo3