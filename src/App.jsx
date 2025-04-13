import { Component } from "react";
import MyLoader from "./components/MyLoader";
import NewsList from "./components/NewsList";
import { fetchNews, takeRandomSource } from "./services/api";

class App extends Component {
  state = {
    news: [],
    isLoading: false,
    error: null,
  };

  async componentDidMount() {
    this.setState({ isLoading: true });

    try {
      const response = await fetchNews(takeRandomSource());
      this.setState({ news: response });
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ isLoading: false });
    }
  }
  // componentDidUpdate() {}

  render() {
    return (
      <>
        {this.state.error && <div>{this.state.error}</div>}
        {this.state.isLoading && <MyLoader />}
        {this.state.news.length > 0 && <NewsList news={this.state.news} />}
      </>
    );
  }
}

export default App;
