import React, { useContext } from 'react';
import '../Components/Projects.css';
import SongLibraryImage from '../Images/BiisiKirjasto.png'
import { useTranslation } from 'react-i18next';
import { NavigationContext } from '../App';

function SongLibrary() {

  const { handleNavigationClick } = useContext(NavigationContext);
  const { t } = useTranslation();

  return (
    <div className="tinkerit">

      <h1 className='tinkerit-title'>{t('SONGLIBRARY_TITLE')}</h1>

      <div className="tinkerit-image-container">
        <img src={SongLibraryImage} alt="TinkerIT Overview" className="songlibrary-image" />
      </div>

      <p className="tinkerit-description">{t('SONGLIBRARY_TEXT')}</p>

      <div className='project-buttons'>
        <div className='button-container'>
        <h2 style={{textAlign: "center"}}>{t('CHECK_THE_CODE')}</h2>
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
        <h2 style={{textAlign: "center"}}>{t('BACKTO_PROJECTS')}</h2>
        <button
        className="tinkerit-button"
        onClick={() => handleNavigationClick('projects')}
      >
        {t("BACK")}
      </button>
      </div>
    </div>

  </div>
  );
}

export default SongLibrary;
