import { Component } from "react";
import Newsitem from "./Newsitem";

export default class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    try {
      let url =
        "https://newsapi.org/v2/everything?q=tesla&from=2026-04-24&sortBy=publishedAt&apiKey=5da591db591a4c2488c42a12b2bef658&page=1 & pageSize=20";
      let data = await fetch(url);
      let parseData = await data.json();
      console.log(parseData);
      this.setState({ articles: parseData.articles || [] });
    } catch (error) {
      console.log(error);
    }
  } // life cycle method it render when nichenu componet akhu run thay pachhi te run thay

  handleNextPage = async () => {
    console.log("Working next page");

    let nextPage = this.state.page + 1;

    let url = `https://newsapi.org/v2/everything?q=tesla&from=2026-04-24&sortBy=publishedAt&apiKey=5da591db591a4c2488c42a12b2bef658&page=${nextPage} & pageSize=20` ;

    let data = await fetch(url);
    let parseData = await data.json();

    console.log(parseData);

    this.setState({
      page: nextPage,
      articles: parseData.articles || [],
    });
  };

  handleBackPage = async () => {
    console.log("Back Page ");
    let backPage = this.state.page - 1;
    let url = `https://newsapi.org/v2/everything?q=tesla&from=2026-04-24&sortBy=publishedAt&apiKey=5da591db591a4c2488c42a12b2bef658&page=${backPage} & pageSize=20`;

    let data = await fetch(url);
    let parseData = await data.json();

    this.setState({
      page: backPage,
      articles: parseData.articles || [],
    });
  };

  render() {
    return (
      <div>
        <div className="flex justify-center items-center gap-4 my-8">
          {/* Previous Button */}
          <button
            className="px-6 py-2 bg-gray-800 text-white rounded-xl shadow-md hover:bg-gray-700 hover:scale-105 transition duration-300"
            onClick={this.handleBackPage}
            disabled={this.state.page <= 1}
          >
            ← Previous
          </button>

          {/* Page Number */}
          <span className="px-4 py-2 bg-gray-100 rounded-lg text-gray-700 font-semibold shadow">
            Page {this.state.page}
          </span>

          {/* Next Button */}
          <button
            className="px-6 py-2 bg-blue-600 text-white rounded-xl shadow-md hover:bg-blue-700 hover:scale-105 transition duration-300"
            onClick={this.handleNextPage}
          >
            Next →
          </button>
        </div>
        <div className="grid grid-cols-6 gap-6 p-6">
          {this.state.articles &&
            this.state.articles.map((element) => {
              return (
                <Newsitem
                  key={element.url}
                  title={element.title}
                  description={element.description}
                  imgUrl={
                    element.urlToImage
                      ? element.urlToImage
                      : "https://img.magnific.com/premium-vector/file-folder-mascot-character-design-vector_166742-4413.jpg?semt=ais_hybrid&w=740&q=80"
                  }
                  newsUrl={element.url}
                  time={element.publishedAt}
                />
              );
            })}
        </div>
      </div>
    );
  }
}
