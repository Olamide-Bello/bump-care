import React from 'react'
import './Premature.css'
import Incubator from './Incubator.png'

function Premature() {
  return (
    <div className='premature'>
        <div className='premature-bd'>
            <h5>Premature Labour And Birth</h5>
            <p>Premature labor refers to the onset of labor before the 37th week 
                of pregnancy, while premature birth is the delivery of a baby before 
                the 37th week of pregnancy. Premature birth can lead to complications 
                for the baby, such as respiratory distress syndrome, low birth weight, 
                and developmental delays. The causes of premature labor and birth are 
                not always known but can include infections, medical conditions such as 
                preeclampsia, and multiple pregnancies. Treatment for premature labor 
                may include medications to stop contractions and bed rest, while premature 
                birth may require hospitalization in a neonatal intensive care unit and 
                supportive care for the newborn. It is essential for pregnant women to 
                receive regular prenatal care to reduce the risk of premature labor and 
                birth.
            </p>
        </div>
        <div className='incubator'>
            <img src={Incubator} alt='infant incubator'/>
        </div>
    </div>
  )
}

export default Premature