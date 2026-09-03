import React from 'react'

const CounterCards = ({value, label}) => {
    return (
            <div className='bg-[#0C1F3F] border border-blue-950 w-30 max-sm:w-25 py-5 flex flex-col items-center rounded-xl'>
                <h1 className='text-2xl 2xl:text-3xl font-bold text-[#FBCE40]'>{value}</h1>
                <h4 className='text-lg 2xl:text-xl font-semibold text-[#FDFDFD]'>{label}</h4>
            </div>
    )
}

export default CounterCards