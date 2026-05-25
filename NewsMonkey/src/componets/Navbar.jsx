import { Component } from "react";
import { Link, NavLink } from "react-router-dom";

export default class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
  }

  toggleMenu = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  closeMenu = () => {
    this.setState({ isOpen: false });
  };

  render() {
    const activeStyle = "text-yellow-400 font-bold border-b-2 border-yellow-400 pb-1";
    const inactiveStyle = "text-gray-300 hover:text-yellow-400 transition-colors duration-200 pb-1";

    const activeMobileStyle = "text-yellow-400 font-bold bg-gray-800/60 px-3 py-2 rounded-xl block";
    const inactiveMobileStyle = "text-gray-300 hover:text-yellow-400 px-3 py-2 rounded-xl block transition-colors duration-200";

    const categories = [
      { name: "Home", path: "/" },
      { name: "Business", path: "/business" },
      { name: "Sports", path: "/sports" },
      { name: "Entertainment", path: "/entertainment" },
      { name: "Health", path: "/health" },
      { name: "Science", path: "/science" },
      { name: "Technology", path: "/technology" },
    ];

    return (
      <nav className="sticky top-0 z-50 bg-gray-900/95 backdrop-blur-md border-b border-gray-800 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link
              to="/"
              onClick={this.closeMenu}
              className="text-2xl font-black tracking-wider text-yellow-400 flex items-center gap-2 hover:scale-102 transition duration-200"
            >
              <span className="text-3xl">🐒</span> NewsMonkey
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-6">
              <ul className="flex items-center gap-6 text-sm font-semibold">
                {categories.map((cat) => (
                  <li key={cat.path}>
                    <NavLink
                      to={cat.path}
                      className={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
                    >
                      {cat.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Subscribe / Desktop CTA */}
            <div className="hidden md:flex items-center">
              <button className="bg-yellow-400 text-gray-900 px-5 py-2 rounded-xl font-bold hover:bg-yellow-300 hover:scale-[1.03] transition-all duration-200 shadow-sm text-sm">
                Subscribe
              </button>
            </div>

            {/* Hamburger Toggle (Mobile only) */}
            <div className="flex md:hidden">
              <button
                onClick={this.toggleMenu}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-xl text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-yellow-400 transition duration-200"
                aria-controls="mobile-menu"
                aria-expanded={this.state.isOpen}
              >
                <span className="sr-only">Open main menu</span>
                {this.state.isOpen ? (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Panel */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            this.state.isOpen ? "max-h-screen opacity-100 border-t border-gray-800" : "max-h-0 opacity-0 pointer-events-none"
          }`}
          id="mobile-menu"
        >
          <div className="px-2 pt-3 pb-4 space-y-1.5 sm:px-3 bg-gray-900">
            {categories.map((cat) => (
              <NavLink
                key={cat.path}
                to={cat.path}
                onClick={this.closeMenu}
                className={({ isActive }) => (isActive ? activeMobileStyle : inactiveMobileStyle)}
              >
                {cat.name}
              </NavLink>
            ))}
            <div className="pt-4 pb-2 px-3">
              <button className="w-full bg-yellow-400 text-gray-900 py-2.5 rounded-xl font-bold hover:bg-yellow-300 transition duration-200 text-sm shadow-md">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}