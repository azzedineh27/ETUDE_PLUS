import React from "react";
import "../styles/EtudePlus.css";
import formationImage from "../assets/formation_etude_plus.jpg";
import { useTranslation } from "react-i18next";
import { FaBookOpen, FaGraduationCap, FaUserFriends } from "react-icons/fa";

const EtudePlus = () => {
  const { t } = useTranslation();

  const points = [
    t("etudeplus_text_1"),
    t("etudeplus_text_2"),
    t("etudeplus_text_3")
  ];

  const icons = [<FaBookOpen />, <FaGraduationCap />, <FaUserFriends />];

  return (
    <section className="etudeplus" id="etudeplus">
      <div className="etudeplus-container">
        <div className="etudeplus-image">
          <img src={formationImage} alt="Etude Plus - Nos projets" />
        </div>

        <div className="etudeplus-text">
          <h2>{t("etudeplus_title")}</h2>
          <h3>{t("etudeplus_subtitle")}</h3>
          <div className="etudeplus-points">
            {points.map((text, index) => (
              <div className="etudeplus-point" key={index}>
                <span className="etudeplus-icon">{icons[index]}</span>
                <p>{text}</p>
              </div>
            ))}
          </div>
          <a href="https://www.etudeplus.org" className="btn-soutien">
            {t("etudeplus_button")}
          </a>
        </div>
      </div>
    </section>
  );
};

export default EtudePlus;
