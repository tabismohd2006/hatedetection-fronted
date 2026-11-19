
import { Link } from "react-router-dom";
import {
  ShieldCheck,
  Mail,
  MapPin,
  ArrowUpRight,
  Heart,
} from "lucide-react";

function Footer() {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Dashboard", path: "/dashboard" },
    { name: "History", path: "/history" },
    { name: "Profile", path: "/profile" },
  ];

  return (
    <footer className="border-t border-purple-100 bg-white text-gray-600">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">

          {/* Brand */}
          <div>
            <Link to="/" className="inline-flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-purple-600 to-violet-500 text-white shadow-md shadow-purple-200">
                <ShieldCheck size={25} />
              </div>

              <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
                HateShield <span className="text-purple-600">AI</span>
              </h2>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-gray-500">
              An AI-powered platform designed to identify potentially
              hateful, offensive, and toxic language to support safer
              online conversations.
            </p>

            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-purple-100 bg-purple-50 px-3 py-2 text-xs font-medium text-purple-700">
              <span className="h-2 w-2 rounded-full bg-purple-600" />
              AI-powered content analysis
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-bold text-gray-900">
              Quick Links
            </h3>

            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="group inline-flex items-center gap-2 text-sm text-gray-500 transition-colors hover:text-purple-700"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-purple-300 transition-colors group-hover:bg-purple-600" />
                    {link.name}
                    <ArrowUpRight
                      size={13}
                      className="opacity-0 transition-opacity group-hover:opacity-100"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-base font-bold text-gray-900">
              Get in Touch
            </h3>

            <p className="mt-5 text-sm leading-6 text-gray-500">
              Have questions about the platform? Reach out using the
              contact details below.
            </p>

            <div className="mt-5 space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-50 text-purple-600">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Email</p>
                  <a
                    href="mailto:support@hateshield.ai"
                    className="text-sm font-medium text-gray-700 transition hover:text-purple-700"
                  >
                    support@hateshield.ai
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-50 text-purple-600">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Location</p>
                  <p className="text-sm font-medium text-gray-700">
                    India
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-100 pt-6 text-center sm:flex-row sm:text-left">
          <p className="text-xs leading-6 text-gray-500 sm:text-sm">
            © {new Date().getFullYear()} HateShield AI. All rights reserved.
          </p>

          <p className="inline-flex items-center gap-1.5 text-xs text-gray-500 sm:text-sm">
            Built to encourage safer conversations
            <Heart size={14} className="fill-purple-500 text-purple-500" />
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
