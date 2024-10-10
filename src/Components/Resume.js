import React from 'react';
import './Resume.css';

function Resume() {
  return (
    <div className="resume">
      <h2>My Resume</h2>
      <iframe
        src="/CV-English.pdf"
        width="70%"
        height="1050em"
        title="Resume"
        className="CV"
      />
    </div>
  );
}

export default Resume;
