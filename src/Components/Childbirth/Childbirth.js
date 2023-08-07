import React, { useEffect } from 'react'
import Header from '../Header/Header.js'
import Journey from './Journey/Journey.js'
import Support from './Support/Support.js'
import Prepare from './Prepare/Prepare.js'
import Options from './Options/Options.js'
import Manage from './Manage/Manage.js'
import Labour from './Labour&Delivery/Labour.js'
import Premature from './Premature/Premature.js'
import Postpartum from './Postpartum/Postpartum.js'
import Stories from './Stories/Stories.js'
import Footer from '../Footer/Footer.js'

function Childbirth() {
  useEffect(() => {
    if(window.location.hash) {
      const element = document.querySelector(window.location.hash)
      element.scrollIntoView({behavior: 'smooth'})
    }
  }, [])
  return (
    <div>
        <Header/>
        <Journey/>
        <Support/>
        <Prepare/>
        <Options/>
        <Manage/>
        <Labour/>
        <Premature/>
        <Postpartum/>
        <Stories/>
        <Footer/>
    </div>
  )
}

export default Childbirth