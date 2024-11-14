import React from 'react';
import '../Components/Projects.css';
import MusicImage from '../Images/music.png';
import Sample1 from '../Audio/jkl4.wav';
import Sample2 from '../Audio/JS1.wav';
import { useTranslation } from 'react-i18next';


function Music() {

  const { t } = useTranslation();

  return (
    <div className="music">
      <h1 className="music-title">{t("MUSIC_TITLE")}</h1>
      <p className="music-description">
      </p>
      
      <div className="music-image-container">
        <img src={MusicImage} alt="Music Production" className="music-image" />
      </div>
      
      <h2>{t("MUSIC_SAMPLES")}</h2>
      <p>{t("MUSIC_SAMPLE_DESCRIPTION")}</p>

      <div className="music-samples">
        <div className="music-sample">
          <h3>{t("MUSIC_SAMPLE1")}</h3>
          <audio controls>
            <source src={Sample2} type="audio/mpeg" />
            {t("MUSIC_NOTSUPPORTED")}
          </audio>
        </div>
      
        <div className="music-sample">
          <h3>{t("MUSIC_SAMPLE2")}</h3>
          <audio controls>
            <source src={Sample1} type="audio/mpeg" />
            {t("MUSIC_NOTSUPPORTED")}
          </audio>
        </div>
      </div>
        
      <div className='project-buttons'>
        <div className='button-container'>
        <h2 style={{textAlign: "center"}}>{t("MUSIC_CHECKBEATS")}</h2>
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
        <h2 style={{textAlign: "center"}}>{t("BACKTO_PROJECTS")}</h2>
        <a 
          href="/"
          className="tinkerit-button"
        >
          {t("BACK")}
        </a>
      </div>
    </div>
    </div>
  );
}

export default Music;
