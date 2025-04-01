import React from "react";
import { useTranslation } from "react-i18next";
import "../styles/Navbar.css";
import logo from "../assets/etudeplusformation.jpg";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import DOMPurify from "dompurify";

const Navbar = () => {
  const { t, i18n } = useTranslation();

  const sanitize = (value) =>
    DOMPurify.sanitize(value, {
      ALLOWED_TAGS: [],
      ALLOWED_ATTR: [],
      FORBID_ATTR: ["style", "onerror", "onload"]
    });

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt={sanitize(t("navbar_title"))} className="logo" />
      </div>

      <ul className="menu">
        <li><a href="#accueil">{sanitize(t("navbar_menu_accueil"))}</a></li>
        <li><a href="#formules">{sanitize(t("navbar_menu_formules"))}</a></li>
        <li><a href="#faq">{sanitize(t("navbar_menu_faq"))}</a></li>
        <li><a href="#avis">{sanitize(t("navbar_menu_avis"))}</a></li>
        <li><a href="#etudeplus">{sanitize(t("navbar_menu_etudeplus"))}</a></li>
      </ul>

      <div className="nav-buttons">
        <a href="#contact">
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
              <option value="spa">{sanitize(t("navbar_language_spa"))}</option>
            </select>
            <MdOutlineKeyboardArrowDown className="dropdown-arrow" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
