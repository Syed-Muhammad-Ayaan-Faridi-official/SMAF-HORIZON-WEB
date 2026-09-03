import React from 'react'
import logo from '../../assets/images/Official-Logo.webp'


const LeftText = () => {
    return (
        <div className='flex flex-col items-center justify-center'>
            <img src={logo} alt="Logo"
                className='w-60 sm-w-70 '
            />
            <h2 className='text-xl  sm:text-2xl lg:text-2xl font-semibold'>SMAF Horizon Online Academy</h2>
            <h2 className='text-xl font-semibold'>Getting Started with Us</h2>
        </div>
    )
}

export default LeftText