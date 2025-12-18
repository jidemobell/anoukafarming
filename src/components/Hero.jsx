import React from 'react'
import './Hero.css'
import farmImage from '../assets/images/farmproduce.jpeg'
import { FaGlobeAfrica } from 'react-icons/fa'
import { GiCorn, GiGrain, GiChicken } from 'react-icons/gi'
import { LuWheatOff } from 'react-icons/lu'
import { TbOnion } from 'react-icons/tb'

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-pattern"></div>
      </div>
      
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-icon"><FaGlobeAfrica /></span>
            <span>Contributing to Global Food Security</span>
          </div>
          
          <h1 className="hero-title">
            <span className="title-line">Cultivating</span>
            <span className="title-highlight">Nigeria's Future</span>
            <span className="title-line">One Harvest at a Time</span>
          </h1>
          
          <p className="hero-description">
            From the fertile lands of Borno State, we're growing premium crops that nourish 
            communities and strengthen Nigeria's position in the global food basket. 
            Sustainable. Local. Impactful.
          </p>
          
          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-number">100%</div>
              <div className="stat-label">Organic Farming</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">Acres Cultivated</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">4</div>
              <div className="stat-label">Crop Varieties</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100+</div>
              <div className="stat-label">Families Supported</div>
            </div>
          </div>
          
          <div className="hero-cta">
            <button 
              className="cta-primary"
              onClick={() => scrollToSection('crops')}
            >
              Discover Our Crops
              <span className="cta-arrow">→</span>
            </button>
            <button 
              className="cta-secondary"
              onClick={() => scrollToSection('contact')}
            >
              Get in Touch
            </button>
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="visual-container">
            <div className="crop-showcase">
              <div className="crop-item">
                <div className="crop-icon"><GiCorn /></div>
                <span>Maize</span>
              </div>
              <div className="crop-item">
                <div className="crop-icon"><GiGrain /></div>
                <span>Rice</span>
              </div>
              <div className="crop-item">
                <div className="crop-icon"><LuWheatOff /></div>
                <span>Beans</span>
              </div>
              <div className="crop-item">
                <div className="crop-icon"><GiChicken /></div>
                <span>Poultry</span>
              </div>
            </div>
            <div className="hero-image-placeholder">
              <img 
                src={farmImage} 
                alt="Anouka Farms - Fresh farm produce from Borno, Nigeria"
                className="hero-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
