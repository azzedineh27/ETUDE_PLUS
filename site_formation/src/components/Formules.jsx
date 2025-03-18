import React from "react";
import "../styles/Formules.css"; // Import du fichier CSS

const Formules = () => {
  return (
    <section className="formules">
      <h2 className="formules-title">NOS FORMULES</h2>
      <div className="formules-container">
        <div className="formule-card">
          <h3>STANDARD</h3>
          <p>10 heures de cours pour le DALF ! 🚀</p>
          <p>A partir de 290 euros seulement</p>
        </div>
        <div className="formule-card">
          <h3>MEDIUM</h3>
          <p>20 heures de cours pour le DALF ! 🚀</p>
          <p>A partir de 390 euros seulement</p>
        </div>
        <div className="formule-card">
          <h3>PREMIUM</h3>
          <p>30 heures de cours pour le DALF ! 🚀</p>
          <p>A partir de 590 euros seulement</p>
        </div>
      </div>
    </section>
  );
};

export default Formules;
