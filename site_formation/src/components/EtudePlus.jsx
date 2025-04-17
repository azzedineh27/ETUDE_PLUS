import React from "react";
import "../styles/EtudePlus.css";
import formationImage from "/img_about.webp";
import { useTranslation } from "react-i18next";
import { FaBookOpen, FaGraduationCap, FaUserFriends } from "react-icons/fa";
import DOMPurify from "dompurify";

const EtudePlus = () => {
  const { t } = useTranslation();

  // Fonction de nettoyage stricte
  const sanitize = (value) => {
    return DOMPurify.sanitize(value, {
      ALLOWED_TAGS: [],
      ALLOWED_ATTR: [],
      FORBID_ATTR: ["style", "onerror", "onload"]
    });
  };

  const points = [
    sanitize(t("etudeplus_text_1")),
    sanitize(t("etudeplus_text_2")),
    sanitize(t("etudeplus_text_3"))
  ];

  const icons = [<FaBookOpen />, <FaGraduationCap />, <FaUserFriends />];

  return (
    <section className="etudeplus" id="etudeplus">
      <div className="etudeplus-container">
        <div className="etudeplus-image">
          <img src={formationImage} alt="Etude Plus - Nos projets" />
        </div>

        <div className="etudeplus-text">
          <h2 dangerouslySetInnerHTML={{ __html: sanitize(t("etudeplus_title")) }} />
          <h3 dangerouslySetInnerHTML={{ __html: sanitize(t("etudeplus_subtitle")) }} />
          <div className="etudeplus-points">
            {points.map((text, index) => (
              <div className="etudeplus-point" key={index}>
                <span className="etudeplus-icon">{icons[index]}</span>
                <p dangerouslySetInnerHTML={{ __html: text }} />
              </div>
            ))}
          </div>
          <a href="https://www.etudeplus.org" className="btn-soutien">
            {sanitize(t("etudeplus_button"))}
          </a>
        </div>
      </div>
    </section>
  );
};

export default EtudePlus;
