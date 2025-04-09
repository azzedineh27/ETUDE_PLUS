import React from "react";
import "../styles/Footer.css";
import { FaFacebook, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import DOMPurify from "dompurify";

const Footer = () => {
  const { t, i18n } = useTranslation();

  const sanitize = (value) =>
    DOMPurify.sanitize(value, {
      ALLOWED_TAGS: [],
      ALLOWED_ATTR: [],
      FORBID_ATTR: ["style", "onerror", "onload"]
    });

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Etude Plus Formation</h3>
          <hr />
          <p dangerouslySetInnerHTML={{ __html: sanitize(t("footer_about")) }} />
        </div>

        <div className="footer-section">
          <h3 dangerouslySetInnerHTML={{ __html: sanitize(t("footer_mentions")) }} />
          <hr />
          <p>
            <a
              href="./public/rgpd_etudeplusformation.pdf"
              className="footer-link"
              download
              target="_blank"
              rel="noopener noreferrer"
            >
              {sanitize(t("footer_privacy"))}
            </a>

          </p>
        </div>

        <div className="footer-section">
          <h3>Etude Plus Scolaire</h3>
          <hr />
          <p>
            <a href="https://etudeplus.org/" className="footer-link">
              {sanitize(t("footer_etudeplus"))}
            </a>
          </p>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>
          <hr />
          <p dangerouslySetInnerHTML={{ __html: sanitize(t("footer_contact")) }} />
          <p dangerouslySetInnerHTML={{ __html: sanitize(t("footer_address")) }} />
          <p dangerouslySetInnerHTML={{ __html: sanitize(t("footer_phone")) }} />
        </div>

        <div className="footer-section">
          <h3 dangerouslySetInnerHTML={{ __html: sanitize(t("footer_social")) }} />
          <hr />
          <div className="social-icons">
            <a href="https://www.facebook.com/EtudePlus93/" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="https://www.linkedin.com/company/etude-plus-seine-saint-denis/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://wa.me/33664723303" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
