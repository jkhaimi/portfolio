import React from 'react';
import './AboutMe.css';
import Student from '../Images/student.webp';
import Work from '../Images/work.jpeg';
import Personal from '../Images/personal.jpg';
import { useTranslation } from 'react-i18next';


function AboutMe() {

  const { t } = useTranslation();

  return (
    <div className="about-me">
      <h2>{t('NAV_ABOUT')}</h2>

      {/* Student Life Section */}
      <div className="section student-life">
        <div className="text text-left">
          <h3>{t('ABOUTME_STUDENT_TITLE')}</h3>
          <p>{t('ABOUTME_STUDENT_TEXT')}<strong>{t('ABOUTME_STUDENT_STRONG')}</strong>{t('ABOUTME_STUDENT_TEXT2')}</p>
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
          <h3>{t('ABOUTME_WORK_TITLE')}</h3>
          <p>{t('ABOUTME_WORK_TEXT')}<strong>{t('ABOUTME_WORK_STRONG')}</strong>{t('ABOUTME_WORK_TEXT2')}</p>
        </div>
      </div>

      {/* Personal Life Section */}
      <div className="section personal-life">
        <div className="text text-left">
          <h3>{t('ABOUTME_PERSONAL_TITLE')}</h3>
          <p>{t('ABOUTME_PERSONAL_TEXT')}</p>
        </div>
        <div className="images">
          <img src={Personal} alt="Jesse Haimi" className="personal-life-img" />
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
