import React, { useState } from 'react'
import Cartbtn from '../components/FacultyComponents/Cartbtn'
import Navbar from '../components/layout/Navbar.jsx'
import FacultyHero from '../components/FacultyComponents/FacultyHero.jsx'
import SearchBar from '../components/FacultyComponents/SearchBar.jsx'
import Filter from '../components/FacultyComponents/Filter.jsx'
import FacultyTeacherSection from '../components/FacultyComponents/FacultyTeacherSection.jsx'
import Footer from '../components/layout/Footer.jsx'
import { useCart } from '../context/CartContext';
import { teachers } from '../data/TeacherData.js'
import PageTransition from '../components/PageTransition.jsx'
const Faculty = () => {
    const [selectedSubject, setSelectedSubject] = useState('All')
    const [selectedCurricullum, setSelectedCurricullum] = useState('All')
    const [search, setSearch] = useState('')
    const { cart, setCart } = useCart();
    const [confirmation, setConfirmation] = useState("O Level")
    const curricullum = ['All', 'O Level', 'IGCSE', 'AS Level', 'A2 Level']
    const subjects = ['All', 'PST', 'Islamiyat', 'Urdu', 'Mathematics', 'Physics', 'Chemistry', 'Computer Science', 'Biology', 'English', 'Business', 'Economics', 'Accounting']

    return (
        <PageTransition>
            <div className='h-full min-h-screen bg-linear-to-t from-[#152331] via-[#050a10] to-[#000000]'>
                <Navbar />
                <Cartbtn cart={cart} setCart={setCart} />
                <FacultyHero />

                <SearchBar search={search} setSearch={setSearch} />

                <Filter
                    selectedSubject={selectedSubject}
                    setSelectedSubject={setSelectedSubject}
                    selectedCurricullum={selectedCurricullum}
                    setSelectedCurricullum={setSelectedCurricullum}
                    curricullum={curricullum}
                    subjects={subjects}
                />

                <FacultyTeacherSection
                    teachers={teachers}
                    search={search}
                    selectedCurricullum={selectedCurricullum}
                    selectedSubject={selectedSubject}
                    confirmation={confirmation}
                    setConfirmation={setConfirmation}
                    cart={cart}
                    setCart={setCart}
                />

                <Footer />
            </div>
        </PageTransition>
    )
}

export default Faculty