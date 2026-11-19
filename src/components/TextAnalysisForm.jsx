
import { FileText, Sparkles, RotateCcw } from "lucide-react";

function TextAnalysisForm({
  text,
  setText,
  handleAnalyze,
  loading,
}) {
  const handleClear = () => {
    setText("");
  };

  return (
    <div className="rounded-2xl bg-white">

      {/* Heading */}
      <div className="mb-5 flex items-center justify-between gap-3">
        <div>
          <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
            Analyze Text
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            Enter text to check for potentially harmful language.
          </p>
        </div>

        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-purple-100 text-purple-700">
          <FileText size={22} />
        </div>
      </div>

      {/* Text Input */}
      <div className="overflow-hidden rounded-xl border border-purple-200 bg-white transition focus-within:border-purple-500 focus-within:ring-4 focus-within:ring-purple-100">
        <textarea
          rows={7}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type or paste your text here..."
          disabled={loading}
          className="w-full resize-y bg-transparent p-4 text-sm leading-7 text-gray-800 outline-none placeholder:text-gray-400 disabled:cursor-not-allowed disabled:bg-gray-50 sm:text-base"
        />

        <div className="flex items-center justify-between border-t border-purple-50 bg-purple-50/50 px-4 py-3">
          <span className="text-xs text-gray-500">
            {text.length} characters
          </span>

          <button
            type="button"
            onClick={handleClear}
            disabled={!text || loading}
            className="inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold text-purple-700 transition hover:bg-purple-100 disabled:cursor-not-allowed disabled:opacity-40"
          >
            <RotateCcw size={13} />
            Clear text
          </button>
        </div>
      </div>

      {/* Analyze Button */}
      <button
        type="button"
        onClick={handleAnalyze}
        disabled={loading}
        className={`mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3.5 font-semibold text-white shadow-lg transition-all duration-200 sm:w-auto ${
          loading
            ? "cursor-not-allowed bg-purple-400 shadow-none"
            : "bg-gradient-to-r from-purple-600 to-violet-600 shadow-purple-200 hover:-translate-y-0.5 hover:from-purple-700 hover:to-violet-700 hover:shadow-xl"
        }`}
      >
        {loading ? (
          <>
            <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/40 border-t-white" />
            Analyzing...
          </>
        ) : (
          <>
            <Sparkles size={18} />
            Analyze Text
          </>
        )}
      </button>

      <p className="mt-4 text-xs leading-5 text-gray-400">
        Please review AI-generated predictions in context. Results may not
        always be accurate.
      </p>
    </div>
  );
}

export default TextAnalysisForm;
