import React, { useContext } from 'react'
import './Options.css'
import OptImg from './Opt-Img.png'
import NaturalBg from './Natural-bg.png'
import { GlobalContext } from '../../Context/GlobalContext'

function Options() {
    const { matches } = useContext(GlobalContext)
    return (
        <div className='options'>
            {
                matches ?
                    <>
                        <h5>Birth Options Offered At The Child Birth Centre</h5>
                        <div className='options-main'>
                            <div className='options-main1'>
                                <img src={OptImg} alt='woman in labor' />
                            </div>
                            <div className='options-main2'>
                                <div>
                                    <h5>Water Birth</h5>
                                    <p>In this option, the mother gives birth in a tub of warm water,
                                        which can help to ease pain and promote relaxation.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='options-alt'>
                            <div>
                                <div>
                                    <h5>Cesarean Section</h5>
                                    <p>This option involves surgically delivering the baby through an
                                        incision in the mother's abdomen.
                                    </p>
                                </div>
                                <div>
                                    <img src={NaturalBg} alt='bg' />
                                    <div >
                                        <h5>Natural Birth</h5>
                                        <p>This option allows the mother to give birth without any medical
                                            interventions such as pain medication or induction.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <h5>Vaginal Birth After Cesarean</h5>
                                    <p>This option is for mothers who have had a previous cesarean delivery
                                        and would like to attempt a vaginal delivery for their next child.
                                    </p>
                                </div>
                                <div>
                                    <h5>Midwife-Led Care</h5>
                                    <p>Midwives provide continuous care and support throughout pregnancy,
                                        labor, and delivery. They may also provide postpartum care.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </>
                    :
                    <>
                        <div className='options-main'>
                            <div className='options-main1'>
                                <h5>Birth Options Offered At The Child <br />Birth Centre</h5>
                                <img src={OptImg} alt='woman in labor' />
                            </div>
                            <div className='options-main2'>
                                <div>
                                    <h5>Vaginal Birth After Cesarean</h5>
                                    <p>This option is for mothers who have had a previous cesarean delivery
                                        and would like to attempt a vaginal delivery for their next child.
                                    </p>
                                </div>
                                <div>
                                    <img src={NaturalBg} alt='bg' />
                                    <div >
                                        <h5>Natural Birth</h5>
                                        <p>This option allows the mother to give birth without any medical
                                            interventions such as pain medication or induction.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='options-alt'>
                            <div>
                                <h5>Water Birth</h5>
                                <p>In this option, the mother gives birth in a tub of warm water,
                                    which can help to ease pain and promote relaxation.
                                </p>
                            </div>
                            <div>
                                <h5>Midwife-Led Care</h5>
                                <p>Midwives provide continuous care and support throughout pregnancy,
                                    labor, and delivery. They may also provide postpartum care.
                                </p>
                            </div>
                            <div>
                                <h5>Cesarean Section</h5>
                                <p>This option involves surgically delivering the baby through an
                                    incision in the mother's abdomen.
                                </p>
                            </div>
                        </div>
                    </>
            }
        </div>
    )
}

export default Options