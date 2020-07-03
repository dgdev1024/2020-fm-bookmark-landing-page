/**
 * @file com/download-card/index.jsx
 */

import React from "react";
import "./index.scss";

const DownloadCard = ({ icon: Icon, browser, version, children }) => (
  <div className="download-card">
    <Icon className="download-card__icon" />
    <h3 className="heading heading--smaller heading--center download-card__browser">
      Add to {browser}
    </h3>
    <p className="text text--small text--center download-card__version">
      Minimum version: {version}
      {children && (
        <>
          <br />
          <em className="download-card__notes">{children}</em>
        </>
      )}
    </p>
    <button className="button button--blue download-card__button">
      Add &amp; Install Extension
    </button>
  </div>
);

export default DownloadCard;
