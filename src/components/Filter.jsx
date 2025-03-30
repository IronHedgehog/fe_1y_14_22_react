import { Component } from "react";

class Filter extends Component {
  render() {
    return (
      <label>
        <span>Filter by text</span>
        <input
          type="text"
          autoComplete="off"
          //   value={this.props.filterValue}
          onChange={this.props.addFilter}
        />
      </label>
    );
  }
}

export default Filter;
