import React, { useState } from 'react'
import './Footer.css'
import Logo from './Logo-l.png'
import Facebook from './Facebook.png'
import Instagram from './Instagram.png'
import Lens from './Lens.png'

function Footer() {
    const [searchValue, setSearchValue] = useState("")

    const handleChange = (e) => {
        setSearchValue(e.target.value)
        console.log(searchValue)
    }

  return (
    <div className='footer'>
        <div className='foot1'>
            <img src={Logo} alt='logo'/>
            <div>
                <a href='https://instagram.com'><img src={Instagram} alt='Insta'/></a>
                <a href='https://facebook.com'><img src={Facebook} alt='Facebook'/></a>
            </div>
        </div>
        <div className='foot2'>
            <div>
                <h5>Other Information</h5>
                <p><a href='/policy#faqs'>FAQ</a></p>
                <p><a href='/policy#contact'>Contact Us</a></p>
                <p><a href='/policy'>Privacy Policy</a></p>
            </div>
            <div>
                <h5>Features</h5>
                <p><a href='pregnancy'>Pregnancy</a></p>
                <p><a href='gynecologist'>Gynecologist</a></p>
                <p><a href='childbirth'>Child Birth</a></p>
                <p><a href='babycare'>Baby Care</a></p>
                <p><a href='community'>Community</a></p>
            </div>
            <div>
                <h5>Search Website</h5>
                <p>Need a quick find? Use the search bar</p>
                <div className='search-bar'>
                <input value={searchValue} type='search' id='search' name='search' onChange={handleChange} />
                <img src={Lens} alt=''/>
                </div>
            </div>
        </div>
        <div className='foot3'>
            <p>&copy; 2023 BumpCare.com. All Right Reserved</p>
        </div>

    </div>
  )
}

export default Footer