import React from 'react'

const Gradient = () => {
    return (
        <>
            <div
                className='absolute blur-3xl bottom-25  w-190 h-170 rounded-full bg-white'
            ></div>
            <div
                className='absolute blur-3xl bottom-15  w-180 h-160 rounded-full bg-purple-500'
            ></div>
            <div
                className='absolute blur-3xl -bottom-5  w-170 h-150 rounded-full bg-violet-900'
            ></div>
            <div
                className='absolute blur-3xl -bottom-70  w-160 h-145 rounded-full bg-black'
            ></div>
        </>
    )
}

export default Gradient