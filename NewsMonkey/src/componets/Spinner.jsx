import { Component } from "react";

export default class Spinner extends Component {
  render() {
    return (
      <div className="flex flex-col justify-center items-center h-screen gap-4">
        <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>

        <p className="text-lg font-semibold text-gray-700">Loading News...</p>
      </div>
    );
  }
}
