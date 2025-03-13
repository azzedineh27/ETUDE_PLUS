import React from "react";
import "../styles/Accueil.css"; // Import du fichier CSS
import formationImage from "../assets/formation_etude_plus.jpg"; // Correction de l'import de l'image

const Accueil = () => {
  return (
    <section className="accueil">
      <div className="accueil-container">
        {/* Bloc texte vertical */}
        <div className="accueil-text">
          <h1>REJOIGNEZ ETUDE PLUS FORMATION<br />POUR UN ACCOMPAGNEMENT IDÉAL !</h1>
          <div className="accueil-text-block">
            <h2>Pourquoi choisir notre formation en ligne ?</h2>
            <p>
              Vous cherchez une formation flexible, adaptée à vos besoins et accessible à tout moment ?
              Étude Plus Formation vous propose un accompagnement personnalisé pour vous aider à atteindre vos objectifs professionnels.
            </p>
            <p>Rejoignez-nous dès aujourd'hui et donnez un nouvel élan à votre carrière ! 🚀</p>
          </div>
        </div>

        {/* Image avec correction du chemin */}
        <div className="accueil-image">
          <img src={formationImage} alt="Formation en ligne" />
        </div>
      </div>
    </section>
  );
};

export default Accueil;
