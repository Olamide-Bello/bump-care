import React, { useContext, useRef, useMemo, } from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'
import logo from './logo.png'
import { GlobalContext } from '../Context/GlobalContext.js';
import SignUp from '../SignUp/SignUp';
import SignIn from '../SignIn/SignIn';
import { AuthContext } from '../Context/AuthContext';
import PasswordReset from '../SignIn/PasswordReset';

function Header() {
  const { handleSignUpModal, openSignIn, openSignUp, openReset, matches, normalScreen } = useContext(GlobalContext)
  const { user, logOut } = useContext(AuthContext)
  const userInitials = useRef(null)


  const handleSignUp = () => {
    handleSignUpModal()
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
    }
}, [user])

  return (
    <div className='header'>
      <a href='/home'><img src={logo} alt='logo' /></a>
      <nav>
        <ul>
          <li><NavLink to='/pregnancy'>Pregnancy</NavLink></li>
          <li><NavLink to='/gynecologist'>Gynecologist</NavLink></li>
          <li><NavLink to='/childbirth'>Child Birth</NavLink></li>
          <li><NavLink to='/babycare'>Baby Care</NavLink></li>
          <li><NavLink to='/community'>Community</NavLink></li>
        </ul>
      </nav>
      {user !== null ? <div className='logged'>{user.photoURL?<img className='dis-pic' src={user.photoURL} alt='display photo' />:<div className='dis-pic avatar'>{userInitials.current}</div>}<p className='log-out' onClick={logOut}>LOG OUT</p></div> : <button className='yellow-btn big-btn' onClick={handleSignUp}>Get Started</button>}
      {openSignUp && <SignUp />}
      {openSignIn && <SignIn/>}
      {openReset && <PasswordReset/>}
    </div>
  )
}

export default Header