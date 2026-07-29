function Footer() {
  return (
    <footer className="bg-black text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Logo */}
          <div>
            <h2 className="text-2xl font-bold text-cyan-400">
              HateShield AI
            </h2>

            <p className="mt-3 text-sm leading-6">
              AI-powered platform to detect hate speech, offensive
              content and toxic text with high accuracy.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-3">
              Quick Links
            </h3>

            <ul className="space-y-2 text-sm">
              <li><a href="/">Home</a></li>
              <li><a href="/dashboard">Dashboard</a></li>
              <li><a href="/history">History</a></li>
              <li><a href="/profile">Profile</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-3">
              Contact
            </h3>

            <p className="text-sm">
              support@hateshield.ai
            </p>

            <p className="text-sm mt-2">
              India
            </p>
          </div>

        </div>

        <hr className="border-slate-700 my-8" />

        <p className="text-center text-sm">
          © 2026 HateShield AI. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}

export default Footer;