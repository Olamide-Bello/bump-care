import React from 'react'
import Author1 from './Author1.png'
import Author2 from './Author2.png'
import Comment from './Comment.png'
import Like from './Like.png'

function TTC() {
  return (
    <div className='preg-community'>
        <div className='preg-community-hd'>
            <h5>The TTC Community</h5>
            <button className='no-colour-btn'>Join Now</button>
        </div>
        <div className='com-post'>
            <h5>What supplements enhances fertility?</h5>
            <div className='author'>
                <img src={Author1} alt='author'/>
                <p>By Jasmine Morenike</p>
            </div>
            <p className='post-main'>Hey Moms! I'm currently trying to conceive and wondering if 
            any of you have any tips or advice that you found helpful during your own journey. 
            What worked for you? Did you try any specific supplements or fertility treatments? 
            I'd love to hear your stories and insights! #TryingToConceive #MomAdvice #FertilityTips
            </p>
            <p className='ago'>Posted 2 days ago</p>
            <div className='post-utility'>
                <div>
                    <img src={Like} alt='like button'/>
                    <p>18</p>
                </div>
                <div>
                    <img src={Comment} alt='Comments'/>
                    <p>22</p>
                </div>
            </div>
        </div>
        <div className='com-post'>
            <h5>Natural Tips to get pregnant</h5>
            <div className='author'>
                <img src={Author2} alt='author'/>
                <p>By Chisom Okoro</p>
            </div>
            <p className='post-main'>Hello mamas,I'm trying to conceive and looking for some advice. What are 
            some natural ways you tried to increase your chances of getting pregnant? Any tips or 
            tricks that worked for you? #TryingToConceive #TTC #MomAdvice
            </p>
            <p className='ago'>Posted 12 days ago</p>
            <div className='post-utility'>
                <div>
                    <img src={Like} alt='like button'/>
                    <p>10</p>
                </div>
                <div>
                    <img src={Comment} alt='Comments'/>
                    <p>17</p>
                </div>
            </div>
        </div>
        <div className='more'>
            <button className='yellow-btn'>See More</button>
        </div>
        
    </div>
  )
}

export default TTC