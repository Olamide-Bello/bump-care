import React from 'react'
import Header from '../Header/Header.js'
import Journey from './Journey/Journey.js'
import Support from './Support/Support.js'
import Prepare from './Prepare/Prepare.js'
import Options from './Options/Options.js'
import Manage from './Manage/Manage.js'
import Labour from './Labour&Delivery/Labour.js'

function Childbirth() {
  return (
    <div>
        <Header/>
        <Journey/>
        <Support/>
        <Prepare/>
        <Options/>
        <Manage/>
        <Labour/>
    </div>
  )
}

export default Childbirth