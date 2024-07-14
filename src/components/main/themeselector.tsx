import React, { useEffect, useState } from "react";

interface ThemeSelectorProps {
  children: React.ReactNode;
}

const ThemeSelector: React.FC<ThemeSelectorProps> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    console.log("Changing state");
    setIsDarkMode(localStorage.getItem("darkMode") === "true" ? true : false);
  }, [localStorage.getItem("darkMode")]);

  useEffect(() => {
    console.log("State changed");
    const elements = document.getElementsByTagName("*");

    if (isDarkMode) {
      for (let i = 0; i < elements.length; i++) {
        elements[i].classList.add("dark");
      }
    } else {
      for (let i = 0; i < elements.length; i++) {
        elements[i].classList.remove("dark");
      }
    }
  }, [isDarkMode]);

  return <>{children}</>;
};

export default ThemeSelector;
