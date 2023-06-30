import React from 'react'
import './Ready.css'
import Ready1 from './Ready1.png'
import Ready2 from './Ready2.png'
import Ready3 from './Ready3.png'
import Ready4 from './Ready4.png'

function Ready() {
  return (
    <div className='ready'>
        <div className='ready-hd'><h5>Ready To Embark On The Beautiful Journey Of Pregnancy?</h5></div>
        <div className='journey'>
            <div className='journey-res'><img src={Ready1} alt='result'/></div>
            <div className='journey-bump1'><img src={Ready2} alt='bump'/></div>
            <div className='journey-bump2'><img src={Ready3} alt='bump'/></div>
            <div className='journey-bf'><img src={Ready4} alt='breastfeeding'/></div>
        </div>
    </div>
  )
}

export default Ready