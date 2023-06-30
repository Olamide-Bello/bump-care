//eslint-disable-next-line
import React from 'react'
import { Carousel } from "react-bootstrap/esm/index.js";
import './Hero.css'
import Hero1 from './Hero1.jpg'
import Hero2 from './Hero2.jpg'
import Hero3 from './Hero3.jpg'

const slides = [
    Hero1,
    Hero2,
    Hero3
]
const message = [
    'Welcome to the World of Parenthood!',
    'Expert Gynecologists Just a Click Away',
    'Your Complete Guide To Motherhood'
]
function Hero() {

    return <div>
        <Carousel fade pause= 'false' >
            <Carousel.Item className='item1'>
                <img
                    className='hero-img'
                    src={slides[0]}
                    alt="hero banner"
                />
                <Carousel.Caption className="carousel-des">
                    <h5 className='hero-title hero1'>{message[0]}</h5>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='item2'>
                <img
                    className='hero-img'
                    src={slides[1]}
                    alt="hero banner"
                />
                <Carousel.Caption className="carousel-des">
                    <h5 className='hero-title hero2'>{message[1]}</h5>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='item3'>
                <img
                    className='hero-img'
                    src={slides[2]}
                    alt="hero banner"
                />
                <Carousel.Caption className="carousel-des">
                    <h5 className='hero-title hero3'>{message[2]}</h5>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </div>
}

export default Hero