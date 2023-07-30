import React, { useContext } from 'react'
import './Postpartum.css'
import Maternal from './Maternal.png'
import Maternal2 from './Maternal2.png'
import { GlobalContext } from '../../Context/GlobalContext'

function Postpartum() {
    const { matches } = useContext(GlobalContext)
    return (
        <div className='postpartum'>
            {matches &&
                <>
                    <h5>Postpartum Recovery</h5>
                    <p>Postpartum recovery is the process of healing and returning to normalcy
                        after giving birth. It can take several weeks to several months, depending
                        on the mother's physical health, mental health, and the type of delivery
                        she had. Here are some tips to aid in postpartum recovery.
                    </p>
                </>
            }
            <div className='postpartum-container'>
                <div className='postpartum-df'>
                    {!matches && <><h5>Postpartum Recovery</h5>
                        <p>Postpartum recovery is the process of healing and returning to normalcy
                            after giving birth. It can take several weeks to several months, depending
                            on the mother's physical health, mental health, and the type of delivery
                            she had. Here are some tips to aid in postpartum recovery.
                        </p></>}
                    <div className='postpartum-img'>
                        {matches ? <img src={Maternal2} alt='mother and child' /> : <img src={Maternal} alt='mother and child' />}
                    </div>
                </div>
                <div className='recovery'>
                    <div>
                        <h5>01</h5>
                        <p>Get enough rest after giving birth. This means getting as much sleep as
                            possible and taking short naps throughout the day when the baby is sleeping.
                        </p>
                    </div>
                    <div>
                        <h5>02</h5>
                        <p>Eating healthy and balanced diet, can help you regain your strength and energy.</p>
                    </div>
                    <div>
                        <h5>03</h5>
                        <p>After delivery, it is common to experience pain and discomfort. Talk
                            to your doctor about pain management options such as over-the-counter
                            medication or prescribed pain medication.
                        </p>
                    </div>
                    <div>
                        <h5>04</h5>
                        <p>Gentle exercises such as walking, stretching, and pelvic floor exercises
                            can help to improve blood circulation and promote healing.
                        </p>
                    </div>
                    <div>
                        <h5>05</h5>
                        <p>It is crucial to take care of your mental health by talking to your healthcare
                            provider and getting support from loved ones or a mental health professional
                            if necessary.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Postpartum