import React from 'react'
import './Understanding.css'
import BabyFeeding from './BabyFeeding.png'
import BreastFeeding from './Breastfeeding.png'
import BabyFood from './BabyFood.png'
import SleepingBaby1 from './SleepingBaby1.png'
import SleepingBaby2 from './SleepingBaby2.png'
import Play from './Play.png'


function Understanding() {
    return (
        <div className='understanding'>
            <h5>Understading Baby Needs</h5>
            <p>Understanding your baby's needs can be a challenge, especially if you're a
                first-time parent. In this section, we'll provide you with helpful tips and
                insights on understanding your baby's needs, so you can be the best parent
                possible.
            </p>
            <div className='needs'>
                <div>
                    <div className='feeding-img'>
                        <img className='feeding-img1' src={BabyFeeding} alt='a baby being fed' />
                        <img className='feeding-img2' src={BreastFeeding} alt='a breastfeeding mother' />
                        <img className='feeding-img3' src={BabyFood} alt='a baby food' />
                    </div>
                    <div className='needs-feeding'>
                        <h5>01</h5>
                        <h5>Feeding</h5>
                        <p>Feeding is a crucial aspect of understanding a baby's needs. Whether
                            it's breastfeeding or formula feeding, it's important to pay attention
                            to your baby's hunger cues and feed them on demand. Newborns usually
                            need to be fed every 2-3 hours, and as they grow, the frequency of
                            feedings may decrease. Make sure to burp your baby during and after
                            feedings to prevent discomfort and spit up.
                        </p>
                    </div>
                </div>
                <div>
                    <div className='needs-sleeping'>
                        <h5>02</h5>
                        <h5>Sleeping</h5>
                        <p>Sleep is an essential aspect of a baby's growth and development.
                            Newborns typically sleep for around 16-17 hours a day, while older
                            babies require around 12-14 hours of sleep. It's important to create
                            a safe and comfortable sleeping environment for your baby and to
                            establish a consistent sleep routine to promote healthy sleep habits.
                            place babies on their back to avoid SIDS
                        </p>
                    </div>
                    <div className='sleeping-img'>
                        <div className='sleeping-img1'>
                            <img src={SleepingBaby1} alt='a sleeping baby' />
                        </div>
                        <div className='sleeping-img2'>
                            <img src={SleepingBaby2} alt='a sleeping baby' />
                        </div>
                    </div>
                </div>
                <div>
                    <div className='dev-img'>
                        <div className='dev-img1'>
                            <img src={Play} alt='a baby playing' />
                        </div>
                    </div>
                    <div className='needs-dev'>
                        <h5>03</h5>
                        <h5>Development</h5>
                        <p>Babies develop at different rates, but there are general milestones
                            that are important to monitor. These can include physical, cognitive,
                            and social-emotional development. Providing a safe and nurturing
                            environment, as well as interacting with your baby can help support
                            their development. Regular check-ups with a pediatrician can also help
                            track your baby's progress.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Understanding