import React from 'react'
import { RiStarFill } from "@remixicon/react";

const RatingHeroCard = () => {
    return (
        <div className='absolute bottom-12 -left-13 max-[450px]:left-3.5 min-[450px]:max-md:-left-12 md:-left-7 min-[450px]:max-md:-bottom-5 md:-bottom-5 z-15 text-white bg-white flex flex-row items-center gap-2 rounded-lg p-3 shadow-lg shadow-gray-900'>
            <div className='flex flex-row'>
                <RiStarFill color="rgba(255,168,0,1)" size={22} />
                <RiStarFill color="rgba(255,168,0,1)" size={22} />
                <RiStarFill color="rgba(255,168,0,1)" size={22} />
                <RiStarFill color="rgba(255,168,0,1)" size={22} />
                <RiStarFill color="rgba(255,168,0,1)" size={22} />
            </div>
            <p className='text-3xl min-[450px]:max-md:text-xl md:max-lg:text-2xl text-blue-950 font-bold'>4.8K</p>
        </div>
    )
}

export default RatingHeroCard