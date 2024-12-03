import React from 'react';
import './Info.css';
import JesseImage from '../Images/Jesse.webp';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

function Info() {

  const { t } = useTranslation();

  const handleClick = () => {
    window.location.href = 'mailto:jesse.haimi@icloud.com';
  };

  return (
    <div className="info">
            <button className='ContactButton' onClick={handleClick}>{t("CONTACT_BUTTON")}</button>
            <img src={JesseImage} alt="Jesse Haimi" className="profile-pic" />
      <div className="personal-info">
        <div className="details">
          <h3>Jesse Haimi</h3>
          <p>{t('TITLE')}</p>
          <p>{t('TITLE2')}</p>
        </div>
      </div>

      <div className='Info-Description'>
        <p>{t('INFO_DESCRIPTION')}</p>
      </div>

      <div className="social-media">
      <h4>{t("SOCIAL_MEDIA")}</h4>
      <ul>
      <li className="social-item">
          <FaGithub className="social-icon" />
          <div className="social-details">
            <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
          <button className="follow-btn" onClick={() => window.open('https://github.com/jkhaimi', '_blank')}>
            {t("FOLLOW")}
          </button>
        </li>

        <li className="social-item">
          <FaInstagram className="social-icon" />
          <div className="social-details">
            <a href="https://www.instagram.com/jessehaimi/" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
          <button className="follow-btn" onClick={() => window.open('https://twitter.com/your-profile', '_blank')}>
          {t("FOLLOW")}
          </button>
        </li>

        <li className="social-item">
          <FaLinkedin className="social-icon" />
          <div className="social-details">
            <a href="https://www.linkedin.com/in/jesse-haimi-019429256/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
          <button className="follow-btn" onClick={() => window.open('https://linkedin.com/in/your-profile', '_blank')}>
          {t("FOLLOW")}
          </button>
        </li>
      </ul>
    </div>

    </div>
  );
}

export default Info;