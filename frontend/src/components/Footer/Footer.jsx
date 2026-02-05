import { assets } from '../../assets/assets'
import './Footer.css'
import React from 'react'

const Footer = () => {
  return (
   <div className="footer" id="footer">
    <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam eligendi ut minus earum, laudantium rerum quae suscipit fuga voluptatum nesciunt!</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" /> 
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
                <h2>Know Us</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery Queries</li>
                    <li>Privacy Options</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>Get in Touch</h2>
                <ul>
                    <li>91+ 9360170966</li>
                    <li>tomato@gmail.com</li>
                </ul>
            </div>
    </div>
    <hr />
    <p className="footer-copyright">CopyRights @ Tomato.com -All Rights Reserved.</p>
   </div>
  )
}

export default Footer