import { useState } from "react";
import { ThemeContext } from "./ThemeContext";

export function ThemeProvider({ children }) {
  const [dark, setIsDark] = useState(
    () => JSON.parse(localStorage.getItem("isDarkMode")) ?? false
  );

  return (
    <ThemeContext.Provider value={[dark, setIsDark]}>
      {children}
    </ThemeContext.Provider>
  );
}