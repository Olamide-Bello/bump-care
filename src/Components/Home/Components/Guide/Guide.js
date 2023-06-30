import React from 'react'
import './Guide.css'
import Resources1 from './Resources1.png'
import Resources2 from './Resources2.png'
import Resources3 from './Resources3.png'
import Resources4 from './Resources4.png'

function Guide() {
    return (
        <div className='resources'>
            <div className='guide'>
                <h5 className='guide-hd'>Your Guide From Conception To Delivery</h5>
                <p className='guide-bd'>Congratulations on your pregnancy! Bringing in a new life into the world is an incredible journey,
                    and we're here to help guide you every step of the way.
                </p>
            </div>
            <div className='res-container'>
                <div className='res-group1'>
                    <div className='res1'>
                        <div className='res'>
                            <h5>Pregnancy Information And Resources</h5>
                            <p>We provide you with the knowledge and tools
                                <br/>you need to make informed decisions about
                                <br/>your health and the health of your baby
                            </p>
                        </div>
                        <img src={Resources1} alt='res' />

                    </div>
                    <div className='res2'>
                        <div className='res'>
                            <h5>Community Of Supportive Moms</h5>
                            <p>We offer a dedicated space for mothers to 
                                <br/>connect, share their experiences, and seek
                                <br/>advice from others who are going through 
                                <br/>similar situations
                            </p>
                        </div>
                        <img src={Resources2} alt='res' />

                    </div>
                </div>
                <div className='res-group2'>
                    <div className='res3'>
                        <div className='res'>
                            <h5>Gynecologist Directory</h5>
                            <p>Our website offers a comprehensive directory
                                <br/>of trusted gynecologists in your area. whether 
                                <br/>you're looking for a doctor who specializes in 
                                <br/>high-risk pregnancies or one who focuses on
                                <br/>natural childbirth, our directory has you covered.
                            </p>
                        </div>
                        <img src={Resources3} alt='res' />

                    </div>
                    <div className='res4'>
                        <div className='res'>
                            <h5>Mental Health Support</h5>
                            <p>We provide resources to help new mothers
                                <br />cope with the emotional challenges of
                                <br />motherhood, including postpartum 
                                <br/>depression and anxiety.
                            </p>
                        </div>
                        <img src={Resources4} alt='res' />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Guide