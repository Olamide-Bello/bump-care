import React from 'react'
import './Welcome.css'
import WomenGroup from './WomenGroup.png'
import WomenGroup2 from './WomenGroup2.png'

function Welcome() {
    return (
        <div className='welcome'>
            <div className='welcome-container'>
                <h5>Welcome To Our Mom Tribe, a Place To Share Your journey</h5>
                <p>Here, you will find a supportive community of mothers who are here to help
                    you navigate through the challenges and joys of motherhood.
                </p>
                <img src={WomenGroup} alt='a group of women supporting a pregnant woman' />
                <img src={WomenGroup2} alt='two women' />
            </div>
        </div>
    )
}

export default Welcome