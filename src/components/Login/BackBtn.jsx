import React from 'react'
import { ChevronLeft } from 'lucide-react'

const BackBtn = () => {
    return (
        <button className='bg-[#333] text-white py-1.5 pl-0.5 pr-2.5 mt-4 ml-3 rounded-md flex cursor-pointer'><ChevronLeft /> Back</button>
    )
}

export default BackBtn