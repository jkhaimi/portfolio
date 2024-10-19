import React from 'react';
import './Resume.css';

function Resume() {
  // Function to detect mobile devices
  const isMobile = window.innerWidth <= 750;

  return (
    <div className="resume">
      <h2>My Resume</h2>
      {isMobile ? (
        // Open the PDF in a new tab on mobile devices
        <a href="/CV-English.pdf" className="mobile-link" target="_blank" rel="noopener noreferrer">
          Open My Resume
        </a>
      ) : (
        // Display iframe for desktop
        <iframe
          src="/CV-English.pdf"
          width="70%"
          height="1050em"
          title="Resume"
          className="CV"
        />
      )}
    </div>
  );
}

export default Resume;
