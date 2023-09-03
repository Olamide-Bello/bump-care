import React, { useContext } from 'react'
import './Tracker.css'
import Step from './Step.png'
import Step2 from './Step2.png'
import { GlobalContext } from '../../Context/GlobalContext'

function Tracker() {
    const {matches} = useContext(GlobalContext)
    return (
        <div className='tracker'>
            {matches?<img src={Step2} alt='step' /> : <img src={Step} alt='step' />}
            <div className='p-tracker'>
                <h5>Stay on Top of Every Milestone With Our Pregnancy Tracker!</h5>
                <p>Our pregnancy tracker is a helpful tool for moms-to-be to
                    calculate their estimated due date. Simply input the date of your
                    last menstrual period, and the calculator will estimate when yourbaby is due to arrive.{!matches && <span> This information can help you plan and
                    prepare for your pregnancy journey. Our calculator takes the
                    guesswork out of calculating your due date, so you can focus on
                    taking care of yourself and your growing baby.</span>}
                </p>
                <a href='/tracker'><button className='yellow-btn big-btn'>Track Pregnancy</button></a>
            </div>
        </div>
    )
}

export default Tracker