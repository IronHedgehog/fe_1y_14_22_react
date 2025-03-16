import { Component } from "react";
import BookList from "./components/BookList";
import Filter from "./components/Filter";
import Form from "./components/Form";

class App extends Component {
  state = {
    books: [
      {
        id: 1,
        title: "Книжка-1",
        author: "Автор-1",
        favorite: "true",
        firstRead: "погано",
        stars: 10,
      },
      {
        id: 2,
        title: "Книжка-2",
        author: "Автор-2",
        favorite: "false",
        firstRead: "Добре",
        stars: 5,
      },
      {
        id: 3,
        title: "Книжка-3",
        author: "Автор-1",
        favorite: "true",
        firstRead: "Погано",
        stars: 7,
      },
      {
        id: 4,
        title: "Книжка-4",
        author: "Автор-4",
        favorite: "true",
        firstRead: "Добре",
        stars: 8,
      },
      {
        id: 5,
        title: "Книжка-5",
        author: "Автор-2",
        favorite: "false",
        firstRead: "Добре",
        stars: 9,
      },
    ],
    filterByTitle: "",
    filterByAuthor: "",
  };
  //
  addBook = (newBook) => {
    const findAnotherOne = this.state.books.find(
      (book) => book.title.toLowerCase() === newBook.title.toLowerCase()
    );

    if (findAnotherOne) {
      alert(`Книжка під назвою ${newBook.title} вже є у бібліотеці`);
      return;
    } else {
      this.setState((prev) => ({ books: [...prev.books, newBook] }));
    }
  };

  render() {
    const { books } = this.state;
    const { addBook } = this;
    return (
      <div>
        <Form addBook={addBook} />
        <BookList books={books} />
        <Filter />
      </div>
    );
  }
}

export default App;
