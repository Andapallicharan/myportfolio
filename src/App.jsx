import React from 'react'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './components/Home';
import Qualifications from './components/Qualifications';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Internship from './components/Internship';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Feedback from './components/Feedback';
const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/qualifications' element={<Qualifications/>} />
      <Route path='/skills' element={<Skills/>} />
      <Route path='/certifications' element={<Certifications/>} />
      <Route path='/internships' element={<Internship/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/feedback' element={<Feedback/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
