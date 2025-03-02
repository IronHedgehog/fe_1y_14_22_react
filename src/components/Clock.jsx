import { Component } from "react";

class Clock extends Component {
  render() {
    const { time, updateFunc } = this.props;
    return <button onClick={updateFunc}>{time} "click to check time"</button>;
  }
}

export default Clock;
