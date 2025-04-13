import { nanoid } from "nanoid";
import { Component } from "react";
import NewsItem from "./NewsItem";

class NewsList extends Component {
  render() {
    return (
      <ul>
        {this.props.news.map(({ author, content, description, title }) => {
          return (
            <NewsItem
              key={nanoid()}
              author={author}
              content={content}
              description={description}
              title={title}
            />
          );
        })}
      </ul>
    );
  }
}

export default NewsList;
