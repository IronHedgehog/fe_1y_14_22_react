import { Component } from "react";

class TodoItem extends Component {
  onChangeHandler() {
    console.log("asd");
  }

  componentWillUnmount() {
    console.log("видалили тудушки");
  }

  render() {
    return (
      <li>
        <p>{this.props.text}</p>
        <input
          type="checkbox"
          checked={this.props.completed}
          onChange={this.onChangeHandler}
        />
        <button onClick={(e) => this.props.delete(this.props.id)}>
          Видалити
        </button>
      </li>
    );
  }
}

export default TodoItem;
