import React, { useContext } from 'react'
import './Insights.css'
import Colic from './Colic.png'
import Diaper from './Diaper.png'
import Teething from './Teething.png'
import Fever from './Fever.png'
import Expert1 from './Expert1.png'
import Expert2 from './Expert2.png'
import Expert3 from './Expert3.png'
import Expert4 from './Expert4.png'
import { GlobalContext } from '../../Context/GlobalContext'

function Insights() {
    const {matches} = useContext(GlobalContext)
    return (
        <div className='insights'>
            <h5>Experts Insights</h5>
            <p>Here are some evidence-based  advices and tips from experienced pediatrician, 
                nurses, lactation consultants and other baby care experts
            </p>
            <div className='insights-wrapper'>
                <div className='insight-container'>
                    <img src={Colic} alt='a colic baby' />
                    <div className='insights-dt'>
                        <h5>Colic in Babies</h5>
                        <p>Colic is a common problem among babies that causes excessive
                            crying and discomfort. While the exact cause of colic is unknown,
                            experts suggest that it could be due to digestive issues, immature
                            nervous system, or even parental stress. To help ease the
                            discomfort of colic, experts recommend soothing techniques like
                            swaddling, gentle rocking, and using white noise. {matches? <span>Specialized formulas can help.</span> : <span>Additionally,
                            some babies may benefit from changes in feeding habits or
                            specialized formulas.</span>}
                        </p>
                        <div className='expert'>
                            <img src={Expert1} alt='expert' />
                            <div>
                                <h5>Chisom Okoli</h5>
                                <p>Pediatrician</p>
                            </div>
                        </div>
                    </div>
                </div>
                {!matches && <div className='insight-container'>
                    <img src={Diaper} alt='a baby with diaper rashes' />
                    <div className='insights-dt'>
                        <h5>Diaper rash in Babies</h5>
                        <p>Experts suggest that diaper rash is a common problem that many babies experience.
                            It can be caused by prolonged exposure to wet diapers, irritation from certain
                            fabrics, and even certain foods. To prevent diaper rash, it's important to keep
                            the diaper area clean and dry, use an ointment, and avoid tight-fitting diapers.
                            If your baby develops a diaper rash, experts recommend using gentle,
                            fragrance-free products and allowing the area to air dry as much as possible.
                        </p>
                        <div className='expert'>
                            <img src={Expert2} alt='expert' />
                            <div>
                                <h5>Teni Olabisi</h5>
                                <p>Baby Care Expert</p>
                            </div>
                        </div>
                    </div>
                </div>}
                <div className='insight-container'>
                    <img src={Teething} alt='a teething baby' />
                    <div className='insights-dt'>
                        <h5>Teething in Babies</h5>
                        <p>Teething can be a difficult time for both babies and parents. As your
                            baby's teeth begin to emerge, they may experience discomfort, irritability,
                            and sleep disturbances. Experts recommend using a clean, chilled teething
                            ring or cloth for your baby to chew on, as the cold temperature can help
                            numb the gums and reduce swelling. You can also try gently massaging your
                            baby's gums with a clean finger. Additionally, over-the-counter teething
                            gels or pain relievers {matches?<span>may help</span> : <span>may also provide some relief.</span>}
                        </p>
                        <div className='expert'>
                            <img src={Expert3} alt='expert' />
                            <div>
                                <h5>Nneka Ezeh</h5>
                                <p>Pediatrician</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='insight-container'>
                    <img src={Fever} alt='a baby with fever' />
                    <div className='insights-dt'>
                        <h5>Fever in Babies</h5>
                        <p>A fever in a baby can be a sign of an underlying infection or illness,
                            so it's important to monitor and manage it carefully. If your baby is
                            less than 3 months old and has a fever, seek medical attention immediately.
                            For babies older than 3 months, you can give them a dose of infant
                            acetaminophen or ibuprofen to help bring down the fever, but make sure
                            to follow the dosage instructions. keep your baby cool and hydrated,monitor
                            their symptoms closely. {!matches && <span>If the fever persists, contact a Doctor.</span>}
                        </p>
                        <div className='expert'>
                            <img src={Expert4} alt='expert' />
                            <div>
                                <h5>Joy Henry</h5>
                                <p>Senior Nurse</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Insights