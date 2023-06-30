import React from 'react'
import './Testimony.css'
import Rating from './Rating.png'
import Tes1 from './Tes1.png'
import Tes2 from './Tes2.png'


function Testimony() {
    return (
        <div className='testimony'>
            <h5>Every Mom Loves BumpCare</h5>
            <div className='tes-container'>
                <div className='tes1'>
                    <div className='tes-child1'>
                        <h5>"Great resource for expecting mothers"</h5>
                        <p>I used this website to find a gynecologist when I first found
                            <br />out I was pregnant. The website was very user-friendly and
                            <br />I was able to find a doctor who specialized in obstetrics.
                            <br />Throughout my pregnancy, my doctor provided me with
                            <br />excellent care and guidance. I would definitely recommend
                            <br />this website to any expecting mother.
                        </p>
                    </div>
                    <div className='tes-child2'>
                        <div className='tes-dt'>
                            <h5>George Isabella</h5>
                            <img src={Rating} alt='Rating' />
                        </div>
                        <img src={Tes1} alt='testifier' />
                    </div>
                </div>
                <div className='tes2'>
                    <div className='tes-child1'>
                        <h5>"Ultimate Guide To Pregnancy Care"</h5>
                        <p>As a first-time mother, I was overwhelmed and anxious about my
                            pregnancy journey. Thankfully, I discovered this incredible pregnancy
                            care resource website that became my ultimate guide. From pre-
                            conception, tips to weekly updates on my baby's development, the
                            website provided comprehensive informations that answered all my
                            questions. The articles were well-researched, easy to understand, and
                            covered various aspects of pregnancy care, including nutrition,
                            exercise, and emotional well-being.Thanks to this invaluable resource,
                            I felt empowered and confident throughout my pregnancy, knowing
                            that I had access to reliable information whenever I needed it.
                        </p>
                    </div>
                    <div className='tes-child2'>
                        <div className='tes-dt'>
                            <h5>Beebe J</h5>
                            <img src={Rating} alt='Rating' />
                        </div>
                        <img src={Tes2} alt='testifier' />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Testimony