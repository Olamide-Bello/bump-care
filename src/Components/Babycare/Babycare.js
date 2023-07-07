import React from 'react'
import Header from '../Header/Header.js'
import Discover from './Discover/Discover.js'
import Understanding from './Understanding/Understanding.js'
import Lactation from './Lactation/Lactation.js'
import Weaning from './Weaning/Weaning.js'
import Insights from './Insights/Insights.js'
import BabyGears from './BabyGears/BabyGears.js'
import Safety from './Safety/Safety.js'
import Tips from './Tips/Tips.js'
import Footer from '../Footer/Footer.js'

function Babycare() {
  return (
    <div>
        <Header/>
        <Discover/>
        <Understanding/>
        <Lactation/>
        <Weaning/>
        <Insights/>
        <BabyGears/>
        <Safety/>
        <Tips/>
        <Footer/>
    </div>
  )
}

export default Babycare