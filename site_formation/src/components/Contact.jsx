import React, { useState } from "react"; // ⬅️ ajoute useState
import "../styles/Contact.css";
import { FaEnvelope } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import emailjs from "emailjs-com";

const Contact = () => {
  const { t } = useTranslation();
  const [notification, setNotification] = useState(null); // ⬅️ notification state

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jkhy5vj",
        "template_50z8749",
        e.target,
        "IMYDqPuyEDQ2aCuEb"
      )
      .then((result) => {
        setNotification({
          type: "success",
          message: "✅ Message envoyé avec succès !",
        });
        e.target.reset();

        // Auto-hide après 4s
        setTimeout(() => setNotification(null), 4000);
      })
      .catch((error) => {
        setNotification({
          type: "error",
          message: "❌ Une erreur est survenue. Veuillez réessayer.",
        });

        setTimeout(() => setNotification(null), 4000);
      });
  };

  return (
    <section className="contact" id="contact">
      <h2 className="contact-title">
        <FaEnvelope /> {t("contact_title")}
      </h2>

      {/* Notification visuelle */}
      {notification && (
        <div className={`contact-notification ${notification.type}`}>
          {notification.message}
        </div>
      )}

      <div className="contact-container">
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder={t("contact_nom_prenom")}
            required
          />
          <input
            type="email"
            name="email"
            placeholder={t("contact_email")}
            required
          />
          <input
            type="tel"
            name="tel"
            placeholder={t("contact_telephone")}
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="4"
            required
          ></textarea>
          <button type="submit">{t("contact_submit")}</button>
        </form>

        <div className="contact-text">
          <p>{t("contact_text_1")}</p>
          <p>{t("contact_text_2")}</p>
          <p>{t("contact_text_3")}</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
