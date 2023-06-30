import React from 'react'
import './Steps.css'
import Step1 from './Step1.png'
import Step2 from './Step2.png'
import Step3 from './Step3.png'
import Fade from './Fade.png'


function Steps() {
    return (
        <div className='locate'>
            <h5>Step By Step Guide On How To Connect With a Gynecologist Nearby </h5>
            <div className='steps'>
                <div className='step'>
                    <h5>01</h5>
                    <img className='fade-bg' src={Fade} alt='fade' />
                    <img className='step-jpg' src={Step1} alt='step' />
                </div>
                <div className='step-dt'>
                    <h5>Create an Account With BumpCare</h5>
                    <p>
                        Start your pregnancy journey with us.<br/>
                        Register on the website homepage and enter necessary informations.
                    </p>
                </div>
                <div className='step-dt'>
                    <h5>Use The Search Engine Provided On The Map</h5>
                    <p>
                        Use the search engine located at the top of the <br/>
                        map to enter your location.
                    </p>
                </div>
                <div className='step'>
                    <h5>02</h5>
                    <img className='fade-bg' src={Fade} alt='fade' />
                    <img className='step-jpg' src={Step2} alt='step' />
                </div>
                <div className='step'>
                    <h5 className='diff'>03</h5>
                    <img className='fade-bg2' src={Fade} alt='fade' />
                    <img className='step-jpg2' src={Step3} alt='step' />
                </div>
                <div className='step-dt'>
                    <h5>Enter Your Location</h5>
                    <p>
                        Enter your city or state on the map to find <br/>
                        gynecologists in your area. once you have <br/>
                        entered your location, the map will give <br/>
                        you directions to clinics with gynecologist near you.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Steps