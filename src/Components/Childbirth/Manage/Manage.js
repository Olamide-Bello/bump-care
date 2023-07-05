import React from 'react'
import './Manage.css'
import PainM1 from './PainM1.png'
import PainM2 from './PainM2.png'
import PainM3 from './PainM3.png'
import PainM4 from './PainM4.png'

function Manage() {
    return (
        <div className='manage'>
            <div className='pain-mgt'>
                <h5>How To Manage Pain During Child Birth</h5>
                <p>Childbirth can be a painful and challenging experience,
                    but there are several ways to manage the pain effectively.
                    Here are some tips that can help
                </p>
                <div className='mgt-ways'>
                    <ul>
                        <li>
                            <h5>Medications</h5>
                            <p>There are various pain relief options available,
                                including epidurals and narcotics, which can help
                                manage pain during childbirth. Talk to your healthcare
                                provider about the options that may be suitable for you.
                            </p>
                        </li>
                        <li>
                            <h5>Warm baths or showers</h5>
                            <p> Immersing yourself in warm water can help relax your muscles and reduce pain.</p>
                        </li>
                        <li>
                            <h5>TENS machine</h5>
                            <p> A transcutaneous electrical nerve stimulation (TENS) machine can be used to
                                deliver small electrical impulses to the lower back during labor, which can
                                help block pain signals.
                            </p>
                        </li>
                        <li>
                            <h5>Massage and counter-pressure</h5>
                            <p> Massaging the lower back or applying pressure to the hips during contractions
                                can help alleviate pain. Your partner or a doula can assist with this.
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='mgt-img'>
                <div className='mgt-img1'>
                    <img src={PainM1} alt='pain management' />
                    <img src={PainM2} alt='pain management' />
                </div>
                <div className='mgt-img2'>
                    <img src={PainM3} alt='pain management' />
                    <img src={PainM4} alt='pain management' />
                </div>
            </div>
        </div>
    )
}

export default Manage