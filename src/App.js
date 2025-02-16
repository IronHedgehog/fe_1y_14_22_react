import EventList from "./components/eventList/EventList";
import { events } from "./recipies";

function App() {
  return <EventList events={events} />;
}

export default App;
