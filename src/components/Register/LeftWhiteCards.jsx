import React from 'react'

const LeftWhiteCards = () => {
    return (
        <>
            <div className='w-full h-full flex flex-col gap-2 items-center justify-center '>
                <div className='flex w-full h-fit py-1.5 px-15 max-sm:px-12 bg-white rounded-md gap-1.5 items-center'>
                    <p className='rounded-full bg-[#111] w-6 h-6 flex  justify-center font-semibold '>1</p>
                    <h2 className='text-sm text-[#333] font-semibold'>Sign Up Your Account</h2>
                </div>
                <div className='flex w-full h-fit py-1.5 px-15 max-sm:px-12 bg-white rounded-md gap-1.5 items-center '>
                    <p className='rounded-full bg-[#111] w-6 h-6 flex items-center justify-center font-semibold '>2</p>
                    <h2 className='text-sm text-[#333] font-semibold'>Select Subjects & Teachers</h2>
                </div>
                <div className='flex w-full h-fit py-1.5 px-15 max-sm:px-12 bg-white rounded-md gap-1.5 items-center '>
                    <p className='rounded-full bg-[#111] w-6 h-6 flex items-center justify-center font-semibold '>3</p>
                    <h2 className='text-sm text-[#333] font-semibold'>Proceed to Payement</h2>
                </div>
            </div>
            <div className='max-md:flex md:hidden'>
                <h2>Scroll Down to register</h2>
            </div>
        </>
    )
}

export default LeftWhiteCards