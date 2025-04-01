import React, { useState, useEffect } from "react";
import "../styles/Cookies.css";
import { useTranslation } from "react-i18next";
import DOMPurify from "dompurify";

const Cookies = () => {
  const { t, i18n } = useTranslation();
  const [visible, setVisible] = useState(true);

  // Configuration de DOMPurify avec autorisation limitée
  const sanitize = (value) => {
    return DOMPurify.sanitize(value, {
      ALLOWED_TAGS: ["a"],    // Autorise uniquement les liens
      ALLOWED_ATTR: ["href", "target", "rel"],
      ADD_ATTR: ['target']    // Pour forcer l'ouverture dans un nouvel onglet
    });
  };

  useEffect(() => {
    if (!localStorage.getItem("sessionStartTime")) {
      localStorage.setItem("sessionStartTime", Date.now());
    }
  }, []);
  
  useEffect(() => {
    const beforeUnloadHandler = () => {
      recordSessionTime();
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
    insertGA();
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
      localStorage.setItem("totalTimeSpent", previous + duration);
      localStorage.setItem("sessionStartTime", now);

      if (localStorage.getItem("cookiesAccepted") === "true" && window.gtag) {
        window.gtag("event", "time_spent", {
          value: Math.round(duration / 1000),
          unit: "seconds",
        });
      }
    }
  };

  if (!visible) return null;

  return (
    <div className="cookies-popup">
      <div className="cookies-content">
        <h3 dangerouslySetInnerHTML={{ __html: sanitize(t("cookies_title")) }} />
        <p dangerouslySetInnerHTML={{ __html: sanitize(t("cookies_text")) }} />
        <div className="cookies-buttons">
          <button className="btn-primary" onClick={handleAccept}>
            <span dangerouslySetInnerHTML={{ __html: sanitize(t("cookies_accept")) }} />
          </button>
          <button className="btn-secondary" onClick={handleReject}>
            <span dangerouslySetInnerHTML={{ __html: sanitize(t("cookies_reject")) }} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cookies;