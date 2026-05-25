import { Component } from "react";
import {Link, Router} from "react-router-dom"
export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="bg-gray-900 text-white shadow-lg">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Logo */}
            <h1 className="text-3xl font-bold text-yellow-400">NewsMonkey</h1>
            <Router>
            {/* Menu */}
            <ul className="hidden md:flex gap-6 text-lg font-medium">

              <li>
                <Link to ="" className="hover:text-yellow-400 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to ="" className="hover:text-yellow-400 transition">
                  Business
                </Link>
              </li>
              <li>
                <Link to ="" className="hover:text-yellow-400 transition">
                  Sports
                </Link>
              </li>
              <li>
                <Link to ="" className="hover:text-yellow-400 transition">
                  Entertainment
                </Link>
              </li>
              <li>
                <Link to ="" className="hover:text-yellow-400 transition">
                  General
                </Link>
              </li>
              <li>
                <Link to ="" className="hover:text-yellow-400 transition">
                  Health
                </Link>
              </li>
              <li>
                <Link to ="" className="hover:text-yellow-400 transition">
                  Science
                </Link>
              </li>
              <li>
                <Link to ="" className="hover:text-yellow-400 transition">
                  Sports
                </Link>
              </li>
              <li>
                <Link to ="" className="hover:text-yellow-400 transition">
                  Technology
                </Link>
              </li>
            </ul>
            </Router>
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
