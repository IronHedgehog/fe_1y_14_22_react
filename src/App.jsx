import { useEffect, useRef, useState } from "react";
import Compponent from "./Compponent";
import { ThemeContext } from "./Context";

const App = () => {
  const [theme, setTheme] = useState("light");
  const [counter, setCounter] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCounter((count) => count + 1);
    }, 1000);

    return () => clearInterval(timerRef.current);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div>Час: {counter}</div>;
      <Compponent />
    </ThemeContext.Provider>
  );
};

export default App;
