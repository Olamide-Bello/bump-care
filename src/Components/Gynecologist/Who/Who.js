import React, { useContext } from 'react'
import './Who.css'
import Gyne from './Gyne.png'
import { GlobalContext } from '../../Context/GlobalContext'

function Who() {
    const { matches } = useContext(GlobalContext)

    return (
        <div className='who'>
            <div className='who-gyn'>
                <h5>Who Is a Gynecologist?</h5>
                {matches? 
                <p>
                    A gynecologist is a medical doctor who specializes in the health of 
                    the female reproductive system. Gynecologists provide a wide range of 
                    services to women, such as  diagnosing, treating reproductive and 
                    sexual health problems, providing family planning counseling and birth 
                    control options, and assisting with fertility issues. They also often 
                    provide prenatal care for pregnant women and deliver babies.
                </p> 
                :
                <p>A gynecologist is a medical doctor who specializes in the health of
                    the female reproductive system, including the uterus, ovaries,
                    vagina, and breasts. Gynecologists provide a wide range of services
                    to women, such as diagnosing, treating reproductive and sexual
                    health problems, providing family planning counseling and birth
                    control options, and assisting with fertility issues. They also often
                    provide prenatal care for pregnant women and deliver babies.
                </p>}
            </div>
            <img src={Gyne} alt='gynecologist' />
        </div>
    )
}

export default Who

