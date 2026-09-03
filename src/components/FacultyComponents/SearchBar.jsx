import React from 'react'
import { Search } from 'lucide-react'

const SearchBar = ({search,setSearch}) => {
    
    return (
        <div className='py-5 lg:py-10 lg:px-8 px-4'>
            <div className='w-full flex gap-2 items-center bg-linear-to-tl from-[#0A1722]/40 to-[#17242E] px-6 py-1 border border-gray-700 rounded-full transition-all duration-300 hover:border-[#D4AF37] focus-within:border-[#D4AF37] shadow-lg focus-within:shadow-[#D4AF37]/20'>
                <Search color='#D4AF37'/>
                <input type="search" name="" id="" className='w-full px-1 py-3 placeholder:text-gray-400 outline-none text-[#D4AF37] text-lg' placeholder='Search by teacher, subject or course...' 
                value={search}
                onChange={(e)=>setSearch(e.target.value)}/>
            </div>
        </div>
    )
}

export default SearchBar