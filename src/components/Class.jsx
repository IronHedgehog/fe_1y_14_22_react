import { Component } from "react";

class Class extends Component {
  render() {
    return <h1>{this.props.method()}</h1>;
  }
}

export default Class;
