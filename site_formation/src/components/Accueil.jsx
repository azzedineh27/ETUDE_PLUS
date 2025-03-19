import React from "react";
import { useTranslation } from "react-i18next"; // Import du hook i18next
import "../styles/Accueil.css"; // Import du fichier CSS
import formationImage from "../assets/formation_etude_plus.jpg"; // Correction de l'import de l'image

const Accueil = () => {
  const { t } = useTranslation(); // Utilisation du hook pour obtenir la fonction de traduction

  return (
    <section className="accueil" id="accueil">
      <h1 className="accueil-title">
        {t('accueil_title')} {/* Utilisation de la traduction ici */}
      </h1>
      <div className="accueil-container">
        <div className="accueil-text">
          <h2>{t('accueil_subtitle')}</h2> {/* Utilisation de la traduction ici */}
          <p>{t('accueil_text_1')}</p> {/* Utilisation de la traduction ici */}
          <p>{t('accueil_text_2')}</p> {/* Utilisation de la traduction ici */}
        </div>
        <div className="accueil-image">
          <img src={formationImage} alt={t('accueil_subtitle')} /> {/* Utilisation de la traduction ici pour l'attribut alt */}
        </div>
      </div>
    </section>
  );
};

export default Accueil;
