
import { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import {
  ShieldCheck,
  Lock,
  ArrowRight,
  LoaderCircle,
} from "lucide-react";
import axios from "axios";

function ResetPassword() {
  const { token } = useParams();
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");
    setLoading(true);

    try {
      const res = await axios.post(
        `https://hate-speech-backend-3.onrender.com/api/auth/reset-password/${token}`,
        { password }
      );

      setSuccess(res.data.message || "Password Reset Successfully");

      setTimeout(() => {
        navigate("/login");
      }, 1200);
    } catch (error) {
      setError(
        error.response?.data?.message || "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF9FF] flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md">

        {/* Branding */}
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

        {/* Reset Password Card */}
        <div className="bg-white border border-purple-100 rounded-3xl shadow-xl shadow-purple-100/60 p-6 sm:p-9">

          <div className="text-center mb-8">
            <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-purple-50 flex items-center justify-center">
              <Lock className="w-7 h-7 text-purple-600" />
            </div>

            <h1 className="text-3xl font-bold text-gray-900">
              Reset Password
            </h1>

            <p className="text-gray-500 mt-3 text-sm sm:text-base">
              Create a new password for your account.
            </p>
          </div>

          <form onSubmit={submitHandler} className="space-y-5">
            <div>
              <label
                htmlFor="new-password"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                New Password
              </label>

              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-purple-400" />

                <input
                  id="new-password"
                  type="password"
                  placeholder="Enter your new password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="new-password"
                  className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-gray-50 text-gray-900 border border-gray-200 outline-none transition focus:bg-white focus:border-purple-500 focus:ring-4 focus:ring-purple-100 placeholder:text-gray-400"
                  required
                />
              </div>
            </div>

            {error && (
              <div
                role="alert"
                className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
              >
                {error}
              </div>
            )}

            {success && (
              <div
                role="status"
                className="rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700"
              >
                {success} Redirecting to login...
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 bg-purple-600 text-white py-3.5 rounded-xl font-semibold shadow-lg shadow-purple-200 transition hover:bg-purple-700 hover:shadow-xl disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <LoaderCircle className="w-5 h-5 animate-spin" />
                  Updating Password...
                </>
              ) : (
                <>
                  Update Password
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
          </form>

          <Link
            to="/login"
            className="mt-6 flex items-center justify-center gap-2 text-sm font-semibold text-purple-600 hover:text-purple-800"
          >
            Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
