import React from 'react'
import './We.css'
import Bump from './We.png'

function We() {
    return (
        <div className='we'>
            <div className='we-bump'>
                <img src={Bump} alt='bump' />
            </div>
            <div className='we-care'>
                <h5>We're Bump Care</h5>
                <p>
                    As an expectant mother, finding the right gynecologist is crucial to
                    ensuring a safe and healthy pregnancy journey. Our website offers
                    a comprehensive directory of gynecologists who specialize in
                    obstetrics and prenatal care. Simply enter your location and browse through our list of clinics close to you with highly qualified and
                    experienced gynecologists. Let us help you find the perfect
                    gynecologist to guide you through this exciting time in your life.
                </p>
            </div>
        </div>
    )
}

export default We