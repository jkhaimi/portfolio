import React from 'react';
import '../Components/Projects.css';
import PlatformerImage from '../Images/platformer.png'; 

function PlatformingGame() {
  return (
    <div className="tinkerit">

      <h1 className='tinkerit-title'>TinkerIT</h1>

      <div className="tinkerit-image-container">
        <img src={PlatformerImage} alt="TinkerIT Overview" className="tinkerit-image" />
      </div>

      <p className="tinkerit-description">
        For my very first coding project I developed a platformer game using C#. The game features classic platforming mechanics such as jumping and obstacles. The goal of the game is to survive as long as possible and the best results are submitted to a ranking list.
      </p>

      <div className='project-buttons'>
        <div className='button-container'>
        <h2 style={{textAlign: "center"}}>Check the Code</h2>
        <a 
          href="https://gitlab.jyu.fi/jkhaimi/ohj1ht"
          target="_blank" 
          rel="noopener noreferrer" 
          className="tinkerit-button"
        >
          gitlab.jyu.fi
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

export default PlatformingGame;
