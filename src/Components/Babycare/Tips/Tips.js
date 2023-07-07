import React from 'react';
import './Tips.css';
import Swaddle from './Swaddle.png';
import Burp from './Burp.png'
import Cord from './Cord.png'
import Soothing from './Soothing.png'
import Play from './Play.png'

function Tips() {
    return (
        <div className='tips'>
            <h5>Extra Pro Tips</h5>
            <div className='tips-vd'>
                <div>
                    <div>
                        <img className='poster' src={Swaddle} alt='pose' />
                        <img className='play-btn' src={Play} alt='play button' />
                    </div>
                        <h5>How to swaddle a baby</h5>
                </div>
                <div>
                    <div>
                        <img className='poster' src={Burp} alt='pose' />
                        <img className='play-btn' src={Play} alt='play button' />
                    </div>
                        <h5>How to burp a baby</h5>
                </div>
                <div>
                    <div>
                        <img className='poster' src={Cord} alt='pose' />
                        <img className='play-btn' src={Play} alt='play button' />
                    </div>
                        <h5>Caring for umbilical cord</h5>
                </div>
                <div>
                    <div>
                        <img className='poster' src={Soothing} alt='pose' />
                        <img className='play-btn' src={Play} alt='play button' />
                    </div>
                        <h5>Soothing a fussy baby</h5>
                </div>
            </div>
        </div>
    )
}

export default Tips