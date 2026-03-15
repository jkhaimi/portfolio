import React, { useState, useEffect, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { CiMail } from "react-icons/ci";
import ContactModal from "./ContactModal";
import "./OptionsMobile.css";

function OptionsMobile() {
  const { i18n } = useTranslation();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const [isContactOpen, setIsContactOpen] = useState(false);

  const toggleLanguage = () => {
    const newLanguage = i18n.language === "en" ? "fi" : "en";
    i18n.changeLanguage(newLanguage);
  };

  const handleMailClick = () => {
    setIsContactOpen(true);
  };

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 50) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }

    setLastScrollY(currentScrollY);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <>
      <nav className={`options-mobile ${isVisible ? "visible" : "hidden"}`}>
        <div className="language-toggle-mobile">
          <button
            className="lang-button-mobile"
            onClick={toggleLanguage}
          >
            {i18n.language === "en" ? "FI" : "EN"}
          </button>
        </div>

        <div className="mail-button-mobile">
          <button
            className="mail-icon-button-mobile"
            onClick={handleMailClick}
            aria-label="Contact"
          >
            <CiMail size={26} />
          </button>
        </div>
      </nav>

      {/* CONTACT MODAL */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </>
  );
}

export default OptionsMobile;