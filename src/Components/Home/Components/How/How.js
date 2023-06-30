import React from 'react'
import './How.css'
import How1 from './How1.png'
import How2 from './How2.png'
import How3 from './How3.png'


function How() {
    return (
        <div className='how'>
            <h5>How It Works</h5>
            <div className='how-container'>
                <div className='how-account'>
                    <img src={How1} alt='icon' />
                    <h5 className='how-hd'>Create account</h5>
                    <p className='how-bd'>Click on the get started button to 
                        <br/>to create an account by providing your 
                        <br/>email address, phone number and set 
                        <br/>a password
                    </p>
                </div>
                <div className='how-explore'>
                    <img src={How2} alt='icon' />
                    <h5 className='how-hd'>Explore the website</h5>
                    <p className='how-bd'>Once you have created your account,
                        <br/>take some time to explore the website 
                        <br/>and familiarize yourself with the 
                        <br/>different sections such as the services 
                        <br/>offered, community forums, and 
                        <br/>resources for mothers and babies.
                    </p>
                </div>
                <div className='how-connect'>
                    <img src={How3} alt='icon' />
                    <h5 className='how-hd'>Connect with <br/>Gynecologist</h5>
                    <p className='how-bd'>You can search for hospitals 
                        <br/>with a gynecologist by entering 
                        <br/>your location or your zip code.
                    </p>
                </div>
            </div>

        </div>
    )
}

export default How