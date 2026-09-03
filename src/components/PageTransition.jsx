import React, { useEffect } from 'react'
import { motion } from 'framer-motion'

// Fade + gentle vertical slide — matches a clean, premium feel.
// Swap the values below if you want a different motion style
// (see alternates at the bottom of this file).
const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
}

const pageTransition = {
    duration: 0.35,
    ease: 'easeInOut'
}

const PageTransition = ({ children }) => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <motion.div
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={pageTransition}
            className="min-h-screen"
        >
            {children}
        </motion.div>
    )
}

export default PageTransition

