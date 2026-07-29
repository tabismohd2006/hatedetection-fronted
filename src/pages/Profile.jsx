import { useEffect, useState } from "react";
import api from "../services/api";

function Profile() {
  const [user, setUser] = useState({});
  const [stats, setStats] = useState({});

  useEffect(() => {
    fetchProfile();
    fetchStats();
  }, []);

  const fetchProfile = async () => {
    try {
      const res = await api.get("/auth/profile");
      setUser(res.data.user);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchStats = async () => {
    try {
      const res = await api.get("/speech/stats");
      setStats(res.data.data || res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/login";
  };

  return (
    <div className="min-h-screen bg-slate-950 flex justify-center items-center px-4 py-10">

      <div className="bg-slate-900 rounded-2xl shadow-2xl w-full max-w-lg p-6 sm:p-8">

        <div className="flex justify-center">

          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-cyan-500 flex items-center justify-center text-3xl sm:text-4xl font-bold text-white">
            {user?.name?.charAt(0)?.toUpperCase() || "U"}
          </div>

        </div>

        <h2 className="text-2xl sm:text-3xl font-bold text-center text-white mt-5">
          My Profile
        </h2>

        <div className="mt-8 space-y-4">

          <div className="bg-slate-800 rounded-lg p-4">
            <p className="text-gray-400 text-sm">Name</p>
            <p className="text-white font-semibold break-words">
              {user.name || "-"}
            </p>
          </div>

          <div className="bg-slate-800 rounded-lg p-4">
            <p className="text-gray-400 text-sm">Email</p>
            <p className="text-white font-semibold break-words">
              {user.email || "-"}
            </p>
          </div>

          <div className="bg-slate-800 rounded-lg p-4">
            <p className="text-gray-400 text-sm">Joined</p>
            <p className="text-white font-semibold">
              {user.createdAt
                ? new Date(user.createdAt).toLocaleDateString()
                : "-"}
            </p>
          </div>

        </div>

        <h3 className="text-white text-xl font-semibold mt-8 mb-4">
          Statistics
        </h3>

        <div className="grid grid-cols-2 gap-4">

          <div className="bg-slate-800 rounded-lg p-4">
            <p className="text-gray-400 text-sm">Total</p>
            <p className="text-cyan-400 text-xl font-bold">
              {stats.total || 0}
            </p>
          </div>

          <div className="bg-slate-800 rounded-lg p-4">
            <p className="text-gray-400 text-sm">Normal</p>
            <p className="text-green-400 text-xl font-bold">
              {stats.normal || 0}
            </p>
          </div>

          <div className="bg-slate-800 rounded-lg p-4">
            <p className="text-gray-400 text-sm">Toxic</p>
            <p className="text-red-400 text-xl font-bold">
              {stats.toxic || 0}
            </p>
          </div>

          <div className="bg-slate-800 rounded-lg p-4">
            <p className="text-gray-400 text-sm">Offensive</p>
            <p className="text-yellow-400 text-xl font-bold">
              {stats.offensive || 0}
            </p>
          </div>

          <div className="bg-slate-800 rounded-lg p-4">
            <p className="text-gray-400 text-sm">Threat</p>
            <p className="text-orange-400 text-xl font-bold">
              {stats.threat || 0}
            </p>
          </div>

          <div className="bg-slate-800 rounded-lg p-4">
            <p className="text-gray-400 text-sm">Hate Speech</p>
            <p className="text-red-500 text-xl font-bold">
              {stats.hateSpeech || 0}
            </p>
          </div>

        </div>

        <button
          onClick={logout}
          className="w-full mt-8 bg-red-600 hover:bg-red-700 py-3 rounded-lg text-white font-semibold transition"
        >
          Logout
        </button>

      </div>

    </div>
  );
}

export default Profile;