import React from "react";
import "../styles/Formules.css";
import { useTranslation } from "react-i18next";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa"; // ⬅️ Ajout de l'icône rouge

const Formules = () => {
  const { t } = useTranslation();

  const offres = [
    {
      titre: t("formules_standard_title"),
      texte: t("formules_standard_text"),
      prix: t("formules_standard_price"),
      avantages: ["10h de cours", "Support en ligne", "Préparation DALF"],
      malus: ["Pas de suivi personnalisé"], // ⬅️ Ajout ici
      style: "standard"
    },
    {
      titre: t("formules_medium_title"),
      texte: t("formules_medium_text"),
      prix: t("formules_medium_price"),
      avantages: ["20h de cours", "Accès illimité", "Suivi personnalisé", "Préparation DALF"],
      style: "medium"
    },
    {
      titre: t("formules_premium_title"),
      texte: t("formules_premium_text"),
      prix: t("formules_premium_price"),
      avantages: ["30h de cours", "Coaching individuel", "Correction détaillée", "Préparation DALF"],
      style: "premium"
    }
  ];

  return (
    <section className="formules" id="formules">
      <h2 className="formules-title">{t("formules_title")}</h2>
      <div className="formules-container">
        {offres.map((offre, index) => (
          <div className={`formule-card ${offre.style}`} key={index}>
            <h3>{offre.titre}</h3>
            <p className="formule-description">{offre.texte}</p>
            <ul className="formule-liste">
              {offre.avantages.map((avantage, idx) => (
                <li key={idx}>
                  <FaCheckCircle className="check-icon" /> {avantage}
                </li>
              ))}

              {/* ➕ Affichage des malus s'ils existent */}
              {offre.malus?.map((malus, idx) => (
                <li key={`malus-${idx}`} className="malus">
                  <FaTimesCircle className="times-icon" /> {malus}
                </li>
              ))}
            </ul>
            <p className="prix">{offre.prix}</p>
            <button className="btn-formule">Choisir cette formule</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Formules;
