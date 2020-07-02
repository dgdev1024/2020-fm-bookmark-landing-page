/**
 * @file com/cta-section/index.jsx
 */

import React, { useState, useRef } from "react";
import "./index.scss";

const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const CtaSection = () => {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const inputElement = useRef(null);

  const setEmailError = (err = "") => {
    const { classList } = inputElement.current;
    if (typeof err !== "string" || err === "") {
      classList.remove("cta__input-element--error");
    } else {
      classList.add("cta__input-element--error");
    }

    setError(err);
  };

  const onEmailFormSubmit = (ev) => {
    ev.preventDefault();
    if (typeof input !== "string" || input === "") {
      setEmailError("Please enter an email address.");
    } else if (emailRegex.test(input) === false) {
      setEmailError("Whoops, make sure it's an email!");
    } else {
      setEmailError();
    }
  };

  return (
    <section className="section cta">
      <div className="container cta__container">
        <p className="text text--center cta__text">35,000+ already joined</p>
        <h2 className="heading heading--small heading--center cta__heading">
          Stay up-to-date with what we're doing
        </h2>
        <form className="cta__form" onSubmit={onEmailFormSubmit}>
          <div className="cta__input-element" ref={inputElement}>
            <input
              type="text"
              className="cta__input"
              aria-label="Enter your email address."
              placeholder="Enter your email address"
              value={input}
              onChange={(ev) => setInput(ev.target.value)}
            />
            <p className="cta__input-error">{error}</p>
          </div>
          <button type="sumbit" className="button cta__submit-button">
            Contact us
          </button>
        </form>
      </div>
    </section>
  );
};

export default CtaSection;
