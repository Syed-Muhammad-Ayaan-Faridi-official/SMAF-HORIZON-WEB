import React from 'react'
import Gradient from './Gradient.jsx'
import LeftText from './LeftText.jsx'
import LeftWhiteCards from './LeftWhiteCards.jsx'

const LeftContent = () => {
    return (
        <div className='relative overflow-hidden w-full md:w-[50%] lg:w-[45%] h-full max-md:min-h-screen  flex flex-col items-center justify-center rounded-xl border'>
            <Gradient />
            <div className='text-gray-300 absolute flex flex-col items-center justify-center gap-3 '>
                <LeftText />
                <LeftWhiteCards />
            </div>
        </div>
    )
}

export default LeftContent