import profilePic from "../Images/Jesse2.webp";
import { useTranslation } from "react-i18next";
import "./Home.css";

const Jesse = () => {

    const { t } = useTranslation();
    
return (
    <div className="home-container">
    <section className="intro">
    <div className="intro-text">
        <h1>Jesse Haimi</h1>
        <p className="intro-text-title">{t('TITLE')}</p>
        <p className="intro-text-title">{t('TITLE2')}</p>
    </div>
        <img src={profilePic} alt="Jesse Haimi" className="home-image" />
    </section>
    </div>
    );
};

export default Jesse;