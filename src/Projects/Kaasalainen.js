import React from 'react';
import './Kaasalainen.css';
import KaasalainenImage from '../Images/kaasalainen.png'; 

function Kaasalainen() {
  return (
    <div className="tinkerit">

      <h1 className='tinkerit-title'>Eristyspalvelu Kaasalainen</h1>

      <div className="tinkerit-image-container">
        <img src={KaasalainenImage} alt="TinkerIT Overview" className="kaasalainen-image" />
      </div>

      <p className="tinkerit-description">
      In this project, we developed a clean and straightforward one-page website for a Finnish insulation company. The website is designed to provide all the essential information in an easy-to-navigate layout, including the company's contact details, location, and a section that gives a brief overview of their services.
        </p>

      <div className='project-buttons'>
        <div className='button-container'>
        <h2 style={{textAlign: "center"}}>Visit Website</h2>
        <a 
          href="https://eristys.fi"
          target="_blank" 
          rel="noopener noreferrer" 
          className="tinkerit-button"
        >
          eristys.fi
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

export default Kaasalainen;
