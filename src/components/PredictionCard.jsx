
import { ShieldCheck, ShieldAlert, AlertTriangle, Sparkles } from "lucide-react";

function PredictionCard({ result, confidence }) {
  const normalizedResult = String(result || "").toLowerCase();

  const getStatus = () => {
    if (!result) {
      return {
        label: "Awaiting Analysis",
        description: "Submit text to see the AI prediction.",
        color: "text-gray-500",
        bg: "bg-gray-50",
        border: "border-gray-200",
        icon: Sparkles,
      };
    }

    if (normalizedResult.includes("hate")) {
      return {
        label: "Hate Speech Detected",
        description: "The model classified this text as hate-related.",
        color: "text-red-700",
        bg: "bg-red-50",
        border: "border-red-200",
        icon: ShieldAlert,
      };
    }

    if (normalizedResult.includes("offensive")) {
      return {
        label: "Offensive Content",
        description: "The model classified this text as offensive.",
        color: "text-amber-700",
        bg: "bg-amber-50",
        border: "border-amber-200",
        icon: AlertTriangle,
      };
    }

    return {
      label: "No Hate Speech Flagged",
      description: "The model did not flag this text as hate-related.",
      color: "text-emerald-700",
      bg: "bg-emerald-50",
      border: "border-emerald-200",
      icon: ShieldCheck,
    };
  };

  const status = getStatus();
  const StatusIcon = status.icon;

  return (
    <div className="rounded-2xl bg-white">
      {/* Heading */}
      <div className="mb-5 flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-100 text-purple-700">
          <ShieldCheck size={22} />
        </div>

        <div>
          <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
            Prediction Result
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            AI classification summary
          </p>
        </div>
      </div>

      {/* Result Card */}
      <div
        className={`rounded-2xl border p-5 sm:p-6 ${status.bg} ${status.border}`}
      >
        <div className="flex items-start gap-4">
          <div
            className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm ${status.color}`}
          >
            <StatusIcon size={25} />
          </div>

          <div className="min-w-0 flex-1">
            <p className={`text-xs font-bold uppercase tracking-wider ${status.color}`}>
              {result ? "Analysis Complete" : "Ready to Analyze"}
            </p>

            <h3 className={`mt-2 break-words text-xl font-extrabold sm:text-2xl ${status.color}`}>
              {result || "No Prediction Yet"}
            </h3>

            <p className="mt-2 text-sm leading-6 text-gray-600">
              {status.description}
            </p>
          </div>
        </div>

        {/* Confidence */}
        <div className="mt-6 rounded-xl border border-white/80 bg-white/80 p-4">
          <div className="flex items-center justify-between gap-3">
            <span className="text-sm font-semibold text-gray-600">
              Model Confidence
            </span>

            <span className="break-words text-right text-base font-extrabold text-purple-700">
              {confidence !== undefined &&
              confidence !== null &&
              confidence !== ""
                ? confidence
                : "--"}
            </span>
          </div>
        </div>
      </div>

      <p className="mt-4 text-xs leading-5 text-gray-400">
        AI predictions may be incorrect. Interpret the result in the context
        of the text; a model label alone does not establish intent.
      </p>
    </div>
  );
}

export default PredictionCard;
