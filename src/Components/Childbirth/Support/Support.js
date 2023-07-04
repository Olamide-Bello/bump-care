import React from 'react'
import './Support.css'
import SupportImg from './Support.png'

function Support() {
    return (
        <div className='support'>
            <h5>Your Complete Guide to Childbirth</h5>
            <div className='p-support'>
                <img src={SupportImg} alt='preggy support' />
                <div className='support-bd'>
                    <h5>Feel Supported Always</h5>
                    <p>
                        At BumpCare we understand that childbirth is a
                        significant milestone in every parent's life. That's why
                        we provide a comprehensive range of childbirth resources
                        to support you on this journey. From prenatal care and
                        childbirth education to labor and delivery, postpartum care,
                        and breastfeeding support, we're here to guide you every step
                        of the way.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Support