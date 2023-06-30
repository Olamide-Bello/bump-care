import React from 'react'
import Header from '../Header/Header.js'
import Hero from './Components/Hero/Hero.js'
import Story from './Components/Story/Story.js'
import Guide from './Components/Guide/Guide.js'
import How from './Components/How/How.js'
import Testimony from './Components/Testimony/Testimony.js'
import Popular from './Components/Popular/Popular.js'
import Newsletter from './Components/Newsletter/Newsletter.js'
import Footer from '../Footer/Footer.js'


function Homepage() {
  return (
    <div>
        <Header/>
        <Hero/>
        <Story/>
        <Guide/>
        <How/>
        <Testimony/>
        <Popular/>
        <Newsletter/>
        <Footer/>
    </div>
  )
}

export default Homepage