import React, { useContext } from 'react'
import './BabyGears.css'
import BabyClothes from './BabyClothes.png'
import MotherClothes from './MotherClothes.png'
import BabyGear1 from './BabyGear1.png'
import BabyGear2 from './BabyGear2.png'
import BabyGear3 from './BabyGear3.png'
import BabyGear4 from './BabyGear4.png'
import BabyGear5 from './BabyGear5.png'
import { GlobalContext } from '../../Context/GlobalContext'

function BabyGears() {
    const {matches} = useContext(GlobalContext)
  return (
    <div className='gears'>
        <h5>Baby Gears & Essentials </h5>
        <div className='baby-essentials'>
            <div className='baby-essentials-dt'>
                <h5>Baby Hospital Essentials</h5>
                <ul>
                    <li>Baby clothes (onesies, sleepers, socks, hats)</li>
                    <li>Swaddle blankets</li>
                    <li>Diapers and wipes</li>
                    <li>Nursing pillow and breastfeeding supplies</li>
                    <li>Formula and bottles (if applicable)</li>
                    <li>Car seat</li>
                    <li>Baby carrier or stroller</li>
                    <li>Pacifiers</li>
                    <li>Baby wash and lotion</li>
                    <li>Hand sanitizer</li>
                    <li>Infant thermometer</li>
                    <li>Baby nail clippers</li>
                </ul>
            </div>
            <img src={BabyClothes} alt='baby wears'/>
        </div>
        <div className='mother-essentials'>
            <img src={MotherClothes} alt='mother hospital essentials'/>
            <div className='mother-essentials-dt'>
                <h5>Mother Hospital essentials</h5>
                <ul>
                    <li>Comfortable, loose-fitting clothing for labor and recovery</li>
                    <li>Nursing bras and breast pads</li>
                    <li>Toiletries, including a toothbrush, toothpaste, and hairbrush</li>
                    <li>Comfortable and supportive underwear</li>
                    <li>Sanitary pads or postpartum bleeding underwear</li>
                    <li>A nursing pillow for breastfeeding</li>
                    <li>Snacks and drinks for labor and recovery</li>
                    <li>Insurance and hospital paperwork</li>
                    <li>Phone charger and camera for capturing special moments</li>
                    {!matches && <li>Comfortable shoes or slippers for walking around</li>}
                </ul>
            </div>
        </div>
        <div className='baby-gears'>
            <h5>Must Have Baby Gears</h5>
            <div className='baby-gear-essentials'>
                {!matches && <img src={BabyGear1} alt='baby gear'/>}
                <div>
                    <div className='gear-img'><img src={BabyGear2} alt='baby gear'/></div>
                    <div className='gear-img'><img src={BabyGear3} alt='baby gear'/></div>
                    <div className='gear-img'><img src={BabyGear4} alt='baby gear'/></div>
                    <div className='gear-img'><img src={BabyGear5} alt='baby gear'/></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BabyGears