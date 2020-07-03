/**
 * @file com/features-section/index.jsx
 */

import React from "react";
import FeaturesBrowser from "../features-browser";
import "./index.scss";

const FeaturesSection = () => (
  <section className="section features">
    <div className="container features__container">
      <div className="features__caption">
        <h2 className="heading heading--small heading--center features__heading">
          Features
        </h2>
        <p className="text text--center features__text">
          Our aim is to make it quick and easy for you to access your favorite
          websites. Your bookmarks sync between your devices and browsers, so
          you can access them anywhere you wish.
        </p>
      </div>
      <FeaturesBrowser />
    </div>
  </section>
);

export default FeaturesSection;
