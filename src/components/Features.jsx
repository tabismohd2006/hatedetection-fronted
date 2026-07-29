function Features() {
  return (
    <section className="bg-green-900 text-white py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Features */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center">
          Why Choose Our AI?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">

          <div className="bg-slate-800 p-6 rounded-xl shadow-lg hover:scale-105 transition">
            <h3 className="text-2xl font-semibold text-cyan-400">
              ⚡ Fast Detection
            </h3>
            <p className="mt-4 text-gray-400">
              Get prediction results within seconds using optimized AI models.
            </p>
          </div>

          <div className="bg-slate-800 p-6 rounded-xl shadow-lg hover:scale-105 transition">
            <h3 className="text-2xl font-semibold text-cyan-400">
              🤖 AI Powered
            </h3>
            <p className="mt-4 text-gray-400">
              Uses advanced Natural Language Processing for accurate detection.
            </p>
          </div>

          <div className="bg-slate-800 p-6 rounded-xl shadow-lg hover:scale-105 transition">
            <h3 className="text-2xl font-semibold text-cyan-400">
              🔒 Secure
            </h3>
            <p className="mt-4 text-gray-400">
              Your text remains secure and protected during analysis.
            </p>
          </div>

        </div>

        {/* How It Works */}
        <div className="mt-24">

          <h2 className="text-3xl sm:text-4xl font-bold text-center">
            How It Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">

            <div className="bg-slate-800 p-6 rounded-xl text-center shadow-lg hover:scale-105 transition">
              <div className="text-5xl mb-4">📝</div>
              <h3 className="text-xl font-semibold">Enter Text</h3>
              <p className="text-gray-400 mt-3">
                Paste any social media post, message or comment.
              </p>
            </div>

            <div className="bg-slate-800 p-6 rounded-xl text-center shadow-lg hover:scale-105 transition">
              <div className="text-5xl mb-4">🤖</div>
              <h3 className="text-xl font-semibold">AI Analysis</h3>
              <p className="text-gray-400 mt-3">
                Our AI checks whether the content is toxic or hateful.
              </p>
            </div>

            <div className="bg-slate-800 p-6 rounded-xl text-center shadow-lg hover:scale-105 transition">
              <div className="text-5xl mb-4">📊</div>
              <h3 className="text-xl font-semibold">Get Result</h3>
              <p className="text-gray-400 mt-3">
                Instantly receive prediction and confidence score.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Features;