import React from 'react'
import Features from './Features'


const WhyUs = () => {
  return (
    <div className='w-full h-full bg-linear-to-t from-[#152331] to-[#000000] flex flex-col items-center max-md:px-5 md:px-9 gap-15 max-sm:pt-10 pt-20 pb-10'>
      <div className='rounded-full max-sm:px-3 sm:px-4 md:px-5 lg:px-6 max-md:py-2 md:py-2.5 border border-[#b5821d] bg-linear-to-l from-[#152331]/70 to-[#0000000] backdrop-blur-2xl shadow-md shadow-yellow-900'>
        <h1 className='max-sm:text-md md:text-lg lg:text-xl 2xl:text-3xl font-bold text-[#FBCE40]'>What You'll Get with SMAF?</h1>
      </div>
      <Features />
    </div>
  )
}

export default WhyUs