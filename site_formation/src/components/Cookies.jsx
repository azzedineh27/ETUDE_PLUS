import React, { useState, useEffect } from "react";
import "../styles/Cookies.css"; // Import du fichier CSS
import { useTranslation } from "react-i18next"; // Import i18next

const Cookies = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const sessionStartTime = localStorage.getItem("sessionStartTime");
    if (!sessionStartTime) {
      localStorage.setItem("sessionStartTime", Date.now()); // Enregistrer l'heure de début de session
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookiesAccepted", "true");
    recordSessionTime();
    setVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem("cookiesAccepted", "false");
    recordSessionTime();
    setVisible(false);
  };

  const recordSessionTime = () => {
    const sessionStartTime = localStorage.getItem("sessionStartTime");
    if (sessionStartTime) {
      const sessionDuration = Date.now() - parseInt(sessionStartTime, 10); // Durée en millisecondes
      localStorage.setItem("sessionDuration", sessionDuration);
    }
  };

  if (!visible) return null;

  const { t, i18n } = useTranslation(); // Utilisation du hook pour obtenir la fonction changeLanguage
  
    // Fonction pour changer la langue
    const changeLanguage = (lang) => {
      i18n.changeLanguage(lang);
    };

  return (
    <div className="cookies-popup">
      <div className="cookies-content">
        <h3>{t("cookies_title")}</h3>
        <p>
        {t("cookies_text")}
        </p>
        <div className="cookies-buttons">
          <button className="btn-primary" onClick={handleAccept}>{t("cookies_accept")}</button>
          <button className="btn-secondary" onClick={handleReject}>{t("cookies_reject")}</button>
        </div>
      </div>
    </div>
  );
};

export default Cookies;
