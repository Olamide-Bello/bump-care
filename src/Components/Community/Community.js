import React from 'react'
import Header from '../Header/Header.js'
import Welcome from './Welcome/Welcome.js'
import Pregnant from './Pregnant/Pregnant.js'
import Baby from './Baby/Baby.js'
import TTC from './TTC/TTC.js'
import Corner from './Corner/Corner.js'
import Footer from '../Footer/Footer.js'

function Community() {
  return (
    <div>
        <Header/>
        <Welcome/>
        <Pregnant/>
        <Baby/>
        <TTC/>
        <Corner/>
        <Footer/>
    </div>
  )
}

export default Community