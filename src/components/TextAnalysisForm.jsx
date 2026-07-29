function TextAnalysisForm({
  text,
  setText,
  handleAnalyze,
  loading,
}) {
  return (
    <div className="bg-slate-900 rounded-2xl p-5 sm:p-6 mt-6 shadow-lg">

      <h2 className="text-xl sm:text-2xl font-semibold text-white mb-5">
        Analyze Text
      </h2>

      <textarea
        rows="6"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type your text here..."
        className="w-full bg-slate-800 text-white rounded-xl p-4 outline-none border border-slate-700 focus:border-cyan-400 resize-none text-sm sm:text-base"
      />

      <button
        onClick={handleAnalyze}
        disabled={loading}
        className={`w-full sm:w-auto mt-5 px-8 py-3 rounded-lg font-semibold transition ${
          loading
            ? "bg-gray-500 cursor-not-allowed text-white"
            : "bg-cyan-400 hover:bg-cyan-300 text-black"
        }`}
      >
        {loading ? "Analyzing..." : "Analyze"}
      </button>

    </div>
  );
}

export default TextAnalysisForm;