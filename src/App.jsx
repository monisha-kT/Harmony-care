// import { useState } from 'react'

import './App.css'
import Home from './Components/Home'
import Nav from './Components/Nav'
import Footer from './Components/Footer'
import About from './Components/About'
import { Routes, Route } from 'react-router-dom';
import Appointment from './Components/Appointment';
import Service from './Components/Service'
import Doctor from './Components/Doctor'
import Contact from './Components/Contact'
// import{BrowserRouter,Routes,Router} from ''

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Nav/>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service/>} />
        <Route path="/appointment" element={<Appointment/>} />
        <Route path="/doctor" element={<Doctor/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
   <Footer/>
    </>
  )
}

export default App
