import { Component } from "react";

class BookItem extends Component {
  render() {
    const { title, author } = this.props;
    return (
      <li>
        <p>{title}</p>
        <p>{author}</p>
      </li>
    );
  }
}

export default BookItem;
