
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ShieldCheck, Mail, Lock, ArrowRight } from "lucide-react";

import api from "../services/api";
import { AuthContext } from "../context/AuthContext";

function Login() {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("/auth/login", {
        email,
        password,
      });

      login(res.data.user, res.data.token);

      alert("Login Successful");
      navigate("/dashboard");
    } catch (error) {
      alert(error.response?.data?.message || "Login Failed");
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF9FF] flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md">

        {/* Logo and branding */}
        <Link
          to="/"
          className="flex items-center justify-center gap-3 mb-8"
        >
          <div className="w-12 h-12 rounded-2xl bg-purple-600 flex items-center justify-center shadow-lg shadow-purple-200">
            <ShieldCheck className="w-7 h-7 text-white" />
          </div>

          <div>
            <h2 className="text-2xl font-extrabold text-gray-900">
              HateShield
            </h2>
            <p className="text-xs text-purple-600 font-medium">
              Safer conversations start here
            </p>
          </div>
        </Link>

        {/* Login card */}
        <div className="bg-white border border-purple-100 rounded-3xl shadow-xl shadow-purple-100/60 p-6 sm:p-9">

          <div className="text-center mb-8">
            <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-purple-50 flex items-center justify-center">
              <Lock className="w-7 h-7 text-purple-600" />
            </div>

            <h1 className="text-3xl font-bold text-gray-900">
              Welcome Back
            </h1>

            <p className="text-gray-500 mt-2 text-sm sm:text-base">
              Login to your HateShield account
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Email Address
              </label>

              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-purple-400" />

                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                  className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-gray-50 text-gray-900 border border-gray-200 outline-none transition focus:bg-white focus:border-purple-500 focus:ring-4 focus:ring-purple-100 placeholder:text-gray-400"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Password
              </label>

              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-purple-400" />

                <input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                  className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-gray-50 text-gray-900 border border-gray-200 outline-none transition focus:bg-white focus:border-purple-500 focus:ring-4 focus:ring-purple-100 placeholder:text-gray-400"
                  required
                />
              </div>
            </div>

            {/* Forgot password */}
            <div className="flex justify-end">
              <Link
                to="/forgot-password"
                className="text-sm font-semibold text-purple-600 hover:text-purple-800 hover:underline"
              >
                Forgot Password?
              </Link>
            </div>

            {/* Login button */}
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-purple-600 text-white py-3.5 rounded-xl font-semibold shadow-lg shadow-purple-200 transition hover:bg-purple-700 hover:shadow-xl active:scale-[0.99]"
            >
              Login to Account
              <ArrowRight className="w-5 h-5" />
            </button>

          </form>

          <div className="flex items-center gap-3 my-6">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-xs text-gray-400">WELCOME TO HATESHIELD</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          <p className="text-center text-gray-600 text-sm sm:text-base">
            Don't have an account?
            <Link
              to="/register"
              className="text-purple-600 font-bold ml-2 hover:text-purple-800 hover:underline"
            >
              Register
            </Link>
          </p>
        </div>

        <p className="text-center text-xs text-gray-400 mt-6">
          Helping build safer and more respectful online communities.
        </p>

        <div className="text-center mt-3">
          <Link
            to="/"
            className="text-sm text-purple-600 hover:text-purple-800 font-medium"
          >
            ← Back to Home
          </Link>
        </div>

      </div>
    </div>
  );
}

export default Login;
