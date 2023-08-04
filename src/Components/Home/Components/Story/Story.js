import React from 'react'
import StoryPic from './StoryPic.jpg'
import './Story.css'

function Story() {
  return (
    <div className='story-body'>
        <div className='story-wrapper'>
            <h5 className='story-hd'>Our founding story</h5>
            <p className='story'>Once upon a time, a group of friends who were also first-time moms struggled to find reliable
                during their pregnacies. They spent hours searching the internet, reading books and talking to doctors, 
                but often felt overwhelmed and confused by conflicting advice. <br/>One day, they decided to create a website 
                that would provide everything they wished they had when they were pregnant: a comprehensive resource that 
                covers all aspects of pregnancy and parenthood, a supportive community of like-minded moms, and easy-to-use 
                tools to help them track their progress. With the help of medical professionals, nutritionists and experienced 
                parents, the website was launched to provide trustworthy and evidence-based informations to new mothers.
            </p>
        </div>
        <div className='story-stats'>
            <div className='story-img'><img src={StoryPic} alt='moms'/></div>
            <div className='stat'>
                <div className='stat-wrapper'><span className='stats-hd'>97%</span><br/><span className='stats-bd'>Mothers <br/>recommend</span></div>
                <div className='stat-wrapper'><span className='stats-hd'>500+</span><br/><span className='stats-bd'>Community <br/>of mothers</span></div>
                <div className='stat-wrapper'><span className='stats-hd'>30+</span><br/><span className='stats-bd'>Expert <br/>Contributors</span></div>
                <div className='stat-wrapper'><span className='stats-hd'>95%</span><br/><span className='stats-bd'>Positive <br/>Feedbacks</span></div>
            </div>
        </div>

    </div>
  )
}

export default Story