import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About';
import Destinations from './components/Destinations'; 
import Contact from './components/Contact';
import Footer from './components/Footer'
import './index.css'

const App = () => {
  return (
    <div className='bg-sky-950'>
      <Header />
      <Hero />
      <About />
      <Destinations /> 
      <Contact />
      <Footer />
    </div>
  )
}

export default App
