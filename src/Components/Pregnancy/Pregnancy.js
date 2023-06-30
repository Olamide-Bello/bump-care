import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Ready from './Ready/Ready'
import Guide from './Guide/Guide'
import How from './How/How'
import Stages from './Stages/Stages'
import Signs from './Signs/Signs'
import Symptoms from './Symptoms/Symptoms'
import Prenatal from './Prenatal/Prenatal'
import Nutrition from './Nutrition/Nutrition'
import Fitness from './Fitness/Fitness'
import Tracker from './Tracker/Tracker'

function Pregnancy() {
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