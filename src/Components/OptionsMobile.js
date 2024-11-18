import React, { useState, useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { CiMail } from "react-icons/ci";
import './OptionsMobile.css';

function OptionsMobile() {
  const { i18n } = useTranslation();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleMailClick = () => {
    window.location.href = 'mailto:jesse.haimi@icloud.com';
  };

  const toggleLanguage = () => {
    const newLanguage = i18n.language === 'en' ? 'fi' : 'en';
    i18n.changeLanguage(newLanguage);
  };

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    
    // Jos vierityksen määrä on suurempi kuin 50px, piilotetaan komponentti
    if (currentScrollY > lastScrollY && currentScrollY > 50) {
      setIsVisible(false);
    } else if (currentScrollY < 50) {
      // Jos käyttäjä on ylhäällä, komponentti on näkyvissä
      setIsVisible(true);
    } else {
      setIsVisible(true);
    }
    setLastScrollY(currentScrollY);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <nav className={`options-mobile ${isVisible ? 'visible' : 'hidden'}`}>
      <div className="language-toggle-mobile">
        <button
          className="lang-button-mobile"
          onClick={toggleLanguage}
        >
          {i18n.language === 'en' ? 'FI' : 'EN'}
        </button>
      </div>

      <div className="mail-button-mobile">
        <button
          className="mail-icon-button-mobile"
          onClick={handleMailClick}
          aria-label="Send email"
        >
          <CiMail size={26} />
        </button>
      </div>
    </nav>
  );
}

export default OptionsMobile;
