import React, { useState } from 'react'
import '../App.css'

function Question({que, ans}) {

    const [open, setOpen] =useState(false)

    const toggleOpen = () => {
        console.log(open)
        setOpen(!open)
    }

    return (
        <div className='my-[10px]'>
            <div className='w-full h-[70px] bg-slate-800 my-[2px] group  hover:bg-slate-600 transition-all duration-100'
                onClick={() => {toggleOpen()}}>
                <div className='flex justify-between align-middle py-[10px] px-[20px] text-center text-2xl'>
                    <h1>{que}</h1>
                    <p className='text-5xl'>
                        {
                            open ? '×' : '+'
                        }
                    </p>
                </div>
            </div>
            <div>
                {
                    open && 
                    <div  className='w-full h-fit group-focus:h-[fit] bg-gray-800 py-[10px] px-[20px] text-2xl'>
                        {ans}
                    </div>
                }
            </div>
        </div>
        
    )
}

export default Question
