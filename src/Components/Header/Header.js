import React from 'react'
import {NavLink} from 'react-router-dom'
import './Header.css'
import logo from './logo.png'

function Header() {
  return (
    <div className='header'>
      <a href='/home'><img src={logo} alt='logo' /></a>
      <nav>
        <ul>
          <li><NavLink  to='/pregnancy'>Pregnancy</NavLink></li>
          <li><NavLink  to='/gynecologist'>Gynecologist</NavLink></li>
          <li><NavLink  to='/childbirth'>Child Birth</NavLink></li>
          <li><NavLink  to='/babycare'>Baby Care</NavLink></li>
          <li><NavLink  to='/community'>Community</NavLink></li>
        </ul>
      </nav>
      <button className='yellow-btn big-btn'>Get Started</button>

    </div>
  )
}

export default Header