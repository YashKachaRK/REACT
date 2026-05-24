import { Component } from "react";
import Newsitem from "./Newsitem";

export default class News extends Component {

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
    };
  }

  async componentDidMount() {
    try {
      let url =
        "https://newsapi.org/v2/everything?q=tesla&from=2026-04-24&sortBy=publishedAt&apiKey=5da591db591a4c2488c42a12b2bef658";
      let data = await fetch(url);
      let parseData = await data.json();
      console.log(parseData);
      this.setState({ articles: parseData.articles || [] });
    } catch (error) {
      console.log(error);
    }
  } // life cycle method it render when nichenu componet akhu run thay pachhi te run thay
  render() {
    return (
      <div className="grid grid-cols-6 gap-6 p-6">
        {this.state.articles &&
          this.state.articles.map((element) => {
            return (
              <Newsitem
                key={element.url}
                title={element.title}
                description={element.description}
                imgUrl={element.urlToImage}
                newsUrl = {element.url}
                time={element.publishedAt}
              />
            );
          })}
      </div>
    );
  }
}
