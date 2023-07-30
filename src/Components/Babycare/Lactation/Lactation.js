import React, { useContext } from 'react'
import './Lactation.css'
import BreastfeedingMom from './BreastfeedingMom.png'
import { GlobalContext } from '../../Context/GlobalContext'

function Lactation() {
  const {matches} = useContext(GlobalContext)
  return (
    <div className='lactation'>
      <div className='lactation-dt'>
        <h5>All You Need To Know About Lactation</h5>
        <p>Lactation is the process of producing and providing breast milk to your
          newborn baby. It is a natural and essential part of the postpartum period.
          The milk produced by the mother contains all the necessary nutrients and
          antibodies needed for the baby's growth and development. Understanding the
          process of lactation can help new mothers feel more confident and empowered
          in their ability to provide for their baby's needs. Some things to keep in
          mind include proper latch and positioning, frequent feeding, and seeking
          support from a lactation consultant or healthcare provider if needed.
          {!matches && <span>Remember that every mother and baby's lactation journey is unique, and it's
          important to trust your instincts and seek help if needed.</span>}
        </p>
      </div>
      <img src={BreastfeedingMom} alt='a breastfeeding mother' />
    </div>
  )
}

export default Lactation