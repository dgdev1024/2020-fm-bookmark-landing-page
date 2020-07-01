/**
 * @file com/footer/index.jsx
 */

import React from "react";
import Logo from "../svg/logo-bookmark";
import IconFacebook from "../svg/icon-facebook";
import IconTwitter from "../svg/icon-twitter";
import "./index.scss";

const Footer = () => (
  <footer className="footer">
    <div className="container footer__container">
      <div className="logo footer__logo">
        <Logo
          className="logo-svg logo-svg--dark footer__logo-svg"
          viewBox="0 0 148 25"
        />
      </div>
      <div className="footer__links">
        <a href="#" className="link link--small footer__link">
          Features
        </a>
        <a href="#" className="link link--small footer__link">
          Pricing
        </a>
        <a href="#" className="link link--small footer__link">
          Contact
        </a>
      </div>
      <div className="footer__social-links">
        <a
          href="#"
          className="link footer__social-link footer__social-link--facebook"
          aria-label="Facebook"
          title="Facebook"
        >
          <IconFacebook />
        </a>
        <a
          href="#"
          className="link footer__social-link footer__social-link--twitter"
          aria-label="Twitter"
          title="Twitter"
        >
          <IconTwitter />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
