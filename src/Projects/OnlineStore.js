import React from 'react';
import './OnlineStore.css';
import TinkerITImage from '../Images/TinkerIT.png'; 

function OnlineStore() {
  return (
    <div className="tinkerit">

      <h1 className='tinkerit-title'>TinkerIT</h1>

      <div className="tinkerit-image-container">
        <img src={TinkerITImage} alt="TinkerIT Overview" className="tinkerit-image" />
      </div>

      <p className="tinkerit-description">
        Founded in the summer of 2023, TinkerIT is a customer-focused software company dedicated to empowering businesses with modern websites and online stores. As a co-founder, I actively contribute to both the marketing and coding aspects of the company. We've worked on a variety of exciting projects across different industries, and I personally took charge of developing our company website, ensuring it reflects our commitment to innovation and quality.
      </p>

      <div className='project-buttons'>
        <div className='button-container'>
        <h2 style={{textAlign: "center"}}>Check the Code</h2>
        <a 
          href="https://github.com/jkhaimi/nettikauppa"
          target="_blank" 
          rel="noopener noreferrer" 
          className="tinkerit-button"
        >
          github.com
        </a>
      </div>

      <div className='button-container'>
        <h2 style={{textAlign: "center"}}>Back to Projects</h2>
        <a 
          href="/"
          className="tinkerit-button"
        >
          Back
        </a>
      </div>
    </div>

  </div>
  );
}

export default OnlineStore;
