/**
 * @file com/faq-accordion/index.jsx
 */

import React from "react";
import FaqItem from "../faq";
import { useLocalStorage } from "../../hooks/use-local-storage";
import Questions from "../../lib/questions";
import "./index.scss";

const FaqAccordion = () => {
  const [faqPage, setFaqPage] = useLocalStorage("-fm-faq-page", 0);

  return (
    <div className="faq-accordion">
      {Questions.map((question, index) => (
        <FaqItem
          key={index}
          active={faqPage === index}
          question={question.question}
          activate={() => setFaqPage(faqPage === index ? -1 : index)}
        >
          {question.answer}
        </FaqItem>
      ))}
    </div>
  );
};

export default FaqAccordion;
