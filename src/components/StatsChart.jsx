import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

function StatsChart({ stats }) {

  const data = [
    { name: "Normal", value: stats.normal },
    { name: "Toxic", value: stats.toxic },
    { name: "Offensive", value: stats.offensive },
    { name: "Threat", value: stats.threat },
    { name: "Hate Speech", value: stats.hateSpeech }
  ];

  const COLORS = [
    "#22c55e",
    "#ef4444",
    "#facc15",
    "#f97316",
    "#dc2626"
  ];

  return (

    <div className="bg-slate-900 rounded-xl p-5 mt-8">

      <h2 className="text-white text-2xl font-bold mb-5">
        Prediction Analytics
      </h2>

      <ResponsiveContainer width="100%" height={350}>

        <PieChart>

          <Pie
            data={data}
            dataKey="value"
            outerRadius={120}
            label
          >

            {data.map((entry, index) => (

              <Cell
                key={index}
                fill={COLORS[index]}
              />

            ))}

          </Pie>

          <Tooltip />

          <Legend />

        </PieChart>

      </ResponsiveContainer>

    </div>

  );

}

export default StatsChart;