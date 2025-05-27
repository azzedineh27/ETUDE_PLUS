import React, { useState, useEffect } from 'react';
import '../styles/DeadlinePopup.css';

const DeadlinePopup = () => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="popup-container pulse">
      <div className="popup-content">
        <button className="popup-close" onClick={() => setVisible(false)}>
          &times;
        </button>

        <div className="popup-row">
          <div className="popup-icon">📅</div>
          <p className="popup-text">
            <strong>Assistant RH</strong> : clôture des inscriptions le <strong>15 juin 2025</strong>.
          </p>
        </div>

        <a className="popup-button" href="#contact">
          Contactez-nous
        </a>
      </div>
    </div>
  );
};

export default DeadlinePopup;
