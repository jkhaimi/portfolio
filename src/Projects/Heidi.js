import React from 'react';
import '../Components/Projects.css';

function Heidi() {
  return (
    <div className="tinkerit">

      <h1 className='tinkerit-title'>Tietoturva-asiantuntija Heidi</h1>
      <h2 className='heidi-title'>Tietoturvaa ja palveluita yrityksille!</h2>

      <p className="tinkerit-description">
      In this project, we built a WordPress website utilizing LifterLMS, a powerful learning management system designed for WordPress. The website serves as a platform for the author to create and manage online courses focused on cybersecurity. We ensured the platform is user-friendly and implemented the Stripe payment platform for an easy payment setup.
        </p>

      <div className='project-buttons'>
        <div className='button-container'>
        <h2 style={{textAlign: "center"}}>Visit Website</h2>
        <a 
          href="https://www.tietoturva-asiantuntija.fi/"
          target="_blank" 
          rel="noopener noreferrer" 
          className="savo-button"
        >
          tietoturva-asiantuntija.fi
        </a>
      </div>

      <div className='button-container'>
        <h2 style={{textAlign: "center"}}>Back to Projects</h2>
        <a 
          href="/"
          className="savo-button"
        >
          Back
        </a>
      </div>
    </div>

  </div>
  );
}

export default Heidi;
