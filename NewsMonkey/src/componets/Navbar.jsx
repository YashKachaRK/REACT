import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="bg-gray-900 text-white shadow-lg">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            {/* Logo */}
            <h1 className="text-3xl font-bold text-yellow-400">NewsMonkey</h1>

            {/* Menu */}
            <ul className="flex gap-6 text-lg font-medium">
              <li>
                <a href="#" className="hover:text-yellow-400 transition">
                  Home
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-yellow-400 transition">
                  Trending
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-yellow-400 transition">
                  Sports
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-yellow-400 transition">
                  Technology
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-yellow-400 transition">
                  Business
                </a>
              </li>
            </ul>

            {/* Button */}
            <button className="bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition">
              Subscribe
            </button>
          </div>
        </nav>
      </div>
    );
  }
}
