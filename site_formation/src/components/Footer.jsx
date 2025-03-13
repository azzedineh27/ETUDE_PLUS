import React from "react";
import "../styles/Footer.css"; // Import du fichier CSS
import { FaFacebook, FaLinkedin, FaWhatsapp } from "react-icons/fa"; // Icônes des réseaux sociaux

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
          <p>Politique de confidentialité</p>
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
            <FaFacebook />
            <FaLinkedin />
            <FaWhatsapp />
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        Copyright © 2025 <span className="brand">Etude Plus</span>
      </div>
    </footer>
  );
};

export default Footer;
