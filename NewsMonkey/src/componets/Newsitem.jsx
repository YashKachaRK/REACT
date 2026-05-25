import { Component } from "react";

export default class Newsitem extends Component {
  handleImageError = (e) => {
    e.target.onerror = null;
    e.target.src = "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=800&q=80";
  };

  render() {
    let { title, description, imgUrl, newsUrl, time, author } = this.props;

    // Premium fallback image if none provided
    const fallbackImage = "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=800&q=80";
    const finalImgUrl = imgUrl && imgUrl.trim() !== "" ? imgUrl : fallbackImage;
    const formattedDate = time ? new Date(time).toUTCString().slice(0, 16) : "Date unavailable";
    const cleanDescription = description && description.trim() !== "" 
      ? description 
      : "No detailed description is currently available for this article. Click 'Read More' to explore the full story on the original news source.";

    return (
      <div className="h-full">
        <div className="w-full bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full overflow-hidden group">
          {/* Image Container with Hover Zoom */}
          <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-gray-100">
            <img
              src={finalImgUrl}
              alt={title || "News"}
              onError={this.handleImageError}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <span className="absolute top-3 left-3 bg-gradient-to-r from-red-500 to-rose-600 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md shadow-sm">
              Live Feed
            </span>
          </div>

          {/* Content Wrapper (takes remaining vertical space) */}
          <div className="p-5 flex flex-col flex-grow">
            {/* Top Date & Author Tag */}
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-gray-50 text-gray-500 text-[11px] font-medium px-2.5 py-0.5 rounded-full border border-gray-200">
                {formattedDate}
              </span>
            </div>

            {/* Title */}
            <h2 className="text-base sm:text-lg font-bold text-gray-900 line-clamp-2 mt-1 leading-snug hover:text-blue-600 transition duration-200">
              {title}
            </h2>

            {/* Description */}
            <p className="text-gray-500 text-sm mt-2 line-clamp-3 leading-relaxed flex-grow">
              {cleanDescription}
            </p>

            {/* Bottom Section containing Author & Button */}
            <div className="mt-4 pt-3 border-t border-gray-50 flex flex-col gap-3">
              <p className="text-xs text-gray-400">
                By <span className="font-medium text-gray-700">{author ? author.trim() : "Associated Press"}</span>
              </p>

              <a
                href={newsUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full text-center inline-block bg-gray-900 text-white py-2.5 px-4 rounded-xl text-sm font-semibold hover:bg-yellow-400 hover:text-gray-900 transition-colors duration-300 shadow-sm"
              >
                Read Full Story
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
