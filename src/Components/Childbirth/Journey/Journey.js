import React from 'react'
import './Journey.css'
import Preggy from './Preggy.png'
import Babies from './Babies.png'

function Journey() {
  return (
    <div className='p-journey'>
        <div className='p-journey-img'>
            <img src={Preggy} alt='pregnant woman'/>
        </div>
        <div className='p-journey-bd'>
            <p>A joy of love, labor, and delivery.</p>
            <h5>Bringing your little one into the world with care and comfort.</h5>
            <p>Congratulations on your pregnancy! Bringing a new life into the world 
                is an incredible journey, we're here to help guide you every step of the way.
            </p>
            <button className='no-colour-btn'>Find a Gynecologist</button>
            <img src={Babies} alt='Babies'/>
        </div>

    </div>
  )
}

export default Journey