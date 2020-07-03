/**
 * @file com/features-tab-strip/index.jsx
 */

import React from "react";
import "./index.scss";

const FeaturesTabStrip = ({ tabNames, currentTabIndex, setTabPage }) => (
  <div className="features-tab-strip">
    {tabNames.map((name, index) => (
      <div
        key={index}
        onClick={() => setTabPage(index)}
        className={`features-tab-strip__tab ${
          index === currentTabIndex && "features-tab-strip__tab--active"
        }`}
      >
        <p className="features-tab-strip__tab-text">{name}</p>
      </div>
    ))}
  </div>
);

export default FeaturesTabStrip;
