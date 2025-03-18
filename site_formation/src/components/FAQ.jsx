import React, { useState } from "react";
import "../styles/FAQ.css";
import { FaChevronDown } from "react-icons/fa"; // Icône de flèche

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const questions = [
    "Comment accéder aux cours après mon inscription ?",
    "Y a-t-il un accompagnement ou un suivi personnalisé ?",
    "Quels sont les prérequis pour suivre la formation ?",
    "Comment obtenir mon certificat en fin de formation ?",
    "Puis-je suivre la formation à mon propre rythme ?",
  ];

  const answers = [
    "Réponse pour la question 1 : (ajouter la réponse ici)",
    "Réponse pour la question 2 : (ajouter la réponse ici)",
    "Réponse pour la question 3 : (ajouter la réponse ici)",
    "Réponse pour la question 4 : (ajouter la réponse ici)",
    "Réponse pour la question 5 : (ajouter la réponse ici)",
  ];

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq" id="faq">
      <h2 className="faq-title">FOIRE AUX QUESTIONS (FAQ)</h2>
      <div className="faq-container">
        {questions.map((question, index) => (
          <div key={index} className={`faq-item ${openIndex === index ? "open" : ""}`}>
            <button className="faq-question" onClick={() => toggleQuestion(index)}>
              {question}
              <FaChevronDown className="faq-icon" />
            </button>
            <div className="faq-answer">
              {openIndex === index && (
                <p>{answers[index]}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
