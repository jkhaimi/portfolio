import React from 'react';
import '../Components/Projects.css';
import SavoImage from '../Images/savo.png'; 
import SavoText from '../Images/savolainenText.png'; 


function SavolainenOsakunta() {
  return (
    <div className="tinkerit">

      <h1 className='tinkerit-title'>Savolainen osakunta</h1>

      <div className="savolainen-image-container">
        <img src={SavoImage} alt="TinkerIT Overview" className="savo-image1" />
        <img src={SavoText} alt="TinkerIT Overview" className="savo-image2" />
      </div>

      <p className="tinkerit-description">
      In this project, we developed a fully functional website using SquareSpace. The website is designed to meet the needs of the student organization, featuring multiple pages, including a dedicated webstore.     
        </p>

      <div className='project-buttons'>
        <div className='button-container'>
        <h2 style={{textAlign: "center"}}>Visit Website</h2>
        <a 
          href="https://savolainenosakunta.fi/"
          target="_blank" 
          rel="noopener noreferrer" 
          className="savo-button"
        >
          savolainenosakunta.fi
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

export default SavolainenOsakunta;
