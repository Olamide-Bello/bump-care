import React from 'react'
import './Find.css'
import Find1 from './Find1.png'
import Find2 from './Find2.png'

function Find() {
    return (
        <div className='find'>
            <div className='find-gyn1'>
                <img src={Find1} alt='gynecologist' />
                <p>
                    Expert care for you and your baby, Your health and well-being matter to us. Easily find and connect with experienced gynecologists in your
                    area and schedule your appointment Today!
                </p>
                <button className='no-colour-btn'>Find a Gynecologist</button>
            </div>
            <div className='find-gyn2'>
                <h5>Find The Right Gynecologist For Your Pregnancy Journey</h5>
                <img src={Find2} alt='ultrasound'/>
            </div>
        </div>
    )
}

export default Find