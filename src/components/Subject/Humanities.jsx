import React from 'react'
import { RiQuillPenFill } from '@remixicon/react'
const Hum_courses = ['Pakistan Studies', 'Urdu Second Lang', 'Islamiyat', 'English Lang']
const Humanities = () => {
    return (
        <div className='w-full max-w-100 p-2 2xl:max-w-140 h-98 2xl:h-100 rounded-2xl border border-white/15 bg-linear-to-br from-[#09203F]/10 to-[#537895]/20 backdrop-blur-3xl shadow-lg shadow-gray-950 hover:border-amber-300/50 transition-all duration-300 ease-in-out hover:-translate-y-3 hover:scale-104 hover:shadow-amber-400/30'>
            <div className='p-2  w-full flex items-center justify-between'>
                <h1 className='text-2xl 2xl:text-4xl text-white font-bold hover:text-[#ffa800] hover:cursor-pointer'>Humanities</h1>
                <div className="relative w-fit p-3 rounded-xl bg-linear-to-br from-[#1A3A5A] to-[#07111F] border border-white/10">
                    <RiQuillPenFill size={22} className="text-[#FBCE40]" />
                </div>
            </div>
            <div className='w-full p-4 flex flex-col gap-2 '>
                {Hum_courses.map((subj) => (
                    <div className='py-2 px-3 bg-gray-500/10 border border-white/10 rounded-xl backdrop-blur-xl'>
                        <h1 className='text-lg font-semibold text-gray-300'>
                            {subj}
                        </h1>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Humanities