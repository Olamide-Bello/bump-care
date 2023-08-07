import React from 'react'
import './Symptoms.css'

function Symptoms() {
  return (
    <div id='symptoms' className='symptoms'>
        <h5>Managing Pregnancy Symptoms</h5>
        <div className='p-symptoms'>
            <div>
                <h5>Nausea and vomiting</h5>
                <p>Eat small, frequent meals throughout the day, avoid strong odours, stay hydrated, and talk to your healthcare provider.</p>
            </div>
            <div>
                <h5>Fatigue</h5>
                <p>Rest when you can, prioritize sleep, and try to maintain a healthy sleep schedule.</p>
            </div>
            <div>
                <h5>Breast tenderness</h5>
                <p>wear a supportive, comfortable bra and use warm and cool compresses for relief.</p>
            </div>
            <div>
                <h5>Mood swings</h5>
                <p>Talk to therapist or counselor, practice stress management techniques such as deep breathing or meditation.</p>
            </div>
            <div>
                <h5>Food aversions & cravings</h5>
                <p>Try to maintain a balanced, healthy diet and indulge in cravings in moderation. You do not need to eat unhealthy.</p>
            </div>
            <div>
                <h5>Back pain</h5>
                <p>Use proper posture and body mechanics, stay active with safe exercises, and try pregnancy-specific yoga or stretching.</p>
            </div>
        </div>
    </div>
  )
}

export default Symptoms