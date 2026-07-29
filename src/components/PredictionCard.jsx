function PredictionCard({ result, confidence }) {

  const getColor = () => {
    if (!result) return "text-gray-400";

    if (result.toLowerCase().includes("hate"))
      return "text-red-500";

    if (result.toLowerCase().includes("offensive"))
      return "text-yellow-400";

    return "text-green-400";
  };

  const getBgColor = () => {
    if (!result) return "bg-slate-800";

    if (result.toLowerCase().includes("hate"))
      return "bg-red-500/10 border border-red-500";

    if (result.toLowerCase().includes("offensive"))
      return "bg-yellow-500/10 border border-yellow-500";

    return "bg-green-500/10 border border-green-500";
  };

  return (
    <div className="bg-slate-900 rounded-2xl p-5 sm:p-6 mt-6 shadow-lg">

      <h2 className="text-xl sm:text-2xl font-semibold text-white mb-5">
        Prediction Result
      </h2>

      <div className={`${getBgColor()} rounded-xl p-5`}>

        <p className={`${getColor()} text-2xl sm:text-3xl font-bold break-words`}>
          {result || "No Prediction Yet"}
        </p>

        <p className="text-gray-300 mt-4 text-sm sm:text-base">
          <span className="font-semibold">
            Confidence:
          </span>{" "}
          {confidence || "--"}
        </p>

      </div>

    </div>
  );
}

export default PredictionCard;