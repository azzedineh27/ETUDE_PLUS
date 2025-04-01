import React, { useState } from "react";
import "../styles/FAQ.css";
import { FaChevronDown } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import DOMPurify from "dompurify";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const { t } = useTranslation();

  const sanitize = (value) =>
    DOMPurify.sanitize(value, {
      ALLOWED_TAGS: [],
      ALLOWED_ATTR: [],
      FORBID_ATTR: ["style", "onerror", "onload"]
    });

  const questions = [
    sanitize(t("faq_question_1")),
    sanitize(t("faq_question_2")),
    sanitize(t("faq_question_3")),
    sanitize(t("faq_question_4")),
    sanitize(t("faq_question_5")),
  ];

  const answers = [
    sanitize(t("faq_answer_1")),
    sanitize(t("faq_answer_2")),
    sanitize(t("faq_answer_3")),
    sanitize(t("faq_answer_4")),
    sanitize(t("faq_answer_5")),
  ];

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq" id="faq">
      <h2 className="faq-title" dangerouslySetInnerHTML={{ __html: sanitize(t("faq_title")) }} />
      <div className="faq-container">
        {questions.map((question, index) => (
          <div key={index} className={`faq-item ${openIndex === index ? "open" : ""}`}>
            <button className="faq-question" onClick={() => toggleQuestion(index)}>
              <span dangerouslySetInnerHTML={{ __html: question }} />
              <FaChevronDown className="faq-icon" />
            </button>
            <div className="faq-answer">
              {openIndex === index && (
                <p dangerouslySetInnerHTML={{ __html: answers[index] }} />
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
