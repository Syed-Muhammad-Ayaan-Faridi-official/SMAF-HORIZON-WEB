import React from 'react'
import { RiParentFill } from '@remixicon/react'

const ParentReport = () => {
    return (
        <div className="group relative w-full max-md:max-w-100 h-60 md:h-70 rounded-2xl overflow-hidden bg-white/5 backdrop-blur-2xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.12)] hover:border-[#FBCE40]/40 hover:bg-white/8 hover:-translate-y-1 hover:shadow-[0_0_35px_rgba(251,206,64,0.15)] transition-all duration-300 flex flex-col justify-center gap-4 px-5">

            <div className="absolute -top-10 -right-10 w-28 h-28 rounded-full bg-[#FBCE40]/10 blur-3xl"></div>

            <div className="relative w-fit p-3 rounded-xl bg-linear-to-br from-[#1A3A5A] to-[#07111F] border border-white/10">
                <RiParentFill size={32} className="text-[#FBCE40]" />
            </div>

            <div className="relative flex flex-col gap-2">
                <h1 className="font-bold text-2xl 2xl:text-4xl text-white">
                    Parent Report
                </h1>

                <h3 className="text-white/70 font-md xl:text-lg 2xl:text-2xl leading-relaxed">
                    Track your child's learning journey through comprehensive monthly progress reports.
                </h3>
            </div>

        </div>
    )
}

export default ParentReport