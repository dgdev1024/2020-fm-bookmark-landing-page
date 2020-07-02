/**
 * @file com/app.jsx
 */

import React from "react";
import CtaSection from "./cta-section";
import Footer from "./footer";
import { useLocalStorage } from "../hooks/use-local-storage";

const App = () => {
  const [darkMode, setDarkMode] = useLocalStorage("-fm-dark-mode", false);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <main className={`main ${darkMode && "main--dark"}`}>
      <CtaSection />
      <Footer />
    </main>
  );
};

export default App;
