import React from 'react';
import { useTranslation } from 'react-i18next';
import { CiMail } from "react-icons/ci";
import './Options.css';

function Options() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLanguage = i18n.language === 'en' ? 'fi' : 'en';
    i18n.changeLanguage(newLanguage);
  };

  const handleMailClick = () => {
    window.location.href = 'mailto:jesse.haimi@icloud.com';
  };

  return (
    <nav className="options">
      <div className="language-toggle">
        <button 
          className="lang-button" 
          onClick={toggleLanguage}
        >
          {i18n.language === 'en' ? 'FI' : 'EN'}
        </button>
      </div>

      <div className="mail-button">
        <button
          className="mail-icon-button"
          onClick={handleMailClick}
          aria-label="Send email"
        >
          <CiMail size={32} />
        </button>
      </div>
    </nav>
  );
}

export default Options;
