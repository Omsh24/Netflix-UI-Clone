import React, { useState } from 'react'

function DropBtn({title, options}) {

    const [open, setOpen] = useState(false)
    const [title2, setTitle2] = useState(title)

    const toggleOn = () => {
        console.log(open)
        setOpen(!open)
    }

    return (
        <div className='border-white relative border cursor-pointer w-[120px] min-w-[fit] bg-gray-900 opacity-[80%] rounded-sm px-[15px] h-[30px] space-x-[10px] text-center'
            onClick={toggleOn}>
            <div className='flex flex-row w-fit'>
                {title2}
                <button className='absolute right-[15px]'>▾</button>
            </div>
            <div className='absolute right-[-1px] top-[104%]'>
                {
                    open && (
                        <ul className='w-[120px] text-black bg-white rounded-sm text-center'>
                            {
                                options.map((opt) => 
                                    <li key={Math.random()} className='hover:bg-gray-500 hover:rounded-sm w-[120px]  h-[30px]'>
                                        <button onClick={() => {setTitle2(opt)}}>
                                            {opt}
                                        </button>
                                    </li>
                                )
                            }
                        </ul>
                    )
                }
            </div>
        </div>
    )
}

export default DropBtn
