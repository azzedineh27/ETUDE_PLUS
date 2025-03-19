import React from "react";
import "../styles/Contact.css";
import { FaEnvelope } from "react-icons/fa"; // Icône pour le titre
import { useTranslation } from "react-i18next"; // Import du hook i18next

const Contact = () => {

  const { t, i18n } = useTranslation(); // Utilisation du hook pour obtenir la fonction changeLanguage
  
    // Fonction pour changer la langue
    const changeLanguage = (lang) => {
      i18n.changeLanguage(lang);
    };
    
  return (
    <section className="contact" id="contact">
      <h2 className="contact-title">
        <FaEnvelope /> {t("contact_title")}
      </h2>
      <div className="contact-container">
        {/* Formulaire */}
        <form className="contact-form">
          <input type="text" placeholder={t("contact_nom_prenom")} required />
          <input type="email" placeholder={t("contact_email")} required />
          <input type="tel" placeholder={t("contact_telephone")} required />
          <textarea placeholder="Message" rows="4" required></textarea>
          <button type="submit">{t("contact_submit")}</button>
        </form>

        {/* Texte explicatif */}
        <div className="contact-text">
          <p>
          {t("contact_text_1")}
          </p>
          <p>
          {t("contact_text_2")}
          </p>
          <p>
          {t("contact_text_3")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
