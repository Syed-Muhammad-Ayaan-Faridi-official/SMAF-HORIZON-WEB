import React from 'react'

const header = () => {
    return (
        <div className='w-full flex flex-col max-sm:items-center gap-5'>
            <h1 className='w-fit text-lg lg:text-xl 2xl:text-3xl font-bold text-[#FBCE40] relative px-3 py-2 sm:py-3 rounded-full bg-linear-to-br from-[#000000]/70 via-[#011a33]/10 to-[#152331] border border-white/10 shadow-[#6c5300] shadow-md 2xl:px-8 2xl:py-5'>Our Academic System</h1>
            <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl md:w-[75%]  max-sm:text-center text-white font-bold'>A Seven Step Engine for <span className='text-yellow-200'>Academic Growth</span></h1>
        </div>
    )
}

export default header