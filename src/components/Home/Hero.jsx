import React from 'react'
import HeroRight from '../Hero/HeroRight'
import HeroLeft from '../Hero/HeroLeft'


const Hero = () => {
  return (
    <div className='h-full bg-linear-to-t from-[#152331] to-[#000000] max-md:p-2 md:p-4 md:pb-10 lg:pb-15'>
      <div className='flex max-lg:flex-col w-full h-full md:px-6 max-md:py-5 max-sm:px-1.5 '>
        <HeroLeft />
        <HeroRight /> 
      </div>
    </div>
  )
}

export default Hero