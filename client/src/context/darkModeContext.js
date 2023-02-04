import React, { useState, useContext, createContext } from "react";

const DarkModeContext = createContext();
const darkModeLS = JSON.parse(localStorage.getItem("darkmode"));

export const DarkModeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(darkModeLS?.dark || false);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => {
      const current = !prev;
      localStorage.setItem(
        "darkmode",
        JSON.stringify({
          dark: current,
        })
      );
      return current;
    });
  };
  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const useDarkModeContext = () => useContext(DarkModeContext);
