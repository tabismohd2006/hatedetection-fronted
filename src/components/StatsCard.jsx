import { useEffect, useState } from "react";
import api from "../services/api";

function StatsCard() {
  const [stats, setStats] = useState({
    total: 0,
    hateSpeech: 0,
    offensive: 0,
    normal: 0,
    toxic: 0,
    threat: 0,
  });

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const res = await api.get("/speech/stats");
      setStats(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mt-6">

      <div className="bg-slate-900 rounded-xl p-6 shadow-lg hover:shadow-cyan-500/20 transition">
        <h2 className="text-gray-400 text-sm sm:text-base">
          Total Predictions
        </h2>

        <p className="text-3xl sm:text-4xl font-bold text-cyan-400 mt-3">
          {stats.total}
        </p>
      </div>

      <div className="bg-slate-900 rounded-xl p-6 shadow-lg hover:shadow-red-500/20 transition">
        <h2 className="text-gray-400 text-sm sm:text-base">
          Hate Speech
        </h2>

        <p className="text-3xl sm:text-4xl font-bold text-red-500 mt-3">
          {stats.hateSpeech}
        </p>
      </div>

      <div className="bg-slate-900 rounded-xl p-6 shadow-lg hover:shadow-yellow-400/20 transition">
        <h2 className="text-gray-400 text-sm sm:text-base">
          Offensive
        </h2>

        <p className="text-3xl sm:text-4xl font-bold text-yellow-400 mt-3">
          {stats.offensive}
        </p>
      </div>

      <div className="bg-slate-900 rounded-xl p-6 shadow-lg hover:shadow-green-400/20 transition">
        <h2 className="text-gray-400 text-sm sm:text-base">
          Normal
        </h2>

        <p className="text-3xl sm:text-4xl font-bold text-green-400 mt-3">
          {stats.normal}
        </p>
      </div>

    </div>
  );
}

export default StatsCard;