import { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import DarkMode from "./DarkMode";

export default function DarkModeIcon() {
  const [colorTheme, setTheme] = DarkMode();
  const [isDarkMode, setDarkMode] = useState(
    colorTheme === "light" ? true : false,
  );

  const toggleDarkMode = (checked: boolean) => {
    setTheme(colorTheme);
    setDarkMode(checked);
  };

  return (
    <DarkModeSwitch
      style={{ marginBottom: "2rem" }}
      checked={isDarkMode}
      onChange={toggleDarkMode}
      size={30}
    />
  );
}
