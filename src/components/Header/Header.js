import React from 'react'
import './Header.css'
import Logo from "../../imgs/default-monochrome.svg";
import { Link } from 'react-router-dom';
function Header() {
  return (
    <div className='Header'>
         <Link to='/home' className="logo">
         <img src={Logo} alt='Logo' />
          
        </Link>
        <div >
            <nav className='nav_elements'>
        <Link to='/home'className=''>Home</Link>
        <Link to='/profile' className=''>Profile</Link>
        <Link  to='/logout' className=''>Logout</Link>
        </nav>
        </div>
    </div>
  )
}

export default Header



