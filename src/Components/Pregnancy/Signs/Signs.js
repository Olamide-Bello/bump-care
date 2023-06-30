import React from 'react'
import './Signs.css'
import Result from './Result.png'

function Signs() {
    return (
        <div className='signs'>
            <div className='p-signs'>
                <h5>Early Signs Of Pregnancy</h5>
                <p>Here's a list of common early pregnancy symptoms:</p>
                <ul>
                    <li><span>Missed period</span></li>
                    <li><span>Nausea and vomiting</span></li>
                    <li><span>Fatigue</span></li>
                    <li><span>Breast tenderness</span></li>
                    <li><span>Frequent urination</span></li>
                    <li><span>Mood swings</span></li>
                    <li><span>Food aversions or cravings</span></li>
                    <li><span>Cramping and spotting</span></li>
                    <li><span>Bloating and constipation</span></li>
                    <li><span>Headaches</span></li>
                </ul>
                <p>It's important to note that every woman's pregnancy experience is
                    unique, and not all women will experience all of these symptoms.
                    Additionally, some of these symptoms can also be attributed to other
                    conditions or illnesses. If you suspect you may be pregnant, it's importantto take a pregnancy test and talk to your healthcare provider.
                </p>
            </div>
            <div className='signs-img'>
                <img src={Result} alt='result' />
            </div>
        </div>
    )
}

export default Signs