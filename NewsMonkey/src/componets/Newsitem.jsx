import { Component } from "react";

export default class Newsitem extends Component {
  render() {
    let { title, description, imgUrl, newsUrl, time, author } = this.props;

    return (
      <div>
        <div className="w-full bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition duration-300">
          {/* Image */}
          <img
            src={imgUrl}
            alt="news"
            className="w-full h-48 sm:h-52 object-cover"
          />

          {/* Content */}
          <div className="p-5">
            {/* Top Tags */}
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="bg-red-500 text-white text-xs px-3 py-1 rounded-full">
                Breaking News
              </span>

              <span className="bg-gray-800 text-white text-xs px-3 py-1 rounded-full">
                {new Date(time).toGMTString()}
              </span>
            </div>

            {/* Title */}
            <h2 className="text-lg sm:text-xl font-bold mt-3">{title}</h2>

            {/* Description */}
            <p className="text-gray-600 mt-2">{description}</p>

            {/* Author */}
            <p className="text-sm text-gray-500 mt-3">
              By{" "}
              <span className="font-semibold">
                {author ? author : "Unknown"}
              </span>
            </p>

            {/* Button */}
            <a
              href={newsUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}
