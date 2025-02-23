import { Component } from "react";

class Counter extends Component {
  static defaultProps = {
    step: 1,
  };

  constructor() {
    super();
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  state = { counter: 0 };

  increment(e) {
    console.log("increment");
    console.log(e);

    // this.state.counter += 1;
  }

  decrement(e) {
    console.log("decrement");
    console.log(e);

    // this.state.counter -= 1;
  }
  render() {
    let counter = 0;
    const { step } = this.props;
    return (
      <div>
        <button onClick={this.decrement}> -{step}</button>
        <span>{counter}</span>
        <button onClick={this.increment}>+{step}</button>
      </div>
    );
  }
}

export default Counter;
