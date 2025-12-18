import React from 'react'
import './Footer.css'
import { FaMapMarkerAlt, FaHeart } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Anouka Farms</h3>
            <p>
              Cultivating excellence in Borno State, Nigeria. 
              Contributing to Nigeria's food basket and global food security 
              through sustainable agricultural practices.
            </p>
          </div>
          
          <div className="footer-section">
            <h4>Our Products</h4>
            <ul>
              <li>Millet</li>
              <li>Sorghum</li>
              <li>Cowpea</li>
              <li>Groundnuts</li>
              <li>Sesame</li>
              <li>Maize</li>
              <li>Poultry</li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#crops">Our Crops</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contact Info</h4>
            <div className="contact-item">
              <span><FaMapMarkerAlt /></span>
              <p>Anouka Farms, Bolakil Farm Area<br />
                 Damboa Local Government, Borno State, Nigeria</p>
            </div>
            {/* <div className="contact-item">
              <span><FaEnvelope /></span>
              <p></p>
            </div>
            <div className="contact-item">
              <span><FaPhone /></span>
              <p></p>
            </div> */}
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} Anouka Farms. All rights reserved.</p>
            <p>Building Nigeria's agricultural future, one harvest at a time.</p>
            <p className="developer-credit">
              Crafted with <FaHeart className="heart-icon" /> by <a href="https://www.jidemobell.com" target="_blank" rel="noopener noreferrer">jidemobell</a> | 
              Built under <a href="https://www.atensai.com" target="_blank" rel="noopener noreferrer">Atensai</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
