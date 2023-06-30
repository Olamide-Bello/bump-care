import React, { useState } from 'react'
import './Newsletter.css'
import Letters from './Letters.png'

function Newsletter() {
    const [email, setEmail] = useState('')

    const getEmail= (e) => {
        setEmail(e.target.value)
    }

    const subscribe = () => {
        console.log(email)
    }
  return (
    <div className='newsletter'>
        <img src={Letters} alt='letters'/>
        <div className='subscribe'>
            <p>STAY UP TO DATE</p>
            <h5>Sign up to our Newsletter</h5>
            <input value={email} onChange={getEmail} type='email' id='email' name='email' placeholder='Enter Email address'/>
            <div className='btn-policy'>
                <button className='subcribe-btn big-btn yellow-btn' onClick={subscribe}>Subscribe</button>
                <p>For information on how we process your data, see our <a href='/home'>Privacy Policy</a></p>
            </div>
        </div>
    </div>
  )
}

export default Newsletter