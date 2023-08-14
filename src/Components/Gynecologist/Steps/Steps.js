import React, { useContext } from 'react'
import './Steps.css'
import Step1 from './Step1.png'
import Step2 from './Step2.png'
import Step3 from './Step3.png'
import Fade from './Fade.png'
import { GlobalContext } from '../../Context/GlobalContext'


function Steps() {
    const { matches } = useContext(GlobalContext)
    return (
        <div className='locate'>
            <h5>Step By Step Guide On How To Connect With a Gynecologist Nearby </h5>
            <div className='steps'>
                {matches ?
                    <>
                        <div>
                            <div className='step'>
                                <h5 className='diff1'>01</h5>
                                <img className='fade-bg' src={Fade} alt='fade' />
                                <img className='step-jpg' src={Step1} alt='step' />
                            </div>
                            <div className='step-dt'>
                                <h5>Create an Account With BumpCare</h5>
                                <p>
                                    Start your pregnancy journey with us.
                                    Register on the website homepage and enter necessary informations.
                                </p>
                            </div>
                        </div>
                        <div>
                            <div className='step-dt'>
                                <h5>Use The Search Engine Provided On The Map</h5>
                                <p>
                                    Click the button at the top of the map to get hospitals around you. Use the search engine located at the top of the 
                                    map to enter your preferred hospital if a have one in mind.
                                </p>
                            </div>
                            <div className='step'>
                                <h5 className='diff2'>02</h5>
                                <img className='fade-bg3' src={Fade} alt='fade' />
                                <img className='step-jpg3' src={Step2} alt='step' />
                            </div>
                        </div>
                        <div>
                            <div className='step'>
                                <h5 className='diff'>03</h5>
                                <img className='fade-bg2' src={Fade} alt='fade' />
                                <img className='step-jpg2' src={Step3} alt='step' />
                            </div>
                            <div className='step-dt'>
                                <h5>Click on the marker</h5>
                                <p>
                                    Once you have clicked the button, the map will show clinics closest to your location. When you click on any of the markers,  the map will give 
                                    you directions to clinics with gynecologist near you.
                                </p>
                            </div>
                        </div>
                    </>
                    :
                    <>
                        <div className='step'>
                            <h5 className='diff1'>01</h5>
                            <img className='fade-bg' src={Fade} alt='fade' />
                            <img className='step-jpg' src={Step1} alt='step' />
                        </div>
                        <div className='step-dt'>
                            <h5>Create an Account With BumpCare</h5>
                            <p>
                                Start your pregnancy journey with us.<br />
                                Register on the website homepage and enter necessary informations.
                            </p>
                        </div>
                        <div className='step-dt'>
                            <h5>Use The Search Engine Provided On The Map</h5>
                            <p>
                                Use the search engine located at the top of the <br />
                                map to enter your location.
                            </p>
                        </div>
                        <div className='step'>
                            <h5 className='diff2'>02</h5>
                            <img className='fade-bg3' src={Fade} alt='fade' />
                            <img className='step-jpg3' src={Step2} alt='step' />
                        </div>
                        <div className='step'>
                            <h5 className='diff'>03</h5>
                            <img className='fade-bg2' src={Fade} alt='fade' />
                            <img className='step-jpg2' src={Step3} alt='step' />
                        </div>
                        <div className='step-dt'>
                            <h5>Enter Your Location</h5>
                            <p>
                                Enter your city or state on the map to find <br />
                                gynecologists in your area. once you have <br />
                                entered your location, the map will give <br />
                                you directions to clinics with gynecologist near you.
                            </p>
                        </div>
                    </>
                }
            </div>
        </div>
    )
}

export default Steps