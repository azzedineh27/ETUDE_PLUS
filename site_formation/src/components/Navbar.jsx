import React from "react";
import { useTranslation } from "react-i18next"; // Import du hook i18next
import "../styles/Navbar.css"; // Import du fichier CSS
import logo from "../assets/etudeplusformation.jpg";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Navbar = () => {
  const { t, i18n } = useTranslation(); // Utilisation du hook pour obtenir la fonction changeLanguage

  // Fonction pour changer la langue
  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <img src={logo} alt={t('navbar_title')} className="logo" />
      </div>

      {/* Menu */}
      <ul className="menu">
        <li><a href="#accueil">{t('navbar_menu_accueil')}</a></li>
        <li><a href="#formules">{t('navbar_menu_formules')}</a></li>
        <li><a href="#faq">{t('navbar_menu_faq')}</a></li>
        <li><a href="#avis">{t('navbar_menu_avis')}</a></li>
        <li><a href="#etudeplus">{t('navbar_menu_etudeplus')}</a></li>
      </ul>

      {/* Boutons à droite */}
      <div className="nav-buttons">
        <a href="#contact">
          <button className="btn">{t('navbar_button_contact')}</button>
        </a>

        <div className="language-dropdown">
          <div className="dropdown-wrapper">
            <select onChange={changeLanguage} className="dropdown">
              <option value="fr">{t('navbar_language_fr')}</option>
              <option value="en">{t('navbar_language_en')}</option>
              <option value="spa">{t('navbar_language_spa')}</option>
            </select>
            <MdOutlineKeyboardArrowDown className="dropdown-arrow" />
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
