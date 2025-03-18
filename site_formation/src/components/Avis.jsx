import React from "react";
import "../styles/Avis.css";
import { FaQuoteLeft } from "react-icons/fa"; // Icône pour styliser les avis

const Avis = () => {
  return (
    <section className="avis" id="avis" >
      <h2 className="avis-title">NOS AVIS</h2>
      <div className="avis-container">
        <div className="avis-card">
          <FaQuoteLeft size={20} color="#ff8800" />
          <p>"Une plateforme intuitive et des cours de qualité"</p>
          <span>Marie Dupont, Étudiante en informatique</span>
        </div>
        <div className="avis-card">
          <FaQuoteLeft size={20} color="#ff8800" />
          <p>"Une formation qui booste réellement les compétences"</p>
          <span>Paul Martin, Responsable RH</span>
        </div>
        <div className="avis-card">
          <FaQuoteLeft size={20} color="#ff8800" />
          <p>"Un excellent support pour la montée en compétence"</p>
          <span>Julie Lambert, Développeuse web junior</span>
        </div>
      </div>
    </section>
  );
};

export default Avis;
