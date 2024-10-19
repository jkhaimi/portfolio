import React from 'react';
import './TinkerIT.css'; // Import the CSS for this project
import TinkerITImage1 from '../Images/tinkerit-image1.jpg'; // Add your images
import TinkerITImage2 from '../Images/tinkerit-image2.jpg';

function TinkerIT() {
  return (
    <div className="tinkerit">
      <h1 className="tinkerit-title">TinkerIT</h1>
      <p className="tinkerit-description">
        TinkerIT is a customer-oriented software company with a mission to enable modern websites and stores for all businesses.
      </p>

      {/* <div className="tinkerit-images">
        <img src={TinkerITImage1} alt="TinkerIT Overview" className="tinkerit-image" />
        <img src={TinkerITImage2} alt="TinkerIT Example" className="tinkerit-image" />
      </div> */}

      <h2>Project Details</h2>
      <p>
        Here you can include detailed explanations about the project, the technologies used, the challenges faced, and how you overcame them.
      </p>

      <h2>Features</h2>
      <ul>
        <li>Feature 1</li>
        <li>Feature 2</li>
        <li>Feature 3</li>
        {/* Add more features as needed */}
      </ul>

      <h2>Conclusion</h2>
      <p>
        Write a conclusion about what you learned from this project and any future improvements you would like to make.
      </p>
    </div>
  );
}

export default TinkerIT;
