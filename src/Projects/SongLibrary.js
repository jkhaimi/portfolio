import React from 'react';
import '../Components/Projects.css';
import TinkerITImage from '../Images/TinkerIT.png'; 
import SongLibraryImage from '../Images/BiisiKirjasto.png'

function SongLibrary() {
  return (
    <div className="tinkerit">

      <h1 className='tinkerit-title'>Song Library</h1>

      <div className="tinkerit-image-container">
        <img src={SongLibraryImage} alt="TinkerIT Overview" className="tinkerit-image" />
      </div>

      <p className="tinkerit-description">
        This is a Java-based database project where users can add their favorite songs, rate them, and filter the songs based on their ratings. The UI for the project was created using the SceneBuilder application.
      </p>

      <div className='project-buttons'>
        <div className='button-container'>
        <h2 style={{textAlign: "center"}}>Check the Code</h2>
        <a 
          href="https://gitlab.jyu.fi/jkhaimi/ohj2-harjoitustyo"
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

export default SongLibrary;
