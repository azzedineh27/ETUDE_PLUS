import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "../styles/Navbar.css";
import logo from "../assets/etudeplusformation.jpg";
import { MdOutlineKeyboardArrowDown, MdMenu, MdClose } from "react-icons/md";
import DOMPurify from "dompurify";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const sanitize = (value) =>
    DOMPurify.sanitize(value, {
      ALLOWED_TAGS: [],
      ALLOWED_ATTR: [],
      FORBID_ATTR: ["style", "onerror", "onload"]
    });

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-top">
        <div className="logo">
          <img src={logo} alt={sanitize(t("navbar_title"))} />
        </div>

        <button className="burger-icon" onClick={toggleMenu}>
          {isMenuOpen ? <MdClose size={28} /> : <MdMenu size={28} />}
        </button>
      </div>

      <div className={`navbar-content ${isMenuOpen ? "open" : ""}`}>
        <ul className="menu">
          <li><a href="#accueil" onClick={() => setIsMenuOpen(false)}>{sanitize(t("navbar_menu_accueil"))}</a></li>
          <li><a href="#formules" onClick={() => setIsMenuOpen(false)}>{sanitize(t("navbar_menu_formules"))}</a></li>
          <li><a href="#faq" onClick={() => setIsMenuOpen(false)}>{sanitize(t("navbar_menu_faq"))}</a></li>
          <li><a href="#avis" onClick={() => setIsMenuOpen(false)}>{sanitize(t("navbar_menu_avis"))}</a></li>
          <li><a href="#etudeplus" onClick={() => setIsMenuOpen(false)}>{sanitize(t("navbar_menu_etudeplus"))}</a></li>
        </ul>

        <div className="nav-buttons">
          <a href="#contact" onClick={() => setIsMenuOpen(false)}>
            <button className="btn">{sanitize(t("navbar_button_contact"))}</button>
          </a>

          <div className="language-dropdown">
            <div className="dropdown-wrapper">
              <select
                onChange={changeLanguage}
                className="dropdown"
                value={i18n.language}
              >
                <option value="fr">{sanitize(t("navbar_language_fr"))}</option>
                <option value="en">{sanitize(t("navbar_language_en"))}</option>
                <option value="ae">{sanitize(t("navbar_language_ae"))}</option>
                <option value="tr">{sanitize(t("navbar_language_tr"))}</option>
              </select>
              <MdOutlineKeyboardArrowDown className="dropdown-arrow" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
