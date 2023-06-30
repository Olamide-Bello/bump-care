import React from 'react'
import './Popular.css'
import Pop1 from './Pop1.png'
import Pop2 from './Pop2.png'
import Pop3 from './Pop3.png'
import Pop4 from './Pop4.png'

function Popular() {
    return (
        <div className='popular'>
            <h5>Most Popular Searches</h5>
            <div className='post-container'>
                <div className='post'>
                    <img src={Pop1} alt='popular' />
                    <p><a href='/home'>How to manage pain during childbirth</a></p>
                </div>
                <div className='post'>
                    <img src={Pop2} alt='popular' />
                    <p><a href='/home'>The early signs of pregnancy</a></p>
                </div>
                <div className='post'>
                    <img src={Pop3} alt='popular' />
                    <p><a href='/home'>How to manage manage pregnancy symptoms</a></p>
                </div>
                <div className='post'>
                    <img src={Pop4} alt='popular' />
                    <p><a href='/home'>How to conceive a baby easily</a></p>
                </div>
            </div>
        </div>
    )
}

export default Popular