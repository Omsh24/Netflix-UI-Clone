import React from 'react'

function JoinCard({heading, text, imgSrc}) {
    return (
        <div className='bg-gray-500 rounded-xl w-[230px] h-[350px] relative p-[10px]
            bg-gradient-to-b from-[#1f084f] to-[#23081e]'>
            <h1 className='text-2xl font-bold py-[5px]'>{heading}</h1>            
            <p className='text-gray-400 py-[20px] font-semibold'>{text}</p>
            <img src="https://www.freeiconspng.com/uploads/downloads-icon-15.png" 
                className='w-[60px] absolute top-[80%] right-[2%]' />
        </div>
    )
}

export default JoinCard