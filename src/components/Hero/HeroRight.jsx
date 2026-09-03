import React from 'react'
import HBoy1 from '../../assets/images/HeroBoy1.jpg'
import HBoy2 from '../../assets/images/HeroBoy2.jpg'
import HGirl1 from '../../assets/images/HeroGirl1.jpg'
import HGirl2 from '../../assets/images/HeroGirl2.jpg'
import RatingHeroCard from './RatingHeroCard';

const HeroRight = () => {
    return (
        <div className="lg:w-1/2 relative flex items-center justify-center py-8 ">
            <div className="grid grid-cols-2 max-[450px]:grid-cols-1 gap-0.5 w-fit max-md:justify-items-center relative z-10 ">
                <div className="relative max-md:w-[80%] min-[450px]:max-md:justify-self-end min-h-58 rounded-tr-[100px] overflow-hidden bg-blue-400">
                    <img loading='eager' src={HBoy1} alt="" className='overflow-hidden w-full  object-cover h-full' />
                </div>
                <div className="relative max-md:w-[80%] min-[450px]:max-md:justify-self-start min-h-58 h-full rounded-b-full overflow-hidden bg-yellow-200">
                    <img loading='eager' src={HGirl2} alt="" className='overflow-hidden w-full  object-cover h-full scale-130 -translate-x-5 translate-y-5' />
                </div>
                <div className="relative max-md:w-[80%] min-[450px]:max-md:justify-self-end min-h-58 h-full rounded-t-full  bg-emerald-300">
                    <img loading='eager' src={HBoy2} alt="" className='h-full w-full  object-cover' />
                    <RatingHeroCard />
                </div>
                <div className="relative max-md:w-[80%] min-[450px]:max-md:justify-self-start  min-h-58 h-full  rounded-tr-[100px] bg-purple-400">
                    <img loading='eager' src={HGirl1} alt="" className='h-full w-full  object-cover' />
                </div>
            </div>
        </div>
    )
}

export default HeroRight