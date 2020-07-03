/**
 * @file com/hero-section/index.jsx
 */

import React from "react";
import ImageHero from "../../img/illustration-hero.svg";
import "./index.scss";

const HeroSection = () => (
  <section className="section hero">
    <div className="container hero__container">
      <img
        src={ImageHero}
        alt="A Simple Bookmark Manager"
        className="hero__image"
      />
      <div className="hero__caption">
        <h1 className="heading heading--large hero__heading">
          A Simple Bookmark Manager
        </h1>
        <p className="text hero__text">
          A clean and simple interface to organize your favorite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </p>
        <div className="hero__button-strip">
          <button className="button button--blue">Get it on Chrome</button>
          <button className="button button--light-dark">
            Get it on Firefox
          </button>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
