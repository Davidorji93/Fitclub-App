import React from 'react'
import './footer.css'
import GITHUB from '../../assets/github.png'
import INSTAGRAM from '../../assets/instagram.png'
import LINKEDIN from '../../assets/linkedin.png'
import LOGO from '../../assets/logo.png'

const Footer = () => {
  return (
    <div className="footer-container">
        <hr />
        <div className="footer">
            <div className="social-links">
            <img src={GITHUB} alt="" />
            <img src={INSTAGRAM} alt="" />
            <img src={LINKEDIN} alt="" /> 
        </div>
        <div className="">
        <img src={LOGO} alt="" />
        </div>
        </div>
        <div className="blur blur-footer-1"></div>
        <div className="blur blur-footer-2"></div>
    </div>
   
  )
}

export default Footer