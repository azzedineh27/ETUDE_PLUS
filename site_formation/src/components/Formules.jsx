import React from "react";
import "../styles/Formules.css";
import { useTranslation } from "react-i18next";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import DOMPurify from "dompurify";

const Formules = () => {
  const { t } = useTranslation();

  const sanitize = (value) =>
    DOMPurify.sanitize(value, {
      ALLOWED_TAGS: [],
      ALLOWED_ATTR: [],
      FORBID_ATTR: ["style", "onerror", "onload"]
    });

  const offres = [
    {
      titre: sanitize(t("formules_standard_title")),
      texte: sanitize(t("formules_standard_text")),
      prix: sanitize(t("formules_standard_price")),
      avantages: ["10h de cours", "Support en ligne", "Préparation DALF"],
      malus: ["Pas de suivi personnalisé"],
      style: "standard"
    },
    {
      titre: sanitize(t("formules_medium_title")),
      texte: sanitize(t("formules_medium_text")),
      prix: sanitize(t("formules_medium_price")),
      avantages: ["20h de cours", "Accès illimité", "Suivi personnalisé", "Préparation DALF"],
      style: "medium"
    },
    {
      titre: sanitize(t("formules_premium_title")),
      texte: sanitize(t("formules_premium_text")),
      prix: sanitize(t("formules_premium_price")),
      avantages: ["30h de cours", "Coaching individuel", "Correction détaillée", "Préparation DALF"],
      style: "premium"
    }
  ];

  return (
    <section className="formules" id="formules">
      <h2 className="formules-title" dangerouslySetInnerHTML={{ __html: sanitize(t("formules_title")) }} />
      <div className="formules-container">
        {offres.map((offre, index) => (
          <div className={`formule-card ${offre.style}`} key={index}>
            <h3 dangerouslySetInnerHTML={{ __html: offre.titre }} />
            <p className="formule-description" dangerouslySetInnerHTML={{ __html: offre.texte }} />
            <ul className="formule-liste">
              {offre.avantages.map((avantage, idx) => (
                <li key={idx}>
                  <FaCheckCircle className="check-icon" /> {sanitize(avantage)}
                </li>
              ))}
              {offre.malus?.map((malus, idx) => (
                <li key={`malus-${idx}`} className="malus">
                  <FaTimesCircle className="times-icon" /> {sanitize(malus)}
                </li>
              ))}
            </ul>
            <p className="prix" dangerouslySetInnerHTML={{ __html: offre.prix }} />
            <button className="btn-formule">{sanitize("Choisir cette formule")}</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Formules;
