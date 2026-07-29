import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function ResetPassword() {
  const { token } = useParams();

  const navigate = useNavigate();

  const [password, setPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        `http://localhost:5000/api/auth/reset-password/${token}`,
        { password }
      );

      alert(res.data.message);

      navigate("/login");

    } catch (error) {
      alert(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4 py-10">

      <div className="w-full max-w-md bg-slate-900 rounded-2xl shadow-2xl p-6 sm:p-8">

        <h2 className="text-2xl sm:text-3xl font-bold text-white text-center">
          Reset Password
        </h2>

        <p className="text-gray-400 text-center mt-2 text-sm sm:text-base">
          Enter your new password
        </p>

        <form
          onSubmit={submitHandler}
          className="mt-8 space-y-5"
        >

          <div>

            <label className="block text-white mb-2">
              New Password
            </label>

            <input
              type="password"
              placeholder="Enter new password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 rounded-lg bg-slate-800 text-white border border-slate-700 outline-none focus:border-cyan-400"
              required
            />

          </div>

          <button
            type="submit"
            className="w-full bg-cyan-400 hover:bg-cyan-300 text-black py-3 rounded-lg font-semibold transition"
          >
            Update Password
          </button>

        </form>

      </div>

    </div>
  );
}

export default ResetPassword;