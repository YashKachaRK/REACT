import { Component } from "react";

export default class Spinner extends Component {
  render() {
    return (
      <div className="flex flex-col justify-center items-center h-96 gap-4 w-full">
        <div className="w-14 h-14 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin shadow-md"></div>
        <p className="text-base font-medium text-gray-500 tracking-wide animate-pulse">Loading latest articles...</p>
      </div>
    );
  }
}
