
import { useState } from "react";
import { Sparkles, ShieldCheck, Activity } from "lucide-react";
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
    <div className="min-h-screen bg-[#FAF9FF] text-gray-900 md:flex">
      {/* Existing Sidebar */}
      <Sidebar />

      {/* Main Dashboard */}
      <main className="min-w-0 flex-1 overflow-x-hidden p-4 sm:p-6 lg:p-8 xl:p-10">
        <div className="mx-auto max-w-7xl">

          {/* Page Header */}
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-purple-100 bg-white px-3 py-1.5 text-xs font-semibold text-purple-700 shadow-sm">
                <Sparkles size={14} />
                AI CONTENT MODERATION
              </div>

              <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Dashboard
              </h1>

              <p className="mt-2 text-sm leading-6 text-gray-500 sm:text-base">
                Analyze text, review predictions, and monitor your activity.
              </p>
            </div>

            <div className="inline-flex w-fit items-center gap-2 rounded-xl border border-purple-100 bg-white px-4 py-3 shadow-sm">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-purple-100 text-purple-700">
                <ShieldCheck size={20} />
              </div>
              <div>
                <p className="text-xs text-gray-500">Detection system</p>
                <p className="text-sm font-semibold text-gray-800">
                  AI Powered
                </p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <section className="mb-8">
            <StatsCard />
          </section>

          {/* Analysis and Prediction */}
          <div className="grid grid-cols-1 items-start gap-6 xl:grid-cols-2">

            <section className="min-w-0 overflow-hidden rounded-2xl border border-purple-100 bg-white shadow-sm transition-shadow hover:shadow-md">
              <div className="flex items-center gap-3 border-b border-gray-100 px-5 py-5 sm:px-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-100 text-purple-700">
                  <Activity size={22} />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-gray-900">
                    Text Analysis
                  </h2>
                  <p className="mt-1 text-sm text-gray-500">
                    Submit text for AI-powered detection
                  </p>
                </div>
              </div>

              <div className="p-4 sm:p-6">
                <TextAnalysisForm
                  text={text}
                  setText={setText}
                  handleAnalyze={handleAnalyze}
                  loading={loading}
                />
              </div>
            </section>

            <section className="min-w-0 overflow-hidden rounded-2xl border border-purple-100 bg-white shadow-sm transition-shadow hover:shadow-md">
              <div className="flex items-center gap-3 border-b border-gray-100 px-5 py-5 sm:px-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-100 text-purple-700">
                  <ShieldCheck size={22} />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-gray-900">
                    Analysis Result
                  </h2>
                  <p className="mt-1 text-sm text-gray-500">
                    Your model's prediction and confidence
                  </p>
                </div>
              </div>

              <div className="p-4 sm:p-6">
                <PredictionCard
                  result={result}
                  confidence={confidence}
                />
              </div>
            </section>
          </div>

          {/* History */}
          <section className="mt-8 overflow-hidden rounded-2xl border border-purple-100 bg-white shadow-sm">
            <div className="flex flex-col gap-2 border-b border-gray-100 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
              <div>
                <h2 className="text-lg font-bold text-gray-900">
                  Recent Activity
                </h2>
                <p className="mt-1 text-sm text-gray-500">
                  Review your previous text analysis records.
                </p>
              </div>

              <span className="w-fit rounded-full bg-purple-50 px-3 py-1 text-xs font-semibold text-purple-700">
                History
              </span>
            </div>

            <div className="min-w-0 overflow-x-auto p-4 sm:p-6">
              <HistoryTable />
            </div>
          </section>

          {/* Footer note */}
          <p className="mt-6 text-center text-xs leading-5 text-gray-400">
            AI predictions may not always be correct. Review results in context.
          </p>

        </div>
      </main>
    </div>
  );
}

export default Dashboard;
