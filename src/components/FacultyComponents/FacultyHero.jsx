import React from 'react'
import imgFac from '../../assets/images/Facultysectionimage.jpg'
import FacHeroCard from '../FacultyComponents/FacHeroCard.jsx'
const FacultyHero = () => {
    return (
        <div className='w-full h-full flex max-lg:flex-col py-10 max-md:py-15 lg:px-8 px-4 gap-5'>
            <div id='facText' className='w-full lg:w-[50%] flex flex-col max-lg:items-center justify-center gap-5'>
                <h2 className='w-fit px-3 py-2 text-sm text-[#D4AF37] capitalize bg-linear-to-tl from-[#152331]/75 to-[#0A1722]/45 rounded-full border border-[#D4AF37]/55 font-semibold'>SMAF HORIZON ACADEMY</h2>
                <h1 className='text-7xl max-md:text-center font-bold text-white'>Meet Our <span className='bg-linear-to-r from-[#FFF3B0] via-[#D4AF37] to-[#8C6A00] bg-clip-text text-transparent'>Expert Faculty</span></h1>
                <h3 className=' w-[85%] max-md:text-center text-xl text-gray-400 font-semibold'>Learn from experienced educators, choose your curriculum, and enroll in the perfect course for your academic success.</h3>
                <div className='flex flex-wrap gap-3 max-md:gap-4'>
                    <FacHeroCard heading={'25+'} subheading={'Expert Teachers'} />
                    <FacHeroCard heading={'15+'} subheading={'Distinctions'} />
                    <FacHeroCard heading={'25000+'} subheading={'Students Taught'} />
                </div>
            </div>
            <div id='facImg' className='border border-white/30 object-cover h-fit lg:w-[50%] lg:min-w-150 max-md:w-full  p-3 rounded-3xl bg-blue-950/30 backdrop-blur-2xl'>
                <img src={imgFac} alt="" className='rounded-3xl' />
            </div>
        </div>
    )
}

export default FacultyHero