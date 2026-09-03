import React from 'react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import PrivacyHeader from '../components/Privacy/PrivacyHeader'
import PrivacyBody from '../components/Privacy/PrivacyBody'

const PrivacyPolicy = () => {
  return (
    <div className='min-h-screen h-full bg-linear-to-t from-[#152331] via-[#050a10] to-[#000000] flex flex-col justify-between'>
        <Navbar/>
        <div className='p-3 lg:p-10 flex flex-col gap-2'>
            <PrivacyHeader/>
            <PrivacyBody/>
        </div>
        <Footer/>
    </div>
  )
}

export default PrivacyPolicy