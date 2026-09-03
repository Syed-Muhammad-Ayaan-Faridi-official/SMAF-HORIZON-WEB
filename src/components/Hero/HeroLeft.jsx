import React from 'react'
import { ArrowRight } from 'lucide-react'
import { NavLink } from 'react-router-dom'
const HeroLeft = () => {
    const scrollToWhy = () => {
        document.getElementById('why-section')?.scrollIntoView({ behavior: 'smooth' })
    }
    return (
        <div className='text-gray-200 lg:w-[50%]  lg:h-full xl:h-screen flex flex-col max-lg:items-center justify-center gap-3.5 max-sm:py-4 py-25'>
            <div className='max-sm:w-full flex max-md:justify-center'>
                <p className='text-cyan-400 border border-cyan-300 rounded-full py-1 px-2.5 text-xs font-semibold 2xl:text-2xl'>O/A Levels Powered by Progress Tracking</p>
            </div>
            <h1 className='text-6xl max-lg:text-5xl max-[400px]:text-4xl font-bold max-lg:text-center 2xl:text-8xl'>Teaching <span className='text-[#ffa800]'>Excellence.</span><br /> Meets <br /><span className='text-cyan-300'>Academic Intelligence.</span></h1>
            <h4 className='text-sm max-md:text-center max-sm:w-[80%] sm:w-[75%] lg:w-[80%] 2xl:text-2xl'>Join Pakistan's modern online O/A Level academy that combines experienced faculty with data-driven insights to help students identify weaknesses, strengthen concepts, and improve performance.</h4>
            <div className='flex gap-2'>
                <NavLink to="/faculty">
                    <button className='text-gray-900 border border-[#ffa800] bg-linear-to-t from-yellow-300 to-[#ffa800] px-4 py-2 rounded-md font-semibold cursor-pointer hover:scale-95 flex items-center gap-1 transition duration-300 2xl:text-2xl 2xl:py-4'>Explore Faculty <ArrowRight size={18} strokeWidth={3} /></button>
                </NavLink>
                <button onClick={scrollToWhy} className='text-[#ffa800] border border-[#ffa800] px-4 py-2 rounded-md font-semibold cursor-pointer hover:scale-95 flex items-center gap-1 transition duration-300 2xl:text-2xl 2xl:py-4'>Why SMAF Horizon</button>
            </div>
        </div>
    )
}

export default HeroLeft