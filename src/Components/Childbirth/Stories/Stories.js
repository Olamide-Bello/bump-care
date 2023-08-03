import React, { useContext } from 'react'
import './Stories.css'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { GlobalContext } from '../../Context/GlobalContext'

function Stories() {
    const { matches } = useContext(GlobalContext)
    return (
        <div className='stories-mums'>
            <h5>Pregnancy Stories From Other Mum</h5>
            <div className='stories-mums-container'>
                <div>
                    <FontAwesomeIcon icon={faQuoteLeft} size={matches ? '1x' : '2x'} />
                    <p>My pregnancy was a rollercoaster of emotions. I was overjoyed to be expecting
                        my first child, but I also experienced bouts of anxiety and worry. I was
                        constantly researching and reading up on all the things I should and shouldn't
                        do during pregnancy, which only added to my stress. But when my daughter was born,
                        all of those worries melted away. Holding her in my arms was the most incredible
                        feeling, and I knew that I would do anything to protect and care for her.
                    </p>
                </div>
                <div>
                    <FontAwesomeIcon icon={faQuoteLeft} size={matches ? '1x' : '2x'} />
                    <p>I had always dreamed of having a natural birth, but when I went into labor with my
                        first child, things didn't go as planned. After hours of intense contractions,
                        my baby's heart rate began to drop and I had to have an emergency C-section.
                        It wasn't what I had envisioned, but I knew it was necessary to ensure the
                        safety of my child. And in the end, all that mattered was that we were both
                        healthy and happy.
                    </p>
                </div>
                <div>
                    <FontAwesomeIcon icon={faQuoteLeft} size={matches ? '1x' : '2x'} />
                    <p>I had a relatively easy pregnancy with my first child, but my second
                        was a completely different story. I experienced intense morning sickness
                        throughout the first trimester and was constantly fatigued. As the
                        pregnancy progressed, I developed gestational diabetes and had to monitor
                        my blood sugar levels closely. But despite the challenges, I knew it was
                        all worth it when I finally held my baby boy in my arms
                    </p>
                </div>
                <div>
                    <FontAwesomeIcon icon={faQuoteLeft} size={matches ? '1x' : '2x'} />
                    <p>When I was pregnant with my first child, I was excited but also anxious
                        about the upcoming labor and delivery. However, my water broke unexpectedly
                        while I was at home one evening, and I had to rush to the hospital. The
                        labor was intense and painful, but I was determined to have a natural birth.
                        After several hours of contractions, I finally pushed my baby out and held her
                        in my arms for the first time. It was the most amazing moment of my life.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Stories