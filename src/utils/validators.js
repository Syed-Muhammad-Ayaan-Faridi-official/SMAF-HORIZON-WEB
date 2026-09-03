export const validateName = (name) => {
    if (!name || !name.trim()) return 'Name is required'
    if (name.trim().length < 2) return 'Name looks too short'
    return ''
}

export const validateEmail = (email) => {
    if (!email || !email.trim()) return 'Email is required'
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
    if (!emailRegex.test(email.trim())) return 'Enter a valid email address'
    return ''
}

export const validatePhone = (phone) => {
    if (!phone || !phone.trim()) return 'Phone number is required'

    const digitsOnly = phone.replace(/\D/g, '')

    // Pakistani mobile format: 03XXXXXXXXX (11 digits) or +923XXXXXXXXX (from +92...)
    const isPakistaniFormat =
        /^03\d{9}$/.test(digitsOnly) ||
        /^923\d{9}$/.test(digitsOnly)

    if (isPakistaniFormat) return ''

    // Fallback: allow other international numbers, but require a realistic length
    if (digitsOnly.length < 10 || digitsOnly.length > 15) {
        return 'Enter a valid phone number'
    }

    return ''
}

export const validateRequired = (value, fieldLabel) => {
    if (!value || !value.trim()) return `${fieldLabel} is required`
    return ''
}

export const validateFormData = (formData) => {
    return {
        name: validateName(formData.name),
        email: validateEmail(formData.email),
        phone: validatePhone(formData.phone),
        school: validateRequired(formData.school, 'School'),
        country: validateRequired(formData.country, 'Country'),
    }
}

export const isFormValid = (errors) => {
    return Object.values(errors).every((msg) => msg === '')
}