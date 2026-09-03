import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollToHash = () => {
    const location = useLocation()

    useEffect(() => {
        if (!location.hash) {
            window.scrollTo(0, 0)
            return
        }

        const id = location.hash.replace('#', '')
        let attempts = 0
        const maxAttempts = 20 // ~2 seconds total

        const tryScroll = setInterval(() => {
            const el = document.getElementById(id)
            attempts++

            if (el) {
                el.scrollIntoView({ behavior: 'smooth' })
                clearInterval(tryScroll)
            } else if (attempts >= maxAttempts) {
                clearInterval(tryScroll)
            }
        }, 100)

        return () => clearInterval(tryScroll)
    }, [location])

    return null
}

export default ScrollToHash