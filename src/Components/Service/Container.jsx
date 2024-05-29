import React from 'react'
import About from './about'
import Header from './Header'
import Items from './Items'
import Footer from '../Footer'
import Award from './Award'

export default function ServiceContainer() {
  return (
    <div>
        <Header/>
      <About/>
      <Items/>
      <Award/>
      <Footer/>
    </div>
  )
}
