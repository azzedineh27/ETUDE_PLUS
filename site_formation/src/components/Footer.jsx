import React from "react";
import "../styles/Footer.css";
import { FaFacebook, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Etude Plus Formation</h3>
          <hr />
          <p>
            Etude Plus Formation est un centre de formation proposant différents diplômes
            d’apprentissage de la langue française.
          </p>
        </div>

        <div className="footer-section">
          <h3>Mentions Légales</h3>
          <hr />
          <p>
            <a href="/politique-de-confidentialite" className="footer-link">
              Politique de confidentialité
            </a>
          </p>
        </div>

        <div className="footer-section">
          <h3>Etude Plus Scolaire</h3>
          <hr />
          <p>
            <a href="https://etudeplus.org/" className="footer-link">
              Découvrez notre centre d'apprentissage
            </a>
          </p>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>
          <hr />
          <p>🏠 Fédération Etude Plus</p>
          <p>📍 16 Boulevard Saint-Germain, 75005 Paris</p>
          <p>📞 +33 (0)9 54 76 34 02</p>
        </div>

        <div className="footer-section">
          <h3>Nos Réseaux</h3>
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
