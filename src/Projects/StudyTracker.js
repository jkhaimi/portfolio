import React from 'react';
import '../Components/Projects.css';
import StudyTrackerImage1 from '../Images/studytracker1.png'; 
import StudyTrackerImage2 from '../Images/studytracker2.png'; 


function StudyTracker() {
  return (
    <div className="tinkerit">

      <h1 className='tinkerit-title'>StudyTracker</h1>

      <div className="savolainen-image-container">
        <img src={StudyTrackerImage1} alt="TinkerIT Overview" className="studytracker-image1" />
        <img src={StudyTrackerImage2} alt="TinkerIT Overview" className="studytracker-image2" />
      </div>

      <p className="tinkerit-description">
      In this project, we developed a microservice-based web application for middle school test management. The application is built using the MERN stack, with MySQL replacing MongoDB as the database. StudyTracker allows teachers to create and manage tests, while students can take tests and have their answers automatically evaluated.
      The frontend was built using React.js. On the backend, Node.js and Express.js communicate via RESTful APIs.
        </p>

      <div className='project-buttons'>
        <div className='button-container'>
        <h2 style={{textAlign: "center"}}>Check the code</h2>
        <a 
          href="https://github.com/tuupsuu/StudyTracker"
          target="_blank" 
          rel="noopener noreferrer" 
          className="tinkerit-button"
        >
          github.com
        </a>
      </div>

      <div className='button-container'>
        <h2 style={{textAlign: "center"}}>Back to Projects</h2>
        <a 
          href="/"
          className="tinkerit-button"
        >
          Back
        </a>
      </div>
    </div>

  </div>
  );
}

export default StudyTracker;
