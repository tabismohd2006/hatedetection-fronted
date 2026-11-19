import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X, ShieldCheck, Sparkles } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Dashboard", path: "/dashboard" },
    { name: "History", path: "/history" },
    { name: "Profile", path: "/profile" },
  ];

  const isActive = (path) => location.pathname === path;

  const linkClass = (path) =>
    `rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200 ${
      isActive(path)
        ? "bg-purple-50 text-purple-700"
        : "text-gray-600 hover:bg-purple-50 hover:text-purple-700"
    }`;

  return (
    <nav className="sticky top-0 z-50 border-b border-purple-100 bg-white/95 text-gray-800 shadow-sm backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-[72px] items-center justify-between">

          {/* Logo */}
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="group flex items-center gap-3"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-purple-600 to-violet-500 text-white shadow-md shadow-purple-200 transition-transform duration-200 group-hover:scale-105">
              <ShieldCheck size={25} strokeWidth={2.2} />
            </div>

            <div>
              <span className="block text-lg font-extrabold tracking-tight text-gray-900 sm:text-xl">
                HateShield{" "}
                <span className="text-purple-600">AI</span>
              </span>
              <span className="hidden text-[10px] font-medium tracking-[0.16em] text-gray-500 sm:block">
                SMART CONTENT SAFETY
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link to={link.path} className={linkClass(link.path)}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-3 md:flex">
            <ThemeToggle />

            <Link
              to="/login"
              className="rounded-xl border border-purple-200 px-4 py-2.5 text-sm font-semibold text-purple-700 transition-all hover:border-purple-300 hover:bg-purple-50"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="inline-flex items-center gap-2 rounded-xl bg-purple-600 px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-purple-200 transition-all hover:-translate-y-0.5 hover:bg-purple-700 hover:shadow-lg"
            >
              <Sparkles size={16} />
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-purple-100 text-purple-700 transition hover:bg-purple-50 md:hidden"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="border-t border-purple-100 py-5 md:hidden">
            <div className="space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className={`block rounded-xl px-4 py-3 text-sm font-semibold transition ${
                    isActive(link.path)
                      ? "bg-purple-100 text-purple-800"
                      : "text-gray-600 hover:bg-purple-50 hover:text-purple-700"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="mt-4 flex items-center justify-between rounded-xl bg-purple-50 p-3">
              <span className="text-sm font-medium text-gray-700">
                Appearance
              </span>
              <ThemeToggle />
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
              <Link
                to="/login"
                onClick={() => setMenuOpen(false)}
                className="rounded-xl border border-purple-200 py-3 text-center text-sm font-semibold text-purple-700 transition hover:bg-purple-50"
              >
                Login
              </Link>

              <Link
                to="/register"
                onClick={() => setMenuOpen(false)}
                className="rounded-xl bg-purple-600 py-3 text-center text-sm font-semibold text-white transition hover:bg-purple-700"
              >
                Register
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;