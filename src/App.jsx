import { Component } from "react";
import Filter from "./components/Filter";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

class App extends Component {
  state = {
    todos: [
      { id: 1, text: "do something", completed: true },
      { id: 2, text: "do something2", completed: false },
      { id: 3, text: "do something3", completed: true },
      { id: 4, text: "do something4", completed: false },
      { id: 5, text: "do something5", completed: false },
    ],
    filter: "",
    error: false,
  };
  constructor() {
    super();
    this.addTodo = this.addTodo.bind(this);
    this.addFilter = this.addFilter.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  componentDidMount() {
    // http req, event, timer
    const storageData = localStorage.getItem("todos");
    console.log(storageData);
    const parsedStorageData = JSON.parse(storageData);
    console.log(parsedStorageData);

    if (parsedStorageData) {
      this.setState({
        todos: parsedStorageData,
      });
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.todos === this.state.todos) {
      return false;
    }
    return true;
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.todos !== prevState.todos) {
      localStorage.setItem("todos", JSON.stringify(this.state.todos));
    }
  }

  componentDidCatch() {
    // слугує для обробки помилок та їх опрацювання
    this.setState({ error: true });
  }

  addFilter(e) {
    const { value } = e.target;
    this.setState({ filter: value });
  }

  addTodo(newTodo) {
    this.setState((prev) => ({
      todos: [...prev.todos, newTodo],
    }));
  }

  filterByText() {
    const { todos, filter } = this.state;
    console.log(
      todos.filter((todo) =>
        todo.text.toLowerCase().includes(filter.toLowerCase())
      )
    );
  }

  deleteTodo(id) {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo) => todo.id !== id),
    }));
  }

  render() {
    const filterElements = this.filterByText();
    console.log(filterElements);
    return (
      <div>
        {this.state.error ? (
          <h1>Сайт впав, приходьте пізніше</h1>
        ) : (
          <div>
            <TodoList todos={this.state.todos} delete={this.deleteTodo} />
            <Form addTodo={this.addTodo} />
            <Filter
              filterValue={this.state.filter}
              addFilter={this.addFilter}
            />
          </div>
        )}
      </div>
    );
  }
}

export default App;
