import React, { useContext } from 'react'
import './Signs.css'
import Result from './Result.png'
import { GlobalContext } from '../../Context/GlobalContext'

function Signs() {
    const {matches} = useContext(GlobalContext)
    return (
        <div className='signs'>
            <div className='p-signs'>
                <h5>Early Signs Of Pregnancy</h5>
                {!matches && <p>Here's a list of common early pregnancy symptoms:</p>}
                <ul>
                    <li>Missed period</li>
                    <li>Nausea and vomiting</li>
                    <li>Fatigue</li>
                    <li>Breast tenderness</li>
                    <li>Frequent urination</li>
                    <li>Mood swings</li>
                    <li>Food aversions or cravings</li>
                    <li>Cramping and spotting</li>
                    <li>Bloating and constipation</li>
                    <li>Headaches</li>
                </ul>
                <p>It's important to note that every woman's pregnancy experience is
                    unique, and not all women will experience all of these symptoms.
                    {!matches && <span>Additionally, some of these symptoms can also be attributed to other
                    conditions or illnesses. If you suspect you may be pregnant, it's importantto take a pregnancy test and talk to your healthcare provider.</span>}
                </p>
            </div>
            <div className='signs-img'>
                <img src={Result} alt='result' />
            </div>
        </div>
    )
}

export default Signs