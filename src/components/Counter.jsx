import { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };

  // ComponentDidMount
  // Відображення на сторінці
  componentDidMount() {
    console.log("Компонент додано, componentDidMount");
  }

  // prevProps, prevState
  componentDidUpdate(prevProps, prevState) {
    console.log("Попередній state,componentDidUpdate", prevState);
    console.log("Поточний state,componentDidUpdate", this.state);
  }

  componentWillUnmount() {
    console.log("Елемент видалено з сторінки,componentWillUnmount");
  }

  increment = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  render() {
    return (
      <div>
        <p>Лічильник: {this.state.count}</p>
        <button onClick={this.increment}>Збільшувати</button>
      </div>
    );
  }
}

export default Counter;
