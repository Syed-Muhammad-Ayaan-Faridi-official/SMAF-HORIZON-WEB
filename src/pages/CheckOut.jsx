import React from 'react'
import Navbar from '../components/layout/Navbar'
import CheckoutScreen from '../components/Checkout/CheckoutScreen'
import Footer from '../components/layout/Footer'
import PageTransition from '../components/PageTransition'

const CheckOut = () => {
    return (
        <PageTransition>
            <div className='h-full min-h-screen bg-linear-to-t from-[#152331] via-[#050a10] to-[#000000] flex flex-col justify-between'>
                <Navbar />
                <CheckoutScreen />
                <Footer />
            </div>
        </PageTransition>
    )
}

export default CheckOut