import { useState } from "react";
import api from "../services/api";

import Sidebar from "../components/Sidebar";
import StatsCard from "../components/StatsCard";
import TextAnalysisForm from "../components/TextAnalysisForm";
import PredictionCard from "../components/PredictionCard";
import HistoryTable from "../components/HistoryTable";

function Dashboard() {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");
  const [confidence, setConfidence] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {
    if (!text.trim()) {
      alert("Please Enter Text");
      return;
    }

    try {
      setLoading(true);

      const res = await api.post("/speech/predict", {
        text,
      });

      setResult(res.data.prediction);
      setConfidence(res.data.confidence);

    } catch (error) {
      alert(error.response?.data?.message || "Prediction Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-slate-950">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-4 sm:p-6 lg:p-8 overflow-x-hidden">

        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6">
          Dashboard
        </h1>

        <div className="mb-6">
          <StatsCard />
        </div>

        <div className="mb-6">
          <TextAnalysisForm
            text={text}
            setText={setText}
            handleAnalyze={handleAnalyze}
            loading={loading}
          />
        </div>

        <div className="mb-6">
          <PredictionCard
            result={result}
            confidence={confidence}
          />
        </div>

        <div className="overflow-x-auto">
          <HistoryTable />
        </div>

      </div>
    </div>
  );
}

export default Dashboard;