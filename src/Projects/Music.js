import React from 'react';
import '../Components/Projects.css';
import MusicImage from '../Images/music.png';
import Sample1 from '../Audio/jkl4.wav';
import Sample2 from '../Audio/JS1.wav';


function Music() {
  return (
    <div className="music">
      <h1 className="music-title">My Music Journey</h1>
      <p className="music-description">
        Over the years, I have explored the art of music production. Starting with simple beats, I have produced several music tracks, each helping me grow my skills. From experimenting with different genres to mastering production techniques, this journey has taught me a lot about creativity, patience, and attention to detail.
      </p>
      
      <div className="music-image-container">
        <img src={MusicImage} alt="Music Production" className="music-image" />
      </div>
      
      <h2>Music Samples</h2>
      <p>Here are some samples of the music I’ve produced:</p>

      <div className="music-samples">
        <div className="music-sample">
          <h3>Sample 1</h3>
          <audio controls>
            <source src={Sample2} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
      
        <div className="music-sample">
          <h3>Sample 2</h3>
          <audio controls>
            <source src={Sample1} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
      </div>
        
      <div className='project-buttons'>
        <div className='button-container'>
        <h2 style={{textAlign: "center"}}>Listen to all my beats</h2>
        <a 
          href="https://soundcloud.com/user-833201349"
          target="_blank" 
          rel="noopener noreferrer" 
          className="tinkerit-button"
        >
          Soundcloud
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

export default Music;
