import { useState } from "react";

const App = () => {
  // state = {
  //   news: [],
  // };
  const [counter, setCounter] = useState(10);
  // const [] = useState([]);
  // const [first, setfirst] = useState(second);

  return (
    <div>
      {counter}
      <button
        type="button"
        onClick={(e) => {
          setCounter(counter + 1);
        }}
      >
        +
      </button>
      <button
        type="button"
        onClick={(e) => {
          setCounter(counter - 1);
        }}
      >
        -
      </button>
    </div>
  );
};

export default App;
