import React, { useContext } from 'react'
import './Weaning.css'
import FoodSet1 from './FoodSet1.png'
import EatingBaby from './EatingBaby.png'
import BabyFeeding from './BabyFeeding.png'
import FoodSet2 from './FoodSet2.png'
import { GlobalContext } from '../../Context/GlobalContext'

function Weaning() {
    const { matches } = useContext(GlobalContext)
    return (
        <div className='weaning'>
            {
                matches &&
                <>
                    <h5>Weaning Your Baby Just Got Easier</h5>
                    <p>Weaning a baby is the process of introducing
                        solid foods to your baby's diet.Here are few steps to note
                    </p>
                </>
            }
            <div className='weaning-container'>
                <div className='weaning-dt'>
                    {!matches && <>
                        <h5>Weaning Your Baby Just Got Easier</h5>
                        <p>Weaning a baby is the process of introducing
                            solid foods to your baby's diet.Here are few steps to note
                        </p>
                    </>}
                    <div className='weaning-steps'>
                        <div>
                            <h5>01</h5>
                            <p>Introduce solid foods gradually: Start with small portions
                                of pureed fruits and foods ,then gradually increase the amount.
                            </p>
                        </div>
                        <div>
                            <h5>02</h5>
                            <p>Replace one feeding at a time: Begin by replacing a breastfeeding
                                session with a solid food meal or snack..
                            </p>
                        </div>
                        <div>
                            <h5>03</h5>
                            <p>Offer a sippy cup: Introduce a sippy cup filled with water or
                                breastmilk/formula to help your baby learn to drink from a cup.
                            </p>
                        </div>
                        {!matches && <div>
                            <h5>04</h5>
                            <p>Be patient: Weaning is a gradual process that may take months. Be
                                patient and allow your baby to adjust at their own pace.
                            </p>
                        </div>}
                    </div>
                </div>
                <div className='weaning-img'>
                    <img src={FoodSet1} alt='food varieties' />
                    <img src={EatingBaby} alt='a baby eating' />
                    <img src={BabyFeeding} alt='a mom feeding a baby' />
                    <img src={FoodSet2} alt='feeding set' />
                </div>
            </div>
        </div>
    )
}

export default Weaning