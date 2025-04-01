import React, { useState } from "react";
import "../styles/Contact.css";
import { FaEnvelope } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import emailjs from "emailjs-com";

const Contact = () => {
  const { t } = useTranslation();

  const [notification, setNotification] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [lastSentTime, setLastSentTime] = useState(null);


  const validateForm = (formData) => {
    const nameRegex = /^[a-zA-ZÀ-ÿ' -]{2,50}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const phoneRegex = /^\+?[0-9\s().-]{7,20}$/;
  
    if (!formData.name) return "❌ Le nom est requis.";
    if (!nameRegex.test(formData.name)) return "❌ Nom invalide.";
  
    if (!formData.email) return "❌ L'adresse e-mail est requise.";
    if (!emailRegex.test(formData.email)) return "❌ Email invalide.";
  
    if (!formData.tel) return "❌ Le téléphone est requis.";
    if (!phoneRegex.test(formData.tel)) return "❌ Téléphone invalide.";
  
    if (!formData.message || formData.message.trim().length < 10)
      return "❌ Le message est trop court (10 caractères min).";
  
    return null;
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSubmitting) return;
  
    const now = Date.now();
    if (lastSentTime && now - lastSentTime < 30000) {
      setNotification({
        type: "error",
        message: "⏳ Veuillez attendre 30 secondes avant de renvoyer un message.",
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
        name: form.name.value.trim(),
        email: form.email.value.trim(),
        tel: form.tel.value.trim(),
        message: form.message.value.trim(),
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
            message: "✅ Message envoyé avec succès !",
          });
          form.reset();
          setLastSentTime(Date.now()); // <-- Mémorise l'heure d'envoi
        })
        .catch(() => {
          setNotification({
            type: "error",
            message: "❌ Une erreur est survenue. Veuillez réessayer.",
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
        message: "❌ Une erreur inattendue est survenue.",
      });
      setIsSubmitting(false);
    }
  };
  
  

  return (
    <section className="contact" id="contact">
      <h2 className="contact-title">
        <FaEnvelope /> {t("contact_title")}
      </h2>

      {notification && (
        <div
          className={`contact-notification ${notification.type}`}
          role="alert"
          aria-live="assertive"
        >
          <span className="emoji"></span>
          <span className="message-text">{notification.message}</span>
        </div>
      )}

      <div className="contact-container">
        <form className="contact-form" onSubmit={handleSubmit}>
          {/* Honeypot anti-bot */}
          <input
            type="text"
            name="hidden_bot_field"
            style={{ display: "none" }}
            tabIndex="-1"
          />

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
