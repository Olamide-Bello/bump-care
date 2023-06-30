import React from 'react'
import './Fitness.css'
import Yoga1 from './Yoga1.png'
import Yoga2 from './Yoga2.png'
import Yoga3 from './Yoga3.png'
import Yoga4 from './Yoga4.png'
import Vector from './Vector.png'

function Fitness() {
    return (
        <div className='fitness'>
            <div className='fitness-hd'>
                <h5>Pregnancy Fitness</h5>
                <p>Maintaining a regular exercise routine during pregnancy can help you stay healthy, manage your weight, and prepare your body for laborand delivery. Here are some types of exercises that are generally considered safe during pregnancy: walking, swimming, prenatal yoga. In
                    addition to exercise, it's important to eat a healthy and balanced diet during pregnancy to support your energy levels and overall health.
                </p>
            </div>
            <div className='yoga'>
                <h5>Yoga Poses To Try</h5>
                <div className='poses'>
                    <div>
                        <img className='poster' src={Yoga1} alt='pose' />
                        <img className='play-btn' src={Vector} alt='play button' />
                    </div>
                    <div>
                        <img className='poster' src={Yoga2} alt='pose' />
                        <img className='play-btn' src={Vector} alt='play button' />
                    </div>
                    <div>
                        <img className='poster' src={Yoga3} alt='pose' />
                        <img className='play-btn' src={Vector} alt='play button' />
                    </div>
                    <div>
                        <img className='poster' src={Yoga4} alt='pose' />
                        <img className='play-btn' src={Vector} alt='play button' />
                    </div>
                </div>
            </div>
            <div className='avoid'>
                <h5>Exercises To Avoid</h5>
                <div className='activity'>
                    <div>
                        <p>High-impact activities like jumping or hopping</p>
                    </div>
                    <div>
                        <p>Contact sports that involves physical contact</p>
                    </div>
                    <div>
                        <p>Exercises that require holding your breath</p>
                    </div>
                    <div>
                        <p>Activities with high risk of falling</p>
                    </div>
                    <div>
                        <p>Exercises that require lying on your back</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Fitness