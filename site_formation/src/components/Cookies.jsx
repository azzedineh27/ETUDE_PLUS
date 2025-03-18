import React, { useState, useEffect } from "react";
import "../styles/Cookies.css"; // Import du fichier CSS

const Cookies = () => {
  const [visible, setVisible] = useState(true);

  // Vérifier et enregistrer le début de la session si nécessaire
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

  return (
    <div className="cookies-popup">
      <div className="cookies-content">
        <h3>Politique des cookies</h3>
        <p>
          Nous récoltons des informations afin de vous garantir une meilleure expérience utilisateur.
        </p>
        <div className="cookies-buttons">
          <button className="btn-primary" onClick={handleAccept}>Accepter</button>
          <button className="btn-secondary" onClick={handleReject}>Refuser</button>
        </div>
      </div>
    </div>
  );
};

export default Cookies;
