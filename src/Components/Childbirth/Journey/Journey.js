import React, { useContext } from 'react'
import './Journey.css'
import Preggy from './Preggy.png'
import Babies from './Babies.png'
import Baby1 from './Baby1.png'
import Baby2 from './Baby3.png'
import Baby3 from './Baby3.png'
import { GlobalContext } from '../../Context/GlobalContext'

function Journey() {
  const { matches } = useContext(GlobalContext)
  return (
    <div className='p-journey'>
      {matches ?
        <>
          <p>A joy of love, labor, and delivery.</p>
          <h5>Bringing your little one into the world with care and comfort.</h5>
          <p>Congratulations on your pregnancy! Bringing a new life into the world
            is an incredible journey, we're here to help guide you every step of the way.
          </p>
          <div className='p-journey-group'>
            <div className='p-journey-img'>
              <img src={Preggy} alt='pregnant woman' />
            </div>
            <div className='baby-group'>
              <img className='baby1' src={Baby1} alt='Baby' />
              <img className='baby2' src={Baby2} alt='Baby' />
              <img className='baby3' src={Baby3} alt='Baby' />
            </div>
          </div>

        </>
        :
        <>
          <div className='p-journey-img'>
            <img src={Preggy} alt='pregnant woman' />
          </div>
          <div className='p-journey-bd'>
            <p>A joy of love, labor, and delivery.</p>
            <h5>Bringing your little one into the world with care and comfort.</h5>
            <p>Congratulations on your pregnancy! Bringing a new life into the world
              is an incredible journey, we're here to help guide you every step of the way.
            </p>
            <button className='no-colour-btn'>Find a Gynecologist</button>
            <img src={Babies} alt='Babies' />
          </div>
        </>
      }

    </div>
  )
}

export default Journey