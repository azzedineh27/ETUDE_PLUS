import React, { useState, useEffect } from "react";
import "../styles/Cookies.css";
import { useTranslation } from "react-i18next";

const Cookies = () => {
  const { t, i18n } = useTranslation(); // ✅ Tous les hooks doivent être appelés en haut
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const beforeUnloadHandler = () => {
      recordSessionTime(); // Enregistre la session avant de quitter
    };

    window.addEventListener("beforeunload", beforeUnloadHandler);
    return () => window.removeEventListener("beforeunload", beforeUnloadHandler);
  }, []);


  const insertGA = () => {
    const GA_ID = "G-9H1G9WVYPD";
  
    const script1 = document.createElement("script");
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    document.head.appendChild(script1);
  
    const script2 = document.createElement("script");
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){ dataLayer.push(arguments); }
      gtag('js', new Date());
      gtag('config', '${GA_ID}');
    `;
    document.head.appendChild(script2);
  };
  
  const handleAccept = () => {
    localStorage.setItem("cookiesAccepted", "true");
    insertGA(); // ✅ activer GA uniquement après consentement
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
      const duration = now - parseInt(sessionStartTime, 10);

      const previous = parseInt(localStorage.getItem("totalTimeSpent") || "0", 10);
      const newTotal = previous + duration;

      localStorage.setItem("totalTimeSpent", newTotal);
      localStorage.setItem("sessionStartTime", now);

      // ✅ N'envoie vers GA que si l'utilisateur a accepté
      if (localStorage.getItem("cookiesAccepted") === "true" && window.gtag) {
        window.gtag("event", "time_spent", {
          value: Math.round(duration / 1000), // secondes
          unit: "seconds",
        });
      }
    }
  };

  if (!visible) return null;

  // Optionnel : changer la langue manuellement
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="cookies-popup">
      <div className="cookies-content">
        <h3>{t("cookies_title")}</h3>
        <p>{t("cookies_text")}</p>
        <div className="cookies-buttons">
          <button className="btn-primary" onClick={handleAccept}>
            {t("cookies_accept")}
          </button>
          <button className="btn-secondary" onClick={handleReject}>
            {t("cookies_reject")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cookies;
