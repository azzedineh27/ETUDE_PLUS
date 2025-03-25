import React, { useState } from "react";
import "../styles/Contact.css";
import { FaEnvelope } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import emailjs from "emailjs-com";

const Contact = () => {
  const { t } = useTranslation();

  const [notification, setNotification] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = (formData) => {
    const nameRegex = /^[a-zA-ZÀ-ÿ' -]{2,50}$/;
    const emailRegex = /^[\\w-.]+@[\\w-]+\\.[a-z]{2,}$/i;
    const phoneRegex = /^\\+?[0-9\\s().-]{7,20}$/;

    if (!nameRegex.test(formData.name)) {
      return "❌ Nom invalide.";
    }

    if (!emailRegex.test(formData.email)) {
      return "❌ Email invalide.";
    }

    if (!phoneRegex.test(formData.tel)) {
      return "❌ Téléphone invalide.";
    }

    if (!formData.message || formData.message.trim().length < 10) {
      return "❌ Le message est trop court.";
    }

    return null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Protection supplémentaire : éviter double clic
    if (isSubmitting) return;
  
    setIsSubmitting(true); // 🔐 verrou tout de suite
  
    const form = e.target;
  
    // Honeypot anti-bot
    if (form.hidden_bot_field.value !== "") {
      setIsSubmitting(false);
      return;
    }
  
    const formData = {
      name: form.name.value.trim(),
      email: form.email.value.trim(),
      tel: form.tel.value.trim(),
      message: form.message.value.trim(),
    };
  
    const errorMsg = validateForm(formData);
    if (errorMsg) {
      setNotification({ type: "error", message: errorMsg });
      setTimeout(() => setNotification(null), 4000);
      setIsSubmitting(false); // ✅ on déverrouille en cas d’erreur
      return;
    }
  
    emailjs
      .sendForm("service_jkhy5vj", "template_50z8749", form, "IMYDqPuyEDQ2aCuEb")
      .then(() => {
        setNotification({ type: "success", message: "✅ Message envoyé avec succès !" });
        form.reset();
      })
      .catch(() => {
        setNotification({ type: "error", message: "❌ Une erreur est survenue. Veuillez réessayer." });
      })
      .finally(() => {
        setIsSubmitting(false); // ✅ remise à zéro quoi qu’il arrive
        setTimeout(() => setNotification(null), 4000);
      });
  };
  
  return (
    <section className="contact" id="contact">
      <h2 className="contact-title">
        <FaEnvelope /> {t("contact_title")}
      </h2>

      {notification && (
        <div className={`contact-notification ${notification.type}`}>
          {notification.message}
        </div>
      )}

      <div className="contact-container">
        <form className="contact-form" onSubmit={handleSubmit}>
          {/* Honeypot anti-bot */}
          <input type="text" name="hidden_bot_field" style={{ display: "none" }} tabIndex="-1" />

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
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Envoi..." : t("contact_submit")}
          </button>
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
