import React from 'react'
import Author1 from './Author1.png'
import Author2 from './Author2.png'
import Comment from './Comment.png'
import Like from './Like.png'

function Baby() {
  return (
    <div className='preg-community'>
        <div className='preg-community-hd'>
            <h5>The Baby Community</h5>
            <button className='no-colour-btn'>Join Now</button>
        </div>
        <div className='com-post'>
            <h5>How do i sleep train my twins ? help</h5>
            <div className='author'>
                <img src={Author1} alt='author'/>
                <p>By Sally Yusuf</p>
            </div>
            <p className='post-main'>Hey mamas, what are some of your go-to tricks for getting your 
            little ones to sleep through the night?  i have 8 months old twins and getting them 
            to sleep at a particular time is really tough. please share some tips with me #momlife 
            #babysleep
            </p>
            <p className='ago'>Posted 6 days ago</p>
            <div className='post-utility'>
                <div>
                    <img src={Like} alt='like button'/>
                    <p>18</p>
                </div>
                <div>
                    <img src={Comment} alt='Comments'/>
                    <p>15</p>
                </div>
            </div>
        </div>
        <div className='com-post'>
            <h5>Recommendations on Toys and Activities</h5>
            <div className='author'>
                <img src={Author2} alt='author'/>
                <p>By Nkechi Williams</p>
            </div>
            <p className='post-main'>What are some of your favorite toys or activities for keeping 
            your baby entertained and learning? cause all my baby wants to play with are things 
            that are not toys. what other activities can i engage him in too? #babyplaytime #momtips
            </p>
            <p className='ago'>Posted 1 week ago</p>
            <div className='post-utility'>
                <div>
                    <img src={Like} alt='like button'/>
                    <p>14</p>
                </div>
                <div>
                    <img src={Comment} alt='Comments'/>
                    <p>12</p>
                </div>
            </div>
        </div>
        <div className='more'>
            <button className='yellow-btn'>See More</button>
        </div>
        
    </div>
  )
}

export default Baby