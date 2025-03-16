import { Component } from "react";

class Filter extends Component {
  render() {
    return (
      <div>
        <label>
          FilterByAuthor:
          <input type="text" />
        </label>
        <label>
          FilterByTitle:
          <input type="text" />
        </label>
      </div>
    );
  }
}

export default Filter;
