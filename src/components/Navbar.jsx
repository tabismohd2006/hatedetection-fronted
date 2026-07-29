import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-slate-900 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link
            to="/"
            className="text-xl sm:text-2xl font-bold text-cyan-400"
          >
            HateShield AI
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            <li>
              <Link to="/" className="hover:text-cyan-400 transition">
                Home
              </Link>
            </li>

            <li>
              <Link to="/dashboard" className="hover:text-cyan-400 transition">
                Dashboard
              </Link>
            </li>

            <li>
              <Link to="/history" className="hover:text-cyan-400 transition">
                History
              </Link>
            </li>

            <li>
              <Link to="/profile" className="hover:text-cyan-400 transition">
                Profile
              </Link>
            </li>
          </ul>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />

            <Link
              to="/login"
              className="px-4 py-2 border border-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-black transition"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="px-4 py-2 bg-cyan-400 text-black rounded-lg hover:bg-cyan-300 transition"
            >
              Register
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden mt-3 rounded-lg bg-slate-800 p-5 space-y-4">

            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="block hover:text-cyan-400"
            >
              Home
            </Link>

            <Link
              to="/dashboard"
              onClick={() => setMenuOpen(false)}
              className="block hover:text-cyan-400"
            >
              Dashboard
            </Link>

            <Link
              to="/history"
              onClick={() => setMenuOpen(false)}
              className="block hover:text-cyan-400"
            >
              History
            </Link>

            <Link
              to="/profile"
              onClick={() => setMenuOpen(false)}
              className="block hover:text-cyan-400"
            >
              Profile
            </Link>

            <ThemeToggle />

            <Link
              to="/login"
              onClick={() => setMenuOpen(false)}
              className="block text-center border border-cyan-400 rounded-lg py-2 hover:bg-cyan-400 hover:text-black transition"
            >
              Login
            </Link>

            <Link
              to="/register"
              onClick={() => setMenuOpen(false)}
              className="block text-center bg-cyan-400 text-black rounded-lg py-2 hover:bg-cyan-300 transition"
            >
              Register
            </Link>

          </div>
        )}

      </div>
    </nav>
  );
}

export default Navbar;