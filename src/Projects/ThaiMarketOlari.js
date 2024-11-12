import React from 'react';
import '../Components/Projects.css';
import ThaiMarketOlariImage from '../Images/ThaiMarket2.png'; 

function ThaiMarketOlari() {
  return (
    <div className="tinkerit">

      <h1 className='tinkerit-title'>ThaiMarketOlari</h1>

      <div className="tinkerit-image-container">
        <img src={ThaiMarketOlariImage} alt="TinkerIT Overview" className="ThaiMarketOlari-image" />
      </div>

      <p className="tinkerit-description">
      In this project we developed a one-page website For a Thai food shop located in Olari, Espoo. In the website we provide visitors with essential information about the store. Built using React, the website offers a seamless and user-friendly experience.
        </p>

      <div className='project-buttons'>
        <div className='button-container'>
        <h2 style={{textAlign: "center"}}>Visit Website</h2>
        <a 
          href="https://thaimarketolari.fi/"
          target="_blank" 
          rel="noopener noreferrer" 
          className="savo-button"
        >
          thaimarketolari.fi
        </a>
      </div>

      <div className='button-container'>
        <h2 style={{textAlign: "center"}}>Back to Projects</h2>
        <a 
          href="/"
          className="savo-button"
        >
          Back
        </a>
      </div>
    </div>

  </div>
  );
}

export default ThaiMarketOlari;
