import React from 'react';
import './TinkerIT.css';
import TinkerITImage from '../../Images/TinkerIT.png'; 

function TinkerIT() {
  return (
    <div className="tinkerit">

      <div className="tinkerit-image-container">
        <img src={TinkerITImage} alt="TinkerIT Overview" className="tinkerit-image" />
      </div>

      <p className="tinkerit-description">
        Founded in the summer of 2023, TinkerIT is a customer-focused software company dedicated to empowering businesses with modern websites and online stores. As a co-founder, I actively contribute to both the marketing and coding aspects of the company. We've worked on a variety of exciting projects across different industries, and I personally took charge of developing our company website, ensuring it reflects our commitment to innovation and quality.
      </p>


      <h2 style={{textAlign: "center"}}>Visit Website</h2>

      <a 
        href="https://tinkerit.fi"
        target="_blank" 
        rel="noopener noreferrer" 
        className="tinkerit-button"
      >
        tinkerit.fi
      </a>
    </div>
  );
}

export default TinkerIT;
