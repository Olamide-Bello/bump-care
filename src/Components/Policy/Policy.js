import React, { useEffect } from 'react'
import Header from '../Header/Header.js'
import Footer from '../Footer/Footer'
import PrivacyPolicy from './PrivacyPolicy/PrivacyPolicy.js'
import FAQS from './FAQS/FAQS.js'

function Policy() {
  useEffect(() => {
    if(window.location.hash) {
      const element = document.querySelector(window.location.hash)
      element.scrollIntoView({behavior: 'smooth'})
    }
  }, [])
  return (
    <div>
        <Header/>
        <PrivacyPolicy/>
        <FAQS/>
        <Footer/>
    </div>
  )
}

export default Policy