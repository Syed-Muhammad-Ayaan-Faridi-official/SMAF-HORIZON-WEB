import React from 'react'
import {RiBankCardFill,RiLiveFill,RiFileList3Fill,RiBarChartBoxFill,RiAlertFill,RiLineChartFill,RiFireFill } from '@remixicon/react'

const Timeline = () => {
    return (
        <div className='relative py-2 flex flex-col'>
            <div className='absolute z-0 h-270 top-5 bottom-10 left-6 border-l border-l-emerald-400'>
            </div>
            <div className='absolute w-full flex top-10 left-0 z-10 gap-2'>
                <div className='w-12 h-12 bg-linear-to-br from-[#000000] via-[#011a33] to-[#152331] border border-amber-300/50 shadow-md shadow-amber-400 rounded-full flex items-center justify-center font-bold text-[#FBCE40]' ><RiBankCardFill /></div>
                <div className='bg-linear-to-br from-[#000000]/50 via-[#011a33]/50 to-[#152331] w-[75%] md:w-[90%] rounded-2xl rounded-tl-none h-fit mt-5 max-sm:px-2 py-3 px-10 flex flex-col sm:gap-1.5 border border-white/10 shadow-lg shadow-gray-950 hover:border-[#d4af37]/85 transition-all duration-300 ease-in-out'>
                    <h3 className='text-md text-[#ffa800] font-semibold'>Step 01</h3>
                    <h1 className='text-lg sm:text-2xl font-bold text-gray-200'>Enrollment</h1>
                    <p className='text-sm sm:text-[16px] text-gray-300' >Register and select the right stream and Teachers Combo.</p>
                </div>
            </div>
            <div className='absolute w-full flex top-50 left-0 z-10 gap-2'>
                <div className='w-12 h-12 bg-linear-to-br from-[#000000] via-[#011a33] to-[#152331] border border-amber-300/50 shadow-md shadow-amber-400 rounded-full flex items-center justify-center font-bold text-[#FBCE40]' ><RiLiveFill /></div>
                <div className='bg-linear-to-br from-[#000000]/50 via-[#011a33]/50 to-[#152331] w-[75%] md:w-[90%] rounded-2xl rounded-tl-none h-fit mt-5 max-sm:px-2 py-3 px-10 flex flex-col sm:gap-1.5 border border-white/10 shadow-lg shadow-gray-950 hover:border-[#d4af37]/85 transition-all duration-300 ease-in-out'>
                    <h3 className='text-md text-[#ffa800] font-semibold'>Step 02</h3>
                    <h1 className='text-lg sm:text-2xl font-bold text-gray-200'>Classes</h1>
                    <p className='text-sm sm:text-[16px] text-gray-300' >Live, interactive online sessions with expert faculty.</p>
                </div>
            </div>
            <div className='absolute w-full flex top-90 left-0 z-10 gap-2'>
                <div className='w-12 h-12 bg-linear-to-br from-[#000000] via-[#011a33] to-[#152331] border border-amber-300/50 shadow-md shadow-amber-400 rounded-full flex items-center justify-center font-bold text-[#FBCE40]' ><RiFileList3Fill /></div>
                <div className='bg-linear-to-br from-[#000000]/50 via-[#011a33]/50 to-[#152331] w-[75%] md:w-[90%] rounded-2xl rounded-tl-none h-fit mt-5 max-sm:px-2 py-3 px-10 flex flex-col sm:gap-1.5 border border-white/10 shadow-lg shadow-gray-950 hover:border-[#d4af37]/85 transition-all duration-300 ease-in-out'>
                    <h3 className='text-md text-[#ffa800] font-semibold'>Step 03</h3>
                    <h1 className='text-lg sm:text-2xl font-bold text-gray-200'>Assessments</h1>
                    <p className='text-sm sm:text-[16px] text-gray-300' >Regular Monthly Tests & Mock Examination before CAIE</p>
                </div>
            </div>
            <div className='absolute w-full flex top-130 left-0 z-10 gap-2'>
                <div className='w-12 h-12 bg-linear-to-br from-[#000000] via-[#011a33] to-[#152331] border border-amber-300/50 shadow-md shadow-amber-400 rounded-full flex items-center justify-center font-bold text-[#FBCE40]' ><RiBarChartBoxFill /></div>
                <div className='bg-linear-to-br from-[#000000]/50 via-[#011a33]/50 to-[#152331] w-[75%] md:w-[90%] rounded-2xl rounded-tl-none h-fit mt-5 max-sm:px-2 py-3 px-10 flex flex-col sm:gap-1.5 border border-white/10 shadow-lg shadow-gray-950 hover:border-[#d4af37]/85 transition-all duration-300 ease-in-out'>
                    <h3 className='text-md text-[#ffa800] font-semibold'>Step 04</h3>
                    <h1 className='text-lg sm:text-2xl font-bold text-gray-200'>Performance Analysis</h1>
                    <p className='text-sm sm:text-[16px] text-gray-300' >Track performance accurately and improve learning outcomes consistently.</p>
                </div>
            </div>
            <div className='absolute w-full flex top-170 max-md:top-175 left-0 z-10 gap-2'>
                <div className='w-12 h-12 bg-linear-to-br from-[#000000] via-[#011a33] to-[#152331] border border-amber-300/50 shadow-md shadow-amber-400 rounded-full flex items-center justify-center font-bold text-[#FBCE40]' ><RiAlertFill /></div>
                <div className='bg-linear-to-br from-[#000000]/50 via-[#011a33]/50 to-[#152331] w-[75%] md:w-[90%] rounded-2xl rounded-tl-none h-fit mt-5 max-sm:px-2 py-3 px-10 flex flex-col sm:gap-1.5 border border-white/10 shadow-lg shadow-gray-950 hover:border-[#d4af37]/85 transition-all duration-300 ease-in-out'>
                    <h3 className='text-md text-[#ffa800] font-semibold'>Step 05</h3>
                    <h1 className='text-lg sm:text-2xl font-bold text-gray-200'>Weak Topic Alert</h1>
                    <p className='text-sm sm:text-[16px] text-gray-300'>System that Highlight weak areas for focused academic improvement.</p>
                </div>
            </div>
            <div className='absolute w-full flex top-210 max-md:top-218 left-0 z-10 gap-2'>
                <div className='w-12 h-12 bg-linear-to-br from-[#000000] via-[#011a33] to-[#152331] border border-amber-300/50 shadow-md shadow-amber-400 rounded-full flex items-center justify-center font-bold text-[#FBCE40]' ><RiLineChartFill /></div>
                <div className='bg-linear-to-br from-[#000000]/50 via-[#011a33]/50 to-[#152331] w-[75%] md:w-[90%] rounded-2xl rounded-tl-none h-fit mt-5 max-sm:px-2 py-3 px-10 flex flex-col sm:gap-1.5 border border-white/10 shadow-lg shadow-gray-950 hover:border-[#d4af37]/85 transition-all duration-300 ease-in-out'>
                    <h3 className='text-md text-[#ffa800] font-semibold'>Step 06</h3>
                    <h1 className='text-lg sm:text-2xl font-bold text-gray-200'>Improvement Tracking</h1>
                    <p className='text-sm sm:text-[16px] text-gray-300' >Targeted revision, then re-tested until mastered.</p>
                </div>
            </div>
            <div className='absolute w-full flex top-250 max-md:top-255 left-0 z-10 gap-2'>
                <div className='w-12 h-12 bg-linear-to-br from-[#000000] via-[#011a33] to-[#152331] border border-amber-300/50 shadow-md shadow-amber-400 rounded-full flex items-center justify-center font-bold text-[#FBCE40]' >< RiFireFill  /></div>
                <div className='bg-linear-to-br from-[#000000]/50 via-[#011a33]/50 to-[#152331] w-[75%] md:w-[90%] rounded-2xl rounded-tl-none h-fit mt-5 max-sm:px-2 py-3 px-10 flex flex-col sm:gap-1.5 border border-white/10 shadow-lg shadow-gray-950 hover:border-[#d4af37]/85 transition-all duration-300 ease-in-out'>
                    <h3 className='text-md text-[#ffa800] font-semibold'>Step 07</h3>
                    <h1 className='text-lg sm:text-2xl font-bold text-gray-200'>Academic Growth</h1>
                    <p className='text-sm sm:text-[16px] text-gray-300' >Sustained, measurable grade improvement, term after term.</p>
                </div>
            </div>
        </div>
    )
}

export default Timeline