import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/DeadlinePopup.css';

const DeadlinePopup = () => {
  const [visible, setVisible] = useState(true);
  const { t } = useTranslation();

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
            {t('popup_deadline_text')}
          </p>
        </div>

        <a className="popup-button" href="#contact">
          {t('popup_contact_button')}
        </a>
      </div>
    </div>
  );
};

export default DeadlinePopup;
