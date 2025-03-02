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

  // Внутрішній стан компоненту
  state = {
    counter: 0,
    input: "",
  };

  increment(e) {
    console.log("increment");
    console.log(e);

    // this.state.counter += 1;
    // this.setState({ counter: this.state.counter + this.props.step });
    // const { step } = this.props;
    // this.setState((prevState) => {
    //   return { counter: prevState.counter + step };
    // });

    this.setState(({ counter }, { step }) => ({
      counter: counter + step,
    }));
  }

  decrement(e) {
    console.log("decrement");
    console.log(e);
    // ПОГАНО
    // this.state.counter -= 1;
    const { step } = this.props;
    this.setState((prevState) => {
      return { counter: prevState.counter - step };
    });
  }

  // КОЖНОГО РАЗУ КОЛИ ВІ ЗМІНЮЄТЕ ПРОПСИ АБО СТЕЙТ ВИКЛИКАЄТЬСЯ МЕТОД РЕНДЕР
  render() {
    const { step } = this.props;
    return (
      <div>
        <button onClick={this.decrement}>-{step}</button>
        <span>{this.state.counter}</span>
        <button onClick={this.increment}>+{step}</button>
      </div>
    );
  }
}

export default Counter;
