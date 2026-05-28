import { useState } from "react";
import { Menu, X, NotebookPen, Home, BookOpen, Star, User } from "lucide-react";

import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Home", icon: <Home size={18} />, path: "/" },
    { name: "Notes", icon: <BookOpen size={18} />, path: "/Notes" },
    { name: "Favorites", icon: <Star size={18} />, path: "/Favorites" },
    { name: "Profile", icon: <User size={18} />, path: "/Profile" },
  ];

  return (
    <nav className="bg-black text-white shadow-lg border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-5">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer">
            <NotebookPen className="text-yellow-400" size={28} />
            <h1 className="text-2xl font-bold tracking-wide">
              i<span className="text-yellow-400">Notebook</span>
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <NavLink
                key={index}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-2 transition duration-300 ${
                    isActive
                      ? "text-yellow-400 font-semibold"
                      : "hover:text-yellow-400"
                  }`
                }
              >
                {item.icon}
                {item.name}
              </NavLink>
            ))}
          </div>

          {/* Add Note Button */}
          <button className="hidden md:block bg-yellow-400 text-black px-5 py-2 rounded-xl font-semibold hover:scale-105 transition duration-300">
            + Add Note
          </button>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setOpen(!open)}>
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden pb-5 pt-3 flex flex-col gap-4 animate-fadeIn">
            {navItems.map((item, index) => (
              <NavLink
                key={index}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-2 transition duration-300 ${
                    isActive
                      ? "text-yellow-400 font-semibold"
                      : "hover:text-yellow-400"
                  }`
                }
              >
                {item.icon}
                {item.name}
              </NavLink>
            ))}

            <button className="bg-yellow-400 text-black py-3 rounded-xl font-semibold mt-2">
              + Add Note
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
