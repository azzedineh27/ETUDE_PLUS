import React from "react";
import "../styles/Avis.css";
import { FaQuoteLeft } from "react-icons/fa"; // Icône pour styliser les avis
import { useTranslation } from "react-i18next"; // Import du hook i18next

const Avis = () => {

  const { t, i18n } = useTranslation(); // Utilisation du hook pour obtenir la fonction changeLanguage
  
    // Fonction pour changer la langue
    const changeLanguage = (lang) => {
      i18n.changeLanguage(lang);
    };
    
  return (
    <section className="avis" id="avis" >
      <h2 className="avis-title">{t("avis_title")}</h2>
      <div className="avis-container">
        <div className="avis-card">
          <FaQuoteLeft size={20} color="#ff8800" />
          <p>{t('avis_card_1')}</p>
          <span>{t('avis_card_1_name')}</span>
        </div>
        <div className="avis-card">
          <FaQuoteLeft size={20} color="#ff8800" />
          <p>{t('avis_card_2')}</p>
          <span>{t('avis_card_2_name')}</span>
        </div>
        <div className="avis-card">
          <FaQuoteLeft size={20} color="#ff8800" />
          <p>{t('avis_card_3')}</p>
          <span>{t('avis_card_3_name')}</span>
        </div>
      </div>
    </section>
  );
};

export default Avis;
