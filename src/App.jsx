import { Component } from "react";
import Class from "./components/Class";
import Clock from "./components/Clock";
import Counter from "./components/Counter";
import EventList from "./components/eventList/EventList";
import { events } from "./recipies";

// extend - ключове слово яке говорить про наслідування
class App extends Component {
  state = {
    users: [1, 2, 3, 4, 5, 6, 7, 8],
    events,
    time: new Date().toLocaleTimeString(),
  };

  constructor() {
    super();
    this.updateButtonTime = this.updateButtonTime.bind(this);
  }

  updateButtonTime(e) {
    console.log(e);
    console.log(this);
    this.setState({ time: new Date().toLocaleTimeString() });
  }

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
        <Clock time={this.state.time} updateFunc={this.updateButtonTime} />

        <button onClick={this.updateButtonTime}>
          {this.state.time} "click to check time"
        </button>

        <Counter step={10} />
      </>
    );
  }
}

export default App;
