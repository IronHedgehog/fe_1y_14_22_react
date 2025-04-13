import { Component } from "react";

class NewsItem extends Component {
  render() {
    const { title, author, description, content } = this.props;
    return (
      <li>
        <h2>{title}</h2>
        <p>{author}</p>
        <p>{description}</p>
        <p>{content}</p>
      </li>
    );
  }
}

export default NewsItem;
