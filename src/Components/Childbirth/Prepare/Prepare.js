import React from 'react'
import './Prepare.css'
import Prep1 from './Prep1.png'
import Prep2 from './Prep2.png'
import Prep3 from './Prep3.png'
import Prep4 from './Prep4.png'

function Prepare() {
    return (
        <div className='prepare'>
            <div className='p-prepare'>
                <h5>How To Prepare For Your Little One</h5>
                <p>Preparing for childbirth is an important part of
                    ensuring a safe and positive birth experience.
                    Here are some tips to help you prepare
                </p>
                <div className='prepare-steps'>
                    <div>
                        <h5>01</h5>
                        <h5>Attend prenatal classes</h5>
                        <p>Prenatal classes can provide you with essential knowledge
                            and skills for a safe and healthy childbirth.
                            They can also help you build a support network with other expecting parents.
                        </p>
                    </div>
                    <div>
                        <h5>02</h5>
                        <h5>Create a birth plan</h5>
                        <p>A birth plan is a written document outlining your preferences for labor,
                            delivery, and postpartum care. It can help you communicate your wishes
                            to your healthcare provider and make informed decisions about your care.
                        </p>
                    </div>
                    <div>
                        <h5>03</h5>
                        <h5>Stay physically active</h5>
                        <p>Regular exercise during pregnancy can help prepare your body for childbirth
                            and reduce the risk of complications. Consult with your healthcare provider
                            before starting any exercise routine
                        </p>
                    </div>
                    <div>
                        <h5>04</h5>
                        <h5>Learn breathing and relaxation techniques</h5>
                        <p>Breathing and relaxation techniques can help you cope with pain during labor
                            and manage stress and anxiety.
                        </p>
                    </div>
                    <div>
                        <h5>05</h5>
                        <h5>Pack a hospital bag</h5>
                        <p> Prepare a bag with essentials for yourself and your baby for your hospital stay, 
                            including comfortable clothes, toiletries, and snacks.
                        </p>
                    </div>
                </div>
            </div>
            <div className='prepare-img'>
                <div className='prepare-img1'>
                    <img src={Prep1} alt='a pregnant woman reading a book'/>
                    <img src={Prep2} alt='a pregnant woman doing exericise'/>
                </div>
                <div className='prepare-img2'>
                    <img src={Prep3} alt='a pregnant woman writing'/>
                    <img src={Prep4} alt='a pregnant woman doing yoga'/>
                </div>
            </div>
        </div>
    )
}

export default Prepare