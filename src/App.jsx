import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import SegeNavbar from './components/Navbar'
import Footer from './components/Footer'
import About from './pages/About'
import Contact from './pages/Contact'
import Gallery from './pages/Gallery'
import ServiceDetailed from './pages/ServiceDetailed'
import Document from './pages/Document'
import FloatingButtons from "./components/FloatingButtons"
import ScrollToTop from "./components/ScrollToTop"

const App = () => {
  return (
   <BrowserRouter>
   <FloatingButtons/>
   <SegeNavbar/>
   <Routes>
    <Route path="/" element={<Home />} />
     <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/documentation" element={<Document />} />
        <Route path="/services/:id" element={<ServiceDetailed />} />
   </Routes>
   < ScrollToTop/>
   <Footer/>
   </BrowserRouter>
  )
}

export default App