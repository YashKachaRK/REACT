import { Component } from "react";

export default class Newsitem extends Component {
  render() {
    let { title, description, imgUrl, newsUrl, time } = this.props;
    return (
      <div>
        <div className="max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition duration-300">
          <img src={imgUrl} alt="news" className="w-full h-52 object-cover" />

          {/* Content */}
          <div className="p-5">
            {/* Category */}
            <span className="bg-red-500 text-white text-xs px-3 py-1 rounded-full">
              Breaking News
            </span>
            <span className="bg-red-500 text-white text-xs px-3 py-1 rounded-full">
              {time}
            </span>

            {/* Title */}
            <h2 className="text-xl font-bold mt-3">{title}</h2>

            {/* Description */}
            <p className="text-gray-600 mt-2">{description}</p>

            {/* Button */}
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
              <a
                href={newsUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Read More
              </a>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
