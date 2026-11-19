
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import {
  Menu,
  X,
  ShieldCheck,
  LayoutDashboard,
  History,
  UserRound,
  House,
  ChevronRight,
} from "lucide-react";

function Sidebar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const links = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      name: "History",
      path: "/history",
      icon: History,
    },
    {
      name: "Profile",
      path: "/profile",
      icon: UserRound,
    },
    {
      name: "Home",
      path: "/",
      icon: House,
    },
  ];

  const isActive = (path) => location.pathname === path;

  const navLinkClass = (path) =>
    `group flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition-all duration-200 ${
      isActive(path)
        ? "bg-purple-100 text-purple-800 shadow-sm"
        : "text-gray-600 hover:bg-purple-50 hover:text-purple-700"
    }`;

  const closeMenu = () => setOpen(false);

  return (
    <>
      {/* Mobile Header */}
      <div className="sticky top-0 z-40 flex items-center justify-between border-b border-purple-100 bg-white/95 px-4 py-3 shadow-sm backdrop-blur-md md:hidden">
        <Link
          to="/dashboard"
          onClick={closeMenu}
          className="flex items-center gap-3"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-purple-600 to-violet-500 text-white shadow-md shadow-purple-200">
            <ShieldCheck size={23} />
          </div>

          <span className="text-lg font-extrabold tracking-tight text-gray-900">
            HateShield <span className="text-purple-600">AI</span>
          </span>
        </Link>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-purple-100 text-purple-700 transition hover:bg-purple-50"
        >
          {open ? <X size={22} /> : <Menu size={23} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="fixed inset-x-0 top-[64px] z-40 border-b border-purple-100 bg-white p-4 shadow-xl md:hidden">
          <p className="mb-3 px-3 text-xs font-bold uppercase tracking-widest text-gray-400">
            Navigation
          </p>

          <nav className="flex flex-col gap-2">
            {links.map((link) => {
              const Icon = link.icon;

              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={closeMenu}
                  className={navLinkClass(link.path)}
                >
                  <Icon size={19} />
                  <span className="flex-1">{link.name}</span>

                  {isActive(link.path) && (
                    <ChevronRight size={17} />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="mt-4 rounded-xl bg-purple-50 p-4">
            <div className="flex items-center gap-3">
              <ShieldCheck size={22} className="text-purple-600" />
              <div>
                <p className="text-sm font-semibold text-gray-800">
                  HateShield AI
                </p>
                <p className="mt-1 text-xs text-gray-500">
                  AI-powered content moderation
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Desktop Sidebar */}
      <aside className="hidden min-h-screen w-64 shrink-0 flex-col border-r border-purple-100 bg-white p-5 md:flex lg:p-6">
        {/* Brand */}
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-purple-600 to-violet-500 text-white shadow-md shadow-purple-200">
            <ShieldCheck size={25} />
          </div>

          <div>
            <h1 className="text-lg font-extrabold tracking-tight text-gray-900">
              HateShield <span className="text-purple-600">AI</span>
            </h1>
            <p className="mt-0.5 text-[9px] font-semibold tracking-[0.14em] text-gray-400">
              CONTENT SAFETY
            </p>
          </div>
        </Link>

        {/* Navigation */}
        <div className="mt-10">
          <p className="mb-4 px-3 text-xs font-bold uppercase tracking-widest text-gray-400">
            Workspace
          </p>

          <nav className="flex flex-col gap-2">
            {links.map((link) => {
              const Icon = link.icon;

              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={navLinkClass(link.path)}
                >
                  <Icon size={19} />
                  <span className="flex-1">{link.name}</span>

                  {isActive(link.path) && (
                    <ChevronRight size={17} />
                  )}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Bottom Info */}
        <div className="mt-auto pt-10">
          <div className="rounded-2xl border border-purple-100 bg-gradient-to-br from-purple-50 to-white p-4">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-purple-100 text-purple-700">
              <ShieldCheck size={20} />
            </div>

            <p className="mt-3 text-sm font-bold text-gray-800">
              Safer conversations
            </p>

            <p className="mt-1 text-xs leading-5 text-gray-500">
              AI assistance for identifying potentially harmful content.
            </p>
          </div>

          <p className="mt-5 text-center text-xs text-gray-400">
            © {new Date().getFullYear()} HateShield AI
          </p>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
