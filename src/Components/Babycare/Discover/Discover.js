import React from 'react'
import './Discover.css'
import Crawling from './Crawling.png'
import Playtime from './Playtime.png'

function Discover() {
    return (
        <div className='discover'>
            <div className='wonder'>
                <h5>Welcome to the World of Wonder</h5>
                <h5>Discovering The Magic Of Babies</h5>
                <p>Whether you're a first-time parent or a seasoned pro, our guide is packed
                    with useful information to help you navigate the exciting world of babyhood.
                </p>
                <button className='no-colour-btn extra-btn'>Get Started</button>
            </div>
            <div className='play-time'>
                <div className='play-time1'>
                    <div>
                        <img src={Playtime} alt='mother and child bonding' />
                    </div>
                </div>
                <div className='play-time2'>
                    <div>
                        <img src={Crawling} alt='a baby crawling' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Discover