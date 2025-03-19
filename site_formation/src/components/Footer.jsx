import React from "react";
import "../styles/Footer.css";
import { FaFacebook, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { useTranslation } from "react-i18next"; // Import du hook i18next

const Footer = () => {

  const { t, i18n } = useTranslation(); // Utilisation du hook pour obtenir la fonction changeLanguage
  
    // Fonction pour changer la langue
    const changeLanguage = (lang) => {
      i18n.changeLanguage(lang);
    };
    
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Etude Plus Formation</h3>
          <hr />
          <p>
          {t("footer_about")}
          </p>
        </div>

        <div className="footer-section">
          <h3>{t("footer_mentions")}</h3>
          <hr />
          <p>
            <a href="/politique-de-confidentialite" className="footer-link">
            {t("footer_privacy")}
            </a>
          </p>
        </div>

        <div className="footer-section">
          <h3>Etude Plus Scolaire</h3>
          <hr />
          <p>
            <a href="https://etudeplus.org/" className="footer-link">
            {t("footer_etudeplus")}
            </a>
          </p>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>
          <hr />
          <p>{t("footer_contact")}</p>
          <p>{t("footer_address")}</p>
          <p>{t("footer_phone")}</p>
        </div>

        <div className="footer-section">
          <h3>{t("footer_social")}</h3>
          <hr />
          <div className="social-icons">
            <a href="https://www.facebook.com/EtudePlus93/" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="https://www.linkedin.com/company/etude-plus-seine-saint-denis/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://wa.me/123456789" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
