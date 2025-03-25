import React, { useState, useEffect } from "react";
import "../styles/Cookies.css"; // Import du fichier CSS
import { useTranslation } from "react-i18next"; // Import i18next

const Cookies = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const beforeUnloadHandler = () => {
      recordSessionTime(); // ← calcule et stocke la durée en local
    };
  
    window.addEventListener("beforeunload", beforeUnloadHandler);
    return () => window.removeEventListener("beforeunload", beforeUnloadHandler);
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
      const now = Date.now();
      const duration = now - parseInt(sessionStartTime, 10); // durée en ms
  
      // Cumuler avec le temps précédent (localStorage)
      const previous = parseInt(localStorage.getItem("totalTimeSpent") || "0", 10);
      const newTotal = previous + duration;
  
      localStorage.setItem("totalTimeSpent", newTotal);
      localStorage.setItem("sessionStartTime", now);
  
      // ✅ Envoi vers Google Analytics
      if (window.gtag) {
        window.gtag("event", "time_spent", {
          value: Math.round(duration / 1000), // secondes
          unit: "seconds",
        });
      }
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
