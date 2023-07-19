import React from 'react'
import Header from '../Header/Header.js'
import Footer from '../Footer/Footer'
import PrivacyPolicy from './PrivacyPolicy/PrivacyPolicy.js'
import FAQS from './FAQS/FAQS.js'

function Policy() {
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