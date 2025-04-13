import axios from "axios";
axios.defaults.baseURL = "https://newsapi.org/v2/";

export function takeRandomSource() {
  const sources = ["bleacher-report", "abc-news", "techcrunch"];
  const randomSource = Math.floor(Math.random() * sources.length);
  return sources[randomSource];
}

export const fetchNews = async (source = "techcrunch") => {
  try {
    const { data } = await axios.get(
      `top-headlines?sources=${source}&apiKey=2667a6ad789c4db2a2e882b6e2781cbb`
    );
    return data.articles;
  } catch (error) {}
};
