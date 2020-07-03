/**
 * @file com/features-browser/index.jsx
 */

import React from "react";
import FeaturesTabStrip from "../features-tab-strip";
import Feature from "../feature";
import { useLocalStorage } from "../../hooks/use-local-storage";
import Features from "../../lib/features";
import "./index.scss";

const FeaturesBrowser = () => {
  const [tabPage, setTabPage] = useLocalStorage("-fm-features-tab-page", 0);
  const { image, heading, body } = Features[tabPage];

  return (
    <div className="features-browser">
      <FeaturesTabStrip
        tabNames={Features.map((feature) => feature.tabName)}
        currentTabIndex={tabPage}
        setTabPage={setTabPage}
      />
      <Feature image={image} heading={heading} body={body} />
    </div>
  );
};

export default FeaturesBrowser;
