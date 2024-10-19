import React from 'react';
import './AboutMe.css';
import Student from '../Images/student.webp';
import Work from '../Images/work.jpeg';
import Personal from '../Images/personal.jpg';

function AboutMe() {
  return (
    <div className="about-me">
      <h2>About Me</h2>

      {/* Student Life Section */}
      <div className="section student-life">
        <div className="text text-left">
          <h3>Student Life</h3>
          <p>
          I am a 23-year-old Information and Software Engineering student at the <strong>University of Jyväskylä</strong>, set to graduate in the spring. 
          Throughout my studies, I've gained a deep interest in IT and had the chance to study abroad at the University of Jaén in Spain, which further fueled my passion for the field.          </p>
        </div>
        <div className="images">
          <img src={Student} alt="Jesse Haimi" className="student-life-img" />
        </div>
      </div>

      {/* Work Life Section */}
      <div className="section work-life">
        <div className="images">
          <img src={Work} alt="TinkerIT" className="work-life-img" />
        </div>
        <div className="text text-right">
          <h3>Work Life</h3>
          <p>
            With broad work experience, I’ve co-founded a software company called <strong>TinkerIT</strong>, where we focus on building modern websites and online stores for businesses. I’ve also worked as a research assistant at my university, enhancing my knowledge of technology and its real-world applications.       
         </p>
        </div>
      </div>

      {/* Personal Life Section */}
      <div className="section personal-life">
        <div className="text text-left">
          <h3>Personal Life</h3>
          <p>
          In my spare time, I play football, go to the gym, and produce music. I have learned useful skills from my hobbies for working life, such as teamwork skills, creativity and persistence. 
          I am enthusiastic, active and positive by nature. I enjoy social situations and believe every interaction can be a lesson.
          </p>
        </div>
        <div className="images">
          <img src={Personal} alt="Jesse Haimi" className="personal-life-img" />
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
