import React from "react";
import "../styles/Contact.css"; // Import du fichier CSS

const Contact = () => {
  return (
    <section className="contact">
      <h2>CONTACTEZ NOUS</h2>
      <div className="contact-container">
        {/* Formulaire */}
        <form className="contact-form">
          <input type="text" placeholder="Nom - Prénom" required />
          <input type="email" placeholder="E-mail" required />
          <input type="tel" placeholder="Téléphone" required />
          <textarea placeholder="Message" rows="4" required></textarea>
          <button type="submit">Envoyer</button>
        </form>

        {/* Texte explicatif */}
        <div className="contact-text">
          <p>
            Vous avez des questions sur notre formation ? 
            Laissez-nous vos coordonnées 📞 et nous vous contacterons pour tout vous expliquer en détail !
          </p>
          <p>
            Un échange rapide pour répondre à vos interrogations et vous aider à faire le bon choix ⏳.
          </p>
          <p>
            N’attendez plus, discutons-en ensemble ! 🚀
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
