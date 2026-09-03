import { ArrowUpRight } from 'lucide-react'
import React from 'react'
import { NavLink } from 'react-router-dom'

const CTA = () => {
    return (
        <div 
        className={`w-full h-full flex flex-col items-center 
            max-md:px-5 md:px-9 gap-15 max-sm:pt-10 pt-20 pb-10
            ${location.pathname === '/' 
                ? 'bg-linear-to-t from-[#152331] to-[#000000]' 
                : ''
            }`}>
            <div className='w-full h-full gap-3 px-4 py-10 flex flex-col items-center justify-center rounded-3xl border border-white/15 bg-linear-to-br from-[#09203F]/10 to-[#537895]/20 backdrop-blur-3xl shadow-lg shadow-gray-950'>
                <h1 className='text-white text-3xl lg:text-4xl max-sm:text-center font-bold'>Turn your Goals into <span className='text-yellow-200'>Grades</span></h1>
                <h3 className='text-gray-400 max-sm:text-sm lg:text-lg md:w-[75%] lg:w-[50%] text-center'>Take the next step with experienced teachers, live interactive classes, recorded lectures, and complete exam preparation.</h3>
                <NavLink to={"/faculty"}>
                <button className='flex px-4 py-3 rounded-xl text-[#d4af37] font-bold gap-1 bg-linear-to-br from-[#1A3A5A] to-[#07111F] border border-white/10 cursor-pointer transition-all ease-in duration-200 shadow-md shadow-black hover:border-[#d4af37] hover:scale-105 hover:shadow-[#d4af37]/50'>Register Now <ArrowUpRight /></button>
                </NavLink>
            </div>
        </div>
    )
}

export default CTA