import { Component } from "react";
import BookItem from "./BookItem";

class BookList extends Component {
  render() {
    const { books } = this.props;
    return (
      <ul>
        {books.map(({ id, title, author }) => {
          return <BookItem key={id} title={title} author={author} />;
        })}
      </ul>
    );
  }
}

export default BookList;
