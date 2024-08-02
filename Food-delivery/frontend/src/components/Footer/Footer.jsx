import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
import Home from './../../pages/Home/Home';

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className='footer-content-left'>
            <img src={assets.logo} alt="logo" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi dolorem sit ad voluptate expedita inventore, itaque deserunt consectetur repellendus recusandae voluptates quia laudantium rerum pariatur sint necessitatibus eveniet, odit ut.</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="facebookIcon" />
                <img src={assets.twitter_icon} alt="twitterIcon" />
                <img src={assets.linkedin_icon} alt="linkedIcon" />
            </div>
        </div>
        <div className='footer-content-center'>
            <h2>COMPANY</h2>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
        </div>
        <div className='footer-content-right'>
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+1-123-456-789</li>
                <li>contact@tomato.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 @tomato.com - All Rights Reserved
      </p>
    </div>
  )
}

export default Footer
