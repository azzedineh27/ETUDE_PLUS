import React, { useState } from "react";
import "../styles/Contact.css";
import { FaEnvelope } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import emailjs from "emailjs-com";
import DOMPurify from "dompurify";

const Contact = () => {
  const { t } = useTranslation();
  const [notification, setNotification] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [lastSentTime, setLastSentTime] = useState(null);

  // Configuration stricte de DOMPurify
  const sanitize = (value) => {
    return DOMPurify.sanitize(value, {
      ALLOWED_TAGS: [],       // Aucun HTML autorisé
      ALLOWED_ATTR: [],       // Aucun attribut autorisé
      FORBID_ATTR: ["style", "onerror", "onload"] // Blocage des attributs dangereux
    });
  };

  const validateForm = (formData) => {
    const nameRegex = /^[a-zA-ZÀ-ÿ' -]{2,50}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const phoneRegex = /^\+?[0-9\s().-]{7,20}$/;
  
    if (!formData.name) return sanitize("❌ Le nom est requis.");
    if (!nameRegex.test(formData.name)) return sanitize("❌ Nom invalide.");
  
    if (!formData.email) return sanitize("❌ L'adresse e-mail est requise.");
    if (!emailRegex.test(formData.email)) return sanitize("❌ Email invalide.");
  
    if (!formData.tel) return sanitize("❌ Le téléphone est requis.");
    if (!phoneRegex.test(formData.tel)) return sanitize("❌ Téléphone invalide.");
  
    if (!formData.message || formData.message.trim().length < 10)
      return sanitize("❌ Le message est trop court (10 caractères min).");
  
    return null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSubmitting) return;
  
    const now = Date.now();
    if (lastSentTime && now - lastSentTime < 30000) {
      setNotification({
        type: "error",
        message: sanitize("⏳ Veuillez attendre 30 secondes avant de renvoyer un message.")
      });
      setTimeout(() => setNotification(null), 4000);
      return;
    }
  
    setIsSubmitting(true);
  
    try {
      const form = e.target;
  
      if (form.hidden_bot_field.value !== "") {
        setIsSubmitting(false);
        return;
      }
  
      const formData = {
        name: sanitize(form.name.value.trim()),
        email: sanitize(form.email.value.trim()),
        tel: sanitize(form.tel.value.trim()),
        message: sanitize(form.message.value.trim()),
      };
  
      const errorMsg = validateForm(formData);
      if (errorMsg) {
        setNotification({ type: "error", message: errorMsg });
        setTimeout(() => setNotification(null), 4000);
        setIsSubmitting(false);
        return;
      }
  
      emailjs
        .sendForm("service_jkhy5vj", "template_50z8749", form, "IMYDqPuyEDQ2aCuEb")
        .then(() => {
          setNotification({
            type: "success",
            message: sanitize("✅ Message envoyé avec succès !")
          });
          form.reset();
          setLastSentTime(Date.now());
        })
        .catch(() => {
          setNotification({
            type: "error",
            message: sanitize("❌ Une erreur est survenue. Veuillez réessayer.")
          });
        })
        .finally(() => {
          setIsSubmitting(false);
          setTimeout(() => setNotification(null), 4000);
        });
    } catch (err) {
      console.error(err);
      setNotification({
        type: "error",
        message: sanitize("❌ Une erreur inattendue est survenue.")
      });
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact" id="contact">
      <h2 className="contact-title">
        <FaEnvelope /> <span dangerouslySetInnerHTML={{ __html: sanitize(t("contact_title")) }} />
      </h2>

      {notification && (
        <div className={`contact-notification ${notification.type}`}>
          <span dangerouslySetInnerHTML={{ __html: notification.message }} />
        </div>
      )}

      <div className="contact-container">
        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <input
            type="text"
            name="hidden_bot_field"
            style={{ display: "none" }}
            tabIndex="-1"
          />

          <input
            type="text"
            name="name"
            placeholder={sanitize(t("contact_nom_prenom"))}
            required
          />
          <input
            type="email"
            name="email"
            placeholder={sanitize(t("contact_email"))}
            required
          />
          <input
            type="tel"
            name="tel"
            placeholder={sanitize(t("contact_telephone"))}
            required
          />
          <textarea
            name="message"
            placeholder={sanitize("Message")}
            rows="4"
            required
          ></textarea>
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? sanitize("Envoi...") : sanitize(t("contact_submit"))}
          </button>
        </form>

        <div className="contact-text-wrapper">
          <a
            href="/path/to/ton-fichier.pdf"
            className="download-link"
            download
          >
            {sanitize(t("contact_link"))}
          </a>


          <div className="contact-text">
            <p dangerouslySetInnerHTML={{ __html: sanitize(t("contact_text_1")) }} />
            <p dangerouslySetInnerHTML={{ __html: sanitize(t("contact_text_2")) }} />
            <p dangerouslySetInnerHTML={{ __html: sanitize(t("contact_text_3")) }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;