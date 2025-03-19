import React from "react";
import "../styles/Formules.css"; // Import du fichier CSS
import { useTranslation } from "react-i18next"; // Import du hook i18next

const Formules = () => {

  const { t, i18n } = useTranslation(); // Utilisation du hook pour obtenir la fonction changeLanguage
  
    // Fonction pour changer la langue
    const changeLanguage = (lang) => {
      i18n.changeLanguage(lang);
    };
    
  return (
    <section className="formules" id="formules">
      <h2 className="formules-title">{t("formules_title")}</h2>
      <div className="formules-container">
        <div className="formule-card">
          <h3>{t("formules_standard_title")}</h3>
          <p>{t("formules_standard_text")}</p>
          <p>{t("formules_standard_price")}</p>
        </div>
        <div className="formule-card">
          <h3>{t("formules_medium_title")}</h3>
          <p>{t("formules_medium_text")}</p>
          <p>{t("formules_medium_price")}</p>
        </div>
        <div className="formule-card">
          <h3>{t("formules_premium_title")}</h3>
          <p>{t("formules_premium_text")}</p>
          <p>{t("formules_premium_price")}</p>
        </div>
      </div>
    </section>
  );
};

export default Formules;
