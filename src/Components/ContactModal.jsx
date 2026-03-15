import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";
import "./ContactModal.css";

function ContactModal({ isOpen, onClose }) {
  const { t } = useTranslation();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [toastVisible, setToastVisible] = useState(false);

  useEffect(() => {
    if (status === "success" || status === "error") {
      setToastVisible(true);
  
      // Hide toast after 3s (start slide-up)
      const hideTimer = setTimeout(() => {
        setToastVisible(false);
      }, 3000);
  
      // Fully reset state + close modal on success
      const cleanupTimer = setTimeout(() => {
        setStatus("idle");
  
        if (status === "success") {
          onClose(); // close contact modal
        }
      }, 3500); // slightly after slide-up starts
  
      return () => {
        clearTimeout(hideTimer);
        clearTimeout(cleanupTimer);
      };
    }
  }, [status, onClose]);

  useEffect(() => {
    if (!isOpen) return;
  
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
  
    window.addEventListener("keydown", handleKeyDown);
  
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);
  
  

  if (!isOpen) return null;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const isValid =
    form.email.trim().length > 0 && form.message.trim().length > 0;

  const sendEmail = async (e) => {
    e.preventDefault();
    if (!isValid) return;

    setStatus("sending");

    try {
      await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name || t("CONTACT_ANONYMOUS"),
          reply_to: form.email,
          message: form.message,
        },
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      );

      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <div className="contact-overlay" onClick={onClose}>
      <div
        className="contact-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <h2>{t("CONTACT_TITLE")}</h2>

        <form onSubmit={sendEmail}>
          <p>
            {t("CONTACT_TEXT")}{" "}
            <a
              href="mailto:jesse.haimi@icloud.com"
              className="contact-mail-link"
            >
              {t("CONTACT_EMAIL_LINK")}
            </a>
            .
          </p>

          <input
            name="name"
            placeholder={t("CONTACT_NAME")}
            value={form.name}
            onChange={handleChange}
          />

          <input
            name="email"
            type="email"
            placeholder={t("CONTACT_EMAIL")}
            value={form.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder={t("CONTACT_MESSAGE")}
            value={form.message}
            onChange={handleChange}
            required
          />

          <button
            type="submit"
            disabled={!isValid || status === "sending"}
            className={!isValid ? "disabled" : ""}
          >
            {status === "sending"
              ? t("CONTACT_SENDING")
              : t("CONTACT_SEND")}
          </button>

          {(status === "success" || status === "error") && (
            <div
                className={`contact-toast ${status} ${
                toastVisible ? "show" : "hide"
                }`}
            >
                {status === "success"
                ? t("CONTACT_SUCCESS")
                : t("CONTACT_ERROR")}
            </div>
            )}
        </form>
      </div>
    </div>
  );
}

export default ContactModal;
