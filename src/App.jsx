import { useEffect, useState } from "react";

const App = () => {
  // state = {
  //   counter: 0,
  // };
  // 10 - це значення за замовчуванням
  const [counter, setCounter] = useState(10);

  // useEffect(
  //   () => {
  //     // componentDidMount

  //     return () => {
  //       // componentWillUnmount
  //     };
  //   }, //componentDidUpdate

  //   []
  // );
  // componentDidMount
  useEffect(() => {
    document.title = `Ти клікнув ${counter} разів`;
    console.log("abc");
  }, []);

  //componentDidUpdate
  useEffect(() => {
    document.title = `Ти клікнув ${counter} разів`;
    console.log("abc");
  }, [counter]);
  // const [] = useState([]);
  // const [first, setfirst] = useState(second);
  // componentWillUnmount
  useEffect(() => {
    return () => {
      console.log("Тут ви можете співпрацювата з елементом при його видаленні");
    };
  }, []);
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
