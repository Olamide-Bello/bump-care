import React from 'react'
import './Why.css'
import Gyne from './Why.png'

function Why() {
    return (
        <div className='why'>
            <img src={Gyne} alt='gynecologist' />
            <div className='why-gyn'>
                <h5>Why Should I Visit a Gynecologist?</h5>
                <p>
                    A gynecologist can monitor the health of the mother and baby,
                    perform necessary tests and screenings, identify and manage any
                    potential complications, provide guidance on proper nutrition and
                    exercise during pregnancy, and offer emotional support throughout
                    the pregnancy. Regular check-ups with a gynecologist can help ensure
                    a healthy pregnancy and delivery, as well as identify and address any
                    issues early on.
                </p>
            </div>
        </div>
    )
}

export default Why