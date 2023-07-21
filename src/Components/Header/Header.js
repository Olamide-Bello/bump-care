import React, { useContext, useRef, useMemo, useState, } from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'
import logo from './logo.png'
import Exit from './Exit.png'
import LogOut from './LogOut.png'
import logoMobile from './logoMobile.png'
import Hamburger from './Hamburger.png'
import { GlobalContext } from '../Context/GlobalContext.js';
import SignUp from '../SignUp/SignUp';
import SignIn from '../SignIn/SignIn';
import { AuthContext } from '../Context/AuthContext';
import PasswordReset from '../SignIn/PasswordReset';

function Header() {
  const [menu, setMenu] = useState(false)
  const { handleSignUpModal, openSignIn, openSignUp, openReset, matches, normalScreen } = useContext(GlobalContext)
  const { user, logOut } = useContext(AuthContext)
  const userInitials = useRef(null)


  const handleSignUp = () => {
    handleSignUpModal()
  }

  const handleMenu = () => {
    setMenu(!menu)
  }

  useMemo(() => {
    if (user) {
      const copy = user.displayName
      const arr = typeof copy === "string" ? copy.split(" ") : ""
      let initials = ""
      for (let i = 0; i <= 1; i++) {
        initials += typeof arr[i] === "string" ? arr[i].charAt(0).toUpperCase() : ""
      }
      userInitials.current = initials
      console.log(userInitials.current)
      console.log(matches)
    }
  }, [user])

  return (
    <div className='header'>
      {matches ? <a href='/home'><img src={logoMobile} alt='logo' /></a> : <a href='/home'><img src={logo} alt='logo' /></a>}
      {!matches && <nav>
        <ul>
          <li><NavLink to='/pregnancy'>Pregnancy</NavLink></li>
          <li><NavLink to='/gynecologist'>Gynecologist</NavLink></li>
          <li><NavLink to='/childbirth'>Child Birth</NavLink></li>
          <li><NavLink to='/babycare'>Baby Care</NavLink></li>
          <li><NavLink to='/community'>Community</NavLink></li>
        </ul>
      </nav>}
      {menu &&
        <div className='menu'>
          <div className='menu-header'>
            <a href='/home'><img src={logoMobile} alt='logo' /></a>
            <img onClick={handleMenu} src={Exit} alt='exit-icon' />
          </div>
          <div className='menu-bd'>
            <ul>
              <li>Home</li>
              <li>Pregnancy</li>
              <li>Gynecologist</li>
              <li>Child Birth</li>
              <li>Baby Care</li>
              <li>Community</li>
              <li><button>Get Started</button></li>
              <li onClick={logOut}><img src={LogOut} alt='log out icon'/> Log Out</li>
            </ul>
          </div>
        </div>}
      {matches && <img onClick={handleMenu} src={Hamburger} alt='burger menu' />}
      {!matches && (user === null ? <button className='yellow-btn big-btn' onClick={handleSignUp}>Get Started</button> : <div className='logged'>{user.photoURL ? <img className='dis-pic' src={user.photoURL} alt='display photo' /> : <div className='dis-pic avatar'>{userInitials.current}</div>}<p className='log-out' onClick={logOut}>LOG OUT</p></div>)}
      {openSignUp && <SignUp />}
      {openSignIn && <SignIn />}
      {openReset && <PasswordReset />}
    </div>
  )
}

export default Header