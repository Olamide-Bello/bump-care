import React, { useContext } from 'react'
import './Find.css'
import Find1 from './Find1.png'
import Find2 from './Find2.png'
import { GlobalContext } from '../../Context/GlobalContext'

function Find() {
    const { matches } = useContext(GlobalContext)
    return (
        <div className='find'>
            {matches ?
                <>
                    <div className='find-gyn1'>
                        <img src={Find1} alt='gynecologist' />
                        <h5>Find The Right Gynecologist For Your Pregnancy Journey</h5>
                    </div>
                    <div className='find-gyn2'>
                        <div>
                            <p>
                                Expert care for you and your baby, Your health and well-being matter to us. Easily find and connect with experienced gynecologists in your
                                area and schedule your appointment Today!
                            </p>
                            <a href='/#map'><button className='no-colour-btn'>Find a Gynecologist</button></a>
                        </div>
                        <img src={Find2} alt='ultrasound' />
                    </div>
                </>
                :
                <>
                    <div className='find-gyn1'>
                        <img src={Find1} alt='gynecologist' />
                        <p>
                            Expert care for you and your baby, Your health and well-being matter to us. Easily find and connect with experienced gynecologists in your
                            area and schedule your appointment Today!
                        </p>
                        <a href='/#map'><button className='no-colour-btn'>Find a Gynecologist</button></a>
                    </div>
                    <div className='find-gyn2'>
                        <h5>Find The Right Gynecologist For Your Pregnancy Journey</h5>
                        <img src={Find2} alt='ultrasound' />
                    </div>
                </>

            }

        </div>
    )
}

export default Find