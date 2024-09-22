import React from 'react'
import '../App.css'

function TopCard({imgSrc, idx}) {
    return (
       <div className='w-[200px] h-[270px]'>
         <div className='bg-gray-500 rounded-lg w-[180px] h-[250px] relative
            group hover:w-[200px] hover:h-[270px] transition-all duration-300'>
            <img src={imgSrc} className='group-hover:w-[200px] group-hover:h-[270px] transform transition-all duration-300 rounded-lg w-[180px] h-[250px]' />
            <div className='outlined-number text-8xl absolute top-[60%] left-[-17%] font-bold'>{idx}</div>
        </div>
       </div>
    )
}

export default TopCard