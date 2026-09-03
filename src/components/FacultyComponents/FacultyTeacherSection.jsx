import React from 'react'
import { Check, ShoppingCart, Star} from 'lucide-react'
import AddToCartBtn from './AddToCartBtn'
import TeacherCard from './TeacherCard'

const FacultyTeacherSection = ({ teachers, search, selectedCurricullum, selectedSubject, confirmation, setConfirmation, cart, setCart }) => {
    const filteredTeachers = teachers.filter((teacher)=>{
        const subjectMatched = selectedSubject === "All" || selectedSubject === teacher.subject;
        const curricullumMatched = selectedCurricullum === "All" || teacher.levels.includes(selectedCurricullum);
        const searchMatch = search.trim().toLowerCase() === '' || teacher.name.toLowerCase().includes(search.trim().toLowerCase()) || teacher.subject.toLowerCase().includes(search.trim().toLowerCase());
        return subjectMatched && curricullumMatched && searchMatch
    })
    return (
        <div className='h-full py-5 lg:py-5 lg:px-8 px-4 flex flex-col gap-6'>
            <div className=' h-full grid max-md:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 trasition-all duration-300 ease-in pb-15'>
                {filteredTeachers.map((Teacher, index) => (
                    <TeacherCard
                        key={index}
                        id={index}
                        teachers={Teacher}
                        selectedCurricullum={selectedCurricullum}
                        selectedSubject={selectedSubject}
                        confirmation={confirmation}
                        setConfirmation={setConfirmation}
                        cart={cart}
                        setCart={setCart}
                    />
                ))}
            </div>
        </div>
    )
}

export default FacultyTeacherSection