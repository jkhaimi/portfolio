import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Original design by Jesse Haimi. All Rights Reserved.</p>
        
        <div className="footer-socials">
          <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://instagram.com/your-instagram" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </div>

        <nav className="footer-links">
          <a href="#projects">Projects</a>
          <a href="#about">About Me</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
