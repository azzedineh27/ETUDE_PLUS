import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "../styles/Navbar.css";
import logo from "/etudeplusformation.webp";
import { MdOutlineKeyboardArrowDown, MdMenu, MdClose } from "react-icons/md";
import DOMPurify from "dompurify";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const sanitize = (value) =>
    DOMPurify.sanitize(value, {
      ALLOWED_TAGS: [],
      ALLOWED_ATTR: [],
      FORBID_ATTR: ["style", "onerror", "onload"],
    });

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const links = [
    { id: "accueil", label: t("navbar_menu_accueil") },
    { id: "formules", label: t("navbar_menu_formules") },
    { id: "avis", label: t("navbar_menu_avis") },
    { id: "faq", label: t("navbar_menu_faq") },
    { id: "etudeplus", label: t("navbar_menu_etudeplus") },
  ];

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
          {links.map((link) => (
            <li key={link.id}>
              <ScrollLink
                to={link.id}
                smooth={true}
                duration={500}
                offset={-80}
                onClick={() => setIsMenuOpen(false)}
                href={`#${link.id}`}
                as="a"
              >
                {sanitize(link.label)}
              </ScrollLink>
            </li>
          ))}
        </ul>

        <div className="nav-buttons">
          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            offset={-80}
            onClick={() => setIsMenuOpen(false)}
            href="#contact"
            as="a"
          >
            <button className="btn">{sanitize(t("navbar_button_contact"))}</button>
          </ScrollLink>

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
