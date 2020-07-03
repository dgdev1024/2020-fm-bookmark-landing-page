/**
 * @file com/feature/index.jsx
 */

import React from "react";
import "./index.scss";

const Feature = ({ image, heading, body }) => (
  <div className="feature">
    <img src={image} alt={heading} className="feature__image" />
    <div className="feature__caption">
      <h2 className="heading heading--small feature__heading">{heading}</h2>
      <p className="text text--small feature__text">{body}</p>
      <button className="button button--blue feature__button">More Info</button>
    </div>
  </div>
);

export default Feature;
