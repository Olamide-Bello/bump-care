import React from 'react'
import Header from '../Header/Header.js'
import Footer from '../Footer/Footer.js'
import Find from './Find/Find.js'
import We from './We/We.js'
import Who from './Who/Who.js'
import Why from './Why/Why.js'
import Steps from './Steps/Steps.js'
import MapContainer from './Map/MapContainer.js'
import Newsletter from '../Home/Components/Newsletter/Newsletter.js'


function Gynecology() {
  return (
    <div>
        <Header/>
        <Find/>
        <We/>
        <Who/>
        <Why/>
        <Steps/>
        <MapContainer/>
        <Newsletter/>
        <Footer/>
    </div>
  )
}

export default Gynecology