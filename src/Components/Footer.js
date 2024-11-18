import React, { useContext } from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { NavigationContext } from '../App';
import { useTranslation } from 'react-i18next';

function Footer() {

  const { handleNavigationClick } = useContext(NavigationContext);
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Original design by Jesse Haimi. All Rights Reserved.</p>
        
        <div className="footer-socials">
          <a href="https://github.com/jkhaimi" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.instagram.com/jessehaimi/" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/in/jesse-haimi-019429256/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </div>

        <nav className="footer-links">
          <button onClick={() => handleNavigationClick('projects')}>
            {t("NAV_PROJECTS")}
          </button>
          <button onClick={() => handleNavigationClick('about-me')}>
            {t("NAV_ABOUT")}
          </button>          
          <button onClick={() => handleNavigationClick('resume')}>
            {t("NAV_RESUME")}
          </button>        
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
