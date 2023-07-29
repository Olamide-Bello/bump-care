import React, { useContext } from 'react'
import './Labour.css'
import Postnatal from './Postnatal.png'
import { GlobalContext } from '../../Context/GlobalContext'

function Labour() {
    const { matches } = useContext(GlobalContext)
    return (
        <div className='labour'>
            <h5>Labor And Delivery Stages</h5>
            <div className='labour-stages'>
                <div className='labour-stages1'>
                    <img src={Postnatal} alt='mother and child' />
                    <div>
                        <h5>The First Stage Of Labor</h5>
                        <p>
                            During this stage, the cervix gradually opens (dilates) to about 10 centimeters
                            (4 inches) in diameter, allowing the baby to pass through the birth canal.
                            This stage is further divided into three phases
                        </p>
                        <ul>
                            <li>
                                Early Labor: The cervix starts to dilate and thin out (efface), and
                                contractions become more regular and intense, but still manageable.
                            </li>
                            {!matches && <><li>
                                Active Labor: The cervix continues to dilate and contractions become
                                stronger and closer together, typically lasting 40 to 60 seconds and
                                occurring every 3 to 4 minutes. This is the stage when most women go to
                                the hospital or birthing center.
                            </li>
                                <li>
                                    Transition: The cervix completes its dilation to 10 centimeters, and
                                    contractions reach their maximum intensity and frequency. This is often
                                    the most challenging and painful stage for the mother, but it is also the
                                    shortest, lasting typically between 30 minutes to 2 hours.
                                </li></>}
                        </ul>
                    </div>
                </div>
                {matches && <div className='labour-stages1'>
                    <ul>
                        <li>
                            Active Labor: The cervix continues to dilate and contractions become
                            stronger and closer together, typically lasting 40 to 60 seconds and
                            occurring every 3 to 4 minutes. This is the stage when most women go to
                            the hospital or birthing center.
                        </li>
                        <li>
                            Transition: The cervix completes its dilation to 10 centimeters, and
                            contractions reach their maximum intensity and frequency. This is often
                            the most challenging and painful stage for the mother, but it is also the
                            shortest, lasting typically between 30 minutes to 2 hours.
                        </li>
                    </ul>
                </div>}
                <div className='labour-stages2'>
                    <div>
                        <h5>The Second Stage Of Labor</h5>
                        <p>During this stage, the baby moves down the birth canal and is born.
                            This stage begins once the cervix is fully dilated and ends with the birth
                            of the baby. It typically lasts between 20 minutes to 2 hours, depending on
                            various factors such as the position of the baby and the strength of the
                            mother's contractions. The mother will likely have a strong urge to push during
                            this stage.
                        </p>
                    </div>
                    <div>
                        <h5>The Third Stage Of Labor</h5>
                        <p>
                            This stage involves the delivery of the placenta, which is the organ that
                            nourished the baby during pregnancy. The uterus continues to contract to help
                            detach the placenta from the uterine wall and push it out through the vagina.
                            This stage typically lasts between 5 to 30 minutes and is relatively less intense
                            compared to the previous two stages.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Labour