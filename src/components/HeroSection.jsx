
import React from 'react';
import '../styles/HeroSection.css';
import heroBg from '../assets/hero-bg.png';
import leftArrow from '../assets/left-arrow.png'
import rightArrow from '../assets/right-arrow.png';




function HeroSection() {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '90vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        color: 'white',
        position: 'relative',
      }}
    >
      <div className="hero-overlay">
        <p className="hero-tagline">BEST PLACE TO RELAX & ENJOY</p>
        <h1 className="hero-title">A Luxurious Way To<br />Enjoy Your Life</h1>
        <div className="hero-button-wrapper">

  <div className="line"></div>
  <a href="#" className="hero-button">
    Discover Rooms <span className="arrow">›</span>
  </a>
  <div className="line"></div>
</div>

      </div>
<div className="arrow-navigation">
   <img src={leftArrow} alt="Left Arrow" className="arrow-btn" />
  <img src={rightArrow} alt="Right Arrow" className="arrow-btn" />
</div>



    </section>
  );
}

export default HeroSection;

