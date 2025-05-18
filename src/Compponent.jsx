import { useContext } from "react";
import { ThemeContext } from "./Context";

const Compponent = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div>
      <p>Поточна тема {theme}</p>
      <button onClick={(e) => setTheme(theme === "light" ? "dark" : "light")}>
        CHANGE THEME
      </button>
    </div>
  );
};

export default Compponent;
