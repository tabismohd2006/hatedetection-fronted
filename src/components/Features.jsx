
function Features() {
  const features = [
    {
      icon: "⚡",
      title: "Fast Detection",
      description:
        "Get prediction results within seconds using optimized AI models.",
    },
    {
      icon: "🤖",
      title: "AI Powered",
      description:
        "Uses Natural Language Processing to identify potentially harmful content.",
    },
    {
      icon: "🔒",
      title: "Secure Analysis",
      description:
        "Designed to support safer content analysis and responsible moderation.",
    },
  ];

  const steps = [
    {
      number: "01",
      icon: "📝",
      title: "Enter Text",
      description:
        "Paste a social media post, message, or comment you want to analyze.",
    },
    {
      number: "02",
      icon: "🤖",
      title: "AI Analysis",
      description:
        "Your submitted text is analyzed by the connected AI detection system.",
    },
    {
      number: "03",
      icon: "📊",
      title: "View Results",
      description:
        "Review the prediction and confidence score returned by the model.",
    },
  ];

  return (
    <section
      id="features"
      className="relative overflow-hidden bg-white py-20 sm:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full border border-purple-100 bg-purple-50 px-4 py-2 text-sm font-semibold text-purple-700">
            Powerful Features
          </span>

          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Why Choose Our{" "}
            <span className="bg-gradient-to-r from-purple-600 to-violet-500 bg-clip-text text-transparent">
              AI?
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-gray-600 sm:text-lg">
            Smart tools to help identify potentially harmful language
            and encourage safer online conversations.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group rounded-2xl border border-purple-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-purple-300 hover:shadow-xl hover:shadow-purple-100/70"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-50 text-3xl transition-colors duration-300 group-hover:bg-purple-100">
                {feature.icon}
              </div>

              <h3 className="mt-6 text-xl font-bold text-gray-900">
                {feature.title}
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                {feature.description}
              </p>

              <div className="mt-6 h-1 w-12 rounded-full bg-purple-200 transition-all duration-300 group-hover:w-20 group-hover:bg-purple-600" />
            </div>
          ))}
        </div>

        {/* How It Works */}
        <div className="mt-24 rounded-3xl border border-purple-100 bg-gradient-to-b from-purple-50/80 to-white px-5 py-14 sm:px-10 lg:px-14">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-purple-600">
              Simple Process
            </span>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              How It Works
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              Three simple steps to analyze text with your AI detection system.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {steps.map((step) => (
              <div
                key={step.number}
                className="relative rounded-2xl border border-purple-100 bg-white p-7 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-100/70"
              >
                <span className="absolute right-5 top-5 text-sm font-extrabold text-purple-200">
                  {step.number}
                </span>

                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-purple-50 text-4xl">
                  {step.icon}
                </div>

                <h3 className="mt-6 text-xl font-bold text-gray-900">
                  {step.title}
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Callout */}
        <div className="mt-16 flex flex-col items-center justify-between gap-5 rounded-2xl bg-purple-600 px-6 py-8 text-center shadow-lg shadow-purple-200 sm:flex-row sm:px-10 sm:text-left">
          <div>
            <h3 className="text-xl font-bold text-white sm:text-2xl">
              Ready to analyze your text?
            </h3>
            <p className="mt-2 text-sm leading-6 text-purple-100 sm:text-base">
              Start using AI-powered content analysis.
            </p>
          </div>

          <a
            href="/login"
            className="inline-flex shrink-0 items-center justify-center rounded-xl bg-white px-6 py-3 font-semibold text-purple-700 transition hover:bg-purple-50"
          >
            Get Started <span className="ml-2">→</span>
          </a>
        </div>

      </div>
    </section>
  );
}

export default Features;
