/**
 * @file com/download-section/index.jsx
 */

import React from "react";
import DownloadCard from "../download-card";
import LogoChrome from "../svg/logo-chrome";
import LogoFirefox from "../svg/logo-firefox";
import LogoOpera from "../svg/logo-opera";
import "./index.scss";

const DownloadSection = () => (
  <section className="section download">
    <div className="container download__container">
      <div className="download__caption">
        <h2 className="heading heading--small heading--center download__heading">
          Download the extension
        </h2>
        <p className="text text--center download__text">
          We've got more browsers in the pipeline. Please do let us know if
          you've got a favorite you'd like us to prioritize.
        </p>
      </div>
      <div className="download__cards">
        <DownloadCard icon={LogoChrome} browser="Chrome" version={62}>
          Also works on other Chromium browsers.
        </DownloadCard>
        <DownloadCard icon={LogoFirefox} browser="Firefox" version={55} />
        <DownloadCard icon={LogoOpera} browser="Opera" version={46} />
      </div>
    </div>
  </section>
);

export default DownloadSection;
