import { Component } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import LoadingBar from "react-top-loading-bar";
export default class News extends Component {
  static defaultProps = {
    cat: "general",
    country: "us",
    pageSize: 10,
  };

  static propTypes = {
    cat: PropTypes.string,
    country: PropTypes.string,
    pageSize: PropTypes.number,
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
      error: null,
      progress: 0,
    };
    document.title = this.props.cat;
  }

  fetchNews = async (page) => {
    try {
      this.setState({ loading: true, error: null });
      this.setState({ progress: 10 });

      const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.cat}&apiKey=${this.props.apiKey}&page=${page}&pageSize=${this.props.pageSize}`;

      const response = await fetch(url);
      this.setState({ progress: 50 });

      const parseData = await response.json();

      if (parseData.status === "error") {
        throw new Error(parseData.message || "Failed to fetch news.");
      }

      this.setState({
        articles: parseData.articles || [],
        totalResults: parseData.totalResults || 0,
        page: page,
        loading: false,
        progress: 100,
      });
    } catch (err) {
      console.error("Fetch News Error:", err);
      this.setState({
        error:
          "Unable to retrieve news feeds at this moment. Please check your network connection or API key.",
        loading: false,
      });
    }
  };

  async componentDidMount() {
    await this.fetchNews(1);
  }

  handleNextPage = async () => {
    const maxPage = Math.ceil(this.state.totalResults / this.props.pageSize);
    if (this.state.page < maxPage) {
      await this.fetchNews(this.state.page + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  handleBackPage = async () => {
    if (this.state.page > 1) {
      await this.fetchNews(this.state.page - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  fatchMoreData = async () => {
    let nextPage = this.state.page + 1;
    this.setState({ progress: 10 });

    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.cat}&apiKey=${this.props.apiKey}&page=${nextPage}&pageSize=${this.props.pageSize}`;
    this.setState({ progress: 50 });

    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      page: nextPage,
      articles: this.state.articles.concat(parseData.articles),
      progress: 100,
    });
  };
  render() {
    const { articles, page, totalResults, error } = this.state;
    // const { articles, loading, page, totalResults, error } = this.state;
    const categoryName =
      this.props.cat.charAt(0).toUpperCase() + this.props.cat.slice(1);
    // const maxPage = Math.ceil(totalResults / this.props.pageSize);
    // const maxPage = Math.ceil(totalResults / this.props.pageSize);

    return (
      <div className="bg-gray-50/50 min-h-screen pb-16">
        <LoadingBar color="#f11946" progress={this.state.progress} />
        {/* Styled Category Header Banner */}
        <div className="bg-gray-900 text-white py-12 px-6 shadow-sm border-b border-gray-800">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <span className="text-yellow-400 text-xs font-bold uppercase tracking-widest bg-yellow-400/10 px-3 py-1 rounded-md">
                Discover
              </span>
              <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mt-2 text-white">
                Top Headlines{" "}
                <span className="text-yellow-400">— {categoryName}</span>
              </h1>
              <p className="text-gray-400 text-sm mt-1.5">
                Stay updated with the latest happenings worldwide in{" "}
                {categoryName.toLowerCase()}.
              </p>
            </div>
            {totalResults > 0 && (
              <span className="text-xs bg-gray-800 text-gray-300 border border-gray-700 px-4 py-2 rounded-xl font-medium">
                Showing {articles.length} of {totalResults} articles
              </span>
            )}
          </div>
        </div>

        {/* Main Content Area */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
          {error ? (
            <div className="bg-red-50 border border-red-200 rounded-2xl p-6 text-center max-w-lg mx-auto my-12 shadow-sm">
              <div className="text-red-500 text-5xl mb-3">⚠️</div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">
                Failed to Load News
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {error}
              </p>
              <button
                onClick={() => this.fetchNews(page)}
                className="bg-red-600 text-white px-4 py-2 rounded-xl text-sm font-semibold hover:bg-red-700 transition"
              >
                Try Again
              </button>
            </div>
          ) : (
            //  loading ? (
            //   <Spinner />
            // ) :
            //  articles.length === 0 ? (
            //   <div className="text-center py-20">
            //     <span className="text-5xl">📰</span>
            //     <h3 className="text-xl font-bold text-gray-700 mt-4">No Articles Available</h3>
            //     <p className="text-gray-500 text-sm mt-1">Please try searching another category or refreshing later.</p>
            //   </div>
            // ) :
            <>
              {/* Responsive Grid */}
              <InfiniteScroll
                dataLength={this.state.articles.length}
                next={this.fatchMoreData}
                hasMore={true}
                loader={<Spinner />}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
                  {articles.map((element) => (
                    <Newsitem
                      key={element.url || Math.random()}
                      title={element.title}
                      description={element.description}
                      imgUrl={element.urlToImage}
                      newsUrl={element.url}
                      time={element.publishedAt}
                      author={element.author}
                    />
                  ))}
                </div>
              </InfiniteScroll>
              {/* Bottom Pagination controls */}
              {/* <div className="flex flex-wrap justify-between items-center gap-4 mt-12 pt-8 border-t border-gray-200">
                <button
                  className="px-5 py-2.5 bg-white text-gray-700 border border-gray-200 rounded-xl shadow-sm font-semibold hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition duration-200 flex items-center gap-2"
                  onClick={this.handleBackPage}
                  disabled={page <= 1 || loading}
                >
                  ← Previous
                </button>

                <div className="flex items-center gap-2">
                  <span className="px-4 py-2 bg-white border border-gray-200 rounded-xl text-gray-600 text-sm font-medium shadow-sm">
                    Page {page} <span className="text-gray-400">/</span>{" "}
                    {maxPage || 1}
                  </span>
                </div>

                <button
                  className="px-5 py-2.5 bg-gray-900 text-white rounded-xl shadow-md font-semibold hover:bg-yellow-400 hover:text-gray-900 disabled:opacity-40 disabled:cursor-not-allowed transition duration-200 flex items-center gap-2"
                  onClick={this.handleNextPage}
                  disabled={page >= maxPage || loading}
                >
                  Next →
                </button>
              </div> */}
            </>
          )}
        </div>
      </div>
    );
  }
}
