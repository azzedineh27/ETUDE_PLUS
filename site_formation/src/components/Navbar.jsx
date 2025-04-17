import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "../styles/Navbar.css";
import logo from "/public/etudeplusformation.webp";
import { MdOutlineKeyboardArrowDown, MdMenu, MdClose } from "react-icons/md";
import DOMPurify from "dompurify";
import { Link } from "react-scroll";


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
        <li>
          <Link to="accueil" smooth={true} duration={500} offset={-80} onClick={() => setIsMenuOpen(false)}>
            {sanitize(t("navbar_menu_accueil"))}
          </Link>
        </li>
        <li>
          <Link to="formules" smooth={true} duration={500} offset={-80} onClick={() => setIsMenuOpen(false)}>
            {sanitize(t("navbar_menu_formules"))}
          </Link>
        </li>
        <li>
          <Link to="faq" smooth={true} duration={500} offset={-80} onClick={() => setIsMenuOpen(false)}>
            {sanitize(t("navbar_menu_faq"))}
          </Link>
        </li>
        <li>
          <Link to="avis" smooth={true} duration={500} offset={-80} onClick={() => setIsMenuOpen(false)}>
            {sanitize(t("navbar_menu_avis"))}
          </Link>
        </li>
        <li>
          <Link to="etudeplus" smooth={true} duration={500} offset={-80} onClick={() => setIsMenuOpen(false)}>
            {sanitize(t("navbar_menu_etudeplus"))}
          </Link>
        </li>
      </ul>

        <div className="nav-buttons">
          <Link to="contact" smooth={true} duration={500} offset={-80} onClick={() => setIsMenuOpen(false)}>
            <button className="btn">{sanitize(t("navbar_button_contact"))}</button>
          </Link>


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
