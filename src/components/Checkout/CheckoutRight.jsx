import React from 'react'

const CheckoutRight = ({ formData, setFormData, errors, touched, setTouched }) => {

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleBlur = (e) => {
        const { name } = e.target;
        setTouched((prev) => ({ ...prev, [name]: true }));
    };

    const submitHandler = (e) => {
        e.preventDefault()
    }

    const fieldError = (name) => touched[name] && errors[name] ? errors[name] : ''

    const inputClass = (name) =>
        `border rounded-full bg-gray-400/15 w-full p-2.5 placeholder:text-gray-400 outline-none text-[#d4af37] ${
            fieldError(name) ? 'border-red-500' : 'border-white/20'
        }`

    return (
        <div className=' w-full md:w-[50%] max-sm:px-1 flex flex-col gap-3'>
            <div className=' h-full'>
                <form onSubmit={submitHandler}
                className='h-full p-6 lg:p-8 border border-white/12 rounded-4xl bg-linear-to-b from-[#151C26] to-[#0F1F2F] flex flex-col gap-5'
                >
                    <h1 className='text-white/80 text-xl lg:text-2xl font-semibold'>Student Information</h1>
                    <div className='flex flex-wrap max-md:flex-col gap-3'>
                        <div className='w-full lg:w-[48%] flex flex-col gap-1'>
                            <input required name='name' type="text" placeholder='Student Name' className={inputClass('name')} value={formData.name} onChange={handleChange} onBlur={handleBlur}/>
                            {fieldError('name') && <span className='text-red-500 text-xs pl-3'>{fieldError('name')}</span>}
                        </div>

                        <div className='w-full lg:w-[48%] flex flex-col gap-1'>
                            <input required name='email' type="email" placeholder='Email' className={inputClass('email')} value={formData.email} onChange={handleChange} onBlur={handleBlur}/>
                            {fieldError('email') && <span className='text-red-500 text-xs pl-3'>{fieldError('email')}</span>}
                        </div>

                        <div className='w-full lg:w-[48%] flex flex-col gap-1'>
                            <input required name='phone' type="tel" placeholder='Phone Number' className={inputClass('phone')} value={formData.phone} onChange={handleChange} onBlur={handleBlur}/>
                            {fieldError('phone') && <span className='text-red-500 text-xs pl-3'>{fieldError('phone')}</span>}
                        </div>

                        <div className='w-full lg:w-[48%] flex flex-col gap-1'>
                            <input required name='school' type="text" placeholder='Current School' className={inputClass('school')} value={formData.school} onChange={handleChange} onBlur={handleBlur}/>
                            {fieldError('school') && <span className='text-red-500 text-xs pl-3'>{fieldError('school')}</span>}
                        </div>

                        <div className='w-full lg:w-[48%] flex flex-col gap-1'>
                            <input required name='country' type="text" placeholder='Country' className={inputClass('country')} value={formData.country} onChange={handleChange} onBlur={handleBlur}/>
                            {fieldError('country') && <span className='text-red-500 text-xs pl-3'>{fieldError('country')}</span>}
                        </div>
                    </div>
                    <div className='flex flex-col gap-1.5'>
                        <h3 className='text-sm uppercase text-gray-500 font-semibold'>Expected Exam Session</h3>
                        <input readOnly type="text" value={'May/June 2027'} className='border border-white/20 rounded-full bg-gray-400/15 w-full p-2.5 text-gray-400 outline-none'/>
                    </div>
                    <div className='flex flex-col gap-1.5'>
                        <h3 className='text-sm uppercase text-gray-500 font-semibold'>Additional Notes</h3>
                        <textarea name="notes" id="" placeholder='Anything we should know before your class?' className='border border-white/20 rounded-2xl bg-gray-400/15 w-full min-h-50 p-2.5 placeholder:text-gray-400' value={formData.notes} onChange={handleChange}></textarea>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CheckoutRight