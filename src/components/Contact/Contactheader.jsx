import React from 'react'
import { NavLink } from 'react-router-dom'


const Contactheader = () => {
    return (
        <div className='flex flex-col gap-3 bg-linear-to-br from-[#09203F]/10 to-[#537895]/20 backdrop-blur-3xl border border-white/20 rounded-4xl px-2 py-6 md:px-13 md:py-8 justify-center max-md:items-center shadow-lg hover:shadow-[#d4af37]/50 transition-all duration-400 ease-in-out'>
            <h1 className='text-white capitalize  font-bold text-4xl md:text-5xl'>Contact Us</h1>
            <h4 className='text-lg text-gray-300'>Have questions or need help with registration or any other thing?<br />Our Team is always ready to assist you to connect with professional Teachers and reliable support.<br />Feel Free to contact us anytime and we will respond as quickly as possible</h4>
            <div id='btns' className='flex max-[500px]:flex-col gap-2 items-center'>
                <NavLink to={"/"} >
                    <button className='bg-gray-800/80 border border-white/20 rounded-2xl px-6 py-3 font-semibold text-gray-200 hover:border-[#d4af37] hover:text-[#d4af37] transition-all duration-300 ease-in'>Back to Home</button>
                </NavLink>
                <button
                    onClick={() => {
                        window.location.href = "https://wa.me/923332622283";
                    }}
                    className='border bg-linear-to-r from-[#FFF3B0] via-[#D4AF37] to-[#8C6A00] border-[#D4AF37]/60  rounded-2xl px-6 py-3 font-semibold text-gray-800 hover:border-[#d4af37] shadow-lg hover:shadow-white/20 transition-all duration-300 ease-in'>Whatsapp</button>
            </div>
        </div>
    )
}

export default Contactheader