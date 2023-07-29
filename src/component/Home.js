import React from 'react'
import Header from './Header'
import Footer from './Footer'
import ContactUs from './ContactUs'
import Staff from './Staff'
import About from './About'




function Home() {
  return (
    <div className='bg-blue-900'>
    <Header></Header>
    <About></About>
    <Staff></Staff>
    <ContactUs></ContactUs>
    </div>
    
    
  )
}

export default Home