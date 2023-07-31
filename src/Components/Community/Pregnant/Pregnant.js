import React, { useState } from 'react'
import './Pregnant.css'
import Author1 from './Author1.png'
import Author2 from './Author2.png'
import Author3 from './Author3.png'
import Comment from './Comment.png'
import Like from './Like.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

function Pregnant() {
    const [liked, setLiked] = useState(false)
    const [count, setCount] = useState(10)

    const likePost = () => {
        if(liked) {
            setCount(prev => prev-1)
        } else {
            setCount(prev => prev +1)
        }
        setLiked(!liked)

    }

  return (
    <div className='preg-community'>
        <div className='preg-community-hd'>
            <h5>The Pregnancy Community</h5>
            <button className='no-colour-btn'>Join Now</button>
        </div>
        <div className='com-post'>
            <h5>Morning Sickness</h5>
            <div className='author'>
                <img src={Author1} alt='author'/>
                <p>By Joan Nwanso</p>
            </div>
            <p className='post-main'>Hey moms! I'm a first-time mom-to-be and I'm feeling overwhelmed with all 
                the changes happening in my body. Can any experienced moms out there share 
                some tips on how to manage morning sickness?#pregnancyquestions #momadvice 
                #firsttimemom
            </p>
            <p className='ago'>Posted 3 days ago</p>
            <div className='post-utility'>
                <div>
                    {
                       liked? <FontAwesomeIcon onClick={likePost} icon={faHeart}/>: <img  onClick={likePost} src={Like} alt='like button'/>
                    }
                    <p>{count}</p>
                </div>
                <div>
                    <img src={Comment} alt='Comments'/>
                    <p>8</p>
                </div>
            </div>
        </div>
        <div className='com-post'>
            <h5>Help! unusual Cravings</h5>
            <div className='author'>
                <img src={Author2} alt='author'/>
                <p>By Ralia Aliyu</p>
            </div>
            <p className='post-main'>Has anyone experienced pregnancy cravings for unusual food combinations? I can't 
                seem to get enough pickles and ice cream lately. What are your funny cravings? 
                #pregnancy cravings#momadvice
            </p>
            <p className='ago'>Posted 5 days ago</p>
            <div className='post-utility'>
                <div>
                    <img src={Like} alt='like button'/>
                    <p>23</p>
                </div>
                <div>
                    <img src={Comment} alt='Comments'/>
                    <p>10</p>
                </div>
            </div>
        </div>
        <div className='com-post'>
            <h5>Third trimester, can’t sleep</h5>
            <div className='author'>
                <img src={Author3} alt='author'/>
                <p>By Folashade Johnson</p>
            </div>
            <p className='post-main'>I'm in my third trimester and struggling to sleep comfortably. Any advice from experienced 
                moms on how to get a good night's sleep? This is really frustrating for me as it affects 
                me in the morning and sometimes ruin my day. Help please #cantsleep#pregnancyinsomnia#momadvice
            </p>
            <p className='ago'>Posted 1 week ago</p>
            <div className='post-utility'>
                <div>
                    <img src={Like} alt='like button'/>
                    <p>23</p>
                </div>
                <div>
                    <img src={Comment} alt='Comments'/>
                    <p>15</p>
                </div>
            </div>
        </div>
        <div className='more'>
            <button className='yellow-btn'>See More</button>
        </div>
        
    </div>
  )
}

export default Pregnant