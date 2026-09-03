import React from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import Faculty from './pages/Faculty'
import CheckOut from './pages/CheckOut'
import { CartProvider } from './context/CartContext'
import ScrollToHash from './components/ScrollToHash'
import NotFound from './pages/NotFound'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsnConditions from './pages/TermsnConditions'
import Contact from './pages/Contact'

const AnimatedRoutes = () => {
  const location = useLocation()

  return (
    <>
    <ScrollToHash/>
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/termsNcondition" element={<TermsnConditions />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
    </>
  )
}
const App = () => {
  return (
    <BrowserRouter>
      <CartProvider>
        <AnimatedRoutes />
      </CartProvider>
    </BrowserRouter>
  )
}

export default App