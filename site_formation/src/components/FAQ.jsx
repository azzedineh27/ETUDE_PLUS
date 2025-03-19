import React, { useState } from "react";
import "../styles/FAQ.css";
import { FaChevronDown } from "react-icons/fa"; // Icône de flèche
import { useTranslation } from "react-i18next"; // Import du hook i18next

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const { t } = useTranslation(); // Utilisation du hook pour obtenir la fonction de traduction

  const questions = [
    t("faq_question_1"),  // Utilisation des clés de traduction
    t("faq_question_2"),
    t("faq_question_3"),
    t("faq_question_4"),
    t("faq_question_5")
  ];

  const answers = [
    t("faq_answer_1"),  // Utilisation des clés de traduction
    t("faq_answer_2"),
    t("faq_answer_3"),
    t("faq_answer_4"),
    t("faq_answer_5")
  ];

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq" id="faq">
      <h2 className="faq-title">{t("faq_title")}</h2>
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
