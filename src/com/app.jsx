/**
 * @file com/app.jsx
 */

import React from "react";
import { useLocalStorage } from "../hooks/use-local-storage";

const App = () => {
  const [darkMode, setDarkMode] = useLocalStorage("-fm-dark-mode", false);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  return <main className={`main ${darkMode && "main--dark"}`}></main>;
};

export default App;
