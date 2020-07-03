/**
 * @file com/header/index.jsx
 */

import React, { useState } from "react";
import Logo from "../svg/logo-bookmark";
import IconFacebook from "../svg/icon-facebook";
import IconTwitter from "../svg/icon-twitter";
import "./index.scss";

const Header = ({ dark, toggleDark }) => {
  const [shown, setShown] = useState(false);
  const toggleShown = () => setShown(!shown);

  return (
    <header className={`header ${shown && "header--shown"}`}>
      <div className="container header__container">
        <div className="logo header__logo">
          <Logo className="logo-svg header__logo-svg" viewBox="0 0 148 25" />
        </div>
        <button
          className="button header__toggle"
          aria-label="Toggle Navigation"
          onClick={toggleShown}
        ></button>
        <nav className="header__nav">
          <a className="link header__link" href="#">
            Features
          </a>
          <a className="link header__link" href="#">
            Pricing
          </a>
          <a className="link header__link" href="#">
            Contact
          </a>
          <button className="button header__login-button">Login</button>
          <button
            onClick={toggleDark}
            className="button button--light-dark header__dark-mode-toggle"
          >
            {dark ? "Light Mode" : "Dark Mode"}
          </button>
          <div className="header__social-links">
            <a
              href="#"
              className="link header__social-link header__social-link--facebook"
              aria-label="Facebook"
              title="Facebook"
            >
              <IconFacebook />
            </a>
            <a
              href="#"
              className="link header__social-link header__social-link--twitter"
              aria-label="Twitter"
              title="Twitter"
            >
              <IconTwitter />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
