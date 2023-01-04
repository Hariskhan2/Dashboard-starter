import React from 'react'
import {Link} from 'react-router-dom'
import './Footer.css'
import { UilFacebook,UilInstagramAlt,UilTwitter, UilYoutube  } from '@iconscout/react-unicons'


const Footer = () => {
  return (
    <div className="Footer">
        <div className='line_1'>
            <h4>Popular Categories</h4>
            <Link to=''>Cars</Link>
            <Link to=''>Plastic Bottles</Link>
            <Link to=''>Glass Bottles</Link>
            <Link to=''>Metal Strips</Link>
        </div>
        <div className='line_2'>
        <h4>Trending Searches</h4>
        <Link to=''>Pipes</Link>
            <Link to=''>Bottles</Link>
            <Link to=''>Car Parts</Link>
            <Link to=''>Metal rods</Link>
        </div>
        <div className='line_3'>
        <h4>About Us</h4>
        <Link to=''>About us</Link>
            <Link to=''>Artsy blog</Link>
            <Link to=''>Contact Us</Link>
            <Link to=''>Artsy for Businesses</Link>
        </div>
        <div className='line_4'>
        <h4>Scrapyard</h4>
        <Link to=''>Help</Link>
            <Link to=''>Sitemap</Link>
            <Link to=''>Terms of Use</Link>
            <Link to=''>Privacy Policy</Link>
        </div>
        <div className='line_5'>
        <h4>FOLLOW US ON</h4>
        <Link to=''><UilFacebook /></Link>
            <Link to=''><UilYoutube/></Link>
            <Link to=''><UilTwitter/></Link>
            <Link to=''><UilInstagramAlt/></Link>
        </div>

        
    </div>
  )
}

export default Footer