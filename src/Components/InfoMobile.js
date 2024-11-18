import React, { useState } from 'react';
import './InfoMobile.css';
import JesseImage from '../Images/Jesse.webp';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

function InfoMobile() {
  const [visible, setVisible] = useState(false);
  const { t } = useTranslation();

  const handleClick = () => {
    setVisible(!visible);
  };

  const handleMailClick = () => {
    window.location.href = 'mailto:jesse.haimi@icloud.com';
  };

  return (
    <div className={`info-mobile ${visible ? 'visible' : ''}`}>
      <button className="toggle-button" onClick={handleClick}>
        <div className={`line ${visible ? 'open' : ''}`}></div>
        <div className={`line ${visible ? 'open' : ''}`}></div>
        <div className={`line ${visible ? 'open' : ''}`}></div>
      </button>
      {visible && (
        <div className="info-content">
          <button className="ContactButton" onClick={handleMailClick}>
            {t('CONTACT_BUTTON')}
          </button>
          <img src={JesseImage} alt="Jesse Haimi" className="profile-pic" />
          <div className="personal-info">
            <div className="details">
              <h3>Jesse Haimi</h3>
              <p>{t('TITLE')}</p>
              <p>{t('TITLE2')}</p>
            </div>
          </div>
          <div className="Info-Description">
            <p>{t('INFO_DESCRIPTION')}</p>
          </div>
          <div className="social-media">
            <h4>{t('SOCIAL_MEDIA')}</h4>
            <ul>
              <li className="social-item">
                <FaGithub className="social-icon" />
                <div className="social-details">
                  <a
                    href="https://github.com/jkhaimi"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </div>
              </li>
              <li className="social-item">
                <FaInstagram className="social-icon" />
                <div className="social-details">
                  <a
                    href="https://www.instagram.com/jessehaimi/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram
                  </a>
                </div>
              </li>
              <li className="social-item">
                <FaLinkedin className="social-icon" />
                <div className="social-details">
                  <a
                    href="https://www.linkedin.com/in/jesse-haimi-019429256/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default InfoMobile;
