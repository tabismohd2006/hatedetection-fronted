import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { useState } from "react";

function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile Navbar */}
      <div className="md:hidden bg-slate-900 text-white flex items-center justify-between px-4 py-4">
        <h1 className="text-xl font-bold text-cyan-400">
          HateShield AI
        </h1>

        <button onClick={() => setOpen(!open)}>
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-slate-900 text-white px-4 pb-4 flex flex-col gap-4">
          <Link
            to="/dashboard"
            onClick={() => setOpen(false)}
            className="hover:text-cyan-400"
          >
            Dashboard
          </Link>

          <Link
            to="/history"
            onClick={() => setOpen(false)}
            className="hover:text-cyan-400"
          >
            History
          </Link>

          <Link
            to="/profile"
            onClick={() => setOpen(false)}
            className="hover:text-cyan-400"
          >
            Profile
          </Link>

          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="hover:text-cyan-400"
          >
            Home
          </Link>
        </div>
      )}

      {/* Desktop Sidebar */}
      <div className="hidden md:flex w-64 min-h-screen bg-slate-900 text-white p-6 flex-col">

        <h1 className="text-2xl font-bold text-cyan-400 mb-10">
          HateShield AI
        </h1>

        <div className="flex flex-col gap-5">

          <Link
            to="/dashboard"
            className="hover:text-cyan-400 transition"
          >
            Dashboard
          </Link>

          <Link
            to="/history"
            className="hover:text-cyan-400 transition"
          >
            History
          </Link>

          <Link
            to="/profile"
            className="hover:text-cyan-400 transition"
          >
            Profile
          </Link>

          <Link
            to="/"
            className="hover:text-cyan-400 transition"
          >
            Home
          </Link>

        </div>

      </div>
    </>
  );
}

export default Sidebar;