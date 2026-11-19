
function HowItWorks() {
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
    <section className="bg-white py-20 text-slate-900 transition-colors duration-300 dark:bg-[#100d1c] dark:text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <span className="mb-3 inline-block rounded-full border border-purple-200 bg-purple-50 px-4 py-2 text-sm font-semibold text-purple-700 dark:border-purple-500/30 dark:bg-purple-500/10 dark:text-purple-300">
            SIMPLE PROCESS
          </span>

          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            How It Works
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600 dark:text-[#c4b5d8]">
            Three simple steps to analyze text with your AI detection system.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative rounded-2xl border border-purple-100 bg-white p-8 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:border-purple-300 hover:shadow-lg hover:shadow-purple-500/10 dark:border-[#38264f] dark:bg-[#191528] dark:hover:border-purple-500/60"
            >
              <span className="absolute right-5 top-5 text-sm font-bold text-purple-600 dark:text-purple-300">
                {step.number}
              </span>

              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-purple-50 text-4xl dark:bg-[#2a1c3c]">
                {step.icon}
              </div>

              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                {step.title}
              </h3>

              <p className="mt-3 leading-7 text-slate-600 dark:text-[#c4b5d8]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;