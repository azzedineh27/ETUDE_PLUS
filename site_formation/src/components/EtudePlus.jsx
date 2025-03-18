import React from "react";
import "../styles/EtudePlus.css"; 
import formationImage from "../assets/formation_etude_plus.jpg";
import logoEtudePlus from "../assets/logo_etudeplus.png";

const EtudePlus = () => {
  return (
    <section className="etudeplus">
      <div className="etudeplus-container">
        <div className="etudeplus-text">
          <h2>Le Saviez-vous ?</h2>
          <h3>Nous avons aussi un centre d'apprentissage !</h3>
          <p>
            En plus de notre formation professionnelle, nous disposons également d'un centre d'apprentissage où nous proposons des cours pour tous les âges !
          </p>
          <p>
            Que vous soyez à la recherche d’un soutien scolaire pour vos enfants, ou que vous souhaitiez améliorer vos compétences professionnelles, n'hésitez pas à nous contacter pour plus d'informations !
          </p>
          <p>
            Nos formations sont ouvertes à tous, alors ne manquez pas cette occasion d'apprendre avec nous et d'élargir vos compétences !
          </p>
        </div>

        {/* Image à droite */}
        <div className="etudeplus-image">
          <img src={formationImage} alt="Etude Plus - Nos projets" />
          {/* Logo en bas de l'image */}
          <div className="etudeplus-logo">
            <img src={logoEtudePlus} alt="Logo Etude Plus" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EtudePlus;
