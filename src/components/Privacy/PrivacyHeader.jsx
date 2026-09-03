import React from 'react'
import { NavLink } from 'react-router-dom'


const PrivacyHeader = () => {
  return (
    <div className='flex flex-col gap-3 bg-linear-to-br from-[#09203F]/10 to-[#537895]/20 backdrop-blur-3xl border border-white/20 rounded-4xl px-2 py-6 md:px-13 md:py-8 justify-center max-md:items-center shadow-lg hover:shadow-[#d4af37]/50 transition-all duration-400 ease-in-out'>
        <h1 className='text-white capitalize  font-bold text-4xl md:text-5xl'>Privacy Policy</h1>
        <h2 className='max-md:text-center text-gray-200 text-sm md:text-lg'>At <span className='text-[#d4af37] font-bold uppercase'>SMAF Horizon Academy</span>, we respect your privacy and are committed to protecting the personal information you provide when using our website.</h2>
        <h4 className='text-sm text-gray-300'>Last Updated: 2nd Sept 2026</h4>
        <div id='btns' className='flex max-[500px]:flex-col gap-2 items-center'>
            <NavLink to={"/"} >
            <button className='bg-gray-800/80 border border-white/20 rounded-2xl px-6 py-3 font-semibold text-gray-200 hover:border-[#d4af37] hover:text-[#d4af37] transition-all duration-300 ease-in'>Back to Home</button>
            </NavLink>
            <button className='border bg-linear-to-r from-[#FFF3B0] via-[#D4AF37] to-[#8C6A00] border-[#D4AF37]/60  rounded-2xl px-6 py-3 font-semibold text-gray-800 hover:border-[#d4af37] shadow-lg hover:shadow-white/20 transition-all duration-300 ease-in'>smafhorizon@gmail.com</button>
        </div>
    </div>
  )
}

export default PrivacyHeader