import React from "react";
import "../styles/Valeurs.css";
import { useTranslation } from "react-i18next";
import { FaHandsHelping, FaBalanceScale, FaHeart, FaSmile, FaUsers } from "react-icons/fa";

const Valeurs = () => {
  const { t } = useTranslation();

  const valeurs = [
    { icon: <FaHandsHelping />, key: "valeur_entraide" },
    { icon: <FaBalanceScale />, key: "valeur_equite" },
    { icon: <FaHeart />, key: "valeur_bienveillance" },
    { icon: <FaSmile />, key: "valeur_non_jugement" },
    { icon: <FaUsers />, key: "valeur_partage" }
  ];

  return (
    <section className="valeurs-section" id="valeurs">
      <h2 className="valeurs-title">{t("valeurs_title")}</h2>
      <div className="valeurs-container">
        {valeurs.map((valeur, index) => (
          <div className="valeur-card" key={index}>
            <div className="valeur-icon">{valeur.icon}</div>
            <p className="valeur-label">{t(valeur.key)}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Valeurs;
