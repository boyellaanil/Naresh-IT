import { createContext, useState } from "react";

export let themeContext = createContext();

let ThemeProvider = ({ children }) => {
  let [theme, setTheme] = useState(false);

  let dark = {
    backgroundColor: "black",
    color: "white",
    height: "100vh",
  };

  let light = {
    backgroundColor: "white",
    color: "black",
    height: "100vh",
  };

  let toggleTheme = () => {
    setTheme(!theme);
  };
  return (
    <themeContext.Provider value={{ dark, light, toggleTheme }}>
      {children}
    </themeContext.Provider>
  );
};

export default ThemeProvider;
