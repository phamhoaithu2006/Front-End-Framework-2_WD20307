import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Button } from "antd";

export default function ThemeToggle() {
  const { toggleTheme, isDark } = useContext(ThemeContext);

  return (
    <Button onClick={toggleTheme}>
      {isDark ? "Light Mode" : "Dark Mode"}
    </Button>
  );
}