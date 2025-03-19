import React from "react";
import "../styles/EtudePlus.css"; 
import formationImage from "../assets/formation_etude_plus.jpg";
import { useTranslation } from "react-i18next"; // Import du hook i18next

const EtudePlus = () => {

  const { t, i18n } = useTranslation(); // Utilisation du hook pour obtenir la fonction changeLanguage
  
    // Fonction pour changer la langue
    const changeLanguage = (lang) => {
      i18n.changeLanguage(lang);
    };
    
  return (
    <section className="etudeplus" id="etudeplus">
      <div className="etudeplus-container">
        <div className="etudeplus-text">
          <h2>{t("etudeplus_title")}</h2>
          <h3>{t("etudeplus_subtitle")}</h3>
          <p>
            {t("etudeplus_text_1")}
          </p>
          <p>
          {t("etudeplus_text_2")}
          </p>
          <p>
          {t("etudeplus_text_3")}
          </p>
          <a href="https://www.etudeplus.org" className="btn-soutien">
          {t("etudeplus_button")}
          </a>
        </div>

        <div className="etudeplus-image">
          <img src={formationImage} alt="Etude Plus - Nos projets" />
        </div>
      </div>
    </section>
  );
};

export default EtudePlus;
