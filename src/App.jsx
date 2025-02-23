import { Component } from "react";
import Class from "./components/Class";
import Counter from "./components/Counter";
import EventList from "./components/eventList/EventList";
import { events } from "./recipies";

// extend - ключове слово яке говорить про наслідування
class App extends Component {
  state = {
    users: [1, 2, 3, 4, 5, 6, 7, 8],
    events,
  };

  printSomething() {
    return "Привіт";
  }

  render() {
    const users = this.state.users;
    return (
      <>
        <div>
          {users.map((user) => {
            return <h1>{user}</h1>;
          })}
        </div>
        <EventList events={this.state.events} method={this.printSomething} />
        <Class method={this.printSomething} />

        <Counter step={10} />
      </>
    );
  }
}

export default App;
