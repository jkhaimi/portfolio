import React from 'react';
import '../Components/Projects.css';
import AirportTaxiImage from '../Images/AirportTaxi3.png'; 

function AirportTaxi() {
  return (
    <div className="tinkerit">

      <h1 className='tinkerit-title'>Airport Taxi</h1>

      <div className="tinkerit-image-container">
        <img src={AirportTaxiImage} alt="TinkerIT Overview" className="airporttaxi-image" />
      </div>

        <p className="tinkerit-description">
        In this project, We developed a Node.js middleware application that processes ride requests from the Airport Taxi company. The middleware receives these requests, manages the data, and forwards it to a service called Movit, which handles routing and passenger transport management. The application is hosted on an AWS EC2 instance, ensuring reliable uptime and scalability.     
        </p>

      <div className='project-buttons'>
        <div className='button-container'>
        <h2 style={{textAlign: "center"}}>Visit Website</h2>
        <a 
          href="https://www.airporttaxi.fi/"
          target="_blank" 
          rel="noopener noreferrer" 
          className="tinkerit-button"
        >
          airporttaxi.fi
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

export default AirportTaxi;
