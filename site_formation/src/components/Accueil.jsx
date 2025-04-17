import React from "react";
import { useTranslation } from "react-i18next";
import "../styles/Accueil.css";
import formationImage from "/img_header.webp";
import DOMPurify from "dompurify";

const Accueil = () => {
  const { t } = useTranslation();

  const sanitize = (content) => DOMPurify.sanitize(content, { ALLOWED_TAGS: [] });

  return (
    <section className="accueil" id="accueil">
      <h1 className="accueil-title" dangerouslySetInnerHTML={{ __html: sanitize(t('accueil_title')) }} />
      <div className="accueil-container">
        <div className="accueil-text">
          <h2 dangerouslySetInnerHTML={{ __html: sanitize(t('accueil_subtitle')) }} />
          <p dangerouslySetInnerHTML={{ __html: sanitize(t('accueil_text_1')) }} />
          <p dangerouslySetInnerHTML={{ __html: sanitize(t('accueil_text_2')) }} />
        </div>
        <div className="accueil-image">
          <img 
            src={formationImage} 
            alt={sanitize(t('accueil_subtitle'))} // Purification de l'attribut alt
          />
        </div>
      </div>
    </section>
  );
};

export default Accueil;