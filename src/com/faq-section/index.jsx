/**
 * @file com/faq-section/index.jsx
 */

import React from "react";
import FaqAccordion from "../faq-accordion";
import "./index.scss";

const FaqSection = () => (
  <section className="section faq">
    <div className="container faq__container">
      <h2 className="heading heading--small heading--center faq__heading">
        Frequently Asked Questions
      </h2>
      <p className="text text--center">
        Here are some of our frequently asked questions. If you have any other
        questions you'd like answered, please feel free to email us at
        contact@bookmark.com.
      </p>
      <FaqAccordion />
      <button className="button button--blue faq__button">More Info</button>
    </div>
  </section>
);

export default FaqSection;
