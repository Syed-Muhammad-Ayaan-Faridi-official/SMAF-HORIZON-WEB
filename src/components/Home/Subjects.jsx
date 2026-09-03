import React from 'react'
import Sciences from '../Subject/Sciences'
import Commerce from '../Subject/Commerce'
import Humanities from '../Subject/Humanities'

const Subjects = () => {
  return (
    <div className='w-full h-full bg-linear-to-t from-[#152331] to-[#000000] flex flex-col items-center max-md:px-5 md:px-9 gap-15 max-sm:pt-10 pt-20 pb-10'>
        <div className='w-full flex flex-col max-sm:items-center gap-5'>
            <h1 className='w-fit text-lg lg:text-xl 2xl:text-3xl font-bold text-[#FBCE40] relative px-4 py-2 sm:py-3 rounded-full bg-linear-to-br from-[#000000]/70 via-[#011a33]/10 to-[#152331] border border-white/10 shadow-[#6c5300] shadow-md 2xl:px-8 2xl:py-5'>O & A Levels Streams Offered</h1>
            <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl md:w-[75%]  max-sm:text-center text-white font-bold'>Full Coverage across <span className='text-yellow-200'>Science & Commerce</span></h1>
        </div>
        <div className='flex max-md:flex-col max-md:items-center w-full h-full justify-center gap-5'>
          <Sciences />
          <Commerce />
          <Humanities />
        </div>
    </div>
  )
}

export default Subjects