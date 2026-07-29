function HowItWorks() {
  return (
    <section className="bg-slate-950 text-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center">
          How It Works
        </h2>

        <div className="grid md:grid-cols-4 gap-8 mt-12">

          <div className="text-center">
            <div className="text-5xl">1️⃣</div>
            <h3 className="mt-4 text-xl font-semibold">Enter Text</h3>
          </div>

          <div className="text-center">
            <div className="text-5xl">2️⃣</div>
            <h3 className="mt-4 text-xl font-semibold">AI Analysis</h3>
          </div>

          <div className="text-center">
            <div className="text-5xl">3️⃣</div>
            <h3 className="mt-4 text-xl font-semibold">Get Result</h3>
          </div>

          <div className="text-center">
            <div className="text-5xl">4️⃣</div>
            <h3 className="mt-4 text-xl font-semibold">Save History</h3>
          </div>

        </div>

      </div>
    </section>
  );
}

export default HowItWorks;