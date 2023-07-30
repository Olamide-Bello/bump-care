import React, { useContext } from 'react'
import './Safety.css'
import BabyInCrib from './BabyInCrib.png'
import { GlobalContext } from '../../Context/GlobalContext'

function Safety() {
    const {matches} = useContext(GlobalContext)
    return (
        <div className='safety-container'>
            <div className='safety'>
                <div className='safety-dt'>
                    <h5>Safety Tips To Keep In Mind</h5>
                    <ul>
                        <li>Always place babies on their backs to sleep</li>
                        {!matches && <li>Use a firm and flat sleep surface</li>}
                        <li>Keep soft objects and loose bedding out of the crib</li>
                        <li>Avoid bed-sharing with your baby</li>
                        <li>Keep cribs and other baby equipment away from cords and blinds</li>
                        <li>Do not leave babies unattended on high surfaces such as changing tables or sofas</li>
                        <li>Keep small objects and choking hazards out of reach of babies</li>
                        {!matches && <><li>Use age-appropriate toys and avoid toys with small parts or magnets</li>
                        <li>Keep hot liquids and foods away from babies and toddlers</li></>}
                        <li>Never leave babies alone in or around water, even for a moment</li>
                        <li>Always use a properly installed car seat for infants and children</li>
                        {!matches && <li>Keep babies and children in the back seat of the car until they are at least 13 years old.</li>}
                    </ul>
                </div>
                <div className='safety-img'>
                    <img src={BabyInCrib} alt='baby in crib' />
                </div>
            </div>
        </div>
    )
}

export default Safety