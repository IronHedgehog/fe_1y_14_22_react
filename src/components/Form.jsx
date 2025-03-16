import { nanoid } from "nanoid";
import { Component } from "react";

const FIRSTREAD = {
  GOOD: "Добре",
  BAD: "Погано",
};

class Form extends Component {
  state = {
    title: "",
    author: "",
    favorite: false,
    firstRead: "Погано",
    stars: 0,
  };

  handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    this.setState({
      [name]: type === "checkbox" ? checked : value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { addBook } = this.props;
    const book = {
      ...this.state,
      stars: Number(this.state.stars),
      id: nanoid(10),
    };
    addBook(book);
    this.setState({ title: "", author: "" });
  };

  render() {
    const { title, author, favorite, firstRead, stars } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          onChange={this.handleChange}
          value={title}
          type="text"
          placeholder="title"
          name="title"
          autoComplete="off"
          required
        />
        <input
          onChange={this.handleChange}
          value={author}
          type="text"
          placeholder="author"
          name="author"
        />
        <input
          onChange={this.handleChange}
          checked={favorite}
          type="checkbox"
          placeholder="author"
          name="favorite"
        />

        <label>
          Добре
          <input
            type="radio"
            name="firstRead"
            checked={firstRead === FIRSTREAD.GOOD}
            onChange={this.handleChange}
            value={FIRSTREAD.GOOD}
          />
        </label>
        <label>
          Погано
          <input
            checked={firstRead === FIRSTREAD.BAD}
            type="radio"
            name="firstRead"
            onChange={this.handleChange}
            value={FIRSTREAD.BAD}
          />
        </label>

        <select name="stars" value={stars} onChange={this.handleChange}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
          <option value={6}>6</option>
          <option value={7}>7</option>
          <option value={8}>8</option>
          <option value={9}>9</option>
          <option value={10}>10</option>
        </select>
        <button type="submit">addBook</button>
      </form>
    );
  }
}

export default Form;
