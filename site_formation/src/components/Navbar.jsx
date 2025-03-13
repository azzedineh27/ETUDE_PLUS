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
        <li><a href="#">Accueil</a></li>
        <li><a href="#">Qui-sommes-nous</a></li>
        <li><a href="#">Nos formules</a></li>
        <li><a href="#">FAQ</a></li>
      </ul>

      {/* Boutons à droite */}
      <div className="nav-buttons">
        <button className="btn">Contact</button>
        <button className="btn">FR</button>
      </div>
    </nav>
  );
};

export default Navbar;
