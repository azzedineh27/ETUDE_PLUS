import React from "react";
import "../styles/Avis.css"; // Import du fichier CSS

const Avis = () => {
  return (
    <section className="avis">
      <h2>NOS AVIS</h2>
      <div className="avis-container">
        <div className="avis-card">
          <p>"Une plateforme intuitive et des cours de qualité"</p>
          <span>Marie Dupont, Étudiante en informatique</span>
        </div>
        <div className="avis-card">
          <p>"Une formation qui booste réellement les compétences"</p>
          <span>Paul Martin, Responsable RH</span>
        </div>
        <div className="avis-card">
          <p>"Un excellent support pour la montée en compétence"</p>
          <span>Julie Lambert, Développeuse web junior</span>
        </div>
      </div>
    </section>
  );
};

export default Avis;
