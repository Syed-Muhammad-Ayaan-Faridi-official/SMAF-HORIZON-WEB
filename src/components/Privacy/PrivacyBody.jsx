import React from 'react'
import { Privacy } from '../../data/PrivacyData'

const PrivacyBody = () => {
    return (
        <div className='px-2 py-6 md:px-13 md:py-8 flex flex-col gap-10'>
            {Privacy.sections.map((section, index) => (
                <div key={index} className='border-b border-white/20 flex flex-col gap-3 pb-3'>
                    <h2 className='text-2xl font-semibold text-gray-100'>{section.heading}</h2>
                    <p className='text-sm md:text-lg text-gray-400'>{section.content}</p>
                    <ul className='flex flex-col  gap-1 list-disc list-outside pl-5 space-y-2"'>
                        {section.items?.map((item, idx) => (
                            <li className='text-sm md:text-md text-[#d4af37]' key={idx}>
                                {item}
                            </li>
                        ))}
                    </ul>
                    <h4 className='text-sm md:text-lg text-gray-400'>{section.footer}</h4>
                </div>
            ))}
        </div>
    )
}

export default PrivacyBody