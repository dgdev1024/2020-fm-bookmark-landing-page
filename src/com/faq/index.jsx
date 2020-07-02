/**
 * @file com/faq/index.jsx
 */

import React from "react";
import IconArrow from "../svg/icon-arrow";
import "./index.scss";

const FaqItem = ({ question, children, active, activate }) => (
  <div
    className={`faq-item ${active && "faq-item--active"}`}
    onClick={activate}
  >
    <div className="faq-item__question">
      <h3 className="heading heading--left faq-item__heading">{question}</h3>
      <IconArrow className="faq-item__arrow" />
    </div>
    <p className="text text--small text--left faq-item__answer">{children}</p>
  </div>
);

export default FaqItem;
