import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from "chart.js";

import { Pie } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

function PieChart({ stats }) {

  const data = {
    labels: [
      "Normal",
      "Toxic",
      "Offensive",
      "Threat",
      "Hate Speech"
    ],

    datasets: [
      {
        data: [
          stats.normal,
          stats.toxic,
          stats.offensive,
          stats.threat,
          stats.hateSpeech
        ],

        backgroundColor: [
          "#22c55e",
          "#ef4444",
          "#facc15",
          "#fb923c",
          "#8b5cf6"
        ]
      }
    ]
  };

  return (
    <div className="bg-slate-900 p-6 rounded-xl mt-8">
      <h2 className="text-white text-xl mb-4">
        Prediction Distribution
      </h2>

      <Pie data={data} />
    </div>
  );

}

export default PieChart;