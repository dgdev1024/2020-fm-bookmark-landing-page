/**
 * @file com/app.jsx
 */

import React from "react";
import DownloadSection from "./download-section";
import FaqSection from "./faq-section";
import CtaSection from "./cta-section";
import Footer from "./footer";
import { useLocalStorage } from "../hooks/use-local-storage";

const App = () => {
  const [darkMode, setDarkMode] = useLocalStorage("-fm-dark-mode", false);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <main className={`main ${darkMode && "main--dark"}`}>
      <DownloadSection />
      <FaqSection />
      <CtaSection />
      <Footer />
    </main>
  );
};

export default App;
