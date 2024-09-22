import React, { useState } from 'react'

function Input({text}) {

    return (
        <div className='border border-white bg-transparent text-white w-[500px] px-[20px] h-[50px] rounded-sm
        focus-within:border-2 transition duration-100 group flex justify-start relative'>
            <input type="text" 
                className='z-10 bg-transparent w-full outline-none'/>
            <h1 className='z-0 group-focus-within:text-xs group-focus-within:top-[-4%] transition-all duration-300 absolute top-[25%]'>
                {text}
            </h1>
        </div>
    )
}

export default Input
