import React, { useEffect } from 'react'
import Header from '../Header/Header.js'
import Footer from '../Footer/Footer.js'
import Ready from './Ready/Ready.js'
import Guide from './Guide/Guide.js'
import How from './How/How.js'
import Stages from './Stages/Stages.js'
import Signs from './Signs/Signs.js'
import Symptoms from './Symptoms/Symptoms.js'
import Prenatal from './Prenatal/Prenatal.js'
import Nutrition from './Nutrition/Nutrition.js'
import Fitness from './Fitness/Fitness.js'
import Tracker from './Tracker/Tracker.js'

function Pregnancy() {
  useEffect(() => {
    if(window.location.hash) {
      const element = document.querySelector(window.location.hash)
      element.scrollIntoView({behavior: 'smooth'})
    }
  }, [])
  return (
    <div>
        <Header/>
        <Ready/>
        <Guide/>
        <How/>
        <Stages/>
        <Signs/>
        <Symptoms/>
        <Prenatal/>
        <Nutrition/>
        <Fitness/>
        <Tracker/>
        <Footer/>
    </div>
  )
}

export default Pregnancy