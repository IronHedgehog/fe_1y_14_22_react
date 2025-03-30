import { Component } from "react";

class Form extends Component {
  state = { text: "" };

  constructor() {
    super();
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    const { value } = e.target;
    this.setState({
      text: value,
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const todo = { id: 6, completed: false, ...this.state };
    this.props.addTodo(todo);
    this.setState({
      text: "",
    });
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <label htmlFor="">
          <input type="text" value={this.state.text} onChange={this.onChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;
