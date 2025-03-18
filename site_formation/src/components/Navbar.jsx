import React from "react";
import "../styles/Navbar.css"; // Import du fichier CSS
import logo from "../assets/etudeplusformation.jpg";

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <img src={logo} alt="Etude Plus Formation" className="logo" />
      </div>

      {/* Menu */}
      <ul className="menu">
        <li><a href="#accueil">Accueil</a></li>
        <li><a href="#etudeplus">Le Saviez-vous ?</a></li>
        <li><a href="#formules">Nos Formules</a></li>
        <li><a href="#faq">FAQ</a></li>
        <li><a href="#avis">Nos Avis</a></li>
      </ul>

      {/* Boutons à droite */}
      <div className="nav-buttons">
        <a href="#contact">
          <button className="btn">Contact</button>
        </a>
        <button className="btn">FR</button>
      </div>
    </nav>
  );
};

export default Navbar;
