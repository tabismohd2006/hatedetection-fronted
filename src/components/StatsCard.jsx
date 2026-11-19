
import { useEffect, useState } from "react";
import {
  Activity,
  ShieldAlert,
  AlertTriangle,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

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
    const fetchStats = async () => {
      try {
        const res = await api.get("/speech/stats");
        setStats(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchStats();
  }, []);

  const cards = [
    {
      title: "Total Predictions",
      value: stats.total,
      icon: Activity,
      iconStyle: "bg-purple-100 text-purple-700",
      accent: "from-purple-500 to-violet-500",
    },
    {
      title: "Hate Speech",
      value: stats.hateSpeech,
      icon: ShieldAlert,
      iconStyle: "bg-red-50 text-red-600",
      accent: "from-red-400 to-rose-500",
    },
    {
      title: "Offensive",
      value: stats.offensive,
      icon: AlertTriangle,
      iconStyle: "bg-amber-50 text-amber-600",
      accent: "from-amber-400 to-orange-400",
    },
    {
      title: "Normal",
      value: stats.normal,
      icon: ShieldCheck,
      iconStyle: "bg-emerald-50 text-emerald-600",
      accent: "from-emerald-400 to-green-500",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.title}
            className="group relative overflow-hidden rounded-2xl border border-purple-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-100/70 sm:p-6"
          >
            {/* Top accent */}
            <div
              className={`absolute left-0 top-0 h-1 w-full bg-gradient-to-r ${card.accent}`}
            />

            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-sm font-medium leading-5 text-gray-500">
                  {card.title}
                </p>

                <p className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                  {card.value ?? 0}
                </p>
              </div>

              <div
                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${card.iconStyle} transition-transform duration-300 group-hover:scale-110`}
              >
                <Icon size={23} />
              </div>
            </div>

            <div className="mt-5 flex items-center gap-2 border-t border-gray-100 pt-4">
              <TrendingUp size={15} className="text-purple-500" />
              <span className="text-xs text-gray-500">
                Prediction statistics
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default StatsCard;
