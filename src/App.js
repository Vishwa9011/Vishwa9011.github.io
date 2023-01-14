import { Box } from '@chakra-ui/react'
import React from 'react'
import Navbar from './Component/Navbar/Navbar'
import './App.css'
import LandingPage from './Component/Components/LandingPage'
import About from './Component/About/About'
import Skills from './Component/Skills/Skills'
import Project from './Component/Project/Project'
import Contact from './Component/Contact/Contact'
import 'aos/dist/aos.css'
import Footer from './Component/Footer/Footer'
function App() {

  return (
    <Box w={{ base: "100%", sm: "90%", md: '90%' }} m='auto' className='app'>
      <Navbar />
      <LandingPage />
      <About />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </Box>
  )
}

export default App
