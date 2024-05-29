import React from 'react'
import Banner from './Banner'
import Service from './Service'
import Idea from './Idea'
import Projects from './Projects'
import Testimonial from './Testimonial'
import Footer from './Footer'
import Products from './Products'

export default function BannerContainer() {
  return (
    <div>
      <Banner/>
     <Service/>
     <Idea/>
     <Projects/>
     <Products/>
     <Testimonial/>
     <Footer/>
    </div>
  )
}
