import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  const handleAnalyze = () => {
    const token = localStorage.getItem("token");

    if (token) {
      navigate("/dashboard");
    } else {
      navigate("/login");
    }
  };

  return (
    <section className="bg-green-900 text-white min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-16">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left */}
          <div className="text-center lg:text-left">

            <span className="inline-block bg-cyan-500/20 text-cyan-400 px-4 py-2 rounded-full text-xs sm:text-sm">
              AI Powered Content Moderation
            </span>

            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Detect <span className="text-cyan-400">Hate Speech</span>
              <br />
              with Artificial Intelligence
            </h1>

            <p className="mt-6 text-gray-400 text-base sm:text-lg">
              Analyze text instantly using advanced AI models.
              Detect toxic, offensive and hateful content
              with high accuracy.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">

              <button
                onClick={handleAnalyze}
                className="bg-cyan-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-cyan-300 transition"
              >
                Analyze Now
              </button>

              <button
                className="border border-cyan-400 px-6 py-3 rounded-lg hover:bg-cyan-400 hover:text-black transition"
              >
                Learn More
              </button>

            </div>

          </div>

          {/* Right */}
          <div className="flex justify-center">

            <div className="w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full bg-cyan-500/20 border border-cyan-400 flex items-center justify-center">

              <span className="text-6xl sm:text-7xl lg:text-8xl">
                🛡️
              </span>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;