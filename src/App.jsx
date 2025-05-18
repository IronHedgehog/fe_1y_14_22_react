import { useEffect, useRef, useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCounter((count) => count + 1);
    }, 1000);

    return () => clearInterval(timerRef.current);
  }, []);

  return <div>Час: {counter}</div>;
};

export default App;
