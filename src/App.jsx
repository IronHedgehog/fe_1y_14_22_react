import { useMemo, useState } from "react";

const App = () => {
  const [planets, setPlanets] = useState(["Earth", "Mars", "Jupiter", "Venus"]);
  const [query, setQuery] = useState("Earth");

  const filteredPlanets = useMemo(
    () => planets.filter((planet) => planet.includes(query)),
    [planets, query]
  );

  return (
    <div>
      {filteredPlanets.map((planet) => (
        <div key={planet}>{planet}</div>
      ))}
    </div>
  );
};

export default App;
