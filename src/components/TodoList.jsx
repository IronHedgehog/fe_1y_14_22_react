import { Component } from "react";
import TodoItem from "./TodoItem";

class TodoList extends Component {
  render() {
    return (
      <ul>
        {this.props.todos.map(({ id, text, completed }) => {
          return (
            <TodoItem
              key={id}
              id={id}
              text={text}
              completed={completed}
              delete={this.props.delete}
            />
          );
        })}
      </ul>
    );
  }
}

export default TodoList;
