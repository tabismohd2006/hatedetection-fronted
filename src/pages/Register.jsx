import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4 py-10">

      <div className="w-full max-w-md bg-slate-900 rounded-2xl shadow-2xl p-6 sm:p-8">

        <h1 className="text-2xl sm:text-3xl font-bold text-white text-center">
          Create Account
        </h1>

        <p className="text-gray-400 text-center mt-2 text-sm sm:text-base">
          Join HateShield AI
        </p>

        <form className="mt-8 space-y-5">

          <div>
            <label className="block text-white mb-2">
              Name
            </label>

            <input
              type="text"
              placeholder="Enter your Name"
              className="w-full p-3 rounded-lg bg-slate-800 text-white border border-slate-700 focus:border-cyan-400 outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-white mb-2">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 rounded-lg bg-slate-800 text-white border border-slate-700 focus:border-cyan-400 outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-white mb-2">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              className="w-full p-3 rounded-lg bg-slate-800 text-white border border-slate-700 focus:border-cyan-400 outline-none"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-cyan-400 text-black py-3 rounded-lg font-semibold hover:bg-cyan-300 transition"
          >
            Register
          </button>

        </form>

        <p className="text-center text-gray-400 mt-6 text-sm sm:text-base">
          Already have an account?

          <Link
            to="/login"
            className="text-cyan-400 ml-2 hover:underline"
          >
            Login
          </Link>

        </p>

      </div>

    </div>
  );
}

export default Register;