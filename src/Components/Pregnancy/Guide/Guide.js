import React from 'react'
import './Guide.css'
import Group from './Group.png'

function Guide() {
  return (
    <div className='t-guide'>
        <div className='t-guide-c1'>
            <h5>Let Us Be Your Trusted Guide</h5>
            <p>From the moment that you find out that you're expecting to the day that you hold your
                little bundle of joy in your arms, there is nothing more magical than bringing 
                a new life into the world. Our pregnancy page is choke-full of information
                and tips to help you navigate every step of the way. We'll share expert advice
                on conception advice, nutrition and exercise to keep you and your baby healthy, 
                offer support and reassurance during those morning sickness days, and 
                guide you through the many ups and downs of pregnancy. Lets make this
                journey an unforgettable one!
            </p>
        </div>
        <div className='img-container'><img src={Group} alt='preg-women'/></div>
    </div>
  )
}

export default Guide