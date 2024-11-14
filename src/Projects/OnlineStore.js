import React, { useContext } from 'react';
import '../Components/Projects.css';
import OnlineStoreImage from '../Images/OnlineStore.jpeg'
import { useTranslation } from 'react-i18next';
import { NavigationContext } from '../App';

function OnlineStore() {

  const { handleNavigationClick } = useContext(NavigationContext);
  const { t } = useTranslation();

  return (
    <div className="tinkerit">

      <h1 className='tinkerit-title'>{t("ONLINESTORE_TITLE")}</h1>

      <div className="tinkerit-image-container">
        <img src={OnlineStoreImage} alt="TinkerIT Overview" className="onlinestore-image" />
      </div>

      <p className="tinkerit-description">{t("ONLINESTORE_TEXT")}</p>

      <div className='project-buttons'>
        <div className='button-container'>
        <h2 style={{textAlign: "center"}}>{t("CHECK_THE_CODE")}</h2>
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
        <h2 style={{textAlign: "center"}}>{t("BACKTO_PROJECTS")}</h2>
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

export default OnlineStore;
