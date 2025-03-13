import React, { useState } from "react";
import "../styles/Cookies.css"; // Import du fichier CSS

const Cookies = () => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="cookies-popup">
      <div className="cookies-content">
        <h3>Politique des cookies</h3>
        <p>
          Nous récoltons des informations afin de vous garantir une meilleure expérience utilisateur.
        </p>
        <div className="cookies-buttons">
          <button className="btn-primary" onClick={() => setVisible(false)}>Accepter</button>
          <button className="btn-secondary" onClick={() => setVisible(false)}>Accepter</button>
        </div>
      </div>
    </div>
  );
};

export default Cookies;
