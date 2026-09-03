import React from 'react'

const FacHeroCard = ({ heading, subheading }) => {
    return (
        <div className='flex flex-col max-md:items-center'>
            <h1 className='text-2xl text-[#D4AF37] font-bold'>{heading}</h1>
            <h3 className='text-gray-400 font-semibold '>{subheading}</h3>
        </div>
    )
}

export default FacHeroCard