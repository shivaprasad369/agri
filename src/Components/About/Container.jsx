import React from 'react'
import Header from './Header'
import Banner from './Banner'
import About from './About'
import Testimonial from './Testimonial'
import Footer from '../Footer'
import Projects from './Projects'

export default function Container() {
  return (
    <div className='overflow-hidden'>
      <Header/>
      <Banner/>
      <About/>
      <Projects/>
      <Testimonial/>
      <Footer/>
    </div>
  )
}
