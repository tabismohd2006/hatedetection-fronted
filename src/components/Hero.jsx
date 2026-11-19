
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
    <section className="relative overflow-hidden bg-white text-gray-900 min-h-[85vh] flex items-center">
      {/* Background decorations */}
      <div className="absolute -top-24 -right-20 h-80 w-80 rounded-full bg-purple-100 blur-3xl opacity-70" />
      <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-violet-100 blur-3xl opacity-70" />

      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* Left Content */}
          <div className="text-center lg:text-left">
            <span className="inline-flex items-center gap-2 bg-purple-50 text-purple-700 border border-purple-100 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold">
              <span className="h-2 w-2 rounded-full bg-purple-600" />
              AI-Powered Content Moderation
            </span>

            <h1 className="mt-7 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
              Detect{" "}
              <span className="bg-gradient-to-r from-purple-600 to-violet-500 bg-clip-text text-transparent">
                Hate Speech
              </span>
              <br />
              with Artificial Intelligence
            </h1>

            <p className="mt-6 max-w-xl mx-auto lg:mx-0 text-gray-600 text-base sm:text-lg leading-8">
              Analyze text with AI and identify potentially toxic,
              offensive, or hateful language to help create safer
              online communities.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={handleAnalyze}
                className="group bg-purple-600 text-white px-7 py-3.5 rounded-xl font-semibold shadow-lg shadow-purple-200 hover:bg-purple-700 hover:shadow-purple-300 hover:-translate-y-0.5 transition-all duration-200"
              >
                Analyze Now
                <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">
                  →
                </span>
              </button>

              <button
                onClick={() =>
                  document.getElementById("features")?.scrollIntoView({
                    behavior: "smooth",
                  })
                }
                className="border border-purple-200 bg-white text-purple-700 px-7 py-3.5 rounded-xl font-semibold hover:bg-purple-50 hover:border-purple-300 transition-all duration-200"
              >
                Learn More
              </button>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 justify-center lg:justify-start text-sm text-gray-500">
              <span className="flex items-center gap-2">
                <span className="text-purple-600">✓</span>
                AI-powered analysis
              </span>
              <span className="flex items-center gap-2">
                <span className="text-purple-600">✓</span>
                Simple and fast
              </span>
            </div>
          </div>

          {/* Right Visual */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-4 rounded-[2rem] bg-purple-200 blur-2xl opacity-50" />

              <div className="relative rounded-[2rem] border border-purple-100 bg-white p-6 sm:p-8 shadow-2xl shadow-purple-100">
                <div className="flex items-center justify-between border-b border-gray-100 pb-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-100 text-2xl">
                      🛡️
                    </div>
                    <div>
                      <h2 className="font-bold text-gray-900">
                        SafeText AI
                      </h2>
                      <p className="text-xs text-gray-500">
                        Content Analysis
                      </p>
                    </div>
                  </div>

                  <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
                    AI Ready
                  </span>
                </div>

                <div className="mt-6">
                  <p className="text-sm font-semibold text-gray-700">
                    Intelligent text screening
                  </p>

                  <div className="mt-3 rounded-xl border border-purple-100 bg-purple-50/70 p-4">
                    <div className="flex items-center gap-2 text-sm font-medium text-purple-800">
                      <span>✦</span>
                      AI-powered detection
                    </div>
                    <p className="mt-2 text-sm leading-6 text-gray-600">
                      Examine text for potentially harmful language
                      and support safer digital conversations.
                    </p>
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-3">
                  <div className="rounded-xl border border-gray-100 p-4">
                    <div className="text-xl">🔎</div>
                    <p className="mt-2 text-sm font-semibold text-gray-800">
                      Text Analysis
                    </p>
                    <p className="mt-1 text-xs text-gray-500">
                      Analyze submitted text
                    </p>
                  </div>

                  <div className="rounded-xl border border-gray-100 p-4">
                    <div className="text-xl">🔒</div>
                    <p className="mt-2 text-sm font-semibold text-gray-800">
                      Safer Spaces
                    </p>
                    <p className="mt-1 text-xs text-gray-500">
                      Support content moderation
                    </p>
                  </div>
                </div>

                <div className="mt-5 flex items-center gap-3 rounded-xl bg-purple-600 p-4 text-white">
                  <span className="text-2xl">✨</span>
                  <div>
                    <p className="text-sm font-semibold">
                      Smart AI Assistance
                    </p>
                    <p className="mt-1 text-xs text-purple-100">
                      Helping make online conversations safer
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;
