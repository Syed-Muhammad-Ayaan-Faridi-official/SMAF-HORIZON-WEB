import React from 'react'
import { ArrowRight } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import {teachers} from '../../data/TeacherData'


const TeachersCard = () => {
  return (
    <div className='w-full h-full bg-[#152331] flex flex-col max-md:px-5 md:px-9 gap-5 max-sm:pt-10 pt-20 pb-10 '>
      <div className='w-full flex flex-col max-sm:items-center gap-2'>
        <h1 className='w-fit text-lg lg:text-xl 2xl:text-3xl font-bold text-[#FBCE40] relative px-8 py-2 sm:py-3 rounded-full bg-linear-to-br from-[#000000]/70 via-[#011a33]/10 to-[#152331] border border-white/10 shadow-[#6c5300] shadow-md 2xl:px-12 2xl:py-5'>Our Expert Faculty</h1>
        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl md:w-[75%]  max-sm:text-center text-white font-bold'>Meet 25+ Expert <span className='text-yellow-200'>Teachers</span></h1>
        <h3 className='text-lg text-gray-500 max-sm:text-center'>Learn from experienced O/A Level teachers dedicated to helping students excel through engaging lessons, personalized guidance, and proven teaching strategies.</h3>
      </div>
      <div className='no-scrollbar flex flex-row overflow-auto gap-3'>
        {teachers.map((teacher,index)=>(
          <div 
          key={index} 
          className='relative min-w-75 max-w-80 max-sm:w-70 h-110 rounded-3xl object-cover bg-emerald-900'>
            <img src={teacher.image} alt="" className='object-top h-full w-full rounded-2xl' />
            <div className='w-full h-full absolute bottom-0 left-0 rounded-2xl z-10 bg-linear-to-t from-[#000000]/70 via-white/10 to-transparent flex flex-col justify-end px-2 py-2'>
              <h1 className='text-2xl text-[#ffa800] font-bold'>{teacher.name}</h1>
              <h1 className='text-sm text-[#ffa800] font-semibold'>{teacher.subject}</h1>
            </div>
          </div>
        ))}
      </div>
      <div className='w-full flex flex-col gap-3'>
        <h1 className='w-full text-xl flex items-center text-gray-500'>Scroll to view more <ArrowRight size={22}/></h1>
        <NavLink to={"/faculty"}>
        <button className='text-gray-900 w-fit border border-[#ffa800] bg-linear-to-t from-yellow-300 to-[#ffa800] px-4 py-2 rounded-md font-semibold cursor-pointer hover:scale-95 flex items-center gap-1 transition duration-300 2xl:text-2xl 2xl:py-4'>View Faculty<ArrowRight size={18} strokeWidth={3} /></button>
        </NavLink>
      </div>
    </div>
  )
}

export default TeachersCard