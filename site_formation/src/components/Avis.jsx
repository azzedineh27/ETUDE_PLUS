import React from "react";
import "../styles/Avis.css";
import { FaQuoteLeft } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import DOMPurify from "dompurify";

const Avis = () => {
  const { t, i18n } = useTranslation();
  const sanitize = (content) => DOMPurify.sanitize(content, { ALLOWED_TAGS: ["em", "strong"] }); // Autorise les balises de mise en forme

  const changeLanguage = (lang) => {
    i18n.changeLanguage(sanitize(lang)); // Purification optionnelle (lang est généralement contrôlée en interne)
  };

  return (
    <section className="avis" id="avis">
      <h2 className="avis-title" dangerouslySetInnerHTML={{ __html: sanitize(t("avis_title")) }} />
      <div className="avis-container">
        {[1, 2, 3].map((cardId) => (
          <div key={cardId} className="avis-card">
            <FaQuoteLeft size={20} color="#ff8800" />
            <p dangerouslySetInnerHTML={{ __html: sanitize(t(`avis_card_${cardId}`)) }} />
            <span dangerouslySetInnerHTML={{ __html: sanitize(t(`avis_card_${cardId}_name`)) }} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Avis;