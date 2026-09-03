import React from 'react'
import Hero from '../components/Home/Hero.jsx'
import LimitedOffer from '../components/Home/LimitedOffer.jsx'
import Navbar from '../components/layout/Navbar.jsx'
import Footer from '../components/layout/Footer.jsx'
import WhyUs from '../components/Home/WhyUs.jsx'
import Process from '../components/Home/Process.jsx'
import Subjects from '../components/Home/Subjects.jsx'
import FAQs from '../components/Home/FAQs.jsx'
import CTA from '../components/Home/CTA.jsx'
import TeachersCard from '../components/Home/TeachersCard.jsx'
import PageTransition from '../components/PageTransition.jsx'

const Home = () => {
    return (
        <PageTransition>
            <div className='bg-linear-to-t from-[#152331] to-[#000000]'>
                <Navbar />
                <Hero />
                <LimitedOffer />
                <WhyUs />
                <Process />
                <Subjects />
                <TeachersCard />
                <FAQs />
                <CTA />
                <Footer />
            </div>
        </PageTransition>
    )
}

export default Home