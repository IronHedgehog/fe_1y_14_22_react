import "./App.css";

function App() {
  let string = "afk";

  const img =
    "https://cakeshop.com.ua/images/AcpSe7kFpmzMfgJUwhyXbNbja_gwkleunua5ZVM9jTQ/h:5000/bG9jYWw/6Ly8vY2FrZXNob3AuY29tLnVhL3B1YmxpY19odG1sL3N0b3JhZ2UvYXBwL3B1YmxpYy9pbWcvcHJvZHVjdC81NzEzXzEuanBn";

  const arr = [1, 2, 3];
  let isAdult = false;
  return (
    <>
      <div style={{ backgroundColor: "red" }}>{2 + 2}</div>
      <p>{string}</p>
      {isAdult && <p>Nope</p>}
      <img src={img} alt="" />
      <ul>
        {arr.map((number, index) => (
          <li key={index}>{number}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
